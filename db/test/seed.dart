import 'package:db/db.dart';
import 'dart:math';
// Create some sample data...

final _numSections = 3;
final _numUsers = 6;
final _numEvents = 10;

final rand = Random();

String genId() => rand.nextInt(10000000).toString();

class SeedData {
  Database db;

  SeedData(this.db);

  Future<void> createSections(int superAdminId) async {
    for (int i = 0; i < _numSections; ++i) {
      var secId = await db.into(db.sections).insert(SectionsCompanion.insert(
          name: "Section $i",
          description: "This is the description for section $i"));
      await createPersons(superAdminId, secId);
      await createEvents(superAdminId, secId);
    }
  }

  // Create persons for section id
  Future<void> createPersons(int superAdminId, int sectionId) async {
    // Make the super admin a section admin. Do we need this?
    // we could also just set a flag on the users account to make them
    // a super admin...
    var _x = await db.into(db.sectionPersons).insert(SectionPersonsCompanion.insert(
        personId: superAdminId,
        sectionId: sectionId,
        sectionRole: SectionRole.admin));


    var uid = await db.into(db.persons).insert(PersonsCompanion.insert(
        email: 'admin_$sectionId@test.com', ssid: genId()));
    // create role entry for admin
    await db.into(db.sectionPersons).insert(SectionPersonsCompanion.insert(
        personId: uid, sectionId: sectionId, sectionRole: SectionRole.admin));

    // Create a section leader
    uid = await db.into(db.persons).insert(PersonsCompanion.insert(
        email: 'leader_$sectionId@test.com', ssid: genId()));
    await db.into(db.sectionPersons).insert(SectionPersonsCompanion.insert(
        personId: uid, sectionId: sectionId, sectionRole: SectionRole.leader));
    // create members
    for (var i = 0; i < _numUsers; ++i) {
      var uid = await db.into(db.persons).insert(PersonsCompanion.insert(
          email: 'member${i}_$sectionId@test.com', ssid: genId()));
      await db.into(db.sectionPersons).insert(SectionPersonsCompanion.insert(
          personId: uid, sectionId: sectionId, sectionRole: SectionRole.admin));
    }
  }

  Future<void> createEvents(int superAdminId, int sectionId) async {
    var p = Person(id: superAdminId, email: 'foo', ssid: 'admin', superAdmin: false,
    primarySection: 0);
    var sections = [SectionPerson(personId: superAdminId, sectionId: sectionId,
        sectionRole: SectionRole.admin)];
    var now = DateTime.now();
    var sp = SectionPersonEntry(p, sections);
    for (var i = 0; i < _numEvents; ++i) {

      var ec = EventsCompanion.insert(
        maxParticipants: 4,
        minParticipants: 1,
        description: 'description for test event $sectionId at $now',
        title: 'test $sectionId',
        sectionId: sectionId,
        createdByPersonId: superAdminId,
        createdAt: now,
        endTime: now,
        registrationEndTime: now,
        registrationStartTime: now,
        startTime: now,
      );

      await db.eventDao.addEvent(sp, ec);

      // todo: register some users..
    }
  }

  Future<void> seedAll() async {
    // create the super admin...
    var superAdminId = await db.into(db.persons).insert(
        PersonsCompanion.insert(email: 'admin@test.com', ssid: 'admin'));
    await createSections(superAdminId);
  }
}
