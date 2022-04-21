import 'dart:async';
import 'dart:convert';
import 'dart:math';

import 'package:openid_client/openid_client.dart';
/**
 * A simple session manager
 */


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
  String _id; // must be at least 16 bytes

  // Get the random session id
  String get id => _id;
  DateTime _expiryTime;
  OpenIdClaims _claims;
  String _uid;

  // Get the user id associated with this session
  String get uid => _uid;

  Session({required OpenIdClaims claims})
      : _uid = claims.subject,
        _claims = claims,
        _id = _generateRandom(24),
        _expiryTime = DateTime.now().add(_sessionTime) {}

  bool hasExpired() => _expiryTime.compareTo(DateTime.now()) < 0;

  void resetSessionExpiry() => _expiryTime = DateTime.now().add(_sessionTime);

  String toString() =>
      'session(uid: $_uid, id: $_id expires: $_expiryTime)';

}

/// A simple in memory session handler.
/// Only works in a single isolate. Just for demo purposes.
class SessionManager {
  // sessions by session id
  Map<String, Session> _sessions = {};
  Map<String,Session> _sessionByUid = {};
  late Timer _expiryTimer;
  SessionManager() {
    // Start an expiry timer to purge older sessions.
    _expiryTimer = Timer.periodic(const Duration(minutes: 1), (t) {
      _sessions.removeWhere((id, session) => session.hasExpired());
      _sessionByUid.removeWhere((id, session) => session.hasExpired());
    });
  }

  // Create a session. If the user already has a session,
  // we return that same session. TODO: We could allow indepdent sessions?
  Session createSession(
      { required OpenIdClaims claims}) {
    var uid = claims['sub'];
    var session =  _sessionByUid[uid];

    if( session != null) {
      print('existing session found');
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
    if( s != null ) {
      //extend session on each access
      s.resetSessionExpiry();
    }
    return s;
  }

  Session? getSessionByUid(String uid) {
    var s = _sessionByUid[uid];
    if( s != null ) {
      //extend session on each access
      s.resetSessionExpiry();
    }
    return s;
  }

  void _expireSessions(Timer t) {}
}

final sessionManager = SessionManager();
