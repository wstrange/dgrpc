import 'event.dart';
import 'package:collection/collection.dart';

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
}
