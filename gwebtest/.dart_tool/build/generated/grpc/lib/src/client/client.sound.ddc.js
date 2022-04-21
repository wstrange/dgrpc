define(['dart_sdk', 'packages/grpc/src/client/call'], (function load__packages__grpc__src__client__client(dart_sdk, packages__grpc__src__client__call) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const status = packages__grpc__src__client__call.src__shared__status;
  const call = packages__grpc__src__client__call.src__client__call;
  const common = packages__grpc__src__client__call.src__client__common;
  const method$ = packages__grpc__src__client__call.src__client__method;
  const channel = packages__grpc__src__client__call.src__client__channel;
  var call$ = Object.create(dart.library);
  var service = Object.create(dart.library);
  var client = Object.create(dart.library);
  var interceptor = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $reversed = dartx.reversed;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$ServiceMethod: () => (T.IdentityMapOfString$ServiceMethod = dart.constFn(_js_helper.IdentityMap$(core.String, service.ServiceMethod)))(),
    ListOfClientInterceptor: () => (T.ListOfClientInterceptor = dart.constFn(core.List$(interceptor.ClientInterceptor)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:grpc/src/server/call.dart",
    "package:grpc/src/server/service.dart",
    "package:grpc/src/client/client.dart",
    "package:grpc/src/client/interceptor.dart"
  ];
  call$.ServiceCall = class ServiceCall extends core.Object {};
  (call$.ServiceCall.new = function() {
    ;
  }).prototype = call$.ServiceCall.prototype;
  dart.addTypeTests(call$.ServiceCall);
  dart.addTypeCaches(call$.ServiceCall);
  dart.setLibraryUri(call$.ServiceCall, I[0]);
  var name$ = dart.privateName(service, "ServiceMethod.name");
  var streamingRequest$ = dart.privateName(service, "ServiceMethod.streamingRequest");
  var streamingResponse$ = dart.privateName(service, "ServiceMethod.streamingResponse");
  var requestDeserializer$ = dart.privateName(service, "ServiceMethod.requestDeserializer");
  var responseSerializer$ = dart.privateName(service, "ServiceMethod.responseSerializer");
  var handler$ = dart.privateName(service, "ServiceMethod.handler");
  var _toSingleFuture = dart.privateName(service, "_toSingleFuture");
  var _awaitAndCatch = dart.privateName(service, "_awaitAndCatch");
  const _is_ServiceMethod_default = Symbol('_is_ServiceMethod_default');
  service.ServiceMethod$ = dart.generic((Q, R) => {
    var __t$StreamControllerOfQ = () => (__t$StreamControllerOfQ = dart.constFn(async.StreamController$(Q)))();
    var __t$StreamOfQ = () => (__t$StreamOfQ = dart.constFn(async.Stream$(Q)))();
    var __t$QN = () => (__t$QN = dart.constFn(dart.nullable(Q)))();
    var __t$QNAndQToQ = () => (__t$QNAndQToQ = dart.constFn(dart.fnType(Q, [__t$QN(), Q])))();
    var __t$QNToQ = () => (__t$QNToQ = dart.constFn(dart.fnType(Q, [__t$QN()])))();
    var __t$StreamOfR = () => (__t$StreamOfR = dart.constFn(async.Stream$(R)))();
    class ServiceMethod extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get streamingRequest() {
        return this[streamingRequest$];
      }
      set streamingRequest(value) {
        super.streamingRequest = value;
      }
      get streamingResponse() {
        return this[streamingResponse$];
      }
      set streamingResponse(value) {
        super.streamingResponse = value;
      }
      get requestDeserializer() {
        return this[requestDeserializer$];
      }
      set requestDeserializer(value) {
        super.requestDeserializer = value;
      }
      get responseSerializer() {
        return this[responseSerializer$];
      }
      set responseSerializer(value) {
        super.responseSerializer = value;
      }
      get handler() {
        return this[handler$];
      }
      set handler(value) {
        super.handler = value;
      }
      static ['_#new#tearOff'](Q, R, name, handler, streamingRequest, streamingResponse, requestDeserializer, responseSerializer) {
        return new (service.ServiceMethod$(Q, R)).new(name, handler, streamingRequest, streamingResponse, requestDeserializer, responseSerializer);
      }
      createRequestStream(incoming) {
        return __t$StreamControllerOfQ().new({onListen: dart.bind(incoming, 'resume'), onPause: dart.bind(incoming, 'pause'), onResume: dart.bind(incoming, 'resume')});
      }
      deserialize(data) {
        let t0;
        t0 = data;
        return this.requestDeserializer(t0);
      }
      serialize(response) {
        let t0;
        t0 = R.as(response);
        return this.responseSerializer(t0);
      }
      handle(call, requests) {
        let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
        __t$StreamOfQ().as(requests);
        if (this.streamingResponse) {
          if (this.streamingRequest) {
            return __t$StreamOfR().as((t0 = call, t1 = requests, dart.dsend(this, 'handler', [t0, t1])));
          } else {
            return __t$StreamOfR().as((t0$ = call, t1$ = this[_toSingleFuture](requests), dart.dsend(this, 'handler', [t0$, t1$])));
          }
        } else {
          let response = this.streamingRequest ? (t0$0 = call, t1$0 = requests, dart.dsend(this, 'handler', [t0$0, t1$0])) : (t0$1 = call, t1$1 = this[_toSingleFuture](requests), dart.dsend(this, 'handler', [t0$1, t1$1]));
          return __t$StreamOfR().as(dart.dsend(response, 'asStream', []));
        }
      }
      [_toSingleFuture](stream) {
        function _ensureOnlyOneRequest(previous, element) {
          if (previous != null) {
            dart.throw(new status.GrpcError.unimplemented("More than one request received"));
          }
          return element;
        }
        dart.fn(_ensureOnlyOneRequest, __t$QNAndQToQ());
        function _ensureOneRequest(value) {
          if (value == null) dart.throw(new status.GrpcError.unimplemented("No requests received"));
          return value;
        }
        dart.fn(_ensureOneRequest, __t$QNToQ());
        let future = stream.fold(__t$QN(), null, _ensureOnlyOneRequest).then(Q, _ensureOneRequest);
        this[_awaitAndCatch](future);
        return future;
      }
      [_awaitAndCatch](f) {
        return async.async(dart.void, function* _awaitAndCatch() {
          try {
            yield f;
          } catch (e) {
            let _ = dart.getThrown(e);
            if (core.Object.is(_)) {
            } else
              throw e;
          }
        });
      }
    }
    (ServiceMethod.new = function(name, handler, streamingRequest, streamingResponse, requestDeserializer, responseSerializer) {
      this[name$] = name;
      this[handler$] = handler;
      this[streamingRequest$] = streamingRequest;
      this[streamingResponse$] = streamingResponse;
      this[requestDeserializer$] = requestDeserializer;
      this[responseSerializer$] = responseSerializer;
      ;
    }).prototype = ServiceMethod.prototype;
    dart.addTypeTests(ServiceMethod);
    ServiceMethod.prototype[_is_ServiceMethod_default] = true;
    dart.addTypeCaches(ServiceMethod);
    dart.setMethodSignature(ServiceMethod, () => ({
      __proto__: dart.getMethods(ServiceMethod.__proto__),
      createRequestStream: dart.fnType(async.StreamController$(Q), [async.StreamSubscription]),
      deserialize: dart.fnType(Q, [core.List$(core.int)]),
      serialize: dart.fnType(core.List$(core.int), [dart.dynamic]),
      handle: dart.fnType(async.Stream$(R), [call$.ServiceCall, dart.nullable(core.Object)]),
      [_toSingleFuture]: dart.fnType(async.Future$(Q), [async.Stream$(Q)]),
      [_awaitAndCatch]: dart.fnType(dart.void, [async.Future$(Q)])
    }));
    dart.setLibraryUri(ServiceMethod, I[1]);
    dart.setFieldSignature(ServiceMethod, () => ({
      __proto__: dart.getFields(ServiceMethod.__proto__),
      name: dart.finalFieldType(core.String),
      streamingRequest: dart.finalFieldType(core.bool),
      streamingResponse: dart.finalFieldType(core.bool),
      requestDeserializer: dart.finalFieldType(dart.fnType(Q, [core.List$(core.int)])),
      responseSerializer: dart.finalFieldType(dart.fnType(core.List$(core.int), [R])),
      handler: dart.finalFieldType(core.Function)
    }));
    return ServiceMethod;
  });
  service.ServiceMethod = service.ServiceMethod$();
  dart.addTypeTests(service.ServiceMethod, _is_ServiceMethod_default);
  var _$methods = dart.privateName(service, "_$methods");
  service.Service = class Service extends core.Object {
    $addMethod(method) {
      this[_$methods][$_set](method.name, method);
    }
    $onMetadata(context) {
    }
    $lookupMethod(name) {
      return this[_$methods][$_get](name);
    }
  };
  (service.Service.new = function() {
    this[_$methods] = new (T.IdentityMapOfString$ServiceMethod()).new();
    ;
  }).prototype = service.Service.prototype;
  dart.addTypeTests(service.Service);
  dart.addTypeCaches(service.Service);
  dart.setMethodSignature(service.Service, () => ({
    __proto__: dart.getMethods(service.Service.__proto__),
    $addMethod: dart.fnType(dart.void, [service.ServiceMethod]),
    $onMetadata: dart.fnType(dart.void, [call$.ServiceCall]),
    $lookupMethod: dart.fnType(dart.nullable(service.ServiceMethod), [core.String])
  }));
  dart.setLibraryUri(service.Service, I[1]);
  dart.setFieldSignature(service.Service, () => ({
    __proto__: dart.getFields(service.Service.__proto__),
    [_$methods]: dart.finalFieldType(core.Map$(core.String, service.ServiceMethod))
  }));
  var _channel$ = dart.privateName(client, "_channel");
  var _options = dart.privateName(client, "_options");
  var _interceptors = dart.privateName(client, "_interceptors");
  client.Client = class Client extends core.Object {
    static ['_#new#tearOff'](_channel, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let interceptors = opts && 'interceptors' in opts ? opts.interceptors : null;
      return new client.Client.new(_channel, {options: options, interceptors: interceptors});
    }
    $createCall(Q, R, method, requests, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      return this[_channel$].createCall(Q, R, method, requests, this[_options].mergedWith(options));
    }
    $createUnaryCall(Q, R, method, request, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let invoker = dart.fn((method, request, options) => new (common.ResponseFuture$(R)).new(this[_channel$].createCall(Q, R, method$.ClientMethod$(Q, R).as(method), async.Stream$(Q).value(Q.as(request)), call.CallOptions.as(options))), dart.fnType(common.ResponseFuture$(R), [dart.dynamic, dart.dynamic, dart.dynamic]));
      for (let interceptor of this[_interceptors][$reversed]) {
        let delegate = invoker;
        invoker = dart.fn((method, request, options) => interceptor.interceptUnary(Q, R, method$.ClientMethod$(Q, R).as(method), Q.as(request), call.CallOptions.as(options), delegate), dart.fnType(common.ResponseFuture$(R), [dart.dynamic, dart.dynamic, dart.dynamic]));
      }
      return invoker(method, request, this[_options].mergedWith(options));
    }
    $createStreamingCall(Q, R, method, requests, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let invoker = dart.fn((method, requests, options) => new (common.ResponseStream$(R)).new(this[_channel$].createCall(Q, R, method$.ClientMethod$(Q, R).as(method), async.Stream$(Q).as(requests), call.CallOptions.as(options))), dart.fnType(common.ResponseStream$(R), [dart.dynamic, dart.dynamic, dart.dynamic]));
      for (let interceptor of this[_interceptors][$reversed]) {
        let delegate = invoker;
        invoker = dart.fn((method, requests, options) => interceptor.interceptStreaming(Q, R, method$.ClientMethod$(Q, R).as(method), async.Stream$(Q).as(requests), call.CallOptions.as(options), delegate), dart.fnType(common.ResponseStream$(R), [dart.dynamic, dart.dynamic, dart.dynamic]));
      }
      return invoker(method, requests, this[_options].mergedWith(options));
    }
  };
  (client.Client.new = function(_channel, opts) {
    let t1, t1$;
    let options = opts && 'options' in opts ? opts.options : null;
    let interceptors = opts && 'interceptors' in opts ? opts.interceptors : null;
    this[_channel$] = _channel;
    this[_options] = (t1 = options, t1 == null ? call.CallOptions.new() : t1);
    this[_interceptors] = T.ListOfClientInterceptor().unmodifiable((t1$ = interceptors, t1$ == null ? new _internal.EmptyIterable.new() : t1$));
    ;
  }).prototype = client.Client.prototype;
  dart.addTypeTests(client.Client);
  dart.addTypeCaches(client.Client);
  dart.setMethodSignature(client.Client, () => ({
    __proto__: dart.getMethods(client.Client.__proto__),
    $createCall: dart.gFnType((Q, R) => [call.ClientCall$(Q, R), [method$.ClientMethod$(Q, R), async.Stream$(Q)], {options: dart.nullable(call.CallOptions)}, {}], (Q, R) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    $createUnaryCall: dart.gFnType((Q, R) => [common.ResponseFuture$(R), [method$.ClientMethod$(Q, R), Q], {options: dart.nullable(call.CallOptions)}, {}], (Q, R) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    $createStreamingCall: dart.gFnType((Q, R) => [common.ResponseStream$(R), [method$.ClientMethod$(Q, R), async.Stream$(Q)], {options: dart.nullable(call.CallOptions)}, {}], (Q, R) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(client.Client, I[2]);
  dart.setFieldSignature(client.Client, () => ({
    __proto__: dart.getFields(client.Client.__proto__),
    [_channel$]: dart.finalFieldType(channel.ClientChannel),
    [_options]: dart.finalFieldType(call.CallOptions),
    [_interceptors]: dart.finalFieldType(core.List$(interceptor.ClientInterceptor))
  }));
  interceptor.ClientInterceptor = class ClientInterceptor extends core.Object {
    interceptUnary(Q, R, method, request, options, invoker) {
      return invoker(method, request, options);
    }
    interceptStreaming(Q, R, method, requests, options, invoker) {
      return invoker(method, requests, options);
    }
  };
  (interceptor.ClientInterceptor.new = function() {
    ;
  }).prototype = interceptor.ClientInterceptor.prototype;
  dart.addTypeTests(interceptor.ClientInterceptor);
  dart.addTypeCaches(interceptor.ClientInterceptor);
  dart.setMethodSignature(interceptor.ClientInterceptor, () => ({
    __proto__: dart.getMethods(interceptor.ClientInterceptor.__proto__),
    interceptUnary: dart.gFnType((Q, R) => [common.ResponseFuture$(R), [method$.ClientMethod$(Q, R), Q, call.CallOptions, dart.fnType(common.ResponseFuture$(R), [method$.ClientMethod$(Q, R), Q, call.CallOptions])]], (Q, R) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    interceptStreaming: dart.gFnType((Q, R) => [common.ResponseStream$(R), [method$.ClientMethod$(Q, R), async.Stream$(Q), call.CallOptions, dart.fnType(common.ResponseStream$(R), [method$.ClientMethod$(Q, R), async.Stream$(Q), call.CallOptions])]], (Q, R) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(interceptor.ClientInterceptor, I[3]);
  dart.trackLibraries("packages/grpc/src/client/client", {
    "package:grpc/src/server/call.dart": call$,
    "package:grpc/src/server/service.dart": service,
    "package:grpc/src/client/client.dart": client,
    "package:grpc/src/client/interceptor.dart": interceptor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../server/call.dart","../server/service.dart","client.dart","interceptor.dart"],"names":[],"mappings":"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","file":"client.sound.ddc.js"}');
  // Exports:
  return {
    src__server__call: call$,
    src__server__service: service,
    src__client__client: client,
    src__client__interceptor: interceptor
  };
}));

//# sourceMappingURL=client.sound.ddc.js.map
