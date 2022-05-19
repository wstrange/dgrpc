export 'auth/session.dart';
export  'auth/auth.dart';
export 'svc/event.dart';
export 'svc/db.dart';

import 'package:db/db.dart';
import 'auth/session.dart';

final db = Database();
final sessionManager = DbSessionManager(db);
