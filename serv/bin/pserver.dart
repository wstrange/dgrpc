// Copyright (c) 2018, the gRPC project authors. Please see the AUTHORS file
// for details. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// Dart implementation of the gRPC helloworld.Greeter server.
import 'dart:async';

import 'package:grpc/grpc.dart';
import 'package:protos/protos.dart';
import 'package:serv/auth/token_validator.dart';
import 'package:serv/auth/session.dart';

final _firebaseId = 'dgrpc-87463';
final validator = TokenValidator(_firebaseId);

class AuthService extends AuthServiceBase {
  @override
  Future<AuthResponse> authenticate(
      ServiceCall call, AuthRequest request) async {
    var token = request.idToken;
    TokenInfo? tokenInfo;
    var response = AuthResponse();
    try {
      tokenInfo = await validator.validate(token);
      if (tokenInfo.hasErrors()) {
        response.error = AuthResponse_AuthErrors.ERROR;
        response.messages.addAll(tokenInfo.validationErrors());
      } else {
        // create a session. TODO - check to see if we already have a session..
        var s = sessionManager.createSession(claims: tokenInfo.claims);
        response.sessionId = s.id;
      }
    } catch (e) {
      print('validation error $e');
      response.error = AuthResponse_AuthErrors.ERROR;
      response.messages.add('$e');
    }
    return response;
  }
}

class EchoService extends EchoServiceBase {
  @override
  Future<EchoResponse> echo(ServiceCall call, EchoRequest request) async {
    var uid = call.clientMetadata!['uid'];
    print('echo for uid=$uid');
    return EchoResponse()..message = 'Hello World ${request.message} uid=$uid';
  }
}

FutureOr<GrpcError?> authInterceptor(
    ServiceCall call, ServiceMethod method) async {
  print('Intercept: $call, $method  name: ${method.name}');

  // The authenticate method does not require a session.
  // The id token request is carried inbound in the request payload
  if (method.name != 'Authenticate') {
    print('check for session');
    var auth = call.clientMetadata?['authorization'];
    print('auth header = $auth');

    if (auth == null) {
      return GrpcError.unauthenticated('Authentication header not found!');
    }
    // get the session...
    var session = sessionManager.getSessionById(auth);
    if (session == null) {
      return GrpcError.unauthenticated('Session expired or not found');
    }
    call.clientMetadata!['session'] = session.id;
    call.clientMetadata!['uid'] = session.uid;
  }
  // no errors - just pass the call on.
}

Future<void> main(List<String> args) async {
  final server = Server(
    // [GreeterService(),EchoService()],
    [AuthService(), EchoService()],
    const <Interceptor>[authInterceptor],
    CodecRegistry(codecs: const [
      GzipCodec(),
      // IdentityCodec(),  // Breaks grpc web. See https://github.com/grpc/grpc-dart/issues/506
    ]),
  );
  await server.serve(port: 9090);
  print('Server listening on port ${server.port}...');
}
