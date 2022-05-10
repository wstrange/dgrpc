// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'event.dart';

// **************************************************************************
// MoorGenerator
// **************************************************************************

// ignore_for_file: type=lint
class Person extends DataClass implements Insertable<Person> {
  final int id;
  final String email;
  Person({required this.id, required this.email});
  factory Person.fromData(Map<String, dynamic> data, {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return Person(
      id: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}id'])!,
      email: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}email'])!,
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['email'] = Variable<String>(email);
    return map;
  }

  PersonsCompanion toCompanion(bool nullToAbsent) {
    return PersonsCompanion(
      id: Value(id),
      email: Value(email),
    );
  }

  factory Person.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Person(
      id: serializer.fromJson<int>(json['id']),
      email: serializer.fromJson<String>(json['email']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'email': serializer.toJson<String>(email),
    };
  }

  Person copyWith({int? id, String? email}) => Person(
        id: id ?? this.id,
        email: email ?? this.email,
      );
  @override
  String toString() {
    return (StringBuffer('Person(')
          ..write('id: $id, ')
          ..write('email: $email')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, email);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Person && other.id == this.id && other.email == this.email);
}

class PersonsCompanion extends UpdateCompanion<Person> {
  final Value<int> id;
  final Value<String> email;
  const PersonsCompanion({
    this.id = const Value.absent(),
    this.email = const Value.absent(),
  });
  PersonsCompanion.insert({
    this.id = const Value.absent(),
    required String email,
  }) : email = Value(email);
  static Insertable<Person> custom({
    Expression<int>? id,
    Expression<String>? email,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (email != null) 'email': email,
    });
  }

  PersonsCompanion copyWith({Value<int>? id, Value<String>? email}) {
    return PersonsCompanion(
      id: id ?? this.id,
      email: email ?? this.email,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (email.present) {
      map['email'] = Variable<String>(email.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('PersonsCompanion(')
          ..write('id: $id, ')
          ..write('email: $email')
          ..write(')'))
        .toString();
  }
}

class $PersonsTable extends Persons with TableInfo<$PersonsTable, Person> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $PersonsTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int?> id = GeneratedColumn<int?>(
      'id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: false,
      defaultConstraints: 'PRIMARY KEY AUTOINCREMENT');
  final VerificationMeta _emailMeta = const VerificationMeta('email');
  @override
  late final GeneratedColumn<String?> email = GeneratedColumn<String?>(
      'email', aliasedName, false,
      additionalChecks:
          GeneratedColumn.checkTextLength(minTextLength: 3, maxTextLength: 64),
      type: const StringType(),
      requiredDuringInsert: true,
      defaultConstraints: 'UNIQUE');
  @override
  List<GeneratedColumn> get $columns => [id, email];
  @override
  String get aliasedName => _alias ?? 'persons';
  @override
  String get actualTableName => 'persons';
  @override
  VerificationContext validateIntegrity(Insertable<Person> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('email')) {
      context.handle(
          _emailMeta, email.isAcceptableOrUnknown(data['email']!, _emailMeta));
    } else if (isInserting) {
      context.missing(_emailMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Person map(Map<String, dynamic> data, {String? tablePrefix}) {
    return Person.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $PersonsTable createAlias(String alias) {
    return $PersonsTable(attachedDatabase, alias);
  }
}

class Section extends DataClass implements Insertable<Section> {
  final int id;
  final String name;
  final String description;
  Section({required this.id, required this.name, required this.description});
  factory Section.fromData(Map<String, dynamic> data, {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return Section(
      id: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}id'])!,
      name: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}name'])!,
      description: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}description'])!,
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['name'] = Variable<String>(name);
    map['description'] = Variable<String>(description);
    return map;
  }

  SectionsCompanion toCompanion(bool nullToAbsent) {
    return SectionsCompanion(
      id: Value(id),
      name: Value(name),
      description: Value(description),
    );
  }

  factory Section.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Section(
      id: serializer.fromJson<int>(json['id']),
      name: serializer.fromJson<String>(json['name']),
      description: serializer.fromJson<String>(json['description']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'name': serializer.toJson<String>(name),
      'description': serializer.toJson<String>(description),
    };
  }

  Section copyWith({int? id, String? name, String? description}) => Section(
        id: id ?? this.id,
        name: name ?? this.name,
        description: description ?? this.description,
      );
  @override
  String toString() {
    return (StringBuffer('Section(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('description: $description')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, name, description);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Section &&
          other.id == this.id &&
          other.name == this.name &&
          other.description == this.description);
}

class SectionsCompanion extends UpdateCompanion<Section> {
  final Value<int> id;
  final Value<String> name;
  final Value<String> description;
  const SectionsCompanion({
    this.id = const Value.absent(),
    this.name = const Value.absent(),
    this.description = const Value.absent(),
  });
  SectionsCompanion.insert({
    this.id = const Value.absent(),
    required String name,
    required String description,
  })  : name = Value(name),
        description = Value(description);
  static Insertable<Section> custom({
    Expression<int>? id,
    Expression<String>? name,
    Expression<String>? description,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (description != null) 'description': description,
    });
  }

  SectionsCompanion copyWith(
      {Value<int>? id, Value<String>? name, Value<String>? description}) {
    return SectionsCompanion(
      id: id ?? this.id,
      name: name ?? this.name,
      description: description ?? this.description,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (name.present) {
      map['name'] = Variable<String>(name.value);
    }
    if (description.present) {
      map['description'] = Variable<String>(description.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('SectionsCompanion(')
          ..write('id: $id, ')
          ..write('name: $name, ')
          ..write('description: $description')
          ..write(')'))
        .toString();
  }
}

class $SectionsTable extends Sections with TableInfo<$SectionsTable, Section> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $SectionsTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int?> id = GeneratedColumn<int?>(
      'id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: false,
      defaultConstraints: 'PRIMARY KEY AUTOINCREMENT');
  final VerificationMeta _nameMeta = const VerificationMeta('name');
  @override
  late final GeneratedColumn<String?> name = GeneratedColumn<String?>(
      'name', aliasedName, false,
      additionalChecks:
          GeneratedColumn.checkTextLength(minTextLength: 3, maxTextLength: 64),
      type: const StringType(),
      requiredDuringInsert: true,
      defaultConstraints: 'UNIQUE');
  final VerificationMeta _descriptionMeta =
      const VerificationMeta('description');
  @override
  late final GeneratedColumn<String?> description = GeneratedColumn<String?>(
      'description', aliasedName, false,
      additionalChecks:
          GeneratedColumn.checkTextLength(minTextLength: 3, maxTextLength: 512),
      type: const StringType(),
      requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns => [id, name, description];
  @override
  String get aliasedName => _alias ?? 'sections';
  @override
  String get actualTableName => 'sections';
  @override
  VerificationContext validateIntegrity(Insertable<Section> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('name')) {
      context.handle(
          _nameMeta, name.isAcceptableOrUnknown(data['name']!, _nameMeta));
    } else if (isInserting) {
      context.missing(_nameMeta);
    }
    if (data.containsKey('description')) {
      context.handle(
          _descriptionMeta,
          description.isAcceptableOrUnknown(
              data['description']!, _descriptionMeta));
    } else if (isInserting) {
      context.missing(_descriptionMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Section map(Map<String, dynamic> data, {String? tablePrefix}) {
    return Section.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $SectionsTable createAlias(String alias) {
    return $SectionsTable(attachedDatabase, alias);
  }
}

class SectionPerson extends DataClass implements Insertable<SectionPerson> {
  final int personId;
  final int sectionId;
  final SectionRole sectionRole;
  SectionPerson(
      {required this.personId,
      required this.sectionId,
      required this.sectionRole});
  factory SectionPerson.fromData(Map<String, dynamic> data, {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return SectionPerson(
      personId: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}person_id'])!,
      sectionId: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}section_id'])!,
      sectionRole: $SectionPersonsTable.$converter0.mapToDart(const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}section_role']))!,
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['person_id'] = Variable<int>(personId);
    map['section_id'] = Variable<int>(sectionId);
    {
      final converter = $SectionPersonsTable.$converter0;
      map['section_role'] = Variable<int>(converter.mapToSql(sectionRole)!);
    }
    return map;
  }

  SectionPersonsCompanion toCompanion(bool nullToAbsent) {
    return SectionPersonsCompanion(
      personId: Value(personId),
      sectionId: Value(sectionId),
      sectionRole: Value(sectionRole),
    );
  }

  factory SectionPerson.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return SectionPerson(
      personId: serializer.fromJson<int>(json['personId']),
      sectionId: serializer.fromJson<int>(json['sectionId']),
      sectionRole: serializer.fromJson<SectionRole>(json['sectionRole']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'personId': serializer.toJson<int>(personId),
      'sectionId': serializer.toJson<int>(sectionId),
      'sectionRole': serializer.toJson<SectionRole>(sectionRole),
    };
  }

  SectionPerson copyWith(
          {int? personId, int? sectionId, SectionRole? sectionRole}) =>
      SectionPerson(
        personId: personId ?? this.personId,
        sectionId: sectionId ?? this.sectionId,
        sectionRole: sectionRole ?? this.sectionRole,
      );
  @override
  String toString() {
    return (StringBuffer('SectionPerson(')
          ..write('personId: $personId, ')
          ..write('sectionId: $sectionId, ')
          ..write('sectionRole: $sectionRole')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(personId, sectionId, sectionRole);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is SectionPerson &&
          other.personId == this.personId &&
          other.sectionId == this.sectionId &&
          other.sectionRole == this.sectionRole);
}

class SectionPersonsCompanion extends UpdateCompanion<SectionPerson> {
  final Value<int> personId;
  final Value<int> sectionId;
  final Value<SectionRole> sectionRole;
  const SectionPersonsCompanion({
    this.personId = const Value.absent(),
    this.sectionId = const Value.absent(),
    this.sectionRole = const Value.absent(),
  });
  SectionPersonsCompanion.insert({
    required int personId,
    required int sectionId,
    required SectionRole sectionRole,
  })  : personId = Value(personId),
        sectionId = Value(sectionId),
        sectionRole = Value(sectionRole);
  static Insertable<SectionPerson> custom({
    Expression<int>? personId,
    Expression<int>? sectionId,
    Expression<SectionRole>? sectionRole,
  }) {
    return RawValuesInsertable({
      if (personId != null) 'person_id': personId,
      if (sectionId != null) 'section_id': sectionId,
      if (sectionRole != null) 'section_role': sectionRole,
    });
  }

  SectionPersonsCompanion copyWith(
      {Value<int>? personId,
      Value<int>? sectionId,
      Value<SectionRole>? sectionRole}) {
    return SectionPersonsCompanion(
      personId: personId ?? this.personId,
      sectionId: sectionId ?? this.sectionId,
      sectionRole: sectionRole ?? this.sectionRole,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (personId.present) {
      map['person_id'] = Variable<int>(personId.value);
    }
    if (sectionId.present) {
      map['section_id'] = Variable<int>(sectionId.value);
    }
    if (sectionRole.present) {
      final converter = $SectionPersonsTable.$converter0;
      map['section_role'] =
          Variable<int>(converter.mapToSql(sectionRole.value)!);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('SectionPersonsCompanion(')
          ..write('personId: $personId, ')
          ..write('sectionId: $sectionId, ')
          ..write('sectionRole: $sectionRole')
          ..write(')'))
        .toString();
  }
}

class $SectionPersonsTable extends SectionPersons
    with TableInfo<$SectionPersonsTable, SectionPerson> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $SectionPersonsTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _personIdMeta = const VerificationMeta('personId');
  @override
  late final GeneratedColumn<int?> personId = GeneratedColumn<int?>(
      'person_id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: true,
      defaultConstraints: 'REFERENCES persons (id)');
  final VerificationMeta _sectionIdMeta = const VerificationMeta('sectionId');
  @override
  late final GeneratedColumn<int?> sectionId = GeneratedColumn<int?>(
      'section_id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: true,
      defaultConstraints: 'REFERENCES sections (id)');
  final VerificationMeta _sectionRoleMeta =
      const VerificationMeta('sectionRole');
  @override
  late final GeneratedColumnWithTypeConverter<SectionRole, int?> sectionRole =
      GeneratedColumn<int?>('section_role', aliasedName, false,
              type: const IntType(), requiredDuringInsert: true)
          .withConverter<SectionRole>($SectionPersonsTable.$converter0);
  @override
  List<GeneratedColumn> get $columns => [personId, sectionId, sectionRole];
  @override
  String get aliasedName => _alias ?? 'section_persons';
  @override
  String get actualTableName => 'section_persons';
  @override
  VerificationContext validateIntegrity(Insertable<SectionPerson> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('person_id')) {
      context.handle(_personIdMeta,
          personId.isAcceptableOrUnknown(data['person_id']!, _personIdMeta));
    } else if (isInserting) {
      context.missing(_personIdMeta);
    }
    if (data.containsKey('section_id')) {
      context.handle(_sectionIdMeta,
          sectionId.isAcceptableOrUnknown(data['section_id']!, _sectionIdMeta));
    } else if (isInserting) {
      context.missing(_sectionIdMeta);
    }
    context.handle(_sectionRoleMeta, const VerificationResult.success());
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {personId, sectionId};
  @override
  SectionPerson map(Map<String, dynamic> data, {String? tablePrefix}) {
    return SectionPerson.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $SectionPersonsTable createAlias(String alias) {
    return $SectionPersonsTable(attachedDatabase, alias);
  }

  static TypeConverter<SectionRole, int> $converter0 =
      const EnumIndexConverter<SectionRole>(SectionRole.values);
}

class Event extends DataClass implements Insertable<Event> {
  final int id;
  final String title;
  final DateTime createdAt;
  final DateTime startTime;
  final DateTime endTime;
  final DateTime registrationStartTime;
  final DateTime registrationEndTime;
  final int createdByPersonId;
  final int sectionId;
  Event(
      {required this.id,
      required this.title,
      required this.createdAt,
      required this.startTime,
      required this.endTime,
      required this.registrationStartTime,
      required this.registrationEndTime,
      required this.createdByPersonId,
      required this.sectionId});
  factory Event.fromData(Map<String, dynamic> data, {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return Event(
      id: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}id'])!,
      title: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}title'])!,
      createdAt: const DateTimeType()
          .mapFromDatabaseResponse(data['${effectivePrefix}created_at'])!,
      startTime: const DateTimeType()
          .mapFromDatabaseResponse(data['${effectivePrefix}start_time'])!,
      endTime: const DateTimeType()
          .mapFromDatabaseResponse(data['${effectivePrefix}end_time'])!,
      registrationStartTime: const DateTimeType().mapFromDatabaseResponse(
          data['${effectivePrefix}registration_start_time'])!,
      registrationEndTime: const DateTimeType().mapFromDatabaseResponse(
          data['${effectivePrefix}registration_end_time'])!,
      createdByPersonId: const IntType().mapFromDatabaseResponse(
          data['${effectivePrefix}created_by_person_id'])!,
      sectionId: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}section_id'])!,
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['title'] = Variable<String>(title);
    map['created_at'] = Variable<DateTime>(createdAt);
    map['start_time'] = Variable<DateTime>(startTime);
    map['end_time'] = Variable<DateTime>(endTime);
    map['registration_start_time'] = Variable<DateTime>(registrationStartTime);
    map['registration_end_time'] = Variable<DateTime>(registrationEndTime);
    map['created_by_person_id'] = Variable<int>(createdByPersonId);
    map['section_id'] = Variable<int>(sectionId);
    return map;
  }

  EventsCompanion toCompanion(bool nullToAbsent) {
    return EventsCompanion(
      id: Value(id),
      title: Value(title),
      createdAt: Value(createdAt),
      startTime: Value(startTime),
      endTime: Value(endTime),
      registrationStartTime: Value(registrationStartTime),
      registrationEndTime: Value(registrationEndTime),
      createdByPersonId: Value(createdByPersonId),
      sectionId: Value(sectionId),
    );
  }

  factory Event.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Event(
      id: serializer.fromJson<int>(json['id']),
      title: serializer.fromJson<String>(json['title']),
      createdAt: serializer.fromJson<DateTime>(json['createdAt']),
      startTime: serializer.fromJson<DateTime>(json['startTime']),
      endTime: serializer.fromJson<DateTime>(json['endTime']),
      registrationStartTime:
          serializer.fromJson<DateTime>(json['registrationStartTime']),
      registrationEndTime:
          serializer.fromJson<DateTime>(json['registrationEndTime']),
      createdByPersonId: serializer.fromJson<int>(json['createdByPersonId']),
      sectionId: serializer.fromJson<int>(json['sectionId']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'title': serializer.toJson<String>(title),
      'createdAt': serializer.toJson<DateTime>(createdAt),
      'startTime': serializer.toJson<DateTime>(startTime),
      'endTime': serializer.toJson<DateTime>(endTime),
      'registrationStartTime':
          serializer.toJson<DateTime>(registrationStartTime),
      'registrationEndTime': serializer.toJson<DateTime>(registrationEndTime),
      'createdByPersonId': serializer.toJson<int>(createdByPersonId),
      'sectionId': serializer.toJson<int>(sectionId),
    };
  }

  Event copyWith(
          {int? id,
          String? title,
          DateTime? createdAt,
          DateTime? startTime,
          DateTime? endTime,
          DateTime? registrationStartTime,
          DateTime? registrationEndTime,
          int? createdByPersonId,
          int? sectionId}) =>
      Event(
        id: id ?? this.id,
        title: title ?? this.title,
        createdAt: createdAt ?? this.createdAt,
        startTime: startTime ?? this.startTime,
        endTime: endTime ?? this.endTime,
        registrationStartTime:
            registrationStartTime ?? this.registrationStartTime,
        registrationEndTime: registrationEndTime ?? this.registrationEndTime,
        createdByPersonId: createdByPersonId ?? this.createdByPersonId,
        sectionId: sectionId ?? this.sectionId,
      );
  @override
  String toString() {
    return (StringBuffer('Event(')
          ..write('id: $id, ')
          ..write('title: $title, ')
          ..write('createdAt: $createdAt, ')
          ..write('startTime: $startTime, ')
          ..write('endTime: $endTime, ')
          ..write('registrationStartTime: $registrationStartTime, ')
          ..write('registrationEndTime: $registrationEndTime, ')
          ..write('createdByPersonId: $createdByPersonId, ')
          ..write('sectionId: $sectionId')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, title, createdAt, startTime, endTime,
      registrationStartTime, registrationEndTime, createdByPersonId, sectionId);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Event &&
          other.id == this.id &&
          other.title == this.title &&
          other.createdAt == this.createdAt &&
          other.startTime == this.startTime &&
          other.endTime == this.endTime &&
          other.registrationStartTime == this.registrationStartTime &&
          other.registrationEndTime == this.registrationEndTime &&
          other.createdByPersonId == this.createdByPersonId &&
          other.sectionId == this.sectionId);
}

class EventsCompanion extends UpdateCompanion<Event> {
  final Value<int> id;
  final Value<String> title;
  final Value<DateTime> createdAt;
  final Value<DateTime> startTime;
  final Value<DateTime> endTime;
  final Value<DateTime> registrationStartTime;
  final Value<DateTime> registrationEndTime;
  final Value<int> createdByPersonId;
  final Value<int> sectionId;
  const EventsCompanion({
    this.id = const Value.absent(),
    this.title = const Value.absent(),
    this.createdAt = const Value.absent(),
    this.startTime = const Value.absent(),
    this.endTime = const Value.absent(),
    this.registrationStartTime = const Value.absent(),
    this.registrationEndTime = const Value.absent(),
    this.createdByPersonId = const Value.absent(),
    this.sectionId = const Value.absent(),
  });
  EventsCompanion.insert({
    this.id = const Value.absent(),
    required String title,
    required DateTime createdAt,
    required DateTime startTime,
    required DateTime endTime,
    required DateTime registrationStartTime,
    required DateTime registrationEndTime,
    required int createdByPersonId,
    required int sectionId,
  })  : title = Value(title),
        createdAt = Value(createdAt),
        startTime = Value(startTime),
        endTime = Value(endTime),
        registrationStartTime = Value(registrationStartTime),
        registrationEndTime = Value(registrationEndTime),
        createdByPersonId = Value(createdByPersonId),
        sectionId = Value(sectionId);
  static Insertable<Event> custom({
    Expression<int>? id,
    Expression<String>? title,
    Expression<DateTime>? createdAt,
    Expression<DateTime>? startTime,
    Expression<DateTime>? endTime,
    Expression<DateTime>? registrationStartTime,
    Expression<DateTime>? registrationEndTime,
    Expression<int>? createdByPersonId,
    Expression<int>? sectionId,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (title != null) 'title': title,
      if (createdAt != null) 'created_at': createdAt,
      if (startTime != null) 'start_time': startTime,
      if (endTime != null) 'end_time': endTime,
      if (registrationStartTime != null)
        'registration_start_time': registrationStartTime,
      if (registrationEndTime != null)
        'registration_end_time': registrationEndTime,
      if (createdByPersonId != null) 'created_by_person_id': createdByPersonId,
      if (sectionId != null) 'section_id': sectionId,
    });
  }

  EventsCompanion copyWith(
      {Value<int>? id,
      Value<String>? title,
      Value<DateTime>? createdAt,
      Value<DateTime>? startTime,
      Value<DateTime>? endTime,
      Value<DateTime>? registrationStartTime,
      Value<DateTime>? registrationEndTime,
      Value<int>? createdByPersonId,
      Value<int>? sectionId}) {
    return EventsCompanion(
      id: id ?? this.id,
      title: title ?? this.title,
      createdAt: createdAt ?? this.createdAt,
      startTime: startTime ?? this.startTime,
      endTime: endTime ?? this.endTime,
      registrationStartTime:
          registrationStartTime ?? this.registrationStartTime,
      registrationEndTime: registrationEndTime ?? this.registrationEndTime,
      createdByPersonId: createdByPersonId ?? this.createdByPersonId,
      sectionId: sectionId ?? this.sectionId,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (title.present) {
      map['title'] = Variable<String>(title.value);
    }
    if (createdAt.present) {
      map['created_at'] = Variable<DateTime>(createdAt.value);
    }
    if (startTime.present) {
      map['start_time'] = Variable<DateTime>(startTime.value);
    }
    if (endTime.present) {
      map['end_time'] = Variable<DateTime>(endTime.value);
    }
    if (registrationStartTime.present) {
      map['registration_start_time'] =
          Variable<DateTime>(registrationStartTime.value);
    }
    if (registrationEndTime.present) {
      map['registration_end_time'] =
          Variable<DateTime>(registrationEndTime.value);
    }
    if (createdByPersonId.present) {
      map['created_by_person_id'] = Variable<int>(createdByPersonId.value);
    }
    if (sectionId.present) {
      map['section_id'] = Variable<int>(sectionId.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('EventsCompanion(')
          ..write('id: $id, ')
          ..write('title: $title, ')
          ..write('createdAt: $createdAt, ')
          ..write('startTime: $startTime, ')
          ..write('endTime: $endTime, ')
          ..write('registrationStartTime: $registrationStartTime, ')
          ..write('registrationEndTime: $registrationEndTime, ')
          ..write('createdByPersonId: $createdByPersonId, ')
          ..write('sectionId: $sectionId')
          ..write(')'))
        .toString();
  }
}

class $EventsTable extends Events with TableInfo<$EventsTable, Event> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $EventsTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int?> id = GeneratedColumn<int?>(
      'id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: false,
      defaultConstraints: 'PRIMARY KEY AUTOINCREMENT');
  final VerificationMeta _titleMeta = const VerificationMeta('title');
  @override
  late final GeneratedColumn<String?> title = GeneratedColumn<String?>(
      'title', aliasedName, false,
      additionalChecks:
          GeneratedColumn.checkTextLength(minTextLength: 6, maxTextLength: 32),
      type: const StringType(),
      requiredDuringInsert: true);
  final VerificationMeta _createdAtMeta = const VerificationMeta('createdAt');
  @override
  late final GeneratedColumn<DateTime?> createdAt = GeneratedColumn<DateTime?>(
      'created_at', aliasedName, false,
      type: const IntType(), requiredDuringInsert: true);
  final VerificationMeta _startTimeMeta = const VerificationMeta('startTime');
  @override
  late final GeneratedColumn<DateTime?> startTime = GeneratedColumn<DateTime?>(
      'start_time', aliasedName, false,
      type: const IntType(), requiredDuringInsert: true);
  final VerificationMeta _endTimeMeta = const VerificationMeta('endTime');
  @override
  late final GeneratedColumn<DateTime?> endTime = GeneratedColumn<DateTime?>(
      'end_time', aliasedName, false,
      type: const IntType(), requiredDuringInsert: true);
  final VerificationMeta _registrationStartTimeMeta =
      const VerificationMeta('registrationStartTime');
  @override
  late final GeneratedColumn<DateTime?> registrationStartTime =
      GeneratedColumn<DateTime?>('registration_start_time', aliasedName, false,
          type: const IntType(), requiredDuringInsert: true);
  final VerificationMeta _registrationEndTimeMeta =
      const VerificationMeta('registrationEndTime');
  @override
  late final GeneratedColumn<DateTime?> registrationEndTime =
      GeneratedColumn<DateTime?>('registration_end_time', aliasedName, false,
          type: const IntType(), requiredDuringInsert: true);
  final VerificationMeta _createdByPersonIdMeta =
      const VerificationMeta('createdByPersonId');
  @override
  late final GeneratedColumn<int?> createdByPersonId = GeneratedColumn<int?>(
      'created_by_person_id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: true,
      defaultConstraints: 'REFERENCES persons (id)');
  final VerificationMeta _sectionIdMeta = const VerificationMeta('sectionId');
  @override
  late final GeneratedColumn<int?> sectionId = GeneratedColumn<int?>(
      'section_id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: true,
      defaultConstraints: 'REFERENCES sections (id)');
  @override
  List<GeneratedColumn> get $columns => [
        id,
        title,
        createdAt,
        startTime,
        endTime,
        registrationStartTime,
        registrationEndTime,
        createdByPersonId,
        sectionId
      ];
  @override
  String get aliasedName => _alias ?? 'events';
  @override
  String get actualTableName => 'events';
  @override
  VerificationContext validateIntegrity(Insertable<Event> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('title')) {
      context.handle(
          _titleMeta, title.isAcceptableOrUnknown(data['title']!, _titleMeta));
    } else if (isInserting) {
      context.missing(_titleMeta);
    }
    if (data.containsKey('created_at')) {
      context.handle(_createdAtMeta,
          createdAt.isAcceptableOrUnknown(data['created_at']!, _createdAtMeta));
    } else if (isInserting) {
      context.missing(_createdAtMeta);
    }
    if (data.containsKey('start_time')) {
      context.handle(_startTimeMeta,
          startTime.isAcceptableOrUnknown(data['start_time']!, _startTimeMeta));
    } else if (isInserting) {
      context.missing(_startTimeMeta);
    }
    if (data.containsKey('end_time')) {
      context.handle(_endTimeMeta,
          endTime.isAcceptableOrUnknown(data['end_time']!, _endTimeMeta));
    } else if (isInserting) {
      context.missing(_endTimeMeta);
    }
    if (data.containsKey('registration_start_time')) {
      context.handle(
          _registrationStartTimeMeta,
          registrationStartTime.isAcceptableOrUnknown(
              data['registration_start_time']!, _registrationStartTimeMeta));
    } else if (isInserting) {
      context.missing(_registrationStartTimeMeta);
    }
    if (data.containsKey('registration_end_time')) {
      context.handle(
          _registrationEndTimeMeta,
          registrationEndTime.isAcceptableOrUnknown(
              data['registration_end_time']!, _registrationEndTimeMeta));
    } else if (isInserting) {
      context.missing(_registrationEndTimeMeta);
    }
    if (data.containsKey('created_by_person_id')) {
      context.handle(
          _createdByPersonIdMeta,
          createdByPersonId.isAcceptableOrUnknown(
              data['created_by_person_id']!, _createdByPersonIdMeta));
    } else if (isInserting) {
      context.missing(_createdByPersonIdMeta);
    }
    if (data.containsKey('section_id')) {
      context.handle(_sectionIdMeta,
          sectionId.isAcceptableOrUnknown(data['section_id']!, _sectionIdMeta));
    } else if (isInserting) {
      context.missing(_sectionIdMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Event map(Map<String, dynamic> data, {String? tablePrefix}) {
    return Event.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $EventsTable createAlias(String alias) {
    return $EventsTable(attachedDatabase, alias);
  }
}

class EventPersonEntry extends DataClass
    implements Insertable<EventPersonEntry> {
  final int event;
  final int eventPerson;
  final String eventRole;
  EventPersonEntry(
      {required this.event,
      required this.eventPerson,
      required this.eventRole});
  factory EventPersonEntry.fromData(Map<String, dynamic> data,
      {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return EventPersonEntry(
      event: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}event'])!,
      eventPerson: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}event_person'])!,
      eventRole: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}event_role'])!,
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['event'] = Variable<int>(event);
    map['event_person'] = Variable<int>(eventPerson);
    map['event_role'] = Variable<String>(eventRole);
    return map;
  }

  EventPersonsEntriesCompanion toCompanion(bool nullToAbsent) {
    return EventPersonsEntriesCompanion(
      event: Value(event),
      eventPerson: Value(eventPerson),
      eventRole: Value(eventRole),
    );
  }

  factory EventPersonEntry.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return EventPersonEntry(
      event: serializer.fromJson<int>(json['event']),
      eventPerson: serializer.fromJson<int>(json['eventPerson']),
      eventRole: serializer.fromJson<String>(json['eventRole']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'event': serializer.toJson<int>(event),
      'eventPerson': serializer.toJson<int>(eventPerson),
      'eventRole': serializer.toJson<String>(eventRole),
    };
  }

  EventPersonEntry copyWith(
          {int? event, int? eventPerson, String? eventRole}) =>
      EventPersonEntry(
        event: event ?? this.event,
        eventPerson: eventPerson ?? this.eventPerson,
        eventRole: eventRole ?? this.eventRole,
      );
  @override
  String toString() {
    return (StringBuffer('EventPersonEntry(')
          ..write('event: $event, ')
          ..write('eventPerson: $eventPerson, ')
          ..write('eventRole: $eventRole')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(event, eventPerson, eventRole);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is EventPersonEntry &&
          other.event == this.event &&
          other.eventPerson == this.eventPerson &&
          other.eventRole == this.eventRole);
}

class EventPersonsEntriesCompanion extends UpdateCompanion<EventPersonEntry> {
  final Value<int> event;
  final Value<int> eventPerson;
  final Value<String> eventRole;
  const EventPersonsEntriesCompanion({
    this.event = const Value.absent(),
    this.eventPerson = const Value.absent(),
    this.eventRole = const Value.absent(),
  });
  EventPersonsEntriesCompanion.insert({
    required int event,
    required int eventPerson,
    required String eventRole,
  })  : event = Value(event),
        eventPerson = Value(eventPerson),
        eventRole = Value(eventRole);
  static Insertable<EventPersonEntry> custom({
    Expression<int>? event,
    Expression<int>? eventPerson,
    Expression<String>? eventRole,
  }) {
    return RawValuesInsertable({
      if (event != null) 'event': event,
      if (eventPerson != null) 'event_person': eventPerson,
      if (eventRole != null) 'event_role': eventRole,
    });
  }

  EventPersonsEntriesCompanion copyWith(
      {Value<int>? event, Value<int>? eventPerson, Value<String>? eventRole}) {
    return EventPersonsEntriesCompanion(
      event: event ?? this.event,
      eventPerson: eventPerson ?? this.eventPerson,
      eventRole: eventRole ?? this.eventRole,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (event.present) {
      map['event'] = Variable<int>(event.value);
    }
    if (eventPerson.present) {
      map['event_person'] = Variable<int>(eventPerson.value);
    }
    if (eventRole.present) {
      map['event_role'] = Variable<String>(eventRole.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('EventPersonsEntriesCompanion(')
          ..write('event: $event, ')
          ..write('eventPerson: $eventPerson, ')
          ..write('eventRole: $eventRole')
          ..write(')'))
        .toString();
  }
}

class $EventPersonsEntriesTable extends EventPersonsEntries
    with TableInfo<$EventPersonsEntriesTable, EventPersonEntry> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $EventPersonsEntriesTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _eventMeta = const VerificationMeta('event');
  @override
  late final GeneratedColumn<int?> event = GeneratedColumn<int?>(
      'event', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: true,
      defaultConstraints: 'REFERENCES events (id)');
  final VerificationMeta _eventPersonMeta =
      const VerificationMeta('eventPerson');
  @override
  late final GeneratedColumn<int?> eventPerson = GeneratedColumn<int?>(
      'event_person', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: true,
      defaultConstraints: 'REFERENCES persons (id)');
  final VerificationMeta _eventRoleMeta = const VerificationMeta('eventRole');
  @override
  late final GeneratedColumn<String?> eventRole = GeneratedColumn<String?>(
      'event_role', aliasedName, false,
      additionalChecks:
          GeneratedColumn.checkTextLength(minTextLength: 3, maxTextLength: 10),
      type: const StringType(),
      requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns => [event, eventPerson, eventRole];
  @override
  String get aliasedName => _alias ?? 'event_persons_entries';
  @override
  String get actualTableName => 'event_persons_entries';
  @override
  VerificationContext validateIntegrity(Insertable<EventPersonEntry> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('event')) {
      context.handle(
          _eventMeta, event.isAcceptableOrUnknown(data['event']!, _eventMeta));
    } else if (isInserting) {
      context.missing(_eventMeta);
    }
    if (data.containsKey('event_person')) {
      context.handle(
          _eventPersonMeta,
          eventPerson.isAcceptableOrUnknown(
              data['event_person']!, _eventPersonMeta));
    } else if (isInserting) {
      context.missing(_eventPersonMeta);
    }
    if (data.containsKey('event_role')) {
      context.handle(_eventRoleMeta,
          eventRole.isAcceptableOrUnknown(data['event_role']!, _eventRoleMeta));
    } else if (isInserting) {
      context.missing(_eventRoleMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {event, eventPerson};
  @override
  EventPersonEntry map(Map<String, dynamic> data, {String? tablePrefix}) {
    return EventPersonEntry.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $EventPersonsEntriesTable createAlias(String alias) {
    return $EventPersonsEntriesTable(attachedDatabase, alias);
  }
}

class Category extends DataClass implements Insertable<Category> {
  final int id;
  final String description;
  Category({required this.id, required this.description});
  factory Category.fromData(Map<String, dynamic> data, {String? prefix}) {
    final effectivePrefix = prefix ?? '';
    return Category(
      id: const IntType()
          .mapFromDatabaseResponse(data['${effectivePrefix}id'])!,
      description: const StringType()
          .mapFromDatabaseResponse(data['${effectivePrefix}description'])!,
    );
  }
  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    map['id'] = Variable<int>(id);
    map['description'] = Variable<String>(description);
    return map;
  }

  CategoriesCompanion toCompanion(bool nullToAbsent) {
    return CategoriesCompanion(
      id: Value(id),
      description: Value(description),
    );
  }

  factory Category.fromJson(Map<String, dynamic> json,
      {ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return Category(
      id: serializer.fromJson<int>(json['id']),
      description: serializer.fromJson<String>(json['description']),
    );
  }
  @override
  Map<String, dynamic> toJson({ValueSerializer? serializer}) {
    serializer ??= driftRuntimeOptions.defaultSerializer;
    return <String, dynamic>{
      'id': serializer.toJson<int>(id),
      'description': serializer.toJson<String>(description),
    };
  }

  Category copyWith({int? id, String? description}) => Category(
        id: id ?? this.id,
        description: description ?? this.description,
      );
  @override
  String toString() {
    return (StringBuffer('Category(')
          ..write('id: $id, ')
          ..write('description: $description')
          ..write(')'))
        .toString();
  }

  @override
  int get hashCode => Object.hash(id, description);
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      (other is Category &&
          other.id == this.id &&
          other.description == this.description);
}

class CategoriesCompanion extends UpdateCompanion<Category> {
  final Value<int> id;
  final Value<String> description;
  const CategoriesCompanion({
    this.id = const Value.absent(),
    this.description = const Value.absent(),
  });
  CategoriesCompanion.insert({
    this.id = const Value.absent(),
    required String description,
  }) : description = Value(description);
  static Insertable<Category> custom({
    Expression<int>? id,
    Expression<String>? description,
  }) {
    return RawValuesInsertable({
      if (id != null) 'id': id,
      if (description != null) 'description': description,
    });
  }

  CategoriesCompanion copyWith({Value<int>? id, Value<String>? description}) {
    return CategoriesCompanion(
      id: id ?? this.id,
      description: description ?? this.description,
    );
  }

  @override
  Map<String, Expression> toColumns(bool nullToAbsent) {
    final map = <String, Expression>{};
    if (id.present) {
      map['id'] = Variable<int>(id.value);
    }
    if (description.present) {
      map['description'] = Variable<String>(description.value);
    }
    return map;
  }

  @override
  String toString() {
    return (StringBuffer('CategoriesCompanion(')
          ..write('id: $id, ')
          ..write('description: $description')
          ..write(')'))
        .toString();
  }
}

class $CategoriesTable extends Categories
    with TableInfo<$CategoriesTable, Category> {
  @override
  final GeneratedDatabase attachedDatabase;
  final String? _alias;
  $CategoriesTable(this.attachedDatabase, [this._alias]);
  final VerificationMeta _idMeta = const VerificationMeta('id');
  @override
  late final GeneratedColumn<int?> id = GeneratedColumn<int?>(
      'id', aliasedName, false,
      type: const IntType(),
      requiredDuringInsert: false,
      defaultConstraints: 'PRIMARY KEY AUTOINCREMENT');
  final VerificationMeta _descriptionMeta =
      const VerificationMeta('description');
  @override
  late final GeneratedColumn<String?> description = GeneratedColumn<String?>(
      'description', aliasedName, false,
      type: const StringType(), requiredDuringInsert: true);
  @override
  List<GeneratedColumn> get $columns => [id, description];
  @override
  String get aliasedName => _alias ?? 'categories';
  @override
  String get actualTableName => 'categories';
  @override
  VerificationContext validateIntegrity(Insertable<Category> instance,
      {bool isInserting = false}) {
    final context = VerificationContext();
    final data = instance.toColumns(true);
    if (data.containsKey('id')) {
      context.handle(_idMeta, id.isAcceptableOrUnknown(data['id']!, _idMeta));
    }
    if (data.containsKey('description')) {
      context.handle(
          _descriptionMeta,
          description.isAcceptableOrUnknown(
              data['description']!, _descriptionMeta));
    } else if (isInserting) {
      context.missing(_descriptionMeta);
    }
    return context;
  }

  @override
  Set<GeneratedColumn> get $primaryKey => {id};
  @override
  Category map(Map<String, dynamic> data, {String? tablePrefix}) {
    return Category.fromData(data,
        prefix: tablePrefix != null ? '$tablePrefix.' : null);
  }

  @override
  $CategoriesTable createAlias(String alias) {
    return $CategoriesTable(attachedDatabase, alias);
  }
}

abstract class _$Database extends GeneratedDatabase {
  _$Database(QueryExecutor e) : super(SqlTypeSystem.defaultInstance, e);
  late final $PersonsTable persons = $PersonsTable(this);
  late final Index personEmailIdx = Index('person_email_idx',
      'CREATE UNIQUE INDEX "person_email_idx" ON "persons" ( "email" );');
  late final $SectionsTable sections = $SectionsTable(this);
  late final $SectionPersonsTable sectionPersons = $SectionPersonsTable(this);
  late final $EventsTable events = $EventsTable(this);
  late final $EventPersonsEntriesTable eventPersonsEntries =
      $EventPersonsEntriesTable(this);
  late final $CategoriesTable categories = $CategoriesTable(this);
  @override
  Iterable<TableInfo> get allTables => allSchemaEntities.whereType<TableInfo>();
  @override
  List<DatabaseSchemaEntity> get allSchemaEntities => [
        persons,
        personEmailIdx,
        sections,
        sectionPersons,
        events,
        eventPersonsEntries,
        categories
      ];
}
