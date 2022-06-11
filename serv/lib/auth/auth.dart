import 'package:db/db.dart';
import 'package:protos/protos.dart';
import 'token_validator.dart';
import 'package:grpc/grpc.dart';
import 'package:openid_client/openid_client.dart';
import 'package:logging/logging.dart';
import '../serv.dart';
import 'dart:async';

var _log = Logger('AuthService');

final _firebaseId = 'dgrpc-87463';
final validator = TokenValidator(_firebaseId);

class AuthService extends AuthServiceBase {
  final Database _db;

  AuthService(this._db);

  @override
  Future<AuthResponse> authenticate(
      ServiceCall call, AuthRequest request) async {
    var token = request.idToken;
    TokenInfo? tokenInfo;
    var response = AuthResponse();

    try {
      tokenInfo = await validator.validate(token,
          validateExpiry: true, validateClaims: true);
      if (tokenInfo.hasErrors()) {
        response.error = AuthResponse_AuthErrors.ERROR;
        response.messages.addAll(tokenInfo.validationErrors());
      } else {
        // create a session, or get an existing one
        var s = sessionManager.createSession(claims: tokenInfo.claims);
        response.sessionId = s.id;
        // todo: Lookup the users person id...
        var pe = await _getPersonEntry(s.uid);
        pe ??= await _registerNewUser(tokenInfo);
        response.personId = pe.person.id;
      }
    } catch (e) {
      print('validation error $e');
      response.error = AuthResponse_AuthErrors.ERROR;
      response.messages.add('$e');
    }
    return response;
  }

  @override
  Future<AuthResponse> authenticateLocal(
      ServiceCall call, AuthRequest request) async {
    var response = AuthResponse();
    if (request.idToken == 'admin') {
      var claims = OpenIdClaims.fromJson({'sub': 'admin'});
      var s = sessionManager.createSession(claims: claims);
      response.error = AuthResponse_AuthErrors.OK;
      response.sessionId = s.id;
      var pe = await _getPersonEntry(s.uid);
      if( pe == null ) {
        response.error = AuthResponse_AuthErrors.NO_USER_IN_DB;
        response.messages.add('User does not exist in the database');
        return response;
      }

      _log.finest('Person entry ${pe}');
      response.personId = pe.person.id;
    } else {
      response.error = AuthResponse_AuthErrors.ERROR;
      response.messages.add('Cant create local session');
    }
    return response;
  }

  Future<SectionPersonEntry?> _getPersonEntry(String ssid) async {
    var pe = await _db.personDao.getPersonEntry(ssid: ssid);
    if (pe == null) {
      _log.fine('No user found for ssid $ssid.');
    }
    return pe;
  }

  Future<SectionPersonEntry> _registerNewUser(TokenInfo t) async {
    var email = t.claims['email'];
    var uid = t.claims['sub'];

    var person = await _db.into(_db.persons).insertReturning(PersonsCompanion.insert(
      email: email,
      ssid: uid,
    ));
    _log.fine('Creating person id=$uid, $email, $uid');

    var sectionPerson = await _db.into(_db.sectionPersons).insertReturning(SectionPersonsCompanion.insert(
      personId: person.id,
      sectionId: 0,
      sectionRole: SectionRole.guest,
    ));

    return SectionPersonEntry(person, [sectionPerson]);
  }


}

FutureOr<GrpcError?> authInterceptor(
    ServiceCall call, ServiceMethod method) async {
  _log.finest('Intercept: $call, $method  name: ${method.name}');

  // The authenticate method does not require a session.
  // The id token request is carried inbound in the request payload
  if (method.name != 'Authenticate' && method.name != 'AuthenticateLocal') {
    _log.finest('check for session');
    var auth = call.clientMetadata?['authorization'];
    _log.finest('auth header = $auth');

    if (auth == null) {
      return GrpcError.unauthenticated('Authentication header not found!');
    }
    // get the session...
    var session = sessionManager.getSessionById(auth);
    if (session == null) {
      return GrpcError.unauthenticated('Session expired or not found');
    }
    call.clientMetadata!['session_id'] = session.id;
    call.clientMetadata!['uid'] = session.uid;
  }
  // no errors - just pass the call on.
  return null;
}
