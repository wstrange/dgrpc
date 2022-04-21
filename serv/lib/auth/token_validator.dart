import 'package:openid_client/openid_client.dart';

class TokenInfo {
  List<String> _validationErrors;
  OpenIdClaims _claims;
  TokenInfo(this._claims, this._validationErrors);

  bool hasErrors() => _validationErrors.isNotEmpty;

  List<String> validationErrors() => _validationErrors;

  OpenIdClaims get claims => _claims;

  String get uid => _claims.subject;

  String toString() =>
      'TokenInfo(errors=$_validationErrors, $_claims)';
}
/// Validate a Firebase ID Token
class TokenValidator {
  final String _firebaseId; // firebase project id
  Issuer? _issuer;

  // Create a validator instance. Requires your firebase project id
  TokenValidator(this._firebaseId);

  // Validate the token received from Firebase Authentication.
  // Returns a list of violation error messages. If the list is empty.
  // there are no validation errors and the token is valid.
  Future<TokenInfo> validate(String token,
      {validateClaims: true, validateExpiry: true}) async {
    _issuer ??= await Issuer.discover(Issuer.firebase(_firebaseId));

    var client = Client(_issuer!, _firebaseId);

    // otoken is the idtoken you received from Firebase authentication
    // The process to retrieve the token is not shown here.
    var c = client.createCredential(idToken: token);
    var violations = c.validateToken(
        validateClaims: validateClaims, validateExpiry: validateExpiry);

    List<String> v = [];
    // iterate through any violations.
    await for (final e in violations) {
      v.add(e.toString());
    }

    print('token = ${c.idToken.claims}');

    return TokenInfo(c.idToken.claims, v);
  }
}
