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
    // evp.status.code = 1;
    // evp.status.message = 'Error';

    var dbEvents =
        await eventDao.getEventsBySection(sectionId: request.sectionId);

    // copy events into the response
    for (var e in dbEvents) {
      evp.events.add(dbEvent2Proto(e));
    }
    return evp;
  }

  // Create a protobuf event from an event created in the database
  Event dbEvent2Proto(db.Event e) => Event(
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

  db.EventsCompanion protoEvent2Db(Event e, int personId) => db.EventsCompanion.insert(
        createdByPersonId: personId ,
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
    await eventDao.addEvent(person, dbEvent);

    return EventCreateResponse(status: Status(code: 0));
  }
}
