import 'dart:async';
import 'dart:convert';
import 'dart:math';
import 'package:grpc/grpc.dart';
import 'package:db/db.dart';
import 'package:logging/logging.dart';

import 'package:openid_client/openid_client.dart';

var _log = Logger('Session');

/// A simple session manager

final _random = Random.secure();

// Generate a secure random string to be used as a session id
String _generateRandom(int numBytes) {
  var r = <int>[];
  for (int i = 0; i < numBytes; ++i) {
    r.add(_random.nextInt(256));
  }
  return base64Encode(r);
}

// How long a session lasts.
final _sessionTime = const Duration(minutes: 60);

class Session {
  final String _id; // must be at least 16 bytes

  // Get the random session id
  String get id => _id;
  DateTime _expiryTime;
  final OpenIdClaims _claims;
  final String _uid;

  final Map<String, dynamic> _data = {};

  Map<String,dynamic> get data => _data;

  // Get the user id associated with this session
  String get uid => _uid;
  String? get email => _claims.email;

  Session({required OpenIdClaims claims})
      : _uid = claims.subject,
        _claims = claims,
        _id = _generateRandom(24),
        _expiryTime = DateTime.now().add(_sessionTime);

  bool hasExpired() => _expiryTime.compareTo(DateTime.now()) < 0;

  void resetSessionExpiry() => _expiryTime = DateTime.now().add(_sessionTime);

  @override
  String toString() => 'session(uid: $_uid, id: $_id expires: $_expiryTime)';
}


/// A simple in memory session handler.
/// Only works in a single isolate. Just for demo purposes.
class SessionManager {
  // sessions by session id
  final Map<String, Session> _sessions = {};
  final Map<String, Session> _sessionByUid = {};
  // ignore: unused_field
  late Timer _expiryTimer;

  SessionManager() {
    // Start an expiry timer to purge older sessions.
    _expiryTimer = Timer.periodic(const Duration(minutes: 1), (t) {
      _sessions.removeWhere((id, session) => session.hasExpired());
      _sessionByUid.removeWhere((id, session) => session.hasExpired());
    });
  }


  // Create a session. If the user already has a session,
  // we return that same session.
  // TODO: Do we allow a user to have more than one session?
  Session createSession({required OpenIdClaims claims}) {
    var uid = claims['sub'];
    var session = _sessionByUid[uid];

    _log.finest('creating session uid: $uid');
    if (session != null) {
      _log.finest('existing session found $session');
      session.resetSessionExpiry();
      return session;
    }
    var s = Session(claims: claims);
    _sessions[s.id] = s;
    _sessionByUid[s.uid] = s;

    return s;
  }

  // Get a session identifed by id. Returns null if no session exists
  Session? getSessionById(String id) {
    var s = _sessions[id];
    if (s != null) {
      //extend session on each access
      s.resetSessionExpiry();
    }
    return s;
  }

  Session? getSessionByUid(String uid) {
    var s = _sessionByUid[uid];
    if (s != null) {
      //extend session on each access
      s.resetSessionExpiry();
    }
    return s;
  }


  // This is called by services to get the session object
  // At this point the interceptor has already checked for the session
  // So this should always succeed.
  Session getSessionFromContext(ServiceCall svc)  {
    // called by services to retrieve the callers context
    _log.finest('getSession metadata ${svc.clientMetadata}');
    var auth = svc.clientMetadata!['authorization'];
    if (auth == null) {
      throw Exception('The authorization header was not provided in the request');
    }

    var s = getSessionById(auth);
    if (s == null) {
      throw Exception('The session was not found. This should never happen');
    }

    return s;
  }
}

// A session that
class DbSessionManager extends SessionManager {
  final Database _db;

  DbSessionManager(this._db);

  // This is called by services to get the session object
  // At this point the interceptor has already checked for the session
  // So this should always succeed.
  Future<Session> getDbSessionFromContext(ServiceCall svc) async  {
    var s = super.getSessionFromContext(svc);
    // check/enrich associated session data
    // This would be better as an interceptor so session does not mix in db contexts
    if( s.data['sessionPersonEntry'] == null) {
      var id = s.uid; //
      var email = s.email;
      _log.finest('Looking up Person data for uid=$id email: $email');
      var p = await _db.personDao.getPersonEntry(ssid: id);
      if( p != null) {
        _log.finest('found person $p');
        s.data['sessionPersonEntry'] = p;
      }
    }

    return s;
  }



}