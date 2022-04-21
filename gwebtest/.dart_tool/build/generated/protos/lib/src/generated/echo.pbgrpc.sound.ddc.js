define(['dart_sdk', 'packages/protos/src/generated/echo.pb', 'packages/grpc/src/client/client', 'packages/grpc/src/client/call'], (function load__packages__protos__src__generated__echo_pbgrpc(dart_sdk, packages__protos__src__generated__echo$46pb, packages__grpc__src__client__client, packages__grpc__src__client__call) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const echo$46pb = packages__protos__src__generated__echo$46pb.src__generated__echo$46pb;
  const client = packages__grpc__src__client__client.src__client__client;
  const service = packages__grpc__src__client__client.src__server__service;
  const call = packages__grpc__src__client__client.src__server__call;
  const common = packages__grpc__src__client__call.src__client__common;
  const call$ = packages__grpc__src__client__call.src__client__call;
  const method = packages__grpc__src__client__call.src__client__method;
  var echo$46pbgrpc = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StreamOfServerStreamingEchoRequest: () => (T.StreamOfServerStreamingEchoRequest = dart.constFn(async.Stream$(echo$46pb.ServerStreamingEchoRequest)))(),
    JSArrayOfServerStreamingEchoRequest: () => (T.JSArrayOfServerStreamingEchoRequest = dart.constFn(_interceptors.JSArray$(echo$46pb.ServerStreamingEchoRequest)))(),
    ClientMethodOfEchoRequest$EchoResponse: () => (T.ClientMethodOfEchoRequest$EchoResponse = dart.constFn(method.ClientMethod$(echo$46pb.EchoRequest, echo$46pb.EchoResponse)))(),
    EchoRequestToUint8List: () => (T.EchoRequestToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [echo$46pb.EchoRequest])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    ListOfintToEchoResponse: () => (T.ListOfintToEchoResponse = dart.constFn(dart.fnType(echo$46pb.EchoResponse, [T.ListOfint()])))(),
    ClientMethodOfServerStreamingEchoRequest$ServerStreamingEchoResponse: () => (T.ClientMethodOfServerStreamingEchoRequest$ServerStreamingEchoResponse = dart.constFn(method.ClientMethod$(echo$46pb.ServerStreamingEchoRequest, echo$46pb.ServerStreamingEchoResponse)))(),
    ServerStreamingEchoRequestToUint8List: () => (T.ServerStreamingEchoRequestToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [echo$46pb.ServerStreamingEchoRequest])))(),
    ListOfintToServerStreamingEchoResponse: () => (T.ListOfintToServerStreamingEchoResponse = dart.constFn(dart.fnType(echo$46pb.ServerStreamingEchoResponse, [T.ListOfint()])))(),
    ServiceMethodOfEchoRequest$EchoResponse: () => (T.ServiceMethodOfEchoRequest$EchoResponse = dart.constFn(service.ServiceMethod$(echo$46pb.EchoRequest, echo$46pb.EchoResponse)))(),
    ListOfintToEchoRequest: () => (T.ListOfintToEchoRequest = dart.constFn(dart.fnType(echo$46pb.EchoRequest, [T.ListOfint()])))(),
    EchoResponseToUint8List: () => (T.EchoResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [echo$46pb.EchoResponse])))(),
    ServiceMethodOfServerStreamingEchoRequest$ServerStreamingEchoResponse: () => (T.ServiceMethodOfServerStreamingEchoRequest$ServerStreamingEchoResponse = dart.constFn(service.ServiceMethod$(echo$46pb.ServerStreamingEchoRequest, echo$46pb.ServerStreamingEchoResponse)))(),
    ListOfintToServerStreamingEchoRequest: () => (T.ListOfintToServerStreamingEchoRequest = dart.constFn(dart.fnType(echo$46pb.ServerStreamingEchoRequest, [T.ListOfint()])))(),
    ServerStreamingEchoResponseToUint8List: () => (T.ServerStreamingEchoResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [echo$46pb.ServerStreamingEchoResponse])))(),
    _AsyncStarImplOfServerStreamingEchoResponse: () => (T._AsyncStarImplOfServerStreamingEchoResponse = dart.constFn(async._AsyncStarImpl$(echo$46pb.ServerStreamingEchoResponse)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:protos/src/generated/echo.pbgrpc.dart"];
  echo$46pbgrpc.EchoServiceClient = class EchoServiceClient extends client.Client {
    static ['_#new#tearOff'](channel, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let interceptors = opts && 'interceptors' in opts ? opts.interceptors : null;
      return new echo$46pbgrpc.EchoServiceClient.new(channel, {options: options, interceptors: interceptors});
    }
    echo(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this.$createUnaryCall(echo$46pb.EchoRequest, echo$46pb.EchoResponse, echo$46pbgrpc.EchoServiceClient._$echo, request, {options: options});
    }
    serverStreamingEcho(request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this.$createStreamingCall(echo$46pb.ServerStreamingEchoRequest, echo$46pb.ServerStreamingEchoResponse, echo$46pbgrpc.EchoServiceClient._$serverStreamingEcho, T.StreamOfServerStreamingEchoRequest().fromIterable(T.JSArrayOfServerStreamingEchoRequest().of([request])), {options: options});
    }
  };
  (echo$46pbgrpc.EchoServiceClient.new = function(channel, opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    let interceptors = opts && 'interceptors' in opts ? opts.interceptors : null;
    echo$46pbgrpc.EchoServiceClient.__proto__.new.call(this, channel, {options: options, interceptors: interceptors});
    ;
  }).prototype = echo$46pbgrpc.EchoServiceClient.prototype;
  dart.addTypeTests(echo$46pbgrpc.EchoServiceClient);
  dart.addTypeCaches(echo$46pbgrpc.EchoServiceClient);
  dart.setMethodSignature(echo$46pbgrpc.EchoServiceClient, () => ({
    __proto__: dart.getMethods(echo$46pbgrpc.EchoServiceClient.__proto__),
    echo: dart.fnType(common.ResponseFuture$(echo$46pb.EchoResponse), [echo$46pb.EchoRequest], {options: dart.nullable(call$.CallOptions)}, {}),
    serverStreamingEcho: dart.fnType(common.ResponseStream$(echo$46pb.ServerStreamingEchoResponse), [echo$46pb.ServerStreamingEchoRequest], {options: dart.nullable(call$.CallOptions)}, {})
  }));
  dart.setLibraryUri(echo$46pbgrpc.EchoServiceClient, I[0]);
  dart.setStaticFieldSignature(echo$46pbgrpc.EchoServiceClient, () => ['_$echo', '_$serverStreamingEcho']);
  dart.defineLazy(echo$46pbgrpc.EchoServiceClient, {
    /*echo$46pbgrpc.EchoServiceClient._$echo*/get _$echo() {
      return new (T.ClientMethodOfEchoRequest$EchoResponse()).new("/grpc.gateway.testing.EchoService/Echo", dart.fn(value => value.writeToBuffer(), T.EchoRequestToUint8List()), dart.fn(value => echo$46pb.EchoResponse.fromBuffer(value), T.ListOfintToEchoResponse()));
    },
    /*echo$46pbgrpc.EchoServiceClient._$serverStreamingEcho*/get _$serverStreamingEcho() {
      return new (T.ClientMethodOfServerStreamingEchoRequest$ServerStreamingEchoResponse()).new("/grpc.gateway.testing.EchoService/ServerStreamingEcho", dart.fn(value => value.writeToBuffer(), T.ServerStreamingEchoRequestToUint8List()), dart.fn(value => echo$46pb.ServerStreamingEchoResponse.fromBuffer(value), T.ListOfintToServerStreamingEchoResponse()));
    }
  }, false);
  echo$46pbgrpc.EchoServiceBase = class EchoServiceBase extends service.Service {
    get $name() {
      return "grpc.gateway.testing.EchoService";
    }
    echo_Pre(call, request) {
      return async.async(echo$46pb.EchoResponse, (function* echo_Pre() {
        return this.echo(call, yield request);
      }).bind(this));
    }
    serverStreamingEcho_Pre(call, request) {
      return new (T._AsyncStarImplOfServerStreamingEchoResponse()).new((function* serverStreamingEcho_Pre(stream) {
        if (stream.addStream(this.serverStreamingEcho(call, yield request))) return;
        yield;
      }).bind(this)).stream;
    }
  };
  (echo$46pbgrpc.EchoServiceBase.new = function() {
    echo$46pbgrpc.EchoServiceBase.__proto__.new.call(this);
    this.$addMethod(new (T.ServiceMethodOfEchoRequest$EchoResponse()).new("Echo", dart.bind(this, 'echo_Pre'), false, false, dart.fn(value => echo$46pb.EchoRequest.fromBuffer(value), T.ListOfintToEchoRequest()), dart.fn(value => value.writeToBuffer(), T.EchoResponseToUint8List())));
    this.$addMethod(new (T.ServiceMethodOfServerStreamingEchoRequest$ServerStreamingEchoResponse()).new("ServerStreamingEcho", dart.bind(this, 'serverStreamingEcho_Pre'), false, true, dart.fn(value => echo$46pb.ServerStreamingEchoRequest.fromBuffer(value), T.ListOfintToServerStreamingEchoRequest()), dart.fn(value => value.writeToBuffer(), T.ServerStreamingEchoResponseToUint8List())));
  }).prototype = echo$46pbgrpc.EchoServiceBase.prototype;
  dart.addTypeTests(echo$46pbgrpc.EchoServiceBase);
  dart.addTypeCaches(echo$46pbgrpc.EchoServiceBase);
  dart.setMethodSignature(echo$46pbgrpc.EchoServiceBase, () => ({
    __proto__: dart.getMethods(echo$46pbgrpc.EchoServiceBase.__proto__),
    echo_Pre: dart.fnType(async.Future$(echo$46pb.EchoResponse), [call.ServiceCall, async.Future$(echo$46pb.EchoRequest)]),
    serverStreamingEcho_Pre: dart.fnType(async.Stream$(echo$46pb.ServerStreamingEchoResponse), [call.ServiceCall, async.Future$(echo$46pb.ServerStreamingEchoRequest)])
  }));
  dart.setGetterSignature(echo$46pbgrpc.EchoServiceBase, () => ({
    __proto__: dart.getGetters(echo$46pbgrpc.EchoServiceBase.__proto__),
    $name: core.String
  }));
  dart.setLibraryUri(echo$46pbgrpc.EchoServiceBase, I[0]);
  dart.trackLibraries("packages/protos/src/generated/echo.pbgrpc", {
    "package:protos/src/generated/echo.pbgrpc.dart": echo$46pbgrpc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["echo.pbgrpc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SAgC4D;UAClC;AACtB,YAAO,sEAAiB,wCAAQ,OAAO,YAAW,OAAO;IAC3D;wBAGkC;UACV;AACtB,YAAO,wGACH,uDAAqC,oDAAa,4CAAC,OAAO,eACjD,OAAO;IACtB;;kDAhBsC;QACd;QACqB;AACvC,6DAAM,OAAO,YAAW,OAAO,gBAAgB,YAAY;;EAAC;;;;;;;;;;;MAdrD,sCAAM;YAAS,sDACxB,0CACA,QAAgB,SAAU,AAAM,KAAD,+CAC/B,QAAuB,SAA0B,kCAAW,KAAK;;MACxD,qDAAqB;YAAS,oFAEvC,yDACA,QAA+B,SAAU,AAAM,KAAD,8DAC9C,QAAuB,SACY,iDAAW,KAAK;;;;;AAsB7B;IAAkC;aAsBtC,MAAoC;AADnB;AAErC,cAAO,WAAK,IAAI,EAAE,MAAM,OAAO;MACjC;;4BAGsB,MAC2B;AAFoB;AAGnE,6BAAO,yBAAoB,IAAI,EAAE,MAAM,OAAO;QAA9C;MACF;;;;AA5BA;AAOwD,IANtD,gBAAiB,sDACb,kBACA,mBACA,OACA,OACA,QAAuB,SAAyB,iCAAW,KAAK,gCAChE,QAAiB,SAAU,AAAM,KAAD;AASiC,IARrE,gBAAiB,oFAEb,iCACA,kCACA,OACA,MACA,QAAuB,SACW,gDAAW,KAAK,+CAClD,QAAgC,SAAU,AAAM,KAAD;EACrD","file":"echo.pbgrpc.sound.ddc.js"}');
  // Exports:
  return {
    src__generated__echo$46pbgrpc: echo$46pbgrpc
  };
}));

//# sourceMappingURL=echo.pbgrpc.sound.ddc.js.map
