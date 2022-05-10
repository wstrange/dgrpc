import 'package:fixnum/fixnum.dart';
import 'package:postgres/postgres.dart';
import 'package:protos/protos.dart';

class EventManager {
  final PostgreSQLConnection _db;

  EventManager(this._db);

  // Create an event
  Future<bool> createEvent(Event event) async {
    // no reg start provided - start now
    if (event.registerStartTs == null) {
      event.registerEndTs = Int64(DateTime.now().millisecondsSinceEpoch);
    }

    // no registration end provided - allow up until start of event
    if (event.registerEndTs == null) {
      event.registerEndTs = event.eventStartTs;
    }

    if (event.maxParticpants == null) {
      event.maxParticpants = 10;
    }
    if (event.minParticpants == null) {
      event.minParticpants = 1;
    }

    var r = await _db.query('''INSERT INTO events 
        (description, title, start_ts, end_ts, 
            register_start_ts, register_end_ts,
            min_participants, max_participants,
            created_by_uid)
        values(@description, @title, @start_ts, @end_ts, 
        @register_start_ts, @register_end_ts, 
        @min_participants, @max_participants,
         @created_by_uid)''', substitutionValues: {
      'description': event.description,
      'title': event.title,
      'start_ts': event.eventStartTs.toInt(),
      'end_ts': event.eventEndTs.toInt(),
      'register_start_ts': event.registerStartTs.toInt(),
      'register_end_ts': event.registerEndTs.toInt(),
      'created_by_uid': event.createdByUid,
      'min_participants': event.minParticpants,
      'max_participants': event.maxParticpants,
    });

    return r.affectedRowCount == 1;
  }

  Future<Event?> getEvent(int id) async {
    var r = await _db.mappedResultsQuery(
      'SELECT * FROM events where event_id = @id',
      substitutionValues: {'id': id},
    );
    print('r = $r');
    if (r != null && r.length == 1) {
      var e = r[0]['events'];
      return Event(
        eventId: e!['event_id'] as int,
        description: e['description'] as String,
      );
    }
    return null;
  }
}
