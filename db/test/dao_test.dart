import 'package:test/test.dart';
import 'package:db/db.dart';

void main() {
  late Database db;

  setUp(() async {
    db = Database();
  });

  tearDown(() async {
    db.close();
  });

  test('Person Dao', () async {
    // test non existing
    var pdao = db.personDao;
    SectionPersonEntry? e;

    e = await pdao.getPersonEntry(email: null);
    expect(e, isNull);

    // Admin user 0 is the admin of section 0
    e = await pdao.getPersonEntry(email: 'admin_0@test.com');
    expect(e, isNotNull);
    print('$e');
    expect(e!.sections.length, equals(1));

    // get the section..
    var section = await db.sectionDao.getSection(id: 1);
    expect(section, isNotNull);
    expect(section!.id, equals(1));
    expect(e.isSectionAdmin(section), isTrue);
  });

  // test('Create event', ()async {
  //   e = await pdao.getPersonEntry(email: 'admin_0@test.com');
  //
  //
  //   var ev = Event(createdByPersonId: 1, );
  // });


}
