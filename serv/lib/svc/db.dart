import 'package:grpc/grpc.dart';
import 'dart:async';
import 'package:logging/logging.dart';

final log = Logger('personInterceptor');

/// grpc interceptor that enriches the session with person info
/// TODO: chaining interceptors seems to break.
/// https://github.com/grpc/grpc-dart/issues/424
///
FutureOr<GrpcError?> dbInterceptor(
    ServiceCall call, ServiceMethod method) async {
  log.finest('Intercept: $call, $method  name: ${method.name}');

  //var session = sessionManager.getSessionFromContext(call);

  // if( session == null ) {
  //   log.fine('Session not present. Can look up Person info');
  //   return null;
  // }
  return null;
}

