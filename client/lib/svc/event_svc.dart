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

  EventService(this.stub, this._sectionId, this.authResponse) {
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


  Future<int?> createEvent(Event event) async {
    var req = EventCreateRequest(event: event);

    var res = await stub.createEvent(req);
    print('create request result = ${res.status}');
    if (res.status.code == 0) return null;
    return res.eventId;
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

  final _eventDetailStreamController =  StreamController<EventDetailsResponse>();

  /// Create a stream to watch for event details. Prime it with the initial event
  Stream<EventDetailsResponse> getEventDetailsStream(int eventId) {
    refreshEventDetailsStream(eventId);
    return _eventDetailStreamController.stream;
  }

  void refreshEventDetailsStream(int eventId) {
    print('refresh event stream $eventId');
    var req = getFullEventDetails(eventId);
    req.then( (ed) => _eventDetailStreamController.add(ed));
  }

  // Add or update a persons association to an event.
  Future<StatusResponse> associatePersonToEvent(
      {required int eventId,
      required personId,
      required EventPersonInfo_EventRole role}) async {

    var r = await stub.registerForEvent(EventRegisterRequest(
      eventId: eventId,
      personId: personId,
      role: role,
    ));
    refreshEventDetailsStream(eventId);
    return r;
  }

  Future<List<PersonInfo>> getPersons(String filter) async {
    var req = PersonSearchRequest(filter: filter);
    print('search filter $filter');
    try {
      var r = await stub.personSearch(req);
      return r.personInfos;
    } catch (e) {
      print('exception $e');
      return [];
    }
  }

  Stream<PersonInfo> getPersonInfoStream(String filter) async* {
    var pl = await getPersons(filter);
    for (var p in pl) {
      yield p;
    }
  }
  Future<void> deletePersonFromEvent({required int eventId, required int personId}) async {
    var req = DeletePersonFromEventRequest(eventId: eventId, personId: personId);
    await stub.deletePersonFromEvent(req);
    refreshEventDetailsStream(eventId);
  }

}
