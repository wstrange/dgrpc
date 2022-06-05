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

  EventService(this.stub,this._sectionId) {
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
    if( res.status.code == 0)
      return null;
  }

  Future<void> refreshEventStream() async {
    var events = await getEvents();
    _eventStream.add(events);
  }

  Future<Event> getEvent(int eventId) async {
    var req = EventLookupRequest(eventId: eventId);

    var res = await stub.getEvents(req);
    if( res.status.code == 0) {
      return res.events[0];
    }
    throw EventServiceException(res.status.message);
  }
}