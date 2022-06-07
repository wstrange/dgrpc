import 'dart:io';
import 'package:path/path.dart' as p;
import 'package:drift/drift.dart';
// import 'package:drift_postgres/postgres.dart';
import 'package:drift/native.dart';
// import 'package:postgres/postgres.dart';
import 'package:logging/logging.dart';
import 'person_dao.dart';
import 'section_dao.dart';
import 'event_dao.dart';

// assuming that your file is called filename.dart. This will give an error at
// first, but it's needed for db to know about the generated code
part 'event_db.g.dart';

var dbLog = Logger('db');

enum SectionRole {
  member, // a member. Can sign up for events
  leader, // a leader. Can coordinate and create events for a section
  admin, // A section admin. Can promote persons to leaders, etc.
}

// A section that holds events
class Sections extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text().withLength(min: 3, max: 64).unique()();
  TextColumn get description => text().withLength(min: 3, max: 512)();
}

// What people sections have, and their role in that section.
class SectionPersons extends Table {
  IntColumn get personId => integer().references(Persons, #id)();
  IntColumn get sectionId => integer().references(Sections, #id)();

  // What role the person has in the section.
  IntColumn get sectionRole => intEnum<SectionRole>()();

  @override
  Set<Column> get primaryKey => {personId, sectionId};
}

class Events extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get title => text().withLength(min: 3, max: 32)();
  TextColumn get description => text().withLength(min: 0, max: 512)();
  DateTimeColumn get createdAt => dateTime()();
  DateTimeColumn get startTime => dateTime()();
  DateTimeColumn get endTime => dateTime()();
  DateTimeColumn get registrationStartTime => dateTime()();
  DateTimeColumn get registrationEndTime => dateTime()();
  IntColumn get createdByPersonId => integer().references(Persons, #id)();
  IntColumn get sectionId => integer().references(Sections, #id)();
  IntColumn get maxParticipants => integer()();
  IntColumn get minParticipants => integer()();

}

class Persons extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get email => text().withLength(min: 3, max: 64).unique()();
  // Unique single sign on id - assigned by the auth provider. EG: Firebase
  TextColumn get ssid => text().withLength(min:2, max:32).unique()();
}

// Note these are in the same order as the protobuf definition to make
// conversion easy.
enum EventStatus {
  owner,
  coordinator,
  waitlisted,
  registered,
}

// A Person associated with an event.
// @DataClassName('EventPersonEntry')
class EventParticipants extends Table {
  // IntColumn get event => integer().customConstraint('NOT NULL REFERENCES events(id)')();
  IntColumn get eventId => integer().references(Events, #id)();
  IntColumn get eventPersonId => integer().references(Persons, #id)();
  IntColumn get eventRole => intEnum<EventStatus>()();
  // When the entry was created (i.e. when the user signed up)
  DateTimeColumn get createdAt => dateTime()();
  @override
  Set<Column> get primaryKey => {eventId, eventPersonId};
}
//
// class EventPersons {
//   final Persons eventPerson;
//   final Events event;
//   EventPersons(this.eventPerson, this.event);
// }

// This will make db generate a class called "Category" to represent a row in
// this table. By default, "Categorie" would have been used because it only
//strips away the trailing "s" in the table name.
// @DataClassName('Category')
// class Categories extends Table {
//   IntColumn get id => integer().autoIncrement()();
//   TextColumn get description => text()();
// }

// this annotation tells db to prepare a database class that uses both of the
// tables we just defined. We'll see how to use that database class in a moment.
@DriftDatabase(
    tables: [Events, EventParticipants, SectionPersons,Persons,Sections],
    daos: [PersonDao, SectionDao,EventDao],
    include: {'event.drift'})
class Database extends _$Database {
  // Database() : super(PgDatabase(pgConnection));

  Database() : super(_openConnection());

  @override
  int get schemaVersion => 1;



}

final String dbFolder = p.join('/Users/warren/src/dart/dgrpc/db', 'db.sqlite');

nukeDB() {
  try {
    File(dbFolder).deleteSync();
  // ignore: empty_catches
  } catch (e) {

  }
}

LazyDatabase _openConnection() {
  // the LazyDatabase util lets us find the right location for the file async.
  return LazyDatabase(() async {
    // put the database file, called db.sqlite here, into the documents folder
    // for your app.
    final file = File(dbFolder);
    return NativeDatabase(file, logStatements: true);
  });
}

//
// DatabaseConnection createConnection() {
//   final pgConnection = PostgreSQLConnection('localhost', 5432, 'postgres',
//       username: 'postgres', password: 'postgres');
//   return DatabaseConnection.fromExecutor(PgDatabase(pgConnection));
// }



class DatabaseException implements Exception {
  String _message;

  String get message => _message;

  DatabaseException(this._message);
}
