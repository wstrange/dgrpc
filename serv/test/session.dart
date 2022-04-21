import 'package:openid_client/openid_client.dart';
import 'package:test/test.dart';
import 'package:serv/auth/session.dart';

main() {

  test('test sessions',(){
    var claims = OpenIdClaims.fromJson({'sub':'test'});

    var s = sessionManager.createSession(claims: claims);

    expect(s.id.length, greaterThanOrEqualTo(32));
    print('session $s');
    expect(s.hasExpired(),isFalse);
    expect(s.uid, equals('test'));

  });
}