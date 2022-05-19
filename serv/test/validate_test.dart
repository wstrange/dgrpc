import 'package:test/test.dart';
import 'package:serv/auth/token_validator.dart';

// token for firebase email login
final token =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGdycGMtODc0NjMiLCJhdWQiOiJkZ3JwYy04NzQ2MyIsImF1dGhfdGltZSI6MTY0ODI2MDU5MCwidXNlcl9pZCI6ImV2R3RzdGRiMU5UR3o3amw4VE5RMHZwUjhmeDEiLCJzdWIiOiJldkd0c3RkYjFOVEd6N2psOFROUTB2cFI4ZngxIiwiaWF0IjoxNjQ4NTE1NTA2LCJleHAiOjE2NDg1MTkxMDYsImVtYWlsIjoid2FycmVuLnN0cmFuZ2VAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsid2FycmVuLnN0cmFuZ2VAdGVzdC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.EEISAdsh6jJXdGnpr1PidYyXQiTmrekS9byqD6FFOndfWvgpTKlT5Xuv_f91rqhZp7DPlwc8x_nnVyIdB0AQwr8WPdh1zbNzIAP6INtAUBvez2GlTw4eakw2pEhf7ERIZ013Ez0BatqMYtwZYOluc4IDZVQrdGLvtFSMemUWxVYk3zlj66wfQh_wR35SI55Vg4fkM16vdDYAtYqRGSYrunuZnD9mc5SmoOfZ57kx7IzvpNvTmJl3_T7ZWk7CO3kOECZTtsPgMIE3oZiwGs7d4xvFnhvq4b751S5h4sxzR6XTFEWlCcvF3a2TqGkm07yaMkae6AK36xcRbY_DDPJuBQ';

// token from firebase google login.
final otoken =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2NDExN2FjMzk2YmM3MWM4YzU5ZmI1MTlmMDEzZTJiNWJiNmM2ZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiV2FycmVuIFN0cmFuZ2UiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pXNU9SellzYTdqS21SMHpqcDRQNE1ydDdtY2lwWlVGNXJJaTctc2ZFPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2RncnBjLTg3NDYzIiwiYXVkIjoiZGdycGMtODc0NjMiLCJhdXRoX3RpbWUiOjE2NDg1MjM5ODYsInVzZXJfaWQiOiJiMEVHYVFGYjVXYnExbGhnZTRyb2x3NHhSUUQzIiwic3ViIjoiYjBFR2FRRmI1V2JxMWxoZ2U0cm9sdzR4UlFEMyIsImlhdCI6MTY0ODUyMzk4NiwiZXhwIjoxNjQ4NTI3NTg2LCJlbWFpbCI6IndhcnJlbi5zdHJhbmdlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwMzkxNTk3NDAwOTk1MjQ5OTQ0Il0sImVtYWlsIjpbIndhcnJlbi5zdHJhbmdlQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.JjdxIW3Xv0AxrVDnL1ZXkuCW9sphRlk9VPljAO852QQ-UhCXXR7Vea05JY_szNLmzLot8R2gh7HoWlTmsAPscClztmJQVH7fbUBBslTl_mWorchV5eOG5wejkOP16JymfS4vJzphgG08F45kMNuNrKAhN7uKQd3a2MLScceBhFL8vID197beSoU2W_nSHUx1IojmTluFACZpfeGIguWic1yom10kkxTqJ8DQoq4L749i3RbapygK--MO-FanZnSqi5DKdYtzTEVnU6tNpMGL1GRBGjoKYIi8xjAt1CoLRCHNmY6x_Rl-d66DkZVQjR5mEJ3H2EEyVcaBVYyKIod5Aw';

// id of google oautg
var id =
    '247079421360-pehpq1dvjbt1990c2h4sdot1tmt11ifk.apps.googleusercontent.com';

final firebaseId = 'dgrpc-87463';
final secret = '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';

main() {
  test('validate idtoken', () async {
    var validator = TokenValidator(firebaseId);
    // Validate that the jwt token has been issued and signed by Firebase
    var info = await validator.validate(token,
        validateClaims: true, validateExpiry: false);
    print(info);
  });
}
