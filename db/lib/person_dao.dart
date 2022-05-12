import 'event_db.dart';
import 'package:collection/collection.dart';
import 'package:drift/drift.dart';

part 'person_dao.g.dart';


@DriftAccessor(tables: [Persons,SectionPersons])
class PersonDao extends DatabaseAccessor<Database> with _$PersonDaoMixin {

  PersonDao(Database db): super(db);

  // Lookup the person by email or the single sign on id. Return
  // the entry with all the sections they belong to.
  Future<SectionPersonEntry?> getPersonEntry({String? email, String? ssid}) async {

    if( email == null && ssid == null) return null;

    // Find the person...
    var q = select(persons)..where( (p) => p.email.equals(email) | p.ssid.equals(ssid));
    var p = await q.watchSingleOrNull().first;
    print('got person $p');
    if ( p == null)
      return null;
    // Find all the sections they belong to
    var q2 = select(sectionPersons)..where( (s) => s.personId.equals(p.id));
    var l = await q2.get();
    return  SectionPersonEntry(p,l.toList());
  }
}



class SectionPersonEntry {
  final Person person;
  final List<SectionPerson> sections;

  SectionPersonEntry(this.person, this.sections);

  // The Persons role in the Section. Null if they dont belong to this section
  SectionRole? roleForSection(Section section) {
    var s = sections.firstWhereOrNull((s) => s.sectionId == section.id);
    return s?.sectionRole;
  }

  // True if the Person belongs to section s and has role r
  bool hasSectionRole(Section s, SectionRole r) {
    var sr = roleForSection(s);
    return (sr != null && sr == r);
  }

  bool isSectionAdmin(Section s) => hasSectionRole(s, SectionRole.admin);
  bool isSectionLeader(Section s) => hasSectionRole(s, SectionRole.leader);
  bool isSectionMemnber(Section s) => hasSectionRole(s, SectionRole.member);

  // true if a person can create an event for a sectionId
  bool canCreateEvent({required int sectionId}) {
    var s = sections.firstWhereOrNull((s) => s.sectionId == sectionId );
    if( s != null && (s.sectionRole == SectionRole.admin || s.sectionRole == SectionRole.leader))
      return true;
    return false;
  }

  String toString() => 'SectionPersonEntry($person,$sections)';
}




