define(['dart_sdk', 'packages/grpc/src/client/call'], (function load__packages__grpc__src__client__transport__cors(dart_sdk, packages__grpc__src__client__call) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message = packages__grpc__src__client__call.src__shared__message;
  const status = packages__grpc__src__client__call.src__shared__status;
  const codec = packages__grpc__src__client__call.src__shared__codec;
  const transport = packages__grpc__src__client__call.src__client__transport__transport;
  const call = packages__grpc__src__client__call.src__client__call;
  const connection = packages__grpc__src__client__call.src__client__connection;
  const channel = packages__grpc__src__client__call.src__client__channel;
  var cors = Object.create(dart.library);
  var web_streams = Object.create(dart.library);
  var xhr_transport = Object.create(dart.library);
  var web_channel = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $_set = dartx._set;
  var $entries = dartx.entries;
  var $map = dartx.map;
  var $join = dartx.join;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $lengthInBytes = dartx.lengthInBytes;
  var $setRange = dartx.setRange;
  var $buffer = dartx.buffer;
  var $asByteData = dartx.asByteData;
  var $getUint32 = dartx.getUint32;
  var $trim = dartx.trim;
  var $split = dartx.split;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var $asUint8List = dartx.asUint8List;
  var $onReadyStateChange = dartx.onReadyStateChange;
  var $readyState = dartx.readyState;
  var $onError = dartx.onError;
  var $onProgress = dartx.onProgress;
  var $response = dartx.response;
  var $codeUnits = dartx.codeUnits;
  var $responseHeaders = dartx.responseHeaders;
  var $keys = dartx.keys;
  var $responseType = dartx.responseType;
  var $toLowerCase = dartx.toLowerCase;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    LinkedHashMapOfString$dynamic: () => (T.LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))(),
    MapEntryOfString$String: () => (T.MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))(),
    MapEntryOfString$StringToString: () => (T.MapEntryOfString$StringToString = dart.constFn(dart.fnType(core.String, [T.MapEntryOfString$String()])))(),
    SinkOfGrpcMessage: () => (T.SinkOfGrpcMessage = dart.constFn(core.Sink$(message.GrpcMessage)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    StreamControllerOfByteBuffer: () => (T.StreamControllerOfByteBuffer = dart.constFn(async.StreamController$(typed_data.ByteBuffer)))(),
    StreamControllerOfGrpcMessage: () => (T.StreamControllerOfGrpcMessage = dart.constFn(async.StreamController$(message.GrpcMessage)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    StreamControllerOfListOfint: () => (T.StreamControllerOfListOfint = dart.constFn(async.StreamController$(T.ListOfint())))(),
    XhrTransportStreamTodynamic: () => (T.XhrTransportStreamTodynamic = dart.constFn(dart.fnType(dart.dynamic, [xhr_transport.XhrTransportStream])))(),
    CodecN: () => (T.CodecN = dart.constFn(dart.nullable(codec.Codec)))(),
    ListOfintAndCodecNToListOfint: () => (T.ListOfintAndCodecNToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [T.ListOfint()], [T.CodecN()])))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))(),
    EventTovoid: () => (T.EventTovoid = dart.constFn(dart.fnType(dart.void, [html.Event])))(),
    ProgressEventTovoid: () => (T.ProgressEventTovoid = dart.constFn(dart.fnType(dart.void, [html.ProgressEvent])))(),
    GrpcMessageTovoid: () => (T.GrpcMessageTovoid = dart.constFn(dart.fnType(dart.void, [message.GrpcMessage])))(),
    LinkedHashSetOfXhrTransportStream: () => (T.LinkedHashSetOfXhrTransportStream = dart.constFn(collection.LinkedHashSet$(xhr_transport.XhrTransportStream)))(),
    ListOfXhrTransportStream: () => (T.ListOfXhrTransportStream = dart.constFn(core.List$(xhr_transport.XhrTransportStream)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: web_streams._GrpcWebParseState.prototype,
        [_Enum__name]: "Init",
        [_Enum_index]: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: web_streams._GrpcWebParseState.prototype,
        [_Enum__name]: "Length",
        [_Enum_index]: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: web_streams._GrpcWebParseState.prototype,
        [_Enum__name]: "Message",
        [_Enum_index]: 2
      });
    },
    get C3() {
      return C[3] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2], web_streams._GrpcWebParseState);
    },
    get C4() {
      return C[4] = dart.fn(message.frame, T.ListOfintAndCodecNToListOfint());
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "package:grpc/src/client/transport/web_streams.dart",
    "package:grpc/src/client/transport/xhr_transport.dart",
    "package:grpc/src/client/web_channel.dart"
  ];
  cors.moveHttpHeadersToQueryParam = function moveHttpHeadersToQueryParam(metadata, requestUri) {
    let t0;
    if (metadata[$isEmpty]) {
      return requestUri;
    }
    let paramValue = cors._generateHttpHeadersOverwriteParam(metadata);
    metadata[$clear]();
    return requestUri.replace({queryParameters: (t0 = T.LinkedHashMapOfString$dynamic().of(requestUri.queryParameters), (() => {
        t0[$_set]("$httpHeaders", paramValue);
        return t0;
      })())});
  };
  cors._generateHttpHeadersOverwriteParam = function _generateHttpHeadersOverwriteParam(headers) {
    return headers[$entries][$map](core.String, dart.fn(e => e.key + ":" + e.value + "\r\n", T.MapEntryOfString$StringToString()))[$join]();
  };
  dart.defineLazy(cors, {
    /*cors._httpHeadersParamName*/get _httpHeadersParamName() {
      return "$httpHeaders";
    }
  }, false);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  web_streams._GrpcWebParseState = class _GrpcWebParseState extends core._Enum {
    toString() {
      return "_GrpcWebParseState." + this[_name];
    }
  };
  (web_streams._GrpcWebParseState.new = function(index, name) {
    web_streams._GrpcWebParseState.__proto__.new.call(this, index, name);
    ;
  }).prototype = web_streams._GrpcWebParseState.prototype;
  dart.addTypeTests(web_streams._GrpcWebParseState);
  dart.addTypeCaches(web_streams._GrpcWebParseState);
  dart.setLibraryUri(web_streams._GrpcWebParseState, I[0]);
  dart.setStaticFieldSignature(web_streams._GrpcWebParseState, () => ['values', 'Init', 'Length', 'Message']);
  dart.defineExtensionMethods(web_streams._GrpcWebParseState, ['toString']);
  web_streams._GrpcWebParseState.Init = C[0] || CT.C0;
  web_streams._GrpcWebParseState.Length = C[1] || CT.C1;
  web_streams._GrpcWebParseState.Message = C[2] || CT.C2;
  web_streams._GrpcWebParseState.values = C[3] || CT.C3;
  web_streams.GrpcWebDecoder = class GrpcWebDecoder extends convert.Converter$(typed_data.ByteBuffer, message.GrpcMessage) {
    convert(input) {
      let t0;
      typed_data.ByteBuffer.as(input);
      let sink = new message.GrpcMessageSink.new();
      t0 = this.startChunkedConversion(sink);
      (() => {
        t0.add(input);
        t0.close();
        return t0;
      })();
      return sink.message;
    }
    startChunkedConversion(sink) {
      T.SinkOfGrpcMessage().as(sink);
      return new web_streams._GrpcWebConversionSink.new(sink);
    }
    static ['_#new#tearOff']() {
      return new web_streams.GrpcWebDecoder.new();
    }
  };
  (web_streams.GrpcWebDecoder.new = function() {
    web_streams.GrpcWebDecoder.__proto__.new.call(this);
    ;
  }).prototype = web_streams.GrpcWebDecoder.prototype;
  dart.addTypeTests(web_streams.GrpcWebDecoder);
  dart.addTypeCaches(web_streams.GrpcWebDecoder);
  dart.setMethodSignature(web_streams.GrpcWebDecoder, () => ({
    __proto__: dart.getMethods(web_streams.GrpcWebDecoder.__proto__),
    convert: dart.fnType(message.GrpcMessage, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(web_streams.GrpcWebDecoder, I[0]);
  var _dataHeader = dart.privateName(web_streams, "_dataHeader");
  var _state = dart.privateName(web_streams, "_state");
  var _chunkOffset = dart.privateName(web_streams, "_chunkOffset");
  var _frameType = dart.privateName(web_streams, "_frameType");
  var _dataOffset = dart.privateName(web_streams, "_dataOffset");
  var _data = dart.privateName(web_streams, "_data");
  var _out$ = dart.privateName(web_streams, "_out");
  var _parseFrameType = dart.privateName(web_streams, "_parseFrameType");
  var _finishMessage = dart.privateName(web_streams, "_finishMessage");
  var _parseLength = dart.privateName(web_streams, "_parseLength");
  var _parseMessage = dart.privateName(web_streams, "_parseMessage");
  var _parseHttp1Headers = dart.privateName(web_streams, "_parseHttp1Headers");
  web_streams._GrpcWebConversionSink = class _GrpcWebConversionSink extends convert.ChunkedConversionSink$(typed_data.ByteBuffer) {
    static ['_#new#tearOff'](_out) {
      return new web_streams._GrpcWebConversionSink.new(_out);
    }
    [_parseFrameType](chunkData) {
      let frameType = chunkData[$_get](this[_chunkOffset]);
      this[_chunkOffset] = this[_chunkOffset] + 1;
      if (frameType !== 0 && frameType !== 128) {
        dart.throw(new status.GrpcError.unimplemented("Invalid frame type: " + dart.str(frameType)));
      }
      this[_state] = web_streams._GrpcWebParseState.Length;
      return frameType;
    }
    [_parseLength](chunkData) {
      let chunkLength = chunkData[$length];
      let headerRemaining = this[_dataHeader][$lengthInBytes] - this[_dataOffset];
      let chunkRemaining = chunkLength - this[_chunkOffset];
      let toCopy = math.min(core.int, headerRemaining, chunkRemaining);
      this[_dataHeader][$setRange](this[_dataOffset], this[_dataOffset] + toCopy, chunkData, this[_chunkOffset]);
      this[_dataOffset] = this[_dataOffset] + toCopy;
      this[_chunkOffset] = this[_chunkOffset] + toCopy;
      if (this[_dataOffset] === this[_dataHeader][$lengthInBytes]) {
        let dataLength = this[_dataHeader][$buffer][$asByteData]()[$getUint32](0);
        this[_dataOffset] = 0;
        this[_state] = web_streams._GrpcWebParseState.Message;
        this[_data] = _native_typed_data.NativeUint8List.new(dataLength);
        if (dataLength === 0) {
          this[_finishMessage]();
        }
      }
    }
    [_parseMessage](chunkData) {
      let dataRemaining = dart.nullCheck(this[_data])[$lengthInBytes] - this[_dataOffset];
      if (dataRemaining > 0) {
        let chunkRemaining = chunkData[$length] - this[_chunkOffset];
        let toCopy = math.min(core.int, dataRemaining, chunkRemaining);
        dart.nullCheck(this[_data])[$setRange](this[_dataOffset], this[_dataOffset] + toCopy, chunkData, this[_chunkOffset]);
        this[_dataOffset] = this[_dataOffset] + toCopy;
        this[_chunkOffset] = this[_chunkOffset] + toCopy;
      }
      if (this[_dataOffset] === dart.nullCheck(this[_data])[$lengthInBytes]) {
        this[_finishMessage]();
      }
    }
    [_finishMessage]() {
      switch (this[_frameType]) {
        case 0:
        {
          this[_out$].add(new message.GrpcData.new(dart.nullCheck(this[_data]), {isCompressed: false}));
          break;
        }
        case 128:
        {
          let stringData = core.String.fromCharCodes(dart.nullCheck(this[_data]));
          let headers = this[_parseHttp1Headers](stringData);
          this[_out$].add(new message.GrpcMetadata.new(headers));
          break;
        }
      }
      this[_state] = web_streams._GrpcWebParseState.Init;
      this[_data] = null;
      this[_dataOffset] = 0;
    }
    [_parseHttp1Headers](stringData) {
      let trimmed = stringData[$trim]();
      let chunks = trimmed === "" ? T.JSArrayOfString().of([]) : trimmed[$split]("\r\n");
      let headers = new (T.IdentityMapOfString$String()).new();
      for (let chunk of chunks) {
        let pos = chunk[$indexOf](":");
        headers[$_set](chunk[$substring](0, pos)[$trim](), chunk[$substring](pos + 1)[$trim]());
      }
      return headers;
    }
    add(chunk) {
      typed_data.ByteBuffer.as(chunk);
      this[_chunkOffset] = 0;
      let chunkData = chunk[$asUint8List]();
      while (this[_chunkOffset] < chunk[$lengthInBytes]) {
        switch (this[_state]) {
          case C[0] || CT.C0:
          {
            this[_frameType] = this[_parseFrameType](chunkData);
            break;
          }
          case C[1] || CT.C1:
          {
            this[_parseLength](chunkData);
            break;
          }
          case C[2] || CT.C2:
          {
            this[_parseMessage](chunkData);
            break;
          }
        }
      }
      this[_chunkOffset] = 0;
    }
    close() {
      if (this[_data] != null || this[_dataOffset] !== 0) {
        dart.throw(new status.GrpcError.unavailable("Closed in non-idle state"));
      }
      this[_out$].close();
    }
  };
  (web_streams._GrpcWebConversionSink.new = function(_out) {
    this[_dataHeader] = _native_typed_data.NativeUint8List.new(4);
    this[_state] = web_streams._GrpcWebParseState.Init;
    this[_chunkOffset] = 0;
    this[_frameType] = null;
    this[_dataOffset] = 0;
    this[_data] = null;
    this[_out$] = _out;
    web_streams._GrpcWebConversionSink.__proto__.new.call(this);
    ;
  }).prototype = web_streams._GrpcWebConversionSink.prototype;
  dart.addTypeTests(web_streams._GrpcWebConversionSink);
  dart.addTypeCaches(web_streams._GrpcWebConversionSink);
  dart.setMethodSignature(web_streams._GrpcWebConversionSink, () => ({
    __proto__: dart.getMethods(web_streams._GrpcWebConversionSink.__proto__),
    [_parseFrameType]: dart.fnType(core.int, [core.List$(core.int)]),
    [_parseLength]: dart.fnType(dart.void, [core.List$(core.int)]),
    [_parseMessage]: dart.fnType(dart.void, [core.List$(core.int)]),
    [_finishMessage]: dart.fnType(dart.void, []),
    [_parseHttp1Headers]: dart.fnType(core.Map$(core.String, core.String), [core.String]),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(web_streams._GrpcWebConversionSink, I[0]);
  dart.setFieldSignature(web_streams._GrpcWebConversionSink, () => ({
    __proto__: dart.getFields(web_streams._GrpcWebConversionSink.__proto__),
    [_out$]: dart.finalFieldType(core.Sink$(message.GrpcMessage)),
    [_dataHeader]: dart.finalFieldType(typed_data.Uint8List),
    [_state]: dart.fieldType(web_streams._GrpcWebParseState),
    [_chunkOffset]: dart.fieldType(core.int),
    [_frameType]: dart.fieldType(dart.nullable(core.int)),
    [_dataOffset]: dart.fieldType(core.int),
    [_data]: dart.fieldType(dart.nullable(typed_data.Uint8List))
  }));
  dart.setStaticFieldSignature(web_streams._GrpcWebConversionSink, () => ['frameTypeData', 'frameTypeTrailers']);
  dart.defineLazy(web_streams._GrpcWebConversionSink, {
    /*web_streams._GrpcWebConversionSink.frameTypeData*/get frameTypeData() {
      return 0;
    },
    /*web_streams._GrpcWebConversionSink.frameTypeTrailers*/get frameTypeTrailers() {
      return 128;
    }
  }, false);
  var _headersReceived = dart.privateName(xhr_transport, "_headersReceived");
  var _requestBytesRead = dart.privateName(xhr_transport, "_requestBytesRead");
  var _incomingProcessor = dart.privateName(xhr_transport, "_incomingProcessor");
  var _incomingMessages = dart.privateName(xhr_transport, "_incomingMessages");
  var _outgoingMessages = dart.privateName(xhr_transport, "_outgoingMessages");
  var _request$ = dart.privateName(xhr_transport, "_request");
  var _onError = dart.privateName(xhr_transport, "_onError");
  var _onDone = dart.privateName(xhr_transport, "_onDone");
  var _onHeadersReceived = dart.privateName(xhr_transport, "_onHeadersReceived");
  var _onRequestDone = dart.privateName(xhr_transport, "_onRequestDone");
  var _close = dart.privateName(xhr_transport, "_close");
  var _validateResponseState = dart.privateName(xhr_transport, "_validateResponseState");
  xhr_transport.XhrTransportStream = class XhrTransportStream extends core.Object {
    get incomingMessages() {
      return this[_incomingMessages].stream;
    }
    get outgoingMessages() {
      return this[_outgoingMessages].sink;
    }
    static ['_#new#tearOff'](_request, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      return new xhr_transport.XhrTransportStream.new(_request, {onError: onError, onDone: onDone});
    }
    [_validateResponseState]() {
      let t2, t1;
      try {
        status.validateHttpStatusAndContentType(this[_request$].status, this[_request$][$responseHeaders], {rawResponse: this[_request$].responseText});
        return true;
      } catch (e$) {
        let e = dart.getThrown(e$);
        let st = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          t1 = e;
          t2 = st;
          this[_onError](t1, t2);
          return false;
        } else
          throw e$;
      }
    }
    [_onHeadersReceived]() {
      this[_headersReceived] = true;
      if (!this[_validateResponseState]()) {
        return;
      }
      this[_incomingMessages].add(new message.GrpcMetadata.new(this[_request$][$responseHeaders]));
    }
    [_onRequestDone]() {
      let t2, t1;
      if (!this[_headersReceived] && !this[_validateResponseState]()) {
        return;
      }
      if (this[_request$][$response] == null) {
        t1 = new status.GrpcError.unavailable("XhrConnection request null response", null, this[_request$].responseText);
        t2 = core.StackTrace.current;
        this[_onError](t1, t2);
        return;
      }
    }
    [_close]() {
      this[_incomingProcessor].close();
      this[_outgoingMessages].close();
      this[_onDone](this);
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        this[_close]();
        this[_request$].abort();
      }).bind(this));
    }
  };
  (xhr_transport.XhrTransportStream.new = function(_request, opts) {
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    this[_headersReceived] = false;
    this[_requestBytesRead] = 0;
    this[_incomingProcessor] = T.StreamControllerOfByteBuffer().new();
    this[_incomingMessages] = T.StreamControllerOfGrpcMessage().new();
    this[_outgoingMessages] = T.StreamControllerOfListOfint().new();
    this[_request$] = _request;
    this[_onError] = onError;
    this[_onDone] = T.XhrTransportStreamTodynamic().as(onDone);
    this[_outgoingMessages].stream.map(T.ListOfint(), C[4] || CT.C4).listen(dart.fn(data => this[_request$].send(data), T.ListOfintTovoid()), {cancelOnError: true});
    this[_request$][$onReadyStateChange].listen(dart.fn(data => {
      if (this[_incomingProcessor].isClosed) {
        return;
      }
      switch (this[_request$][$readyState]) {
        case 2:
        {
          this[_onHeadersReceived]();
          break;
        }
        case 4:
        {
          this[_onRequestDone]();
          this[_close]();
          break;
        }
      }
    }, T.EventTovoid()));
    this[_request$][$onError].listen(dart.fn(event => {
      let t1, t0;
      if (this[_incomingProcessor].isClosed) {
        return;
      }
      t0 = new status.GrpcError.unavailable("XhrConnection connection-error");
      t1 = core.StackTrace.current;
      this[_onError](t0, t1);
      this.terminate();
    }, T.ProgressEventTovoid()));
    this[_request$][$onProgress].listen(dart.fn(_ => {
      if (this[_incomingProcessor].isClosed) {
        return;
      }
      let responseString = core.String.as(this[_request$][$response]);
      let bytes = _native_typed_data.NativeUint8List.fromList(responseString[$substring](this[_requestBytesRead])[$codeUnits])[$buffer];
      this[_requestBytesRead] = responseString.length;
      this[_incomingProcessor].add(bytes);
    }, T.ProgressEventTovoid()));
    this[_incomingProcessor].stream.transform(message.GrpcMessage, new web_streams.GrpcWebDecoder.new()).transform(message.GrpcMessage, message.grpcDecompressor()).listen(T.GrpcMessageTovoid().as(dart.bind(this[_incomingMessages], 'add')), {onError: this[_onError], onDone: dart.bind(this[_incomingMessages], 'close')});
  }).prototype = xhr_transport.XhrTransportStream.prototype;
  dart.addTypeTests(xhr_transport.XhrTransportStream);
  dart.addTypeCaches(xhr_transport.XhrTransportStream);
  xhr_transport.XhrTransportStream[dart.implements] = () => [transport.GrpcTransportStream];
  dart.setMethodSignature(xhr_transport.XhrTransportStream, () => ({
    __proto__: dart.getMethods(xhr_transport.XhrTransportStream.__proto__),
    [_validateResponseState]: dart.fnType(core.bool, []),
    [_onHeadersReceived]: dart.fnType(dart.void, []),
    [_onRequestDone]: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, []),
    terminate: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(xhr_transport.XhrTransportStream, () => ({
    __proto__: dart.getGetters(xhr_transport.XhrTransportStream.__proto__),
    incomingMessages: async.Stream$(message.GrpcMessage),
    outgoingMessages: async.StreamSink$(core.List$(core.int))
  }));
  dart.setLibraryUri(xhr_transport.XhrTransportStream, I[1]);
  dart.setFieldSignature(xhr_transport.XhrTransportStream, () => ({
    __proto__: dart.getFields(xhr_transport.XhrTransportStream.__proto__),
    [_request$]: dart.finalFieldType(html.HttpRequest),
    [_onError]: dart.finalFieldType(dart.fnType(dart.void, [core.Object, core.StackTrace])),
    [_onDone]: dart.finalFieldType(dart.fnType(dart.dynamic, [xhr_transport.XhrTransportStream])),
    [_headersReceived]: dart.fieldType(core.bool),
    [_requestBytesRead]: dart.fieldType(core.int),
    [_incomingProcessor]: dart.finalFieldType(async.StreamController$(typed_data.ByteBuffer)),
    [_incomingMessages]: dart.finalFieldType(async.StreamController$(message.GrpcMessage)),
    [_outgoingMessages]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  var uri$ = dart.privateName(xhr_transport, "XhrClientConnection.uri");
  var _requests = dart.privateName(xhr_transport, "_requests");
  var _initializeRequest = dart.privateName(xhr_transport, "_initializeRequest");
  var _removeStream = dart.privateName(xhr_transport, "_removeStream");
  xhr_transport.XhrClientConnection = class XhrClientConnection extends connection.ClientConnection {
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    static ['_#new#tearOff'](uri) {
      return new xhr_transport.XhrClientConnection.new(uri);
    }
    get authority() {
      return this.uri.authority;
    }
    get scheme() {
      return this.uri.scheme;
    }
    [_initializeRequest](request, metadata) {
      for (let header of metadata[$keys]) {
        request.setRequestHeader(header, dart.nullCheck(metadata[$_get](header)));
      }
      request.overrideMimeType("text/plain; charset=x-user-defined");
      request[$responseType] = "text";
    }
    createHttpRequest() {
      return html.HttpRequest.new();
    }
    makeRequest(path, timeout, metadata, onError, opts) {
      let callOptions = opts && 'callOptions' in opts ? opts.callOptions : null;
      if (xhr_transport._getContentTypeHeader(metadata) == null) {
        metadata[$_set]("Content-Type", "application/grpc-web+proto");
        metadata[$_set]("X-User-Agent", "grpc-web-dart/0.1");
        metadata[$_set]("X-Grpc-Web", "1");
      }
      let requestUri = this.uri.resolve(path);
      if (call.WebCallOptions.is(callOptions) && callOptions.bypassCorsPreflight === true) {
        requestUri = cors.moveHttpHeadersToQueryParam(metadata, requestUri);
      }
      let request = this.createHttpRequest();
      request.open("POST", requestUri.toString());
      if (call.WebCallOptions.is(callOptions) && callOptions.withCredentials === true) {
        request.withCredentials = true;
      }
      this[_initializeRequest](request, metadata);
      let transportStream = new xhr_transport.XhrTransportStream.new(request, {onError: onError, onDone: dart.bind(this, _removeStream)});
      this[_requests].add(transportStream);
      return transportStream;
    }
    [_removeStream](stream) {
      this[_requests].remove(stream);
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        for (let request of T.ListOfXhrTransportStream().of(this[_requests])) {
          request.terminate();
        }
      }).bind(this));
    }
    dispatchCall(call) {
      call.onConnectionReady(this);
    }
    shutdown() {
      return async.async(dart.void, function* shutdown() {
      });
    }
  };
  (xhr_transport.XhrClientConnection.new = function(uri) {
    this[_requests] = T.LinkedHashSetOfXhrTransportStream().new();
    this[uri$] = uri;
    ;
  }).prototype = xhr_transport.XhrClientConnection.prototype;
  dart.addTypeTests(xhr_transport.XhrClientConnection);
  dart.addTypeCaches(xhr_transport.XhrClientConnection);
  dart.setMethodSignature(xhr_transport.XhrClientConnection, () => ({
    __proto__: dart.getMethods(xhr_transport.XhrClientConnection.__proto__),
    [_initializeRequest]: dart.fnType(dart.void, [html.HttpRequest, core.Map$(core.String, core.String)]),
    createHttpRequest: dart.fnType(html.HttpRequest, []),
    makeRequest: dart.fnType(transport.GrpcTransportStream, [core.String, dart.nullable(core.Duration), core.Map$(core.String, core.String), dart.fnType(dart.void, [core.Object, core.StackTrace])], {callOptions: dart.nullable(call.CallOptions)}, {}),
    [_removeStream]: dart.fnType(dart.void, [xhr_transport.XhrTransportStream]),
    terminate: dart.fnType(async.Future$(dart.void), []),
    dispatchCall: dart.fnType(dart.void, [call.ClientCall]),
    shutdown: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setGetterSignature(xhr_transport.XhrClientConnection, () => ({
    __proto__: dart.getGetters(xhr_transport.XhrClientConnection.__proto__),
    authority: core.String,
    scheme: core.String
  }));
  dart.setLibraryUri(xhr_transport.XhrClientConnection, I[1]);
  dart.setFieldSignature(xhr_transport.XhrClientConnection, () => ({
    __proto__: dart.getFields(xhr_transport.XhrClientConnection.__proto__),
    uri: dart.finalFieldType(core.Uri),
    [_requests]: dart.finalFieldType(core.Set$(xhr_transport.XhrTransportStream))
  }));
  xhr_transport._getContentTypeHeader = function _getContentTypeHeader(metadata) {
    for (let entry of metadata[$entries]) {
      if (entry.key[$toLowerCase]() === "Content-Type"[$toLowerCase]()) {
        return entry;
      }
    }
    return null;
  };
  dart.defineLazy(xhr_transport, {
    /*xhr_transport._contentTypeKey*/get _contentTypeKey() {
      return "Content-Type";
    }
  }, false);
  var uri$0 = dart.privateName(web_channel, "GrpcWebClientChannel.uri");
  web_channel.GrpcWebClientChannel = class GrpcWebClientChannel extends channel.ClientChannelBase {
    get uri() {
      return this[uri$0];
    }
    set uri(value) {
      super.uri = value;
    }
    static ['_#xhr#tearOff'](uri) {
      return new web_channel.GrpcWebClientChannel.xhr(uri);
    }
    createConnection() {
      return new xhr_transport.XhrClientConnection.new(this.uri);
    }
  };
  (web_channel.GrpcWebClientChannel.xhr = function(uri) {
    this[uri$0] = uri;
    web_channel.GrpcWebClientChannel.__proto__.new.call(this);
    ;
  }).prototype = web_channel.GrpcWebClientChannel.prototype;
  dart.addTypeTests(web_channel.GrpcWebClientChannel);
  dart.addTypeCaches(web_channel.GrpcWebClientChannel);
  dart.setMethodSignature(web_channel.GrpcWebClientChannel, () => ({
    __proto__: dart.getMethods(web_channel.GrpcWebClientChannel.__proto__),
    createConnection: dart.fnType(connection.ClientConnection, [])
  }));
  dart.setLibraryUri(web_channel.GrpcWebClientChannel, I[2]);
  dart.setFieldSignature(web_channel.GrpcWebClientChannel, () => ({
    __proto__: dart.getFields(web_channel.GrpcWebClientChannel.__proto__),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.trackLibraries("packages/grpc/src/client/transport/cors", {
    "package:grpc/src/client/transport/cors.dart": cors,
    "package:grpc/src/client/transport/web_streams.dart": web_streams,
    "package:grpc/src/client/transport/xhr_transport.dart": xhr_transport,
    "package:grpc/src/client/web_channel.dart": web_channel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cors.dart","web_streams.dart","xhr_transport.dart","../web_channel.dart"],"names":[],"mappings":"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","file":"cors.sound.ddc.js"}');
  // Exports:
  return {
    src__client__transport__cors: cors,
    src__client__transport__web_streams: web_streams,
    src__client__transport__xhr_transport: xhr_transport,
    src__client__web_channel: web_channel
  };
}));

//# sourceMappingURL=cors.sound.ddc.js.map
