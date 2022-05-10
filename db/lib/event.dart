import 'dart:io';
// import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as p;

import 'package:drift/drift.dart';
// import 'package:drift_postgres/postgres.dart';
import 'package:drift/native.dart';
// import 'package:postgres/postgres.dart';

// assuming that your file is called filename.dart. This will give an error at
// first, but it's needed for db to know about the generated code
part 'event.g.dart';

class Persons extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get email => text().withLength(min: 3, max: 64).unique()();
}


enum SectionRole {
  member, // a member. Can sign up for events
  leader, // a leader. Can coordinate and create events for a section
  admin,  // A section admin. Can promote persons to leaders, etc.
}
// A section that holds events
class Sections extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get name => text().withLength(min: 3, max: 64).unique()();
  TextColumn get description => text().withLength(min: 3, max: 512)();
}

// What people sections have, and their role in that section.
class SectionPersons extends Table {
  IntColumn get personId => integer().references(Persons,#id)();
  IntColumn get sectionId => integer().references(Sections,#id)();

  // What role the person has in the section.
  IntColumn get sectionRole => intEnum<SectionRole>()();

  @override
  Set<Column> get primaryKey => {personId,sectionId};
}

class Events extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get title => text().withLength(min: 6, max: 32)();
  DateTimeColumn get createdAt => dateTime()();
  DateTimeColumn get startTime => dateTime()();
  DateTimeColumn get endTime => dateTime()();
  DateTimeColumn get registrationStartTime => dateTime()();
  DateTimeColumn get registrationEndTime => dateTime()();
  IntColumn get createdByPersonId => integer().references(Persons, #id)();
  IntColumn get sectionId => integer().references(Sections, #id)();
}

@DataClassName('EventPersonEntry')
class EventPersonsEntries extends Table {
  // IntColumn get event => integer().customConstraint('NOT NULL REFERENCES events(id)')();
  IntColumn get event => integer().references(Events, #id)();
  IntColumn get eventPerson => integer().references(Persons, #id)();
  TextColumn get eventRole => text().withLength(min: 3, max: 10)();

  @override
  Set<Column> get primaryKey => {event,eventPerson};

}

class EventPersons {
  final Persons eventPerson;
  final Events event;
  EventPersons(this.eventPerson, this.event);
}


// This will make db generate a class called "Category" to represent a row in
// this table. By default, "Categorie" would have been used because it only
//strips away the trailing "s" in the table name.
@DataClassName('Category')
class Categories extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get description => text()();
}

// var pgConnection = PostgreSQLConnection('localhost', 5432, 'postgres',
//     username: 'postgres', password: 'postgres');

// this annotation tells db to prepare a database class that uses both of the
// tables we just defined. We'll see how to use that database class in a moment.
@DriftDatabase(tables: [Categories, Persons, Events, EventPersonsEntries,Sections, SectionPersons],
include: {'event.drift'})
class Database extends _$Database {
  // Database() : super(PgDatabase(pgConnection));

  Database(): super(_openConnection());

  // Database.withDB(QueryExecutor q): super(q);

  // factory Database.fromPostgresConnection(PostgreSQLConnection pg) {
  //   return Database.withDB(PgDatabase(pg));
  // }

  @override
  int get schemaVersion => 1;

}

LazyDatabase _openConnection() {
  // the LazyDatabase util lets us find the right location for the file async.
  return LazyDatabase(() async {
    // put the database file, called db.sqlite here, into the documents folder
    // for your app.
    final dbFolder = '/Users/warren/tmp/alpine';
    final file = File(p.join(dbFolder, 'db.sqlite'));
    return NativeDatabase(file,logStatements: true);
  });
}

//
// DatabaseConnection createConnection() {
//   final pgConnection = PostgreSQLConnection('localhost', 5432, 'postgres',
//       username: 'postgres', password: 'postgres');
//   return DatabaseConnection.fromExecutor(PgDatabase(pgConnection));
// }
