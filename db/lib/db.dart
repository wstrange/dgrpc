
import 'package:db/event_db.dart';

export 'event_db.dart';
export 'person_dao.dart';
export 'section_dao.dart';
export 'event_dao.dart';

class DatabaseException implements Exception {
  String _message;

  String get message => _message;

  DatabaseException(this._message);
}