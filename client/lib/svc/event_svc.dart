import 'dart:async';
import 'package:protos/protos.dart';

class EventServiceException implements Exception {
  String message;

  EventServiceException(this.message);
}

class EventService {
  EventServiceClient stub;
  final int _sectionId;
  final _eventStream = StreamController<List<Event>>();
  final AuthResponse authResponse;

  get currentSection => _sectionId;
  get personId => authResponse.personId;

  EventService(this.stub, this._sectionId,this.authResponse) {
    refreshEventStream();
  }

  Future<List<Event>> getEvents() async {
    var req = EventLookupRequest(sectionId: _sectionId);
    var res = await stub.getEvents(req);
    return res.events;
  }

  Stream<List<Event>> getEventStream() => _eventStream.stream;

  Future<void> deleteEvent(int eventId) async {
    var req = EventDeleteRequest(eventId: eventId);
    var res = await stub.deleteEvent(req);
  }

  Future<void> createEvent(Event event) async {
    var req = EventCreateRequest(event: event);

    var res = await stub.createEvent(req);
    print('create request result = ${res.status}');
    if (res.status.code == 0) return null;
  }

  Future<void> refreshEventStream() async {
    var events = await getEvents();
    _eventStream.add(events);
  }

  Future<Event> getEvent(int eventId) async {
    var req = EventLookupRequest(eventId: eventId);

    var res = await stub.getEvents(req);
    if (res.status.code == 0) {
      return res.events[0];
    }
    throw EventServiceException(res.status.message);
  }

  // Get all the event details including the participants, etc.
  Future<EventDetailsResponse> getFullEventDetails(int eventId) async {
    var req = EventDetailsRequest(eventId: eventId);
    var res = await stub.getEventDetails(req);
    if (res.status.code != 0) {
      throw EventServiceException(res.status.message);
    }
    return res;
  }

  Future<StatusResponse> addPerson2Event(
      {required int eventId,
      required personId,
      required EventPersonInfo_EventRole role}) async {
    return await stub.registerForEvent(EventRegisterRequest(
      eventId: eventId,
      personId: personId,
      role: role,
    ));
  }

  Future<List<PersonInfo>> getPersons() async {
    var req = PersonSearchRequest();
    var r = await stub.personSearch(req);
    return r.personInfos;
  }
}
