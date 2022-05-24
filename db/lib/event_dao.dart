import 'package:db/db.dart';
import 'package:drift/drift.dart';

part 'event_dao.g.dart';

@DriftAccessor(tables: [Events])
class EventDao extends DatabaseAccessor<Database> with _$EventDaoMixin {
  EventDao(Database db) : super(db);

  // Person sp wants to create an event ev
  Future<int> addEvent(SectionPersonEntry sp, EventsCompanion ev) async {

    dbLog.finest('addEvent person = $sp, event = $ev');
    // Check the event criteria
    if (!sp.canCreateEvent(sectionId: ev.sectionId.value)) {
      throw DatabaseException(
          'This person is not a leader or admin for the section ${ev.sectionId}');
    }
    // returns the id of the entry
    var r = await db.into(db.events).insert(ev);
    return r;
  }

  Future<List<Event>> getEventsBySection({required int sectionId}) async {
    var q = db.select(db.events)..where( (e) => e.sectionId.equals(sectionId));
    return q.get();
  }

  // Event createEventTemplate({required SectionPersonEntry personEntry, required sectionId, required String title, required String description}) {
  //   var now = DateTime.now();
  //   var start = now.
  //   return Event(createdByPersonId: personEntry.person.id, title: title,
  //     createdAt: now, sectionId: sectionId,
  //   )
  // }
}
