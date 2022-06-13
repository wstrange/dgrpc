import 'package:grpc/grpc.dart';
import 'package:protos/protos.dart';
import 'package:db/db.dart' as db;
import 'package:logging/logging.dart';
import 'package:serv/serv.dart';

var _log = Logger('EventService');

// Manage event requests
class EventService extends EventServiceBase {
  final db.EventDao eventDao;
  final db.PersonDao personDao;

  EventService(db.Database db)
      : eventDao = db.eventDao,
        personDao = db.personDao;

  // Lookup Events
  @override
  Future<EventLookupResponse> getEvents(
      ServiceCall call, EventLookupRequest request) async {
    var evp = EventLookupResponse();
    _log.finest('getEvents section: ${request.sectionId}');

    List<db.Event> events = [];
    // Lookup a specific event
    if (request.eventId != 0) {
      var e = await eventDao.getEvent(eventId: request.eventId);
      if (e != null) events.add(e);
    } else {
      events = await eventDao.getEventsBySection(sectionId: request.sectionId);
    }

    if (events.isEmpty) {
      evp.status = Status(
          code: 1, message: 'No events found for section ${request.sectionId}');
      return evp;
    }

    // copy events into the response
    for (var e in events) {
      evp.events.add(e.toProtoEvent());
    }
    return evp;
  }

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
      _log.fine('Event $id created');
    } catch (e) {
      return EventCreateResponse(
          status: Status(code: 1, message: e.toString()));
    }

    return EventCreateResponse(status: Status(code: 0));
  }

  // TODO: Delete event should also delete registrations
  @override
  Future<StatusResponse> deleteEvent(
      ServiceCall call, EventDeleteRequest request) async {
    var session = await sessionManager.getDbSessionFromContext(call);
    var person = session.data['sessionPersonEntry'] as db.SectionPersonEntry;
    // todo: check if person is allowed to delete event...
    _log.fine('deleteEvent id: ${request.eventId}');
    try {
      await eventDao.deleteEvent(eventId: request.eventId);
      return StatusResponse(status: Status(code: 0));
    } catch (e) {
      return StatusResponse(status: Status(code: 1, message: e.toString()));
    }
  }

  @override
  Future<PersonSearchResponse> personSearch(
      ServiceCall call, PersonSearchRequest request) async {
    // for now just return all users.
    // todo: implement filtering

    try {
      _log.fine('Get persons filter=${request.filter}');
      var p = await personDao.getPersons(filter: request.filter);
      return PersonSearchResponse(personInfos: p.map((e) => e.toPersonInfo()));
    } catch (e) {
      return PersonSearchResponse(
          status: Status(code: 1, message: e.toString()));
    }
  }

  @override
  Future<EventDetailsResponse> getEventDetails(
      ServiceCall call, EventDetailsRequest request) async {
    // lookup the event, an get all the person info associated with the event,

    // get the event
    var event = await eventDao.getEvent(eventId: request.eventId);

    if (event == null) {
      return EventDetailsResponse(
          status: Status(code: 1, message: 'Event not found'));
    }

    // get the persons associated with the event
    var evs = await eventDao.getEventPersons(eventId: request.eventId);

    var resp = EventDetailsResponse();
    resp.event = event.toProtoEvent();

    for (var p in evs) {
      resp.eventPersonInfos.add(_dbEventPerson2EventPersonInfo(p));
    }
    return resp;
  }

  EventPersonInfo _dbEventPerson2EventPersonInfo(db.EventPersonJoin p) =>
      EventPersonInfo(
          eventRole: EventPersonInfo_EventRole.valueOf(
              p.eventParticipant.eventRole.index),
          personInfo: PersonInfo(id: p.person.id, email: p.person.email));

  @override
  Future<StatusResponse> registerForEvent(
      ServiceCall call, EventRegisterRequest r) async {
    // todo: What permission checks do we need here?
    try {
      var p = await eventDao.registerPersonForEvent(
          eventId: r.eventId, personId: r.personId, roleInt: r.role.value);
      _log.fine('Created registration $p');
      return StatusResponse();
    } catch (e) {
      return StatusResponse(status: Status(code: 1, message: e.toString()));
    }
  }
}

extension EventExt on db.Event {
  Event toProtoEvent() => Event(
        eventId: id,
        title: title,
        description: description,
        eventStartTs: Timestamp.fromDateTime(startTime),
        eventEndTs: Timestamp.fromDateTime(endTime),
        registerStartTs: Timestamp.fromDateTime(registrationStartTime),
        registerEndTs: Timestamp.fromDateTime(registrationEndTime),
        createdById: createdByPersonId,
        maxParticipants: maxParticipants,
        minParticipants: minParticipants,
      );
}

extension PersonExt on db.Person {
  PersonInfo toPersonInfo() => PersonInfo(
        email: email,
        firstName: firstName,
        lastName: lastName,
        id: id,
      );
}
