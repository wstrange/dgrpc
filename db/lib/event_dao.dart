import 'package:drift/drift.dart';
import 'event_db.dart';
import 'person_dao.dart';

part 'event_dao.g.dart';

@DriftAccessor(tables: [Events,EventParticipants])
class EventDao extends DatabaseAccessor<Database> with _$EventDaoMixin {
  EventDao(Database db) : super(db);

  // Person sp wants to create an event ev
  Future<int> addEvent(SectionPersonEntry sp, EventsCompanion ev) async {

    dbLog.finest('addEvent person = $sp, event = $ev');
    // Check the event criteria
    if (!sp.canCreateEvent(sectionId: ev.sectionId.value)) {
      throw DatabaseException(
          'This person $sp not a leader or admin for the section ${ev.sectionId}');
    }
    // returns the id of the entry
    var r = await db.into(db.events).insert(ev);
    return r;
  }

  Future<List<Event>> getEventsBySection({required int sectionId}) async {
    var q = db.select(db.events)..where( (e) => e.sectionId.equals(sectionId));
    return q.get();
  }

  Future<Event?> getEvent({required int eventId}) async {
    var q = db.select(db.events)..where( (e) => e.id.equals(eventId));
    return q.getSingleOrNull();
  }

  // todo: do we check for role here?
  Future<void> deleteEvent({@required eventId}) async {
    try {
      var numRows = await (db.delete(db.events)
        ..where((tbl) => tbl.id.equals(eventId))).go();
    }
    catch(e) {
      throw DatabaseException(
          'Could not delete event $eventId');
    }
  }

  Future<List<EventParticipant>> getEventParticipants({@required eventId}) {
    var q = select(db.eventParticipants)
      ..where((e) => e.eventId.equals(eventId));
    return q.get();
  }


  Future<List<EventPersonJoin>> getEventPersons({@required eventId}) async {
      var q = select(db.persons).join([
        innerJoin(db.eventParticipants, db.eventParticipants.eventId.equals(eventId) & db.eventParticipants.eventPersonId.equalsExp(db.persons.id))
        ]);

      q.orderBy([OrderingTerm.asc(db.eventParticipants.createdAt)]);
      var r = await q.get();
      return r.map( (row) {
          var person = row.readTable(db.persons);
          var participant = row.readTable(db.eventParticipants);
          return EventPersonJoin(person,participant);
      }).toList();
  }

  Future<void> registerPersonForEvent({required int eventId, required personId, required int roleInt}) async {
    await db.into(db.eventParticipants).insert(
          EventParticipantsCompanion.insert(eventId: eventId,
              eventPersonId: personId,
              eventRole: EventStatus.values[roleInt],
              createdAt: DateTime.now()));
  }
}


class EventPersonJoin {
  Person person;
  EventParticipant eventParticipant;

  EventPersonJoin(this.person, this.eventParticipant);

}
