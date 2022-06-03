import 'package:protos/protos.dart';

class EventService {
  EventServiceClient stub;

  EventService(this.stub);

  Future<List<Event>> getEvents(int sectionId) async {
    var req = EventLookupRequest(sectionId: sectionId);
    var res = await stub.getEvents(req);
    return res.events;
  }

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
}