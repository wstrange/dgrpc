import 'package:db/event.dart';
import 'package:postgres/postgres.dart';

void main(List<String> arguments) async {

  var db = Database();

  // print('Hello world: ${db.calculate()}!');

  // var pgConnection = PostgreSQLConnection('localhost', 5432, 'postgres',
  //     username: 'postgres', password: 'postgres');

  // var db = Database.fromPostgresConnection(pgConnection);
  // await nukeDb(db);
  // await db.close();

  // reopen the connection
  // pgConnection = PostgreSQLConnection('localhost', 5432, 'postgres',
  //     username: 'postgres', password: 'postgres');
  // db = Database.fromPostgresConnection(pgConnection);

  var uid = await db
      .into(db.persons)
      .insert(PersonsCompanion.insert(email: 'test@test.com'));

  var sectionId = await db.into(db.sections).insert(SectionsCompanion.insert(
      name: 'Calgary', description: 'Calgary Section ACC'));

  var x = await db.into(db.sectionPersons).insert(
      SectionPersonsCompanion.insert(
          personId: uid, sectionId: sectionId, sectionRole: SectionRole.admin));
  print('uid = $uid  x = $x');
  var now = DateTime.now();

  var eventId = await db.into(db.events).insert(EventsCompanion.insert(
      title: 'Test test',
      createdAt: now,
      startTime: now,
      endTime: now,
      registrationStartTime: now,
      registrationEndTime: now,
      sectionId: sectionId,
      createdByPersonId: uid));

  print('created event $eventId');

  var e = await db.into(db.eventPersonsEntries).insert(
      EventPersonsEntriesCompanion.insert(
          event: eventId, eventPerson: uid, eventRole: 'admin'));

  await db.close();

  print('done');

}

nukeDb(Database db) async {
  await db.customStatement('DROP SCHEMA public CASCADE;');
  await db.customStatement('CREATE SCHEMA public;');
  await db.customStatement('GRANT ALL ON SCHEMA public TO postgres;');
  await db.customStatement('GRANT ALL ON SCHEMA public TO public;');
}
