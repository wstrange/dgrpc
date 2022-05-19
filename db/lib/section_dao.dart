
import 'event_db.dart';
import 'package:drift/drift.dart';

part 'section_dao.g.dart';


@DriftAccessor(tables: [Persons,SectionPersons, Sections])
class SectionDao extends DatabaseAccessor<Database> with _$SectionDaoMixin {
  SectionDao(Database db): super(db);

  Future<Section?> getSection({int? id}) async {
    if( id == null) {
      return null;
    }
    var q = select(sections)..where( (s) => s.id.equals(id));
    return q.getSingleOrNull();
  }

}

