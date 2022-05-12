
import 'package:grpc/src/server/call.dart';
import 'package:protos/protos.dart';
import 'package:db/db.dart' as db;


// Manage event requests
class EventService extends EventServiceBase {
  final db.Database _db;
  final db.EventDao eventDao;

  EventService(this._db):eventDao = _db.eventDao;

  // Lookup Events
  @override
  Future<EventLookupResponse> getEvents(ServiceCall call, EventLookupRequest request) async {

    var evp = EventLookupResponse();
    evp.statusCode = 1;
    evp.message = 'Error';

    var dbEvents = await eventDao.getEventsBySection(sectionId: request.sectionId);

    List<Event> events = [];

    dbEvents.forEach((db.Event e) {
      print('got event $e');
      var ev = Event(title: e.title, description: e.description);
      evp.events.add(ev);
    });
    evp.statusCode = 0;
    evp.message = "ok";
    return evp;
  }

}