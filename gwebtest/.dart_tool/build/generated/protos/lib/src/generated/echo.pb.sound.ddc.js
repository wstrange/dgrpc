define(['dart_sdk', 'packages/protobuf/protobuf'], (function load__packages__protos__src__generated__echo_pb(dart_sdk, packages__protobuf__protobuf) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  var echo$46pb = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  var T = {
    GeneratedMessageTovoid: () => (T.GeneratedMessageTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.GeneratedMessage])))(),
    PbListOfEchoRequest: () => (T.PbListOfEchoRequest = dart.constFn(protobuf.PbList$(echo$46pb.EchoRequest)))(),
    VoidToEchoRequest: () => (T.VoidToEchoRequest = dart.constFn(dart.fnType(echo$46pb.EchoRequest, [])))(),
    PbListOfEchoResponse: () => (T.PbListOfEchoResponse = dart.constFn(protobuf.PbList$(echo$46pb.EchoResponse)))(),
    VoidToEchoResponse: () => (T.VoidToEchoResponse = dart.constFn(dart.fnType(echo$46pb.EchoResponse, [])))(),
    PbListOfServerStreamingEchoRequest: () => (T.PbListOfServerStreamingEchoRequest = dart.constFn(protobuf.PbList$(echo$46pb.ServerStreamingEchoRequest)))(),
    VoidToServerStreamingEchoRequest: () => (T.VoidToServerStreamingEchoRequest = dart.constFn(dart.fnType(echo$46pb.ServerStreamingEchoRequest, [])))(),
    PbListOfServerStreamingEchoResponse: () => (T.PbListOfServerStreamingEchoResponse = dart.constFn(protobuf.PbList$(echo$46pb.ServerStreamingEchoResponse)))(),
    VoidToServerStreamingEchoResponse: () => (T.VoidToServerStreamingEchoResponse = dart.constFn(dart.fnType(echo$46pb.ServerStreamingEchoResponse, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C1() {
      return C[1] = dart.fn(echo$46pb.EchoRequest.create, T.VoidToEchoRequest());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "grpc.gateway.testing"
      });
    },
    get C3() {
      return C[3] = dart.fn(echo$46pb.EchoResponse.create, T.VoidToEchoResponse());
    },
    get C4() {
      return C[4] = dart.fn(echo$46pb.ServerStreamingEchoRequest.create, T.VoidToServerStreamingEchoRequest());
    },
    get C5() {
      return C[5] = dart.fn(echo$46pb.ServerStreamingEchoResponse.create, T.VoidToServerStreamingEchoResponse());
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = ["package:protos/src/generated/echo.pb.dart"];
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  echo$46pb.EchoRequest = class EchoRequest extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new echo$46pb.EchoRequest.__();
    }
    static new(opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let _result = echo$46pb.EchoRequest.create();
      if (message != null) {
        _result.message = message;
      }
      if (idToken != null) {
        _result.idToken = idToken;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      return echo$46pb.EchoRequest.new({message: message, idToken: idToken});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoRequest.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.EchoRequest.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoRequest.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.EchoRequest.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = echo$46pb.EchoRequest.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return echo$46pb.EchoRequest.as(super.copyWith(dart.fn(message => updates(echo$46pb.EchoRequest.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return echo$46pb.EchoRequest._i;
    }
    static create() {
      return new echo$46pb.EchoRequest.__();
    }
    createEmptyInstance() {
      return echo$46pb.EchoRequest.create();
    }
    static createRepeated() {
      return new (T.PbListOfEchoRequest()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.EchoRequest._defaultInstance;
      return t0 == null ? echo$46pb.EchoRequest._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(echo$46pb.EchoRequest, C[1] || CT.C1) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
    get idToken() {
      return this.$_getSZ(1);
    }
    set idToken(v) {
      this.$_setString(1, v);
    }
    hasIdToken() {
      return this.$_has(1);
    }
    clearIdToken() {
      return this.clearField(2);
    }
  };
  (echo$46pb.EchoRequest.__ = function() {
    echo$46pb.EchoRequest.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.EchoRequest.prototype;
  dart.addTypeTests(echo$46pb.EchoRequest);
  dart.addTypeCaches(echo$46pb.EchoRequest);
  dart.setMethodSignature(echo$46pb.EchoRequest, () => ({
    __proto__: dart.getMethods(echo$46pb.EchoRequest.__proto__),
    clone: dart.fnType(echo$46pb.EchoRequest, []),
    copyWith: dart.fnType(echo$46pb.EchoRequest, [dart.fnType(dart.void, [echo$46pb.EchoRequest])]),
    createEmptyInstance: dart.fnType(echo$46pb.EchoRequest, []),
    hasMessage: dart.fnType(core.bool, []),
    clearMessage: dart.fnType(dart.void, []),
    hasIdToken: dart.fnType(core.bool, []),
    clearIdToken: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(echo$46pb.EchoRequest, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(echo$46pb.EchoRequest, () => ({
    __proto__: dart.getGetters(echo$46pb.EchoRequest.__proto__),
    info_: protobuf.BuilderInfo,
    message: core.String,
    idToken: core.String
  }));
  dart.setSetterSignature(echo$46pb.EchoRequest, () => ({
    __proto__: dart.getSetters(echo$46pb.EchoRequest.__proto__),
    message: core.String,
    idToken: core.String
  }));
  dart.setLibraryUri(echo$46pb.EchoRequest, I[0]);
  dart.setStaticFieldSignature(echo$46pb.EchoRequest, () => ['_i', '_defaultInstance']);
  dart.defineLazy(echo$46pb.EchoRequest, {
    /*echo$46pb.EchoRequest._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "EchoRequest", {package: C[2] || CT.C2, createEmptyInstance: C[1] || CT.C1}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.aOS(2, false ? "" : "idToken");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.EchoRequest._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  echo$46pb.EchoResponse = class EchoResponse extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new echo$46pb.EchoResponse.__();
    }
    static new(opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      let _result = echo$46pb.EchoResponse.create();
      if (message != null) {
        _result.message = message;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      return echo$46pb.EchoResponse.new({message: message});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoResponse.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.EchoResponse.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.EchoResponse.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.EchoResponse.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = echo$46pb.EchoResponse.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return echo$46pb.EchoResponse.as(super.copyWith(dart.fn(message => updates(echo$46pb.EchoResponse.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return echo$46pb.EchoResponse._i;
    }
    static create() {
      return new echo$46pb.EchoResponse.__();
    }
    createEmptyInstance() {
      return echo$46pb.EchoResponse.create();
    }
    static createRepeated() {
      return new (T.PbListOfEchoResponse()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.EchoResponse._defaultInstance;
      return t0 == null ? echo$46pb.EchoResponse._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(echo$46pb.EchoResponse, C[3] || CT.C3) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
  };
  (echo$46pb.EchoResponse.__ = function() {
    echo$46pb.EchoResponse.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.EchoResponse.prototype;
  dart.addTypeTests(echo$46pb.EchoResponse);
  dart.addTypeCaches(echo$46pb.EchoResponse);
  dart.setMethodSignature(echo$46pb.EchoResponse, () => ({
    __proto__: dart.getMethods(echo$46pb.EchoResponse.__proto__),
    clone: dart.fnType(echo$46pb.EchoResponse, []),
    copyWith: dart.fnType(echo$46pb.EchoResponse, [dart.fnType(dart.void, [echo$46pb.EchoResponse])]),
    createEmptyInstance: dart.fnType(echo$46pb.EchoResponse, []),
    hasMessage: dart.fnType(core.bool, []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(echo$46pb.EchoResponse, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(echo$46pb.EchoResponse, () => ({
    __proto__: dart.getGetters(echo$46pb.EchoResponse.__proto__),
    info_: protobuf.BuilderInfo,
    message: core.String
  }));
  dart.setSetterSignature(echo$46pb.EchoResponse, () => ({
    __proto__: dart.getSetters(echo$46pb.EchoResponse.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(echo$46pb.EchoResponse, I[0]);
  dart.setStaticFieldSignature(echo$46pb.EchoResponse, () => ['_i', '_defaultInstance']);
  dart.defineLazy(echo$46pb.EchoResponse, {
    /*echo$46pb.EchoResponse._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "EchoResponse", {package: C[2] || CT.C2, createEmptyInstance: C[3] || CT.C3}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.EchoResponse._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  echo$46pb.ServerStreamingEchoRequest = class ServerStreamingEchoRequest extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new echo$46pb.ServerStreamingEchoRequest.__();
    }
    static new(opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      let messageCount = opts && 'messageCount' in opts ? opts.messageCount : null;
      let messageInterval = opts && 'messageInterval' in opts ? opts.messageInterval : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      let _result = echo$46pb.ServerStreamingEchoRequest.create();
      if (message != null) {
        _result.message = message;
      }
      if (messageCount != null) {
        _result.messageCount = messageCount;
      }
      if (messageInterval != null) {
        _result.messageInterval = messageInterval;
      }
      if (idToken != null) {
        _result.idToken = idToken;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      let messageCount = opts && 'messageCount' in opts ? opts.messageCount : null;
      let messageInterval = opts && 'messageInterval' in opts ? opts.messageInterval : null;
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      return echo$46pb.ServerStreamingEchoRequest.new({message: message, messageCount: messageCount, messageInterval: messageInterval, idToken: idToken});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.ServerStreamingEchoRequest.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.ServerStreamingEchoRequest.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return echo$46pb.ServerStreamingEchoRequest.as(super.copyWith(dart.fn(message => updates(echo$46pb.ServerStreamingEchoRequest.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return echo$46pb.ServerStreamingEchoRequest._i;
    }
    static create() {
      return new echo$46pb.ServerStreamingEchoRequest.__();
    }
    createEmptyInstance() {
      return echo$46pb.ServerStreamingEchoRequest.create();
    }
    static createRepeated() {
      return new (T.PbListOfServerStreamingEchoRequest()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoRequest._defaultInstance;
      return t0 == null ? echo$46pb.ServerStreamingEchoRequest._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(echo$46pb.ServerStreamingEchoRequest, C[4] || CT.C4) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
    get messageCount() {
      return this.$_getIZ(1);
    }
    set messageCount(v) {
      this.$_setSignedInt32(1, v);
    }
    hasMessageCount() {
      return this.$_has(1);
    }
    clearMessageCount() {
      return this.clearField(2);
    }
    get messageInterval() {
      return this.$_getIZ(2);
    }
    set messageInterval(v) {
      this.$_setSignedInt32(2, v);
    }
    hasMessageInterval() {
      return this.$_has(2);
    }
    clearMessageInterval() {
      return this.clearField(3);
    }
    get idToken() {
      return this.$_getSZ(3);
    }
    set idToken(v) {
      this.$_setString(3, v);
    }
    hasIdToken() {
      return this.$_has(3);
    }
    clearIdToken() {
      return this.clearField(4);
    }
  };
  (echo$46pb.ServerStreamingEchoRequest.__ = function() {
    echo$46pb.ServerStreamingEchoRequest.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.ServerStreamingEchoRequest.prototype;
  dart.addTypeTests(echo$46pb.ServerStreamingEchoRequest);
  dart.addTypeCaches(echo$46pb.ServerStreamingEchoRequest);
  dart.setMethodSignature(echo$46pb.ServerStreamingEchoRequest, () => ({
    __proto__: dart.getMethods(echo$46pb.ServerStreamingEchoRequest.__proto__),
    clone: dart.fnType(echo$46pb.ServerStreamingEchoRequest, []),
    copyWith: dart.fnType(echo$46pb.ServerStreamingEchoRequest, [dart.fnType(dart.void, [echo$46pb.ServerStreamingEchoRequest])]),
    createEmptyInstance: dart.fnType(echo$46pb.ServerStreamingEchoRequest, []),
    hasMessage: dart.fnType(core.bool, []),
    clearMessage: dart.fnType(dart.void, []),
    hasMessageCount: dart.fnType(core.bool, []),
    clearMessageCount: dart.fnType(dart.void, []),
    hasMessageInterval: dart.fnType(core.bool, []),
    clearMessageInterval: dart.fnType(dart.void, []),
    hasIdToken: dart.fnType(core.bool, []),
    clearIdToken: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(echo$46pb.ServerStreamingEchoRequest, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(echo$46pb.ServerStreamingEchoRequest, () => ({
    __proto__: dart.getGetters(echo$46pb.ServerStreamingEchoRequest.__proto__),
    info_: protobuf.BuilderInfo,
    message: core.String,
    messageCount: core.int,
    messageInterval: core.int,
    idToken: core.String
  }));
  dart.setSetterSignature(echo$46pb.ServerStreamingEchoRequest, () => ({
    __proto__: dart.getSetters(echo$46pb.ServerStreamingEchoRequest.__proto__),
    message: core.String,
    messageCount: core.int,
    messageInterval: core.int,
    idToken: core.String
  }));
  dart.setLibraryUri(echo$46pb.ServerStreamingEchoRequest, I[0]);
  dart.setStaticFieldSignature(echo$46pb.ServerStreamingEchoRequest, () => ['_i', '_defaultInstance']);
  dart.defineLazy(echo$46pb.ServerStreamingEchoRequest, {
    /*echo$46pb.ServerStreamingEchoRequest._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ServerStreamingEchoRequest", {package: C[2] || CT.C2, createEmptyInstance: C[4] || CT.C4}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.a(core.int, 2, false ? "" : "messageCount", 2048);
        t0.a(core.int, 3, false ? "" : "messageInterval", 2048);
        t0.aOS(4, false ? "" : "idToken");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.ServerStreamingEchoRequest._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  echo$46pb.ServerStreamingEchoResponse = class ServerStreamingEchoResponse extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new echo$46pb.ServerStreamingEchoResponse.__();
    }
    static new(opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      let _result = echo$46pb.ServerStreamingEchoResponse.create();
      if (message != null) {
        _result.message = message;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let message = opts && 'message' in opts ? opts.message : null;
      return echo$46pb.ServerStreamingEchoResponse.new({message: message});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.ServerStreamingEchoResponse.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return echo$46pb.ServerStreamingEchoResponse.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return echo$46pb.ServerStreamingEchoResponse.as(super.copyWith(dart.fn(message => updates(echo$46pb.ServerStreamingEchoResponse.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return echo$46pb.ServerStreamingEchoResponse._i;
    }
    static create() {
      return new echo$46pb.ServerStreamingEchoResponse.__();
    }
    createEmptyInstance() {
      return echo$46pb.ServerStreamingEchoResponse.create();
    }
    static createRepeated() {
      return new (T.PbListOfServerStreamingEchoResponse()).new();
    }
    static getDefault() {
      let t0;
      t0 = echo$46pb.ServerStreamingEchoResponse._defaultInstance;
      return t0 == null ? echo$46pb.ServerStreamingEchoResponse._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(echo$46pb.ServerStreamingEchoResponse, C[5] || CT.C5) : t0;
    }
    get message() {
      return this.$_getSZ(0);
    }
    set message(v) {
      this.$_setString(0, v);
    }
    hasMessage() {
      return this.$_has(0);
    }
    clearMessage() {
      return this.clearField(1);
    }
  };
  (echo$46pb.ServerStreamingEchoResponse.__ = function() {
    echo$46pb.ServerStreamingEchoResponse.__proto__.new.call(this);
    ;
  }).prototype = echo$46pb.ServerStreamingEchoResponse.prototype;
  dart.addTypeTests(echo$46pb.ServerStreamingEchoResponse);
  dart.addTypeCaches(echo$46pb.ServerStreamingEchoResponse);
  dart.setMethodSignature(echo$46pb.ServerStreamingEchoResponse, () => ({
    __proto__: dart.getMethods(echo$46pb.ServerStreamingEchoResponse.__proto__),
    clone: dart.fnType(echo$46pb.ServerStreamingEchoResponse, []),
    copyWith: dart.fnType(echo$46pb.ServerStreamingEchoResponse, [dart.fnType(dart.void, [echo$46pb.ServerStreamingEchoResponse])]),
    createEmptyInstance: dart.fnType(echo$46pb.ServerStreamingEchoResponse, []),
    hasMessage: dart.fnType(core.bool, []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(echo$46pb.ServerStreamingEchoResponse, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(echo$46pb.ServerStreamingEchoResponse, () => ({
    __proto__: dart.getGetters(echo$46pb.ServerStreamingEchoResponse.__proto__),
    info_: protobuf.BuilderInfo,
    message: core.String
  }));
  dart.setSetterSignature(echo$46pb.ServerStreamingEchoResponse, () => ({
    __proto__: dart.getSetters(echo$46pb.ServerStreamingEchoResponse.__proto__),
    message: core.String
  }));
  dart.setLibraryUri(echo$46pb.ServerStreamingEchoResponse, I[0]);
  dart.setStaticFieldSignature(echo$46pb.ServerStreamingEchoResponse, () => ['_i', '_defaultInstance']);
  dart.defineLazy(echo$46pb.ServerStreamingEchoResponse, {
    /*echo$46pb.ServerStreamingEchoResponse._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ServerStreamingEchoResponse", {package: C[2] || CT.C2, createEmptyInstance: C[5] || CT.C5}), (() => {
        t0.aOS(1, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*echo$46pb.ServerStreamingEchoResponse._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  dart.trackLibraries("packages/protos/src/generated/echo.pb", {
    "package:protos/src/generated/echo.pb.dart": echo$46pb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["echo.pb.dart"],"names":[],"mappings":"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","file":"echo.pb.sound.ddc.js"}');
  // Exports:
  return {
    src__generated__echo$46pb: echo$46pb
  };
}));

//# sourceMappingURL=echo.pb.sound.ddc.js.map
