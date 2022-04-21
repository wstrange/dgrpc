///
//  Generated code. Do not modify.
//  source: hello.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'hello.pb.dart' as $2;
export 'hello.pb.dart';

class GreeterClient extends $grpc.Client {
  static final _$sayHello = $grpc.ClientMethod<$2.HelloRequest, $2.HelloReply>(
      '/helloworld.Greeter/SayHello',
      ($2.HelloRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $2.HelloReply.fromBuffer(value));

  GreeterClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$2.HelloReply> sayHello($2.HelloRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$sayHello, request, options: options);
  }
}

abstract class GreeterServiceBase extends $grpc.Service {
  $core.String get $name => 'helloworld.Greeter';

  GreeterServiceBase() {
    $addMethod($grpc.ServiceMethod<$2.HelloRequest, $2.HelloReply>(
        'SayHello',
        sayHello_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $2.HelloRequest.fromBuffer(value),
        ($2.HelloReply value) => value.writeToBuffer()));
  }

  $async.Future<$2.HelloReply> sayHello_Pre(
      $grpc.ServiceCall call, $async.Future<$2.HelloRequest> request) async {
    return sayHello(call, await request);
  }

  $async.Future<$2.HelloReply> sayHello(
      $grpc.ServiceCall call, $2.HelloRequest request);
}
