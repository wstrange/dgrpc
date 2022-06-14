import 'package:drift/drift.dart';
import 'event_db.dart';
import 'person_dao.dart';

part 'event_dao.g.dart';

@DriftAccessor(tables: [Events, EventParticipants])
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
    var q = db.select(db.events)..where((e) => e.sectionId.equals(sectionId));
    return q.get();
  }

  Future<Event?> getEvent({required int eventId}) async {
    var q = db.select(db.events)..where((e) => e.id.equals(eventId));
    return q.getSingleOrNull();
  }

  // todo: do we check for role here?
  Future<void> deleteEvent({@required eventId}) async {
    try {
      var numRows = await (db.delete(db.events)
            ..where((tbl) => tbl.id.equals(eventId)))
          .go();
    } catch (e) {
      throw DatabaseException('Could not delete event $eventId');
    }
  }

  Future<List<EventParticipant>> getEventParticipants({@required eventId}) {
    var q = select(db.eventParticipants)
      ..where((e) => e.eventId.equals(eventId));
    return q.get();
  }

  Future<List<EventPersonJoin>> getEventPersons({@required eventId}) async {
    var q = select(db.persons).join([
      innerJoin(
          db.eventParticipants,
          db.eventParticipants.eventId.equals(eventId) &
              db.eventParticipants.eventPersonId.equalsExp(db.persons.id))
    ]);

    q.orderBy([OrderingTerm.asc(db.eventParticipants.createdAt)]);
    var r = await q.get();
    return r.map((row) {
      var person = row.readTable(db.persons);
      var participant = row.readTable(db.eventParticipants);
      return EventPersonJoin(person, participant);
    }).toList();
  }

  // todo: Rename to associatePerson2Event?
  /// register a person for an event. If they already have an association, update it to the role
  Future<EventParticipant> registerPersonForEvent(
      {required int eventId, required personId, required int roleInt}) async {
    // if they have an existing association for registered or waitlisted, delete it first
    // Note a user can have more than one association - (admin and registered, for example) but they cant be
    // waitlisted and registered at the same time
    if (EventStatus.values[roleInt] == EventStatus.registered ||
        EventStatus.values[roleInt] == EventStatus.waitlisted) {
      // delete any existing registered or waitlisted
      var dq = db.delete(db.eventParticipants)
        ..where((ep) =>
            (ep.eventId.equals(eventId) & ep.eventPersonId.equals(personId)) &
            (ep.eventRole.equalsValue(EventStatus.waitlisted) |
                ep.eventRole.equalsValue(EventStatus.registered)));
      await dq.go();
    }

    return await db.into(db.eventParticipants).insertReturning(
        EventParticipantsCompanion.insert(
            eventId: eventId,
            eventPersonId: personId,
            eventRole: EventStatus.values[roleInt],
            createdAt: DateTime.now()));
  }

  // Remove the association of the person with an event.
  Future<void> deletePersonFromEvent({required eventId, required personId}) {
    var q = db.delete(db.eventParticipants)
      ..where((ep) =>
          ep.eventId.equals(eventId) & ep.eventPersonId.equals(personId));
    return q.go();
  }
}

class EventPersonJoin {
  Person person;
  EventParticipant eventParticipant;

  EventPersonJoin(this.person, this.eventParticipant);
}
