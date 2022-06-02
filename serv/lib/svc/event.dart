import 'package:grpc/grpc.dart';
import 'package:protos/protos.dart';
import 'package:db/db.dart' as db;
import 'package:logging/logging.dart';
import 'package:serv/serv.dart';

var _log = Logger('EventService');

// Manage event requests
class EventService extends EventServiceBase {
  final db.EventDao eventDao;

  EventService(db.Database db) : eventDao = db.eventDao;

  // Lookup Events
  @override
  Future<EventLookupResponse> getEvents(
      ServiceCall call, EventLookupRequest request) async {
    var evp = EventLookupResponse();
    _log.finest('getEvents section: ${request.sectionId}');

    var dbEvents =
        await eventDao.getEventsBySection(sectionId: request.sectionId);

    if (dbEvents.isEmpty) {
      evp.status = Status(
          code: 1, message: 'No events found for section ${request.sectionId}');
      return evp;
    }

    // copy events into the response
    for (var e in dbEvents) {
      evp.events.add(dbEvent2Proto(e));
    }
    return evp;
  }

  // Create a protobuf event from an event created in the database
  Event dbEvent2Proto(db.Event e) => Event(
        eventId: e.id,
        title: e.title,
        description: e.description,
        eventStartTs: Timestamp.fromDateTime(e.startTime),
        eventEndTs: Timestamp.fromDateTime(e.endTime),
        registerStartTs: Timestamp.fromDateTime(e.registrationStartTime),
        registerEndTs: Timestamp.fromDateTime(e.registrationEndTime),
        createdById: e.createdByPersonId,
        maxParticipants: e.maxParticipants,
        minParticipants: e.minParticipants,
      );

  db.EventsCompanion protoEvent2Db(Event e, int personId) =>
      db.EventsCompanion.insert(
        createdByPersonId: personId,
        description: e.description,
        title: e.title,
        createdAt: DateTime.now(),
        sectionId: e.sectionId,
        minParticipants: e.minParticipants,
        maxParticipants: e.maxParticipants,
        startTime: e.eventStartTs.toDateTime(),
        endTime: e.eventEndTs.toDateTime(),
        registrationStartTime: e.registerStartTs.toDateTime(),
        registrationEndTime: e.registerEndTs.toDateTime(),
      );

  @override
  Future<EventCreateResponse> createEvent(
      ServiceCall call, EventCreateRequest request) async {
    var session = await sessionManager.getDbSessionFromContext(call);

    var person = session.data['sessionPersonEntry'] as db.SectionPersonEntry;

    var dbEvent = protoEvent2Db(request.event, person.person.id);

    try {
      var id = await eventDao.addEvent(person, dbEvent);
    } catch (e) {
      return EventCreateResponse(
          status: Status(code: 1, message: e.toString()));
    }

    return EventCreateResponse(status: Status(code: 0));
  }
  
  @override
  Future<StatusResponse> deleteEvent(ServiceCall call, EventDeleteRequest request) async {
    var session = await sessionManager.getDbSessionFromContext(call);
    var person = session.data['sessionPersonEntry'] as db.SectionPersonEntry;
    _log.fine('deleteEvent id: ${request.eventId}');
    try {
      await eventDao.deleteEvent(eventId: request.eventId);
      return StatusResponse(status: Status(code: 0));
    }
    catch(e) {
      return StatusResponse(status: Status(code: 1, message: e.toString()));
    }
  }

  @override
  Future<PersonLookupResponse> personLookup(
      ServiceCall call, PersonLookupRequest request) {
    // TODO: implement personLookup
    throw UnimplementedError();
  }

}
