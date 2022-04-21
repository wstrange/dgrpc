///
//  Generated code. Do not modify.
//  source: echo.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'echo.pb.dart' as $1;
export 'echo.pb.dart';

class EchoServiceClient extends $grpc.Client {
  static final _$echo = $grpc.ClientMethod<$1.EchoRequest, $1.EchoResponse>(
      '/dgrpc.EchoService/Echo',
      ($1.EchoRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $1.EchoResponse.fromBuffer(value));

  EchoServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$1.EchoResponse> echo($1.EchoRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$echo, request, options: options);
  }
}

abstract class EchoServiceBase extends $grpc.Service {
  $core.String get $name => 'dgrpc.EchoService';

  EchoServiceBase() {
    $addMethod($grpc.ServiceMethod<$1.EchoRequest, $1.EchoResponse>(
        'Echo',
        echo_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $1.EchoRequest.fromBuffer(value),
        ($1.EchoResponse value) => value.writeToBuffer()));
  }

  $async.Future<$1.EchoResponse> echo_Pre(
      $grpc.ServiceCall call, $async.Future<$1.EchoRequest> request) async {
    return echo(call, await request);
  }

  $async.Future<$1.EchoResponse> echo(
      $grpc.ServiceCall call, $1.EchoRequest request);
}
