define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/protobuf/src/protobuf/mixins/well_known', 'packages/fixnum/fixnum', 'packages/archive/src/archive', 'packages/async/async'], (function load__packages__grpc__src__client__call(dart_sdk, packages__protobuf__protobuf, packages__protobuf__src__protobuf__mixins__well_known, packages__fixnum__fixnum, packages__archive__src__archive, packages__async__async) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
  const developer = dart_sdk.developer;
  const _native_typed_data = dart_sdk._native_typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const type_registry = packages__protobuf__protobuf.src__protobuf__type_registry;
  const json_parsing_context = packages__protobuf__protobuf.src__protobuf__json_parsing_context;
  const well_known = packages__protobuf__src__protobuf__mixins__well_known.src__protobuf__mixins__well_known;
  const fixnum = packages__fixnum__fixnum.fixnum;
  const gzip_encoder = packages__archive__src__archive.src__gzip_encoder;
  const gzip_decoder = packages__archive__src__archive.src__gzip_decoder;
  const future = packages__async__async.src__delegate__future;
  const stream = packages__async__async.src__delegate__stream;
  var status$46pb = Object.create(dart.library);
  var any$46pb = Object.create(dart.library);
  var error_details$46pb = Object.create(dart.library);
  var duration$46pb = Object.create(dart.library);
  var call$ = Object.create(dart.library);
  var transport = Object.create(dart.library);
  var message = Object.create(dart.library);
  var status$ = Object.create(dart.library);
  var io_bits = Object.create(dart.library);
  var io_bits_web = Object.create(dart.library);
  var code$46pbenum = Object.create(dart.library);
  var codec_registry = Object.create(dart.library);
  var codec = Object.create(dart.library);
  var method = Object.create(dart.library);
  var connection = Object.create(dart.library);
  var common = Object.create(dart.library);
  var profiler = Object.create(dart.library);
  var channel = Object.create(dart.library);
  var $addAll = dartx.addAll;
  var $fold = dartx.fold;
  var $trim = dartx.trim;
  var $toLowerCase = dartx.toLowerCase;
  var $startsWith = dartx.startsWith;
  var $contains = dartx.contains;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $lastIndexOf = dartx.lastIndexOf;
  var $substring = dartx.substring;
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $length = dartx.length;
  var $buffer = dartx.buffer;
  var $asByteData = dartx.asByteData;
  var $setUint8 = dartx.setUint8;
  var $setUint32 = dartx.setUint32;
  var $setRange = dartx.setRange;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $hashCode = dartx.hashCode;
  var $any = dartx.any;
  var $remove = dartx.remove;
  var $padRight = dartx.padRight;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    GeneratedMessageTovoid: () => (T.GeneratedMessageTovoid = dart.constFn(dart.fnType(dart.void, [protobuf.GeneratedMessage])))(),
    PbListOfStatus: () => (T.PbListOfStatus = dart.constFn(protobuf.PbList$(status$46pb.Status)))(),
    VoidToStatus: () => (T.VoidToStatus = dart.constFn(dart.fnType(status$46pb.Status, [])))(),
    VoidToAny: () => (T.VoidToAny = dart.constFn(dart.fnType(any$46pb.Any, [])))(),
    PbListOfAny: () => (T.PbListOfAny = dart.constFn(protobuf.PbList$(any$46pb.Any)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    GeneratedMessageAndTypeRegistryToObject: () => (T.GeneratedMessageAndTypeRegistryToObject = dart.constFn(dart.fnType(core.Object, [protobuf.GeneratedMessage, type_registry.TypeRegistry])))(),
    GeneratedMessageAndObjectAndTypeRegistry__Tovoid: () => (T.GeneratedMessageAndObjectAndTypeRegistry__Tovoid = dart.constFn(dart.fnType(dart.void, [protobuf.GeneratedMessage, core.Object, type_registry.TypeRegistry, json_parsing_context.JsonParsingContext])))(),
    PbListOfRetryInfo: () => (T.PbListOfRetryInfo = dart.constFn(protobuf.PbList$(error_details$46pb.RetryInfo)))(),
    VoidToRetryInfo: () => (T.VoidToRetryInfo = dart.constFn(dart.fnType(error_details$46pb.RetryInfo, [])))(),
    VoidToDuration: () => (T.VoidToDuration = dart.constFn(dart.fnType(duration$46pb.Duration, [])))(),
    PbListOfDebugInfo: () => (T.PbListOfDebugInfo = dart.constFn(protobuf.PbList$(error_details$46pb.DebugInfo)))(),
    VoidToDebugInfo: () => (T.VoidToDebugInfo = dart.constFn(dart.fnType(error_details$46pb.DebugInfo, [])))(),
    PbListOfQuotaFailure_Violation: () => (T.PbListOfQuotaFailure_Violation = dart.constFn(protobuf.PbList$(error_details$46pb.QuotaFailure_Violation)))(),
    VoidToQuotaFailure_Violation: () => (T.VoidToQuotaFailure_Violation = dart.constFn(dart.fnType(error_details$46pb.QuotaFailure_Violation, [])))(),
    PbListOfQuotaFailure: () => (T.PbListOfQuotaFailure = dart.constFn(protobuf.PbList$(error_details$46pb.QuotaFailure)))(),
    VoidToQuotaFailure: () => (T.VoidToQuotaFailure = dart.constFn(dart.fnType(error_details$46pb.QuotaFailure, [])))(),
    PbListOfErrorInfo: () => (T.PbListOfErrorInfo = dart.constFn(protobuf.PbList$(error_details$46pb.ErrorInfo)))(),
    VoidToErrorInfo: () => (T.VoidToErrorInfo = dart.constFn(dart.fnType(error_details$46pb.ErrorInfo, [])))(),
    PbListOfPreconditionFailure_Violation: () => (T.PbListOfPreconditionFailure_Violation = dart.constFn(protobuf.PbList$(error_details$46pb.PreconditionFailure_Violation)))(),
    VoidToPreconditionFailure_Violation: () => (T.VoidToPreconditionFailure_Violation = dart.constFn(dart.fnType(error_details$46pb.PreconditionFailure_Violation, [])))(),
    PbListOfPreconditionFailure: () => (T.PbListOfPreconditionFailure = dart.constFn(protobuf.PbList$(error_details$46pb.PreconditionFailure)))(),
    VoidToPreconditionFailure: () => (T.VoidToPreconditionFailure = dart.constFn(dart.fnType(error_details$46pb.PreconditionFailure, [])))(),
    PbListOfBadRequest_FieldViolation: () => (T.PbListOfBadRequest_FieldViolation = dart.constFn(protobuf.PbList$(error_details$46pb.BadRequest_FieldViolation)))(),
    VoidToBadRequest_FieldViolation: () => (T.VoidToBadRequest_FieldViolation = dart.constFn(dart.fnType(error_details$46pb.BadRequest_FieldViolation, [])))(),
    PbListOfBadRequest: () => (T.PbListOfBadRequest = dart.constFn(protobuf.PbList$(error_details$46pb.BadRequest)))(),
    VoidToBadRequest: () => (T.VoidToBadRequest = dart.constFn(dart.fnType(error_details$46pb.BadRequest, [])))(),
    PbListOfRequestInfo: () => (T.PbListOfRequestInfo = dart.constFn(protobuf.PbList$(error_details$46pb.RequestInfo)))(),
    VoidToRequestInfo: () => (T.VoidToRequestInfo = dart.constFn(dart.fnType(error_details$46pb.RequestInfo, [])))(),
    PbListOfResourceInfo: () => (T.PbListOfResourceInfo = dart.constFn(protobuf.PbList$(error_details$46pb.ResourceInfo)))(),
    VoidToResourceInfo: () => (T.VoidToResourceInfo = dart.constFn(dart.fnType(error_details$46pb.ResourceInfo, [])))(),
    PbListOfHelp_Link: () => (T.PbListOfHelp_Link = dart.constFn(protobuf.PbList$(error_details$46pb.Help_Link)))(),
    VoidToHelp_Link: () => (T.VoidToHelp_Link = dart.constFn(dart.fnType(error_details$46pb.Help_Link, [])))(),
    PbListOfHelp: () => (T.PbListOfHelp = dart.constFn(protobuf.PbList$(error_details$46pb.Help)))(),
    VoidToHelp: () => (T.VoidToHelp = dart.constFn(dart.fnType(error_details$46pb.Help, [])))(),
    PbListOfLocalizedMessage: () => (T.PbListOfLocalizedMessage = dart.constFn(protobuf.PbList$(error_details$46pb.LocalizedMessage)))(),
    VoidToLocalizedMessage: () => (T.VoidToLocalizedMessage = dart.constFn(dart.fnType(error_details$46pb.LocalizedMessage, [])))(),
    PbListOfDuration: () => (T.PbListOfDuration = dart.constFn(protobuf.PbList$(duration$46pb.Duration)))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringAndStringToFutureOrOfvoid: () => (T.MapOfString$StringAndStringToFutureOrOfvoid = dart.constFn(dart.fnType(dart.void, [T.MapOfString$String(), core.String])))(),
    ListOfMapOfString$StringAndStringToFutureOrOfvoid: () => (T.ListOfMapOfString$StringAndStringToFutureOrOfvoid = dart.constFn(core.List$(T.MapOfString$StringAndStringToFutureOrOfvoid())))(),
    CallOptionsAndCallOptionsToCallOptions: () => (T.CallOptionsAndCallOptionsToCallOptions = dart.constFn(dart.fnType(call$.CallOptions, [call$.CallOptions, call$.CallOptions])))(),
    CompleterOfMapOfString$String: () => (T.CompleterOfMapOfString$String = dart.constFn(async.Completer$(T.MapOfString$String())))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    StringAndStringTovoid: () => (T.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    FnToFutureOrOfvoid: () => (T.FnToFutureOrOfvoid = dart.constFn(dart.fnType(dart.void, [T.MapOfString$StringAndStringToFutureOrOfvoid()])))(),
    dynamicTovoid: () => (T.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    VoidToGrpcTransportStream: () => (T.VoidToGrpcTransportStream = dart.constFn(dart.fnType(transport.GrpcTransportStream, [])))(),
    GrpcTransportStreamTodynamic: () => (T.GrpcTransportStreamTodynamic = dart.constFn(dart.fnType(dart.dynamic, [transport.GrpcTransportStream])))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))(),
    JSArrayOfFuture: () => (T.JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))(),
    _StreamHandlerTransformerOfGrpcMessage$GrpcMessage: () => (T._StreamHandlerTransformerOfGrpcMessage$GrpcMessage = dart.constFn(async._StreamHandlerTransformer$(message.GrpcMessage, message.GrpcMessage)))(),
    EventSinkOfGrpcMessage: () => (T.EventSinkOfGrpcMessage = dart.constFn(async.EventSink$(message.GrpcMessage)))(),
    GrpcMessageAndEventSinkOfGrpcMessageTovoid: () => (T.GrpcMessageAndEventSinkOfGrpcMessageTovoid = dart.constFn(dart.fnType(dart.void, [message.GrpcMessage, T.EventSinkOfGrpcMessage()])))(),
    AnyToGeneratedMessage: () => (T.AnyToGeneratedMessage = dart.constFn(dart.fnType(protobuf.GeneratedMessage, [any$46pb.Any])))(),
    JSArrayOfGeneratedMessage: () => (T.JSArrayOfGeneratedMessage = dart.constFn(_interceptors.JSArray$(protobuf.GeneratedMessage)))(),
    IdentityMapOfString$Codec: () => (T.IdentityMapOfString$Codec = dart.constFn(_js_helper.IdentityMap$(core.String, codec.Codec)))(),
    CodecToString: () => (T.CodecToString = dart.constFn(dart.fnType(core.String, [codec.Codec])))(),
    JSArrayOfCodec: () => (T.JSArrayOfCodec = dart.constFn(_interceptors.JSArray$(codec.Codec)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    RNAndRToR: () => (T.RNAndRToR = dart.constFn(dart.gFnType(R => [R, [dart.nullable(R), R]], R => [T.ObjectN()])))(),
    RNToR: () => (T.RNToR = dart.constFn(dart.gFnType(R => [R, [dart.nullable(R)]], R => [T.ObjectN()])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    TimelineTaskN: () => (T.TimelineTaskN = dart.constFn(dart.nullable(developer.TimelineTask)))(),
    __ToTimelineTask: () => (T.__ToTimelineTask = dart.constFn(dart.fnType(developer.TimelineTask, [], {filterKey: T.StringN(), parent: T.TimelineTaskN()}, {})))(),
    ClientConnectionToNull: () => (T.ClientConnectionToNull = dart.constFn(dart.fnType(core.Null, [connection.ClientConnection])))()
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
      return C[1] = dart.fn(status$46pb.Status.create, T.VoidToStatus());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "google.rpc"
      });
    },
    get C3() {
      return C[3] = dart.fn(any$46pb.Any.create, T.VoidToAny());
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: "google.protobuf"
      });
    },
    get C5() {
      return C[5] = dart.fn(well_known.AnyMixin.toProto3JsonHelper, T.GeneratedMessageAndTypeRegistryToObject());
    },
    get C6() {
      return C[6] = dart.fn(well_known.AnyMixin.fromProto3JsonHelper, T.GeneratedMessageAndObjectAndTypeRegistry__Tovoid());
    },
    get C7() {
      return C[7] = dart.fn(error_details$46pb.RetryInfo.create, T.VoidToRetryInfo());
    },
    get C8() {
      return C[8] = dart.fn(duration$46pb.Duration.create, T.VoidToDuration());
    },
    get C9() {
      return C[9] = dart.fn(error_details$46pb.DebugInfo.create, T.VoidToDebugInfo());
    },
    get C10() {
      return C[10] = dart.fn(error_details$46pb.QuotaFailure_Violation.create, T.VoidToQuotaFailure_Violation());
    },
    get C11() {
      return C[11] = dart.fn(error_details$46pb.QuotaFailure.create, T.VoidToQuotaFailure());
    },
    get C12() {
      return C[12] = dart.fn(error_details$46pb.ErrorInfo.create, T.VoidToErrorInfo());
    },
    get C13() {
      return C[13] = dart.fn(error_details$46pb.PreconditionFailure_Violation.create, T.VoidToPreconditionFailure_Violation());
    },
    get C14() {
      return C[14] = dart.fn(error_details$46pb.PreconditionFailure.create, T.VoidToPreconditionFailure());
    },
    get C15() {
      return C[15] = dart.fn(error_details$46pb.BadRequest_FieldViolation.create, T.VoidToBadRequest_FieldViolation());
    },
    get C16() {
      return C[16] = dart.fn(error_details$46pb.BadRequest.create, T.VoidToBadRequest());
    },
    get C17() {
      return C[17] = dart.fn(error_details$46pb.RequestInfo.create, T.VoidToRequestInfo());
    },
    get C18() {
      return C[18] = dart.fn(error_details$46pb.ResourceInfo.create, T.VoidToResourceInfo());
    },
    get C19() {
      return C[19] = dart.fn(error_details$46pb.Help_Link.create, T.VoidToHelp_Link());
    },
    get C20() {
      return C[20] = dart.fn(error_details$46pb.Help.create, T.VoidToHelp());
    },
    get C21() {
      return C[21] = dart.fn(error_details$46pb.LocalizedMessage.create, T.VoidToLocalizedMessage());
    },
    get C22() {
      return C[22] = dart.fn(well_known.DurationMixin.toProto3JsonHelper, T.GeneratedMessageAndTypeRegistryToObject());
    },
    get C23() {
      return C[23] = dart.fn(well_known.DurationMixin.fromProto3JsonHelper, T.GeneratedMessageAndObjectAndTypeRegistry__Tovoid());
    },
    get C24() {
      return C[24] = dart.constList(["content-type", "te", "grpc-timeout", "grpc-accept-encoding", "grpc-encoding", "user-agent"], core.String);
    },
    get C25() {
      return C[25] = dart.constMap(core.int, core.int, [200, 0, 400, 3, 401, 16, 403, 7, 404, 5, 409, 10, 412, 9, 429, 8, 499, 1, 500, 2, 501, 12, 503, 14, 504, 4]);
    },
    get C26() {
      return C[26] = dart.constMap(core.String, core.String, []);
    },
    get C27() {
      return C[27] = dart.constList([], protobuf.GeneratedMessage);
    },
    get C28() {
      return C[28] = dart.fn(status$.parseErrorDetailsFromAny, T.AnyToGeneratedMessage());
    },
    get C29() {
      return C[29] = dart.constList(["application/grpc", "application/json+protobuf", "application/x-protobuf"], core.String);
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "OK",
        [ProtobufEnum_value]: 0
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "CANCELLED",
        [ProtobufEnum_value]: 1
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNKNOWN",
        [ProtobufEnum_value]: 2
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "INVALID_ARGUMENT",
        [ProtobufEnum_value]: 3
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "DEADLINE_EXCEEDED",
        [ProtobufEnum_value]: 4
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "NOT_FOUND",
        [ProtobufEnum_value]: 5
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "ALREADY_EXISTS",
        [ProtobufEnum_value]: 6
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "PERMISSION_DENIED",
        [ProtobufEnum_value]: 7
      });
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNAUTHENTICATED",
        [ProtobufEnum_value]: 16
      });
    },
    get C39() {
      return C[39] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "RESOURCE_EXHAUSTED",
        [ProtobufEnum_value]: 8
      });
    },
    get C40() {
      return C[40] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "FAILED_PRECONDITION",
        [ProtobufEnum_value]: 9
      });
    },
    get C41() {
      return C[41] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "ABORTED",
        [ProtobufEnum_value]: 10
      });
    },
    get C42() {
      return C[42] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "OUT_OF_RANGE",
        [ProtobufEnum_value]: 11
      });
    },
    get C43() {
      return C[43] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNIMPLEMENTED",
        [ProtobufEnum_value]: 12
      });
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "INTERNAL",
        [ProtobufEnum_value]: 13
      });
    },
    get C45() {
      return C[45] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "UNAVAILABLE",
        [ProtobufEnum_value]: 14
      });
    },
    get C46() {
      return C[46] = dart.const({
        __proto__: code$46pbenum.Code.prototype,
        [ProtobufEnum_name]: "DATA_LOSS",
        [ProtobufEnum_value]: 15
      });
    },
    get C47() {
      return C[47] = dart.constList([C[30] || CT.C30, C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39, C[40] || CT.C40, C[41] || CT.C41, C[42] || CT.C42, C[43] || CT.C43, C[44] || CT.C44, C[45] || CT.C45, C[46] || CT.C46], code$46pbenum.Code);
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: codec.IdentityCodec.prototype,
        [IdentityCodec_encodingName]: "identity"
      });
    },
    get C48() {
      return C[48] = dart.constList([C[49] || CT.C49], codec.Codec);
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_Enum__name]: "connecting",
        [_Enum_index]: 0
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_Enum__name]: "ready",
        [_Enum_index]: 1
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_Enum__name]: "transientFailure",
        [_Enum_index]: 2
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_Enum__name]: "idle",
        [_Enum_index]: 3
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: connection.ConnectionState.prototype,
        [_Enum__name]: "shutdown",
        [_Enum_index]: 4
      });
    },
    get C55() {
      return C[55] = dart.constList([C[50] || CT.C50, C[51] || CT.C51, C[52] || CT.C52, C[53] || CT.C53, C[54] || CT.C54], connection.ConnectionState);
    },
    get C56() {
      return C[56] = dart.fn(common.ResponseFuture._ensureOnlyOneResponse, T.RNAndRToR());
    },
    get C57() {
      return C[57] = dart.fn(common.ResponseFuture._ensureOneResponse, T.RNToR());
    },
    get C58() {
      return C[58] = dart.fn(profiler._defaultTimelineTaskFactory, T.__ToTimelineTask());
    }
  }, false);
  var C = Array(59).fill(void 0);
  var I = [
    "package:grpc/src/generated/google/rpc/status.pb.dart",
    "package:grpc/src/generated/google/protobuf/any.pb.dart",
    "package:grpc/src/generated/google/rpc/error_details.pb.dart",
    "package:grpc/src/generated/google/protobuf/duration.pb.dart",
    "package:grpc/src/client/call.dart",
    "package:grpc/src/client/transport/transport.dart",
    "package:grpc/src/shared/message.dart",
    "package:grpc/src/shared/status.dart",
    "package:grpc/src/shared/io_bits/io_bits_web.dart",
    "package:grpc/src/generated/google/rpc/code.pbenum.dart",
    "package:grpc/src/shared/codec_registry.dart",
    "package:grpc/src/shared/codec.dart",
    "package:grpc/src/client/method.dart",
    "package:grpc/src/client/connection.dart",
    "package:grpc/src/client/common.dart",
    "package:grpc/src/client/channel.dart"
  ];
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  status$46pb.Status = class Status extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new status$46pb.Status.__();
    }
    static new(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let _result = status$46pb.Status.create();
      if (code != null) {
        _result.code = code;
      }
      if (message != null) {
        _result.message = message;
      }
      if (details != null) {
        _result.details[$addAll](details);
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      return status$46pb.Status.new({code: code, message: message, details: details});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = status$46pb.Status.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return status$46pb.Status.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = status$46pb.Status.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return status$46pb.Status.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = status$46pb.Status.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return status$46pb.Status.as(super.copyWith(dart.fn(message => updates(status$46pb.Status.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return status$46pb.Status._i;
    }
    static create() {
      return new status$46pb.Status.__();
    }
    createEmptyInstance() {
      return status$46pb.Status.create();
    }
    static createRepeated() {
      return new (T.PbListOfStatus()).new();
    }
    static getDefault() {
      let t0;
      t0 = status$46pb.Status._defaultInstance;
      return t0 == null ? status$46pb.Status._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(status$46pb.Status, C[1] || CT.C1) : t0;
    }
    get code() {
      return this.$_getIZ(0);
    }
    set code(v) {
      this.$_setSignedInt32(0, v);
    }
    hasCode() {
      return this.$_has(0);
    }
    clearCode() {
      return this.clearField(1);
    }
    get message() {
      return this.$_getSZ(1);
    }
    set message(v) {
      this.$_setString(1, v);
    }
    hasMessage() {
      return this.$_has(1);
    }
    clearMessage() {
      return this.clearField(2);
    }
    get details() {
      return this.$_getList(any$46pb.Any, 2);
    }
  };
  (status$46pb.Status.__ = function() {
    status$46pb.Status.__proto__.new.call(this);
    ;
  }).prototype = status$46pb.Status.prototype;
  dart.addTypeTests(status$46pb.Status);
  dart.addTypeCaches(status$46pb.Status);
  dart.setMethodSignature(status$46pb.Status, () => ({
    __proto__: dart.getMethods(status$46pb.Status.__proto__),
    clone: dart.fnType(status$46pb.Status, []),
    copyWith: dart.fnType(status$46pb.Status, [dart.fnType(dart.void, [status$46pb.Status])]),
    createEmptyInstance: dart.fnType(status$46pb.Status, []),
    hasCode: dart.fnType(core.bool, []),
    clearCode: dart.fnType(dart.void, []),
    hasMessage: dart.fnType(core.bool, []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(status$46pb.Status, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(status$46pb.Status, () => ({
    __proto__: dart.getGetters(status$46pb.Status.__proto__),
    info_: protobuf.BuilderInfo,
    code: core.int,
    message: core.String,
    details: core.List$(any$46pb.Any)
  }));
  dart.setSetterSignature(status$46pb.Status, () => ({
    __proto__: dart.getSetters(status$46pb.Status.__proto__),
    code: core.int,
    message: core.String
  }));
  dart.setLibraryUri(status$46pb.Status, I[0]);
  dart.setStaticFieldSignature(status$46pb.Status, () => ['_i', '_defaultInstance']);
  dart.defineLazy(status$46pb.Status, {
    /*status$46pb.Status._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Status", {package: C[2] || CT.C2, createEmptyInstance: C[1] || CT.C1}), (() => {
        t0.a(core.int, 1, false ? "" : "code", 2048);
        t0.aOS(2, false ? "" : "message");
        t0.pc(any$46pb.Any, 3, false ? "" : "details", 2097154, {subBuilder: C[3] || CT.C3});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*status$46pb.Status._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  const GeneratedMessage_AnyMixin$36 = class GeneratedMessage_AnyMixin extends protobuf.GeneratedMessage {};
  (GeneratedMessage_AnyMixin$36.new = function() {
    GeneratedMessage_AnyMixin$36.__proto__.new.call(this);
  }).prototype = GeneratedMessage_AnyMixin$36.prototype;
  (GeneratedMessage_AnyMixin$36.fromBuffer = function(input, extensionRegistry) {
    GeneratedMessage_AnyMixin$36.__proto__.fromBuffer.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_AnyMixin$36.prototype;
  (GeneratedMessage_AnyMixin$36.fromJson = function(input, extensionRegistry) {
    GeneratedMessage_AnyMixin$36.__proto__.fromJson.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_AnyMixin$36.prototype;
  dart.applyMixin(GeneratedMessage_AnyMixin$36, well_known.AnyMixin);
  any$46pb.Any = class Any extends GeneratedMessage_AnyMixin$36 {
    static ['_#_#tearOff']() {
      return new any$46pb.Any.__();
    }
    static new(opts) {
      let typeUrl = opts && 'typeUrl' in opts ? opts.typeUrl : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let _result = any$46pb.Any.create();
      if (typeUrl != null) {
        _result.typeUrl = typeUrl;
      }
      if (value != null) {
        _result.value = value;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let typeUrl = opts && 'typeUrl' in opts ? opts.typeUrl : null;
      let value = opts && 'value' in opts ? opts.value : null;
      return any$46pb.Any.new({typeUrl: typeUrl, value: value});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = any$46pb.Any.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return any$46pb.Any.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = any$46pb.Any.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return any$46pb.Any.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = any$46pb.Any.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return any$46pb.Any.as(super.copyWith(dart.fn(message => updates(any$46pb.Any.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return any$46pb.Any._i;
    }
    static create() {
      return new any$46pb.Any.__();
    }
    createEmptyInstance() {
      return any$46pb.Any.create();
    }
    static createRepeated() {
      return new (T.PbListOfAny()).new();
    }
    static getDefault() {
      let t0;
      t0 = any$46pb.Any._defaultInstance;
      return t0 == null ? any$46pb.Any._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(any$46pb.Any, C[3] || CT.C3) : t0;
    }
    get typeUrl() {
      return this.$_getSZ(0);
    }
    set typeUrl(v) {
      this.$_setString(0, v);
    }
    hasTypeUrl() {
      return this.$_has(0);
    }
    clearTypeUrl() {
      return this.clearField(1);
    }
    get value() {
      return this.$_getN(T.ListOfint(), 1);
    }
    set value(v) {
      this.$_setBytes(1, v);
    }
    hasValue() {
      return this.$_has(1);
    }
    clearValue() {
      return this.clearField(2);
    }
    static pack(message, opts) {
      let typeUrlPrefix = opts && 'typeUrlPrefix' in opts ? opts.typeUrlPrefix : "type.googleapis.com";
      let result = any$46pb.Any.create();
      well_known.AnyMixin.packIntoAny(result, message, {typeUrlPrefix: typeUrlPrefix});
      return result;
    }
  };
  (any$46pb.Any.__ = function() {
    any$46pb.Any.__proto__.new.call(this);
    ;
  }).prototype = any$46pb.Any.prototype;
  dart.addTypeTests(any$46pb.Any);
  dart.addTypeCaches(any$46pb.Any);
  dart.setMethodSignature(any$46pb.Any, () => ({
    __proto__: dart.getMethods(any$46pb.Any.__proto__),
    clone: dart.fnType(any$46pb.Any, []),
    copyWith: dart.fnType(any$46pb.Any, [dart.fnType(dart.void, [any$46pb.Any])]),
    createEmptyInstance: dart.fnType(any$46pb.Any, []),
    hasTypeUrl: dart.fnType(core.bool, []),
    clearTypeUrl: dart.fnType(dart.void, []),
    hasValue: dart.fnType(core.bool, []),
    clearValue: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(any$46pb.Any, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault', 'pack']);
  dart.setGetterSignature(any$46pb.Any, () => ({
    __proto__: dart.getGetters(any$46pb.Any.__proto__),
    info_: protobuf.BuilderInfo,
    typeUrl: core.String,
    value: core.List$(core.int)
  }));
  dart.setSetterSignature(any$46pb.Any, () => ({
    __proto__: dart.getSetters(any$46pb.Any.__proto__),
    typeUrl: core.String,
    value: core.List$(core.int)
  }));
  dart.setLibraryUri(any$46pb.Any, I[1]);
  dart.setStaticFieldSignature(any$46pb.Any, () => ['_i', '_defaultInstance']);
  dart.defineLazy(any$46pb.Any, {
    /*any$46pb.Any._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Any", {package: C[4] || CT.C4, createEmptyInstance: C[3] || CT.C3, toProto3Json: C[5] || CT.C5, fromProto3Json: C[6] || CT.C6}), (() => {
        t0.aOS(1, false ? "" : "typeUrl");
        t0.a(T.ListOfint(), 2, false ? "" : "value", 32);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*any$46pb.Any._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.RetryInfo = class RetryInfo extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.RetryInfo.__();
    }
    static new(opts) {
      let retryDelay = opts && 'retryDelay' in opts ? opts.retryDelay : null;
      let _result = error_details$46pb.RetryInfo.create();
      if (retryDelay != null) {
        _result.retryDelay = retryDelay;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let retryDelay = opts && 'retryDelay' in opts ? opts.retryDelay : null;
      return error_details$46pb.RetryInfo.new({retryDelay: retryDelay});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.RetryInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.RetryInfo.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.RetryInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.RetryInfo.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.RetryInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.RetryInfo.as(super.copyWith(dart.fn(message => updates(error_details$46pb.RetryInfo.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.RetryInfo._i;
    }
    static create() {
      return new error_details$46pb.RetryInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.RetryInfo.create();
    }
    static createRepeated() {
      return new (T.PbListOfRetryInfo()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.RetryInfo._defaultInstance;
      return t0 == null ? error_details$46pb.RetryInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.RetryInfo, C[7] || CT.C7) : t0;
    }
    get retryDelay() {
      return this.$_getN(duration$46pb.Duration, 0);
    }
    set retryDelay(v) {
      this.setField(1, v);
    }
    hasRetryDelay() {
      return this.$_has(0);
    }
    clearRetryDelay() {
      return this.clearField(1);
    }
    ensureRetryDelay() {
      return this.$_ensure(duration$46pb.Duration, 0);
    }
  };
  (error_details$46pb.RetryInfo.__ = function() {
    error_details$46pb.RetryInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.RetryInfo.prototype;
  dart.addTypeTests(error_details$46pb.RetryInfo);
  dart.addTypeCaches(error_details$46pb.RetryInfo);
  dart.setMethodSignature(error_details$46pb.RetryInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.RetryInfo.__proto__),
    clone: dart.fnType(error_details$46pb.RetryInfo, []),
    copyWith: dart.fnType(error_details$46pb.RetryInfo, [dart.fnType(dart.void, [error_details$46pb.RetryInfo])]),
    createEmptyInstance: dart.fnType(error_details$46pb.RetryInfo, []),
    hasRetryDelay: dart.fnType(core.bool, []),
    clearRetryDelay: dart.fnType(dart.void, []),
    ensureRetryDelay: dart.fnType(duration$46pb.Duration, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.RetryInfo, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.RetryInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.RetryInfo.__proto__),
    info_: protobuf.BuilderInfo,
    retryDelay: duration$46pb.Duration
  }));
  dart.setSetterSignature(error_details$46pb.RetryInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.RetryInfo.__proto__),
    retryDelay: duration$46pb.Duration
  }));
  dart.setLibraryUri(error_details$46pb.RetryInfo, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.RetryInfo, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.RetryInfo, {
    /*error_details$46pb.RetryInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "RetryInfo", {package: C[2] || CT.C2, createEmptyInstance: C[7] || CT.C7}), (() => {
        t0.aOM(duration$46pb.Duration, 1, false ? "" : "retryDelay", {subBuilder: C[8] || CT.C8});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.RetryInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.DebugInfo = class DebugInfo extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.DebugInfo.__();
    }
    static new(opts) {
      let stackEntries = opts && 'stackEntries' in opts ? opts.stackEntries : null;
      let detail = opts && 'detail' in opts ? opts.detail : null;
      let _result = error_details$46pb.DebugInfo.create();
      if (stackEntries != null) {
        _result.stackEntries[$addAll](stackEntries);
      }
      if (detail != null) {
        _result.detail = detail;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let stackEntries = opts && 'stackEntries' in opts ? opts.stackEntries : null;
      let detail = opts && 'detail' in opts ? opts.detail : null;
      return error_details$46pb.DebugInfo.new({stackEntries: stackEntries, detail: detail});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.DebugInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.DebugInfo.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.DebugInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.DebugInfo.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.DebugInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.DebugInfo.as(super.copyWith(dart.fn(message => updates(error_details$46pb.DebugInfo.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.DebugInfo._i;
    }
    static create() {
      return new error_details$46pb.DebugInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.DebugInfo.create();
    }
    static createRepeated() {
      return new (T.PbListOfDebugInfo()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.DebugInfo._defaultInstance;
      return t0 == null ? error_details$46pb.DebugInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.DebugInfo, C[9] || CT.C9) : t0;
    }
    get stackEntries() {
      return this.$_getList(core.String, 0);
    }
    get detail() {
      return this.$_getSZ(1);
    }
    set detail(v) {
      this.$_setString(1, v);
    }
    hasDetail() {
      return this.$_has(1);
    }
    clearDetail() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.DebugInfo.__ = function() {
    error_details$46pb.DebugInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.DebugInfo.prototype;
  dart.addTypeTests(error_details$46pb.DebugInfo);
  dart.addTypeCaches(error_details$46pb.DebugInfo);
  dart.setMethodSignature(error_details$46pb.DebugInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.DebugInfo.__proto__),
    clone: dart.fnType(error_details$46pb.DebugInfo, []),
    copyWith: dart.fnType(error_details$46pb.DebugInfo, [dart.fnType(dart.void, [error_details$46pb.DebugInfo])]),
    createEmptyInstance: dart.fnType(error_details$46pb.DebugInfo, []),
    hasDetail: dart.fnType(core.bool, []),
    clearDetail: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.DebugInfo, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.DebugInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.DebugInfo.__proto__),
    info_: protobuf.BuilderInfo,
    stackEntries: core.List$(core.String),
    detail: core.String
  }));
  dart.setSetterSignature(error_details$46pb.DebugInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.DebugInfo.__proto__),
    detail: core.String
  }));
  dart.setLibraryUri(error_details$46pb.DebugInfo, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.DebugInfo, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.DebugInfo, {
    /*error_details$46pb.DebugInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "DebugInfo", {package: C[2] || CT.C2, createEmptyInstance: C[9] || CT.C9}), (() => {
        t0.pPS(1, false ? "" : "stackEntries");
        t0.aOS(2, false ? "" : "detail");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.DebugInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.QuotaFailure_Violation = class QuotaFailure_Violation extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.QuotaFailure_Violation.__();
    }
    static new(opts) {
      let subject = opts && 'subject' in opts ? opts.subject : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let _result = error_details$46pb.QuotaFailure_Violation.create();
      if (subject != null) {
        _result.subject = subject;
      }
      if (description != null) {
        _result.description = description;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let subject = opts && 'subject' in opts ? opts.subject : null;
      let description = opts && 'description' in opts ? opts.description : null;
      return error_details$46pb.QuotaFailure_Violation.new({subject: subject, description: description});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.QuotaFailure_Violation.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.QuotaFailure_Violation.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.QuotaFailure_Violation.as(super.copyWith(dart.fn(message => updates(error_details$46pb.QuotaFailure_Violation.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.QuotaFailure_Violation._i;
    }
    static create() {
      return new error_details$46pb.QuotaFailure_Violation.__();
    }
    createEmptyInstance() {
      return error_details$46pb.QuotaFailure_Violation.create();
    }
    static createRepeated() {
      return new (T.PbListOfQuotaFailure_Violation()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.QuotaFailure_Violation._defaultInstance;
      return t0 == null ? error_details$46pb.QuotaFailure_Violation._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.QuotaFailure_Violation, C[10] || CT.C10) : t0;
    }
    get subject() {
      return this.$_getSZ(0);
    }
    set subject(v) {
      this.$_setString(0, v);
    }
    hasSubject() {
      return this.$_has(0);
    }
    clearSubject() {
      return this.clearField(1);
    }
    get description() {
      return this.$_getSZ(1);
    }
    set description(v) {
      this.$_setString(1, v);
    }
    hasDescription() {
      return this.$_has(1);
    }
    clearDescription() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.QuotaFailure_Violation.__ = function() {
    error_details$46pb.QuotaFailure_Violation.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.QuotaFailure_Violation.prototype;
  dart.addTypeTests(error_details$46pb.QuotaFailure_Violation);
  dart.addTypeCaches(error_details$46pb.QuotaFailure_Violation);
  dart.setMethodSignature(error_details$46pb.QuotaFailure_Violation, () => ({
    __proto__: dart.getMethods(error_details$46pb.QuotaFailure_Violation.__proto__),
    clone: dart.fnType(error_details$46pb.QuotaFailure_Violation, []),
    copyWith: dart.fnType(error_details$46pb.QuotaFailure_Violation, [dart.fnType(dart.void, [error_details$46pb.QuotaFailure_Violation])]),
    createEmptyInstance: dart.fnType(error_details$46pb.QuotaFailure_Violation, []),
    hasSubject: dart.fnType(core.bool, []),
    clearSubject: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(core.bool, []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.QuotaFailure_Violation, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.QuotaFailure_Violation, () => ({
    __proto__: dart.getGetters(error_details$46pb.QuotaFailure_Violation.__proto__),
    info_: protobuf.BuilderInfo,
    subject: core.String,
    description: core.String
  }));
  dart.setSetterSignature(error_details$46pb.QuotaFailure_Violation, () => ({
    __proto__: dart.getSetters(error_details$46pb.QuotaFailure_Violation.__proto__),
    subject: core.String,
    description: core.String
  }));
  dart.setLibraryUri(error_details$46pb.QuotaFailure_Violation, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.QuotaFailure_Violation, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.QuotaFailure_Violation, {
    /*error_details$46pb.QuotaFailure_Violation._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "QuotaFailure.Violation", {package: C[2] || CT.C2, createEmptyInstance: C[10] || CT.C10}), (() => {
        t0.aOS(1, false ? "" : "subject");
        t0.aOS(2, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.QuotaFailure_Violation._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.QuotaFailure = class QuotaFailure extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.QuotaFailure.__();
    }
    static new(opts) {
      let violations = opts && 'violations' in opts ? opts.violations : null;
      let _result = error_details$46pb.QuotaFailure.create();
      if (violations != null) {
        _result.violations[$addAll](violations);
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let violations = opts && 'violations' in opts ? opts.violations : null;
      return error_details$46pb.QuotaFailure.new({violations: violations});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.QuotaFailure.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.QuotaFailure.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.QuotaFailure.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.QuotaFailure.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.QuotaFailure.as(super.copyWith(dart.fn(message => updates(error_details$46pb.QuotaFailure.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.QuotaFailure._i;
    }
    static create() {
      return new error_details$46pb.QuotaFailure.__();
    }
    createEmptyInstance() {
      return error_details$46pb.QuotaFailure.create();
    }
    static createRepeated() {
      return new (T.PbListOfQuotaFailure()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.QuotaFailure._defaultInstance;
      return t0 == null ? error_details$46pb.QuotaFailure._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.QuotaFailure, C[11] || CT.C11) : t0;
    }
    get violations() {
      return this.$_getList(error_details$46pb.QuotaFailure_Violation, 0);
    }
  };
  (error_details$46pb.QuotaFailure.__ = function() {
    error_details$46pb.QuotaFailure.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.QuotaFailure.prototype;
  dart.addTypeTests(error_details$46pb.QuotaFailure);
  dart.addTypeCaches(error_details$46pb.QuotaFailure);
  dart.setMethodSignature(error_details$46pb.QuotaFailure, () => ({
    __proto__: dart.getMethods(error_details$46pb.QuotaFailure.__proto__),
    clone: dart.fnType(error_details$46pb.QuotaFailure, []),
    copyWith: dart.fnType(error_details$46pb.QuotaFailure, [dart.fnType(dart.void, [error_details$46pb.QuotaFailure])]),
    createEmptyInstance: dart.fnType(error_details$46pb.QuotaFailure, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.QuotaFailure, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.QuotaFailure, () => ({
    __proto__: dart.getGetters(error_details$46pb.QuotaFailure.__proto__),
    info_: protobuf.BuilderInfo,
    violations: core.List$(error_details$46pb.QuotaFailure_Violation)
  }));
  dart.setLibraryUri(error_details$46pb.QuotaFailure, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.QuotaFailure, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.QuotaFailure, {
    /*error_details$46pb.QuotaFailure._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "QuotaFailure", {package: C[2] || CT.C2, createEmptyInstance: C[11] || CT.C11}), (() => {
        t0.pc(error_details$46pb.QuotaFailure_Violation, 1, false ? "" : "violations", 2097154, {subBuilder: C[10] || CT.C10});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.QuotaFailure._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.ErrorInfo = class ErrorInfo extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.ErrorInfo.__();
    }
    static new(opts) {
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let domain = opts && 'domain' in opts ? opts.domain : null;
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let _result = error_details$46pb.ErrorInfo.create();
      if (reason != null) {
        _result.reason = reason;
      }
      if (domain != null) {
        _result.domain = domain;
      }
      if (metadata != null) {
        _result.metadata[$addAll](metadata);
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let reason = opts && 'reason' in opts ? opts.reason : null;
      let domain = opts && 'domain' in opts ? opts.domain : null;
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      return error_details$46pb.ErrorInfo.new({reason: reason, domain: domain, metadata: metadata});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.ErrorInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.ErrorInfo.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.ErrorInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.ErrorInfo.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.ErrorInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.ErrorInfo.as(super.copyWith(dart.fn(message => updates(error_details$46pb.ErrorInfo.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.ErrorInfo._i;
    }
    static create() {
      return new error_details$46pb.ErrorInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.ErrorInfo.create();
    }
    static createRepeated() {
      return new (T.PbListOfErrorInfo()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.ErrorInfo._defaultInstance;
      return t0 == null ? error_details$46pb.ErrorInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.ErrorInfo, C[12] || CT.C12) : t0;
    }
    get reason() {
      return this.$_getSZ(0);
    }
    set reason(v) {
      this.$_setString(0, v);
    }
    hasReason() {
      return this.$_has(0);
    }
    clearReason() {
      return this.clearField(1);
    }
    get domain() {
      return this.$_getSZ(1);
    }
    set domain(v) {
      this.$_setString(1, v);
    }
    hasDomain() {
      return this.$_has(1);
    }
    clearDomain() {
      return this.clearField(2);
    }
    get metadata() {
      return this.$_getMap(core.String, core.String, 2);
    }
  };
  (error_details$46pb.ErrorInfo.__ = function() {
    error_details$46pb.ErrorInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.ErrorInfo.prototype;
  dart.addTypeTests(error_details$46pb.ErrorInfo);
  dart.addTypeCaches(error_details$46pb.ErrorInfo);
  dart.setMethodSignature(error_details$46pb.ErrorInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.ErrorInfo.__proto__),
    clone: dart.fnType(error_details$46pb.ErrorInfo, []),
    copyWith: dart.fnType(error_details$46pb.ErrorInfo, [dart.fnType(dart.void, [error_details$46pb.ErrorInfo])]),
    createEmptyInstance: dart.fnType(error_details$46pb.ErrorInfo, []),
    hasReason: dart.fnType(core.bool, []),
    clearReason: dart.fnType(dart.void, []),
    hasDomain: dart.fnType(core.bool, []),
    clearDomain: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.ErrorInfo, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.ErrorInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.ErrorInfo.__proto__),
    info_: protobuf.BuilderInfo,
    reason: core.String,
    domain: core.String,
    metadata: core.Map$(core.String, core.String)
  }));
  dart.setSetterSignature(error_details$46pb.ErrorInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.ErrorInfo.__proto__),
    reason: core.String,
    domain: core.String
  }));
  dart.setLibraryUri(error_details$46pb.ErrorInfo, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.ErrorInfo, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.ErrorInfo, {
    /*error_details$46pb.ErrorInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ErrorInfo", {package: C[2] || CT.C2, createEmptyInstance: C[12] || CT.C12}), (() => {
        t0.aOS(1, false ? "" : "reason");
        t0.aOS(2, false ? "" : "domain");
        t0.m(core.String, core.String, 3, false ? "" : "metadata", {entryClassName: "ErrorInfo.MetadataEntry", keyFieldType: 64, valueFieldType: 64, packageName: C[2] || CT.C2});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.ErrorInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.PreconditionFailure_Violation = class PreconditionFailure_Violation extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.PreconditionFailure_Violation.__();
    }
    static new(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subject = opts && 'subject' in opts ? opts.subject : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let _result = error_details$46pb.PreconditionFailure_Violation.create();
      if (type != null) {
        _result.type = type;
      }
      if (subject != null) {
        _result.subject = subject;
      }
      if (description != null) {
        _result.description = description;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subject = opts && 'subject' in opts ? opts.subject : null;
      let description = opts && 'description' in opts ? opts.description : null;
      return error_details$46pb.PreconditionFailure_Violation.new({type: type, subject: subject, description: description});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.PreconditionFailure_Violation.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.PreconditionFailure_Violation.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.PreconditionFailure_Violation.as(super.copyWith(dart.fn(message => updates(error_details$46pb.PreconditionFailure_Violation.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.PreconditionFailure_Violation._i;
    }
    static create() {
      return new error_details$46pb.PreconditionFailure_Violation.__();
    }
    createEmptyInstance() {
      return error_details$46pb.PreconditionFailure_Violation.create();
    }
    static createRepeated() {
      return new (T.PbListOfPreconditionFailure_Violation()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure_Violation._defaultInstance;
      return t0 == null ? error_details$46pb.PreconditionFailure_Violation._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.PreconditionFailure_Violation, C[13] || CT.C13) : t0;
    }
    get type() {
      return this.$_getSZ(0);
    }
    set type(v) {
      this.$_setString(0, v);
    }
    hasType() {
      return this.$_has(0);
    }
    clearType() {
      return this.clearField(1);
    }
    get subject() {
      return this.$_getSZ(1);
    }
    set subject(v) {
      this.$_setString(1, v);
    }
    hasSubject() {
      return this.$_has(1);
    }
    clearSubject() {
      return this.clearField(2);
    }
    get description() {
      return this.$_getSZ(2);
    }
    set description(v) {
      this.$_setString(2, v);
    }
    hasDescription() {
      return this.$_has(2);
    }
    clearDescription() {
      return this.clearField(3);
    }
  };
  (error_details$46pb.PreconditionFailure_Violation.__ = function() {
    error_details$46pb.PreconditionFailure_Violation.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.PreconditionFailure_Violation.prototype;
  dart.addTypeTests(error_details$46pb.PreconditionFailure_Violation);
  dart.addTypeCaches(error_details$46pb.PreconditionFailure_Violation);
  dart.setMethodSignature(error_details$46pb.PreconditionFailure_Violation, () => ({
    __proto__: dart.getMethods(error_details$46pb.PreconditionFailure_Violation.__proto__),
    clone: dart.fnType(error_details$46pb.PreconditionFailure_Violation, []),
    copyWith: dart.fnType(error_details$46pb.PreconditionFailure_Violation, [dart.fnType(dart.void, [error_details$46pb.PreconditionFailure_Violation])]),
    createEmptyInstance: dart.fnType(error_details$46pb.PreconditionFailure_Violation, []),
    hasType: dart.fnType(core.bool, []),
    clearType: dart.fnType(dart.void, []),
    hasSubject: dart.fnType(core.bool, []),
    clearSubject: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(core.bool, []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.PreconditionFailure_Violation, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.PreconditionFailure_Violation, () => ({
    __proto__: dart.getGetters(error_details$46pb.PreconditionFailure_Violation.__proto__),
    info_: protobuf.BuilderInfo,
    type: core.String,
    subject: core.String,
    description: core.String
  }));
  dart.setSetterSignature(error_details$46pb.PreconditionFailure_Violation, () => ({
    __proto__: dart.getSetters(error_details$46pb.PreconditionFailure_Violation.__proto__),
    type: core.String,
    subject: core.String,
    description: core.String
  }));
  dart.setLibraryUri(error_details$46pb.PreconditionFailure_Violation, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.PreconditionFailure_Violation, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.PreconditionFailure_Violation, {
    /*error_details$46pb.PreconditionFailure_Violation._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "PreconditionFailure.Violation", {package: C[2] || CT.C2, createEmptyInstance: C[13] || CT.C13}), (() => {
        t0.aOS(1, false ? "" : "type");
        t0.aOS(2, false ? "" : "subject");
        t0.aOS(3, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.PreconditionFailure_Violation._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.PreconditionFailure = class PreconditionFailure extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.PreconditionFailure.__();
    }
    static new(opts) {
      let violations = opts && 'violations' in opts ? opts.violations : null;
      let _result = error_details$46pb.PreconditionFailure.create();
      if (violations != null) {
        _result.violations[$addAll](violations);
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let violations = opts && 'violations' in opts ? opts.violations : null;
      return error_details$46pb.PreconditionFailure.new({violations: violations});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.PreconditionFailure.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.PreconditionFailure.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.PreconditionFailure.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.PreconditionFailure.as(super.copyWith(dart.fn(message => updates(error_details$46pb.PreconditionFailure.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.PreconditionFailure._i;
    }
    static create() {
      return new error_details$46pb.PreconditionFailure.__();
    }
    createEmptyInstance() {
      return error_details$46pb.PreconditionFailure.create();
    }
    static createRepeated() {
      return new (T.PbListOfPreconditionFailure()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.PreconditionFailure._defaultInstance;
      return t0 == null ? error_details$46pb.PreconditionFailure._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.PreconditionFailure, C[14] || CT.C14) : t0;
    }
    get violations() {
      return this.$_getList(error_details$46pb.PreconditionFailure_Violation, 0);
    }
  };
  (error_details$46pb.PreconditionFailure.__ = function() {
    error_details$46pb.PreconditionFailure.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.PreconditionFailure.prototype;
  dart.addTypeTests(error_details$46pb.PreconditionFailure);
  dart.addTypeCaches(error_details$46pb.PreconditionFailure);
  dart.setMethodSignature(error_details$46pb.PreconditionFailure, () => ({
    __proto__: dart.getMethods(error_details$46pb.PreconditionFailure.__proto__),
    clone: dart.fnType(error_details$46pb.PreconditionFailure, []),
    copyWith: dart.fnType(error_details$46pb.PreconditionFailure, [dart.fnType(dart.void, [error_details$46pb.PreconditionFailure])]),
    createEmptyInstance: dart.fnType(error_details$46pb.PreconditionFailure, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.PreconditionFailure, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.PreconditionFailure, () => ({
    __proto__: dart.getGetters(error_details$46pb.PreconditionFailure.__proto__),
    info_: protobuf.BuilderInfo,
    violations: core.List$(error_details$46pb.PreconditionFailure_Violation)
  }));
  dart.setLibraryUri(error_details$46pb.PreconditionFailure, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.PreconditionFailure, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.PreconditionFailure, {
    /*error_details$46pb.PreconditionFailure._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "PreconditionFailure", {package: C[2] || CT.C2, createEmptyInstance: C[14] || CT.C14}), (() => {
        t0.pc(error_details$46pb.PreconditionFailure_Violation, 1, false ? "" : "violations", 2097154, {subBuilder: C[13] || CT.C13});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.PreconditionFailure._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.BadRequest_FieldViolation = class BadRequest_FieldViolation extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.BadRequest_FieldViolation.__();
    }
    static new(opts) {
      let field_1 = opts && 'field_1' in opts ? opts.field_1 : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let _result = error_details$46pb.BadRequest_FieldViolation.create();
      if (field_1 != null) {
        _result.field_1 = field_1;
      }
      if (description != null) {
        _result.description = description;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let field_1 = opts && 'field_1' in opts ? opts.field_1 : null;
      let description = opts && 'description' in opts ? opts.description : null;
      return error_details$46pb.BadRequest_FieldViolation.new({field_1: field_1, description: description});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.BadRequest_FieldViolation.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.BadRequest_FieldViolation.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.BadRequest_FieldViolation.as(super.copyWith(dart.fn(message => updates(error_details$46pb.BadRequest_FieldViolation.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.BadRequest_FieldViolation._i;
    }
    static create() {
      return new error_details$46pb.BadRequest_FieldViolation.__();
    }
    createEmptyInstance() {
      return error_details$46pb.BadRequest_FieldViolation.create();
    }
    static createRepeated() {
      return new (T.PbListOfBadRequest_FieldViolation()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.BadRequest_FieldViolation._defaultInstance;
      return t0 == null ? error_details$46pb.BadRequest_FieldViolation._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.BadRequest_FieldViolation, C[15] || CT.C15) : t0;
    }
    get field_1() {
      return this.$_getSZ(0);
    }
    set field_1(v) {
      this.$_setString(0, v);
    }
    hasField_1() {
      return this.$_has(0);
    }
    clearField_1() {
      return this.clearField(1);
    }
    get description() {
      return this.$_getSZ(1);
    }
    set description(v) {
      this.$_setString(1, v);
    }
    hasDescription() {
      return this.$_has(1);
    }
    clearDescription() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.BadRequest_FieldViolation.__ = function() {
    error_details$46pb.BadRequest_FieldViolation.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.BadRequest_FieldViolation.prototype;
  dart.addTypeTests(error_details$46pb.BadRequest_FieldViolation);
  dart.addTypeCaches(error_details$46pb.BadRequest_FieldViolation);
  dart.setMethodSignature(error_details$46pb.BadRequest_FieldViolation, () => ({
    __proto__: dart.getMethods(error_details$46pb.BadRequest_FieldViolation.__proto__),
    clone: dart.fnType(error_details$46pb.BadRequest_FieldViolation, []),
    copyWith: dart.fnType(error_details$46pb.BadRequest_FieldViolation, [dart.fnType(dart.void, [error_details$46pb.BadRequest_FieldViolation])]),
    createEmptyInstance: dart.fnType(error_details$46pb.BadRequest_FieldViolation, []),
    hasField_1: dart.fnType(core.bool, []),
    clearField_1: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(core.bool, []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.BadRequest_FieldViolation, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.BadRequest_FieldViolation, () => ({
    __proto__: dart.getGetters(error_details$46pb.BadRequest_FieldViolation.__proto__),
    info_: protobuf.BuilderInfo,
    field_1: core.String,
    description: core.String
  }));
  dart.setSetterSignature(error_details$46pb.BadRequest_FieldViolation, () => ({
    __proto__: dart.getSetters(error_details$46pb.BadRequest_FieldViolation.__proto__),
    field_1: core.String,
    description: core.String
  }));
  dart.setLibraryUri(error_details$46pb.BadRequest_FieldViolation, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.BadRequest_FieldViolation, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.BadRequest_FieldViolation, {
    /*error_details$46pb.BadRequest_FieldViolation._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "BadRequest.FieldViolation", {package: C[2] || CT.C2, createEmptyInstance: C[15] || CT.C15}), (() => {
        t0.aOS(1, false ? "" : "field");
        t0.aOS(2, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.BadRequest_FieldViolation._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.BadRequest = class BadRequest extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.BadRequest.__();
    }
    static new(opts) {
      let fieldViolations = opts && 'fieldViolations' in opts ? opts.fieldViolations : null;
      let _result = error_details$46pb.BadRequest.create();
      if (fieldViolations != null) {
        _result.fieldViolations[$addAll](fieldViolations);
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let fieldViolations = opts && 'fieldViolations' in opts ? opts.fieldViolations : null;
      return error_details$46pb.BadRequest.new({fieldViolations: fieldViolations});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.BadRequest.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.BadRequest.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.BadRequest.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.BadRequest.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.BadRequest.as(super.copyWith(dart.fn(message => updates(error_details$46pb.BadRequest.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.BadRequest._i;
    }
    static create() {
      return new error_details$46pb.BadRequest.__();
    }
    createEmptyInstance() {
      return error_details$46pb.BadRequest.create();
    }
    static createRepeated() {
      return new (T.PbListOfBadRequest()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.BadRequest._defaultInstance;
      return t0 == null ? error_details$46pb.BadRequest._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.BadRequest, C[16] || CT.C16) : t0;
    }
    get fieldViolations() {
      return this.$_getList(error_details$46pb.BadRequest_FieldViolation, 0);
    }
  };
  (error_details$46pb.BadRequest.__ = function() {
    error_details$46pb.BadRequest.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.BadRequest.prototype;
  dart.addTypeTests(error_details$46pb.BadRequest);
  dart.addTypeCaches(error_details$46pb.BadRequest);
  dart.setMethodSignature(error_details$46pb.BadRequest, () => ({
    __proto__: dart.getMethods(error_details$46pb.BadRequest.__proto__),
    clone: dart.fnType(error_details$46pb.BadRequest, []),
    copyWith: dart.fnType(error_details$46pb.BadRequest, [dart.fnType(dart.void, [error_details$46pb.BadRequest])]),
    createEmptyInstance: dart.fnType(error_details$46pb.BadRequest, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.BadRequest, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.BadRequest, () => ({
    __proto__: dart.getGetters(error_details$46pb.BadRequest.__proto__),
    info_: protobuf.BuilderInfo,
    fieldViolations: core.List$(error_details$46pb.BadRequest_FieldViolation)
  }));
  dart.setLibraryUri(error_details$46pb.BadRequest, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.BadRequest, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.BadRequest, {
    /*error_details$46pb.BadRequest._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "BadRequest", {package: C[2] || CT.C2, createEmptyInstance: C[16] || CT.C16}), (() => {
        t0.pc(error_details$46pb.BadRequest_FieldViolation, 1, false ? "" : "fieldViolations", 2097154, {subBuilder: C[15] || CT.C15});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.BadRequest._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.RequestInfo = class RequestInfo extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.RequestInfo.__();
    }
    static new(opts) {
      let requestId = opts && 'requestId' in opts ? opts.requestId : null;
      let servingData = opts && 'servingData' in opts ? opts.servingData : null;
      let _result = error_details$46pb.RequestInfo.create();
      if (requestId != null) {
        _result.requestId = requestId;
      }
      if (servingData != null) {
        _result.servingData = servingData;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let requestId = opts && 'requestId' in opts ? opts.requestId : null;
      let servingData = opts && 'servingData' in opts ? opts.servingData : null;
      return error_details$46pb.RequestInfo.new({requestId: requestId, servingData: servingData});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.RequestInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.RequestInfo.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.RequestInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.RequestInfo.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.RequestInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.RequestInfo.as(super.copyWith(dart.fn(message => updates(error_details$46pb.RequestInfo.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.RequestInfo._i;
    }
    static create() {
      return new error_details$46pb.RequestInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.RequestInfo.create();
    }
    static createRepeated() {
      return new (T.PbListOfRequestInfo()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.RequestInfo._defaultInstance;
      return t0 == null ? error_details$46pb.RequestInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.RequestInfo, C[17] || CT.C17) : t0;
    }
    get requestId() {
      return this.$_getSZ(0);
    }
    set requestId(v) {
      this.$_setString(0, v);
    }
    hasRequestId() {
      return this.$_has(0);
    }
    clearRequestId() {
      return this.clearField(1);
    }
    get servingData() {
      return this.$_getSZ(1);
    }
    set servingData(v) {
      this.$_setString(1, v);
    }
    hasServingData() {
      return this.$_has(1);
    }
    clearServingData() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.RequestInfo.__ = function() {
    error_details$46pb.RequestInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.RequestInfo.prototype;
  dart.addTypeTests(error_details$46pb.RequestInfo);
  dart.addTypeCaches(error_details$46pb.RequestInfo);
  dart.setMethodSignature(error_details$46pb.RequestInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.RequestInfo.__proto__),
    clone: dart.fnType(error_details$46pb.RequestInfo, []),
    copyWith: dart.fnType(error_details$46pb.RequestInfo, [dart.fnType(dart.void, [error_details$46pb.RequestInfo])]),
    createEmptyInstance: dart.fnType(error_details$46pb.RequestInfo, []),
    hasRequestId: dart.fnType(core.bool, []),
    clearRequestId: dart.fnType(dart.void, []),
    hasServingData: dart.fnType(core.bool, []),
    clearServingData: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.RequestInfo, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.RequestInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.RequestInfo.__proto__),
    info_: protobuf.BuilderInfo,
    requestId: core.String,
    servingData: core.String
  }));
  dart.setSetterSignature(error_details$46pb.RequestInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.RequestInfo.__proto__),
    requestId: core.String,
    servingData: core.String
  }));
  dart.setLibraryUri(error_details$46pb.RequestInfo, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.RequestInfo, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.RequestInfo, {
    /*error_details$46pb.RequestInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "RequestInfo", {package: C[2] || CT.C2, createEmptyInstance: C[17] || CT.C17}), (() => {
        t0.aOS(1, false ? "" : "requestId");
        t0.aOS(2, false ? "" : "servingData");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.RequestInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.ResourceInfo = class ResourceInfo extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.ResourceInfo.__();
    }
    static new(opts) {
      let resourceType = opts && 'resourceType' in opts ? opts.resourceType : null;
      let resourceName = opts && 'resourceName' in opts ? opts.resourceName : null;
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let description = opts && 'description' in opts ? opts.description : null;
      let _result = error_details$46pb.ResourceInfo.create();
      if (resourceType != null) {
        _result.resourceType = resourceType;
      }
      if (resourceName != null) {
        _result.resourceName = resourceName;
      }
      if (owner != null) {
        _result.owner = owner;
      }
      if (description != null) {
        _result.description = description;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let resourceType = opts && 'resourceType' in opts ? opts.resourceType : null;
      let resourceName = opts && 'resourceName' in opts ? opts.resourceName : null;
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let description = opts && 'description' in opts ? opts.description : null;
      return error_details$46pb.ResourceInfo.new({resourceType: resourceType, resourceName: resourceName, owner: owner, description: description});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.ResourceInfo.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.ResourceInfo.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.ResourceInfo.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.ResourceInfo.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.ResourceInfo.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.ResourceInfo.as(super.copyWith(dart.fn(message => updates(error_details$46pb.ResourceInfo.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.ResourceInfo._i;
    }
    static create() {
      return new error_details$46pb.ResourceInfo.__();
    }
    createEmptyInstance() {
      return error_details$46pb.ResourceInfo.create();
    }
    static createRepeated() {
      return new (T.PbListOfResourceInfo()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.ResourceInfo._defaultInstance;
      return t0 == null ? error_details$46pb.ResourceInfo._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.ResourceInfo, C[18] || CT.C18) : t0;
    }
    get resourceType() {
      return this.$_getSZ(0);
    }
    set resourceType(v) {
      this.$_setString(0, v);
    }
    hasResourceType() {
      return this.$_has(0);
    }
    clearResourceType() {
      return this.clearField(1);
    }
    get resourceName() {
      return this.$_getSZ(1);
    }
    set resourceName(v) {
      this.$_setString(1, v);
    }
    hasResourceName() {
      return this.$_has(1);
    }
    clearResourceName() {
      return this.clearField(2);
    }
    get owner() {
      return this.$_getSZ(2);
    }
    set owner(v) {
      this.$_setString(2, v);
    }
    hasOwner() {
      return this.$_has(2);
    }
    clearOwner() {
      return this.clearField(3);
    }
    get description() {
      return this.$_getSZ(3);
    }
    set description(v) {
      this.$_setString(3, v);
    }
    hasDescription() {
      return this.$_has(3);
    }
    clearDescription() {
      return this.clearField(4);
    }
  };
  (error_details$46pb.ResourceInfo.__ = function() {
    error_details$46pb.ResourceInfo.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.ResourceInfo.prototype;
  dart.addTypeTests(error_details$46pb.ResourceInfo);
  dart.addTypeCaches(error_details$46pb.ResourceInfo);
  dart.setMethodSignature(error_details$46pb.ResourceInfo, () => ({
    __proto__: dart.getMethods(error_details$46pb.ResourceInfo.__proto__),
    clone: dart.fnType(error_details$46pb.ResourceInfo, []),
    copyWith: dart.fnType(error_details$46pb.ResourceInfo, [dart.fnType(dart.void, [error_details$46pb.ResourceInfo])]),
    createEmptyInstance: dart.fnType(error_details$46pb.ResourceInfo, []),
    hasResourceType: dart.fnType(core.bool, []),
    clearResourceType: dart.fnType(dart.void, []),
    hasResourceName: dart.fnType(core.bool, []),
    clearResourceName: dart.fnType(dart.void, []),
    hasOwner: dart.fnType(core.bool, []),
    clearOwner: dart.fnType(dart.void, []),
    hasDescription: dart.fnType(core.bool, []),
    clearDescription: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.ResourceInfo, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.ResourceInfo, () => ({
    __proto__: dart.getGetters(error_details$46pb.ResourceInfo.__proto__),
    info_: protobuf.BuilderInfo,
    resourceType: core.String,
    resourceName: core.String,
    owner: core.String,
    description: core.String
  }));
  dart.setSetterSignature(error_details$46pb.ResourceInfo, () => ({
    __proto__: dart.getSetters(error_details$46pb.ResourceInfo.__proto__),
    resourceType: core.String,
    resourceName: core.String,
    owner: core.String,
    description: core.String
  }));
  dart.setLibraryUri(error_details$46pb.ResourceInfo, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.ResourceInfo, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.ResourceInfo, {
    /*error_details$46pb.ResourceInfo._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "ResourceInfo", {package: C[2] || CT.C2, createEmptyInstance: C[18] || CT.C18}), (() => {
        t0.aOS(1, false ? "" : "resourceType");
        t0.aOS(2, false ? "" : "resourceName");
        t0.aOS(3, false ? "" : "owner");
        t0.aOS(4, false ? "" : "description");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.ResourceInfo._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.Help_Link = class Help_Link extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.Help_Link.__();
    }
    static new(opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let url = opts && 'url' in opts ? opts.url : null;
      let _result = error_details$46pb.Help_Link.create();
      if (description != null) {
        _result.description = description;
      }
      if (url != null) {
        _result.url = url;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let url = opts && 'url' in opts ? opts.url : null;
      return error_details$46pb.Help_Link.new({description: description, url: url});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help_Link.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.Help_Link.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help_Link.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.Help_Link.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.Help_Link.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.Help_Link.as(super.copyWith(dart.fn(message => updates(error_details$46pb.Help_Link.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.Help_Link._i;
    }
    static create() {
      return new error_details$46pb.Help_Link.__();
    }
    createEmptyInstance() {
      return error_details$46pb.Help_Link.create();
    }
    static createRepeated() {
      return new (T.PbListOfHelp_Link()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.Help_Link._defaultInstance;
      return t0 == null ? error_details$46pb.Help_Link._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.Help_Link, C[19] || CT.C19) : t0;
    }
    get description() {
      return this.$_getSZ(0);
    }
    set description(v) {
      this.$_setString(0, v);
    }
    hasDescription() {
      return this.$_has(0);
    }
    clearDescription() {
      return this.clearField(1);
    }
    get url() {
      return this.$_getSZ(1);
    }
    set url(v) {
      this.$_setString(1, v);
    }
    hasUrl() {
      return this.$_has(1);
    }
    clearUrl() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.Help_Link.__ = function() {
    error_details$46pb.Help_Link.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.Help_Link.prototype;
  dart.addTypeTests(error_details$46pb.Help_Link);
  dart.addTypeCaches(error_details$46pb.Help_Link);
  dart.setMethodSignature(error_details$46pb.Help_Link, () => ({
    __proto__: dart.getMethods(error_details$46pb.Help_Link.__proto__),
    clone: dart.fnType(error_details$46pb.Help_Link, []),
    copyWith: dart.fnType(error_details$46pb.Help_Link, [dart.fnType(dart.void, [error_details$46pb.Help_Link])]),
    createEmptyInstance: dart.fnType(error_details$46pb.Help_Link, []),
    hasDescription: dart.fnType(core.bool, []),
    clearDescription: dart.fnType(dart.void, []),
    hasUrl: dart.fnType(core.bool, []),
    clearUrl: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.Help_Link, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.Help_Link, () => ({
    __proto__: dart.getGetters(error_details$46pb.Help_Link.__proto__),
    info_: protobuf.BuilderInfo,
    description: core.String,
    url: core.String
  }));
  dart.setSetterSignature(error_details$46pb.Help_Link, () => ({
    __proto__: dart.getSetters(error_details$46pb.Help_Link.__proto__),
    description: core.String,
    url: core.String
  }));
  dart.setLibraryUri(error_details$46pb.Help_Link, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.Help_Link, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.Help_Link, {
    /*error_details$46pb.Help_Link._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Help.Link", {package: C[2] || CT.C2, createEmptyInstance: C[19] || CT.C19}), (() => {
        t0.aOS(1, false ? "" : "description");
        t0.aOS(2, false ? "" : "url");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.Help_Link._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.Help = class Help extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.Help.__();
    }
    static new(opts) {
      let links = opts && 'links' in opts ? opts.links : null;
      let _result = error_details$46pb.Help.create();
      if (links != null) {
        _result.links[$addAll](links);
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let links = opts && 'links' in opts ? opts.links : null;
      return error_details$46pb.Help.new({links: links});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.Help.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.Help.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.Help.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.Help.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.Help.as(super.copyWith(dart.fn(message => updates(error_details$46pb.Help.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.Help._i;
    }
    static create() {
      return new error_details$46pb.Help.__();
    }
    createEmptyInstance() {
      return error_details$46pb.Help.create();
    }
    static createRepeated() {
      return new (T.PbListOfHelp()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.Help._defaultInstance;
      return t0 == null ? error_details$46pb.Help._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.Help, C[20] || CT.C20) : t0;
    }
    get links() {
      return this.$_getList(error_details$46pb.Help_Link, 0);
    }
  };
  (error_details$46pb.Help.__ = function() {
    error_details$46pb.Help.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.Help.prototype;
  dart.addTypeTests(error_details$46pb.Help);
  dart.addTypeCaches(error_details$46pb.Help);
  dart.setMethodSignature(error_details$46pb.Help, () => ({
    __proto__: dart.getMethods(error_details$46pb.Help.__proto__),
    clone: dart.fnType(error_details$46pb.Help, []),
    copyWith: dart.fnType(error_details$46pb.Help, [dart.fnType(dart.void, [error_details$46pb.Help])]),
    createEmptyInstance: dart.fnType(error_details$46pb.Help, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.Help, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.Help, () => ({
    __proto__: dart.getGetters(error_details$46pb.Help.__proto__),
    info_: protobuf.BuilderInfo,
    links: core.List$(error_details$46pb.Help_Link)
  }));
  dart.setLibraryUri(error_details$46pb.Help, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.Help, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.Help, {
    /*error_details$46pb.Help._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Help", {package: C[2] || CT.C2, createEmptyInstance: C[20] || CT.C20}), (() => {
        t0.pc(error_details$46pb.Help_Link, 1, false ? "" : "links", 2097154, {subBuilder: C[19] || CT.C19});
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.Help._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  error_details$46pb.LocalizedMessage = class LocalizedMessage extends protobuf.GeneratedMessage {
    static ['_#_#tearOff']() {
      return new error_details$46pb.LocalizedMessage.__();
    }
    static new(opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let _result = error_details$46pb.LocalizedMessage.create();
      if (locale != null) {
        _result.locale = locale;
      }
      if (message != null) {
        _result.message = message;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let message = opts && 'message' in opts ? opts.message : null;
      return error_details$46pb.LocalizedMessage.new({locale: locale, message: message});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.LocalizedMessage.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.LocalizedMessage.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = error_details$46pb.LocalizedMessage.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return error_details$46pb.LocalizedMessage.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = error_details$46pb.LocalizedMessage.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return error_details$46pb.LocalizedMessage.as(super.copyWith(dart.fn(message => updates(error_details$46pb.LocalizedMessage.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return error_details$46pb.LocalizedMessage._i;
    }
    static create() {
      return new error_details$46pb.LocalizedMessage.__();
    }
    createEmptyInstance() {
      return error_details$46pb.LocalizedMessage.create();
    }
    static createRepeated() {
      return new (T.PbListOfLocalizedMessage()).new();
    }
    static getDefault() {
      let t0;
      t0 = error_details$46pb.LocalizedMessage._defaultInstance;
      return t0 == null ? error_details$46pb.LocalizedMessage._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(error_details$46pb.LocalizedMessage, C[21] || CT.C21) : t0;
    }
    get locale() {
      return this.$_getSZ(0);
    }
    set locale(v) {
      this.$_setString(0, v);
    }
    hasLocale() {
      return this.$_has(0);
    }
    clearLocale() {
      return this.clearField(1);
    }
    get message() {
      return this.$_getSZ(1);
    }
    set message(v) {
      this.$_setString(1, v);
    }
    hasMessage() {
      return this.$_has(1);
    }
    clearMessage() {
      return this.clearField(2);
    }
  };
  (error_details$46pb.LocalizedMessage.__ = function() {
    error_details$46pb.LocalizedMessage.__proto__.new.call(this);
    ;
  }).prototype = error_details$46pb.LocalizedMessage.prototype;
  dart.addTypeTests(error_details$46pb.LocalizedMessage);
  dart.addTypeCaches(error_details$46pb.LocalizedMessage);
  dart.setMethodSignature(error_details$46pb.LocalizedMessage, () => ({
    __proto__: dart.getMethods(error_details$46pb.LocalizedMessage.__proto__),
    clone: dart.fnType(error_details$46pb.LocalizedMessage, []),
    copyWith: dart.fnType(error_details$46pb.LocalizedMessage, [dart.fnType(dart.void, [error_details$46pb.LocalizedMessage])]),
    createEmptyInstance: dart.fnType(error_details$46pb.LocalizedMessage, []),
    hasLocale: dart.fnType(core.bool, []),
    clearLocale: dart.fnType(dart.void, []),
    hasMessage: dart.fnType(core.bool, []),
    clearMessage: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(error_details$46pb.LocalizedMessage, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(error_details$46pb.LocalizedMessage, () => ({
    __proto__: dart.getGetters(error_details$46pb.LocalizedMessage.__proto__),
    info_: protobuf.BuilderInfo,
    locale: core.String,
    message: core.String
  }));
  dart.setSetterSignature(error_details$46pb.LocalizedMessage, () => ({
    __proto__: dart.getSetters(error_details$46pb.LocalizedMessage.__proto__),
    locale: core.String,
    message: core.String
  }));
  dart.setLibraryUri(error_details$46pb.LocalizedMessage, I[2]);
  dart.setStaticFieldSignature(error_details$46pb.LocalizedMessage, () => ['_i', '_defaultInstance']);
  dart.defineLazy(error_details$46pb.LocalizedMessage, {
    /*error_details$46pb.LocalizedMessage._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "LocalizedMessage", {package: C[2] || CT.C2, createEmptyInstance: C[21] || CT.C21}), (() => {
        t0.aOS(1, false ? "" : "locale");
        t0.aOS(2, false ? "" : "message");
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*error_details$46pb.LocalizedMessage._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  const GeneratedMessage_DurationMixin$36 = class GeneratedMessage_DurationMixin extends protobuf.GeneratedMessage {};
  (GeneratedMessage_DurationMixin$36.new = function() {
    GeneratedMessage_DurationMixin$36.__proto__.new.call(this);
  }).prototype = GeneratedMessage_DurationMixin$36.prototype;
  (GeneratedMessage_DurationMixin$36.fromBuffer = function(input, extensionRegistry) {
    GeneratedMessage_DurationMixin$36.__proto__.fromBuffer.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_DurationMixin$36.prototype;
  (GeneratedMessage_DurationMixin$36.fromJson = function(input, extensionRegistry) {
    GeneratedMessage_DurationMixin$36.__proto__.fromJson.call(this, input, extensionRegistry);
  }).prototype = GeneratedMessage_DurationMixin$36.prototype;
  dart.applyMixin(GeneratedMessage_DurationMixin$36, well_known.DurationMixin);
  duration$46pb.Duration = class Duration extends GeneratedMessage_DurationMixin$36 {
    static ['_#_#tearOff']() {
      return new duration$46pb.Duration.__();
    }
    static new(opts) {
      let seconds = opts && 'seconds' in opts ? opts.seconds : null;
      let nanos = opts && 'nanos' in opts ? opts.nanos : null;
      let _result = duration$46pb.Duration.create();
      if (seconds != null) {
        _result.seconds = seconds;
      }
      if (nanos != null) {
        _result.nanos = nanos;
      }
      return _result;
    }
    static ['_#new#tearOff'](opts) {
      let seconds = opts && 'seconds' in opts ? opts.seconds : null;
      let nanos = opts && 'nanos' in opts ? opts.nanos : null;
      return duration$46pb.Duration.new({seconds: seconds, nanos: nanos});
    }
    static fromBuffer(i, r = C[0] || CT.C0) {
      let t0;
      t0 = duration$46pb.Duration.create();
      return (() => {
        t0.mergeFromBuffer(i, r);
        return t0;
      })();
    }
    static ['_#fromBuffer#tearOff'](i, r = C[0] || CT.C0) {
      return duration$46pb.Duration.fromBuffer(i, r);
    }
    static fromJson(i, r = C[0] || CT.C0) {
      let t0;
      t0 = duration$46pb.Duration.create();
      return (() => {
        t0.mergeFromJson(i, r);
        return t0;
      })();
    }
    static ['_#fromJson#tearOff'](i, r = C[0] || CT.C0) {
      return duration$46pb.Duration.fromJson(i, r);
    }
    clone() {
      let t0;
      t0 = duration$46pb.Duration.new();
      return (() => {
        t0.mergeFromMessage(this);
        return t0;
      })();
    }
    copyWith(updates) {
      return duration$46pb.Duration.as(super.copyWith(dart.fn(message => updates(duration$46pb.Duration.as(message)), T.GeneratedMessageTovoid())));
    }
    get info_() {
      return duration$46pb.Duration._i;
    }
    static create() {
      return new duration$46pb.Duration.__();
    }
    createEmptyInstance() {
      return duration$46pb.Duration.create();
    }
    static createRepeated() {
      return new (T.PbListOfDuration()).new();
    }
    static getDefault() {
      let t0;
      t0 = duration$46pb.Duration._defaultInstance;
      return t0 == null ? duration$46pb.Duration._defaultInstance = protobuf.GeneratedMessage.$_defaultFor(duration$46pb.Duration, C[8] || CT.C8) : t0;
    }
    get seconds() {
      return this.$_getI64(0);
    }
    set seconds(v) {
      this.$_setInt64(0, v);
    }
    hasSeconds() {
      return this.$_has(0);
    }
    clearSeconds() {
      return this.clearField(1);
    }
    get nanos() {
      return this.$_getIZ(1);
    }
    set nanos(v) {
      this.$_setSignedInt32(1, v);
    }
    hasNanos() {
      return this.$_has(1);
    }
    clearNanos() {
      return this.clearField(2);
    }
  };
  (duration$46pb.Duration.__ = function() {
    duration$46pb.Duration.__proto__.new.call(this);
    ;
  }).prototype = duration$46pb.Duration.prototype;
  dart.addTypeTests(duration$46pb.Duration);
  dart.addTypeCaches(duration$46pb.Duration);
  dart.setMethodSignature(duration$46pb.Duration, () => ({
    __proto__: dart.getMethods(duration$46pb.Duration.__proto__),
    clone: dart.fnType(duration$46pb.Duration, []),
    copyWith: dart.fnType(duration$46pb.Duration, [dart.fnType(dart.void, [duration$46pb.Duration])]),
    createEmptyInstance: dart.fnType(duration$46pb.Duration, []),
    hasSeconds: dart.fnType(core.bool, []),
    clearSeconds: dart.fnType(dart.void, []),
    hasNanos: dart.fnType(core.bool, []),
    clearNanos: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(duration$46pb.Duration, () => ['new', 'fromBuffer', 'fromJson', 'create', 'createRepeated', 'getDefault']);
  dart.setGetterSignature(duration$46pb.Duration, () => ({
    __proto__: dart.getGetters(duration$46pb.Duration.__proto__),
    info_: protobuf.BuilderInfo,
    seconds: fixnum.Int64,
    nanos: core.int
  }));
  dart.setSetterSignature(duration$46pb.Duration, () => ({
    __proto__: dart.getSetters(duration$46pb.Duration.__proto__),
    seconds: fixnum.Int64,
    nanos: core.int
  }));
  dart.setLibraryUri(duration$46pb.Duration, I[3]);
  dart.setStaticFieldSignature(duration$46pb.Duration, () => ['_i', '_defaultInstance']);
  dart.defineLazy(duration$46pb.Duration, {
    /*duration$46pb.Duration._i*/get _i() {
      let t0;
      return t0 = new protobuf.BuilderInfo.new(false ? "" : "Duration", {package: C[4] || CT.C4, createEmptyInstance: C[8] || CT.C8, toProto3Json: C[22] || CT.C22, fromProto3Json: C[23] || CT.C23}), (() => {
        t0.aInt64(1, false ? "" : "seconds");
        t0.a(core.int, 2, false ? "" : "nanos", 2048);
        t0.hasRequiredFields = false;
        return t0;
      })();
    },
    /*duration$46pb.Duration._defaultInstance*/get _defaultInstance() {
      return null;
    },
    set _defaultInstance(_) {}
  }, false);
  var metadata$ = dart.privateName(call$, "CallOptions.metadata");
  var timeout$ = dart.privateName(call$, "CallOptions.timeout");
  var metadataProviders$ = dart.privateName(call$, "CallOptions.metadataProviders");
  var compression$ = dart.privateName(call$, "CallOptions.compression");
  call$.CallOptions = class CallOptions extends core.Object {
    get metadata() {
      return this[metadata$];
    }
    set metadata(value) {
      super.metadata = value;
    }
    get timeout() {
      return this[timeout$];
    }
    set timeout(value) {
      super.timeout = value;
    }
    get metadataProviders() {
      return this[metadataProviders$];
    }
    set metadataProviders(value) {
      super.metadataProviders = value;
    }
    get compression() {
      return this[compression$];
    }
    set compression(value) {
      super.compression = value;
    }
    static ['_#_#tearOff'](metadata, timeout, metadataProviders, compression) {
      return new call$.CallOptions.__(metadata, timeout, metadataProviders, compression);
    }
    static new(opts) {
      let t0, t0$;
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let compression = opts && 'compression' in opts ? opts.compression : null;
      return new call$.CallOptions.__(T.MapOfString$String().unmodifiable((t0 = metadata, t0 == null ? new _js_helper.LinkedMap.new() : t0)), timeout, T.ListOfMapOfString$StringAndStringToFutureOrOfvoid().unmodifiable((t0$ = providers, t0$ == null ? [] : t0$)), compression);
    }
    static ['_#new#tearOff'](opts) {
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let compression = opts && 'compression' in opts ? opts.compression : null;
      return call$.CallOptions.new({metadata: metadata, timeout: timeout, providers: providers, compression: compression});
    }
    static from(options) {
      return options[$fold](call$.CallOptions, call$.CallOptions.new(), dart.fn((p, o) => p.mergedWith(o), T.CallOptionsAndCallOptionsToCallOptions()));
    }
    static ['_#from#tearOff'](options) {
      return call$.CallOptions.from(options);
    }
    mergedWith(other) {
      let t0, t0$, t0$0, t0$1;
      if (other == null) return this;
      let mergedMetadata = (t0 = collection.LinkedHashMap.from(this.metadata), (() => {
        t0[$addAll](other.metadata);
        return t0;
      })());
      let mergedTimeout = (t0$ = other.timeout, t0$ == null ? this.timeout : t0$);
      let mergedProviders = (t0$0 = core.List.from(this.metadataProviders), (() => {
        t0$0[$addAll](other.metadataProviders);
        return t0$0;
      })());
      let mergedCompression = (t0$1 = other.compression, t0$1 == null ? this.compression : t0$1);
      return new call$.CallOptions.__(T.MapOfString$String().unmodifiable(mergedMetadata), mergedTimeout, T.ListOfMapOfString$StringAndStringToFutureOrOfvoid().unmodifiable(mergedProviders), mergedCompression);
    }
  };
  (call$.CallOptions.__ = function(metadata, timeout, metadataProviders, compression) {
    this[metadata$] = metadata;
    this[timeout$] = timeout;
    this[metadataProviders$] = metadataProviders;
    this[compression$] = compression;
    ;
  }).prototype = call$.CallOptions.prototype;
  dart.addTypeTests(call$.CallOptions);
  dart.addTypeCaches(call$.CallOptions);
  dart.setMethodSignature(call$.CallOptions, () => ({
    __proto__: dart.getMethods(call$.CallOptions.__proto__),
    mergedWith: dart.fnType(call$.CallOptions, [dart.nullable(call$.CallOptions)])
  }));
  dart.setStaticMethodSignature(call$.CallOptions, () => ['new', 'from']);
  dart.setLibraryUri(call$.CallOptions, I[4]);
  dart.setFieldSignature(call$.CallOptions, () => ({
    __proto__: dart.getFields(call$.CallOptions.__proto__),
    metadata: dart.finalFieldType(core.Map$(core.String, core.String)),
    timeout: dart.finalFieldType(dart.nullable(core.Duration)),
    metadataProviders: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Map$(core.String, core.String), core.String]))),
    compression: dart.finalFieldType(dart.nullable(codec.Codec))
  }));
  var bypassCorsPreflight$ = dart.privateName(call$, "WebCallOptions.bypassCorsPreflight");
  var withCredentials$ = dart.privateName(call$, "WebCallOptions.withCredentials");
  call$.WebCallOptions = class WebCallOptions extends call$.CallOptions {
    get bypassCorsPreflight() {
      return this[bypassCorsPreflight$];
    }
    set bypassCorsPreflight(value) {
      super.bypassCorsPreflight = value;
    }
    get withCredentials() {
      return this[withCredentials$];
    }
    set withCredentials(value) {
      super.withCredentials = value;
    }
    static ['_#_#tearOff'](metadata, timeout, metadataProviders, opts) {
      let bypassCorsPreflight = opts && 'bypassCorsPreflight' in opts ? opts.bypassCorsPreflight : null;
      let withCredentials = opts && 'withCredentials' in opts ? opts.withCredentials : null;
      return new call$.WebCallOptions.__(metadata, timeout, metadataProviders, {bypassCorsPreflight: bypassCorsPreflight, withCredentials: withCredentials});
    }
    static new(opts) {
      let t0, t0$, t0$0, t0$1;
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let bypassCorsPreflight = opts && 'bypassCorsPreflight' in opts ? opts.bypassCorsPreflight : null;
      let withCredentials = opts && 'withCredentials' in opts ? opts.withCredentials : null;
      return new call$.WebCallOptions.__(T.MapOfString$String().unmodifiable((t0 = metadata, t0 == null ? new _js_helper.LinkedMap.new() : t0)), timeout, T.ListOfMapOfString$StringAndStringToFutureOrOfvoid().unmodifiable((t0$ = providers, t0$ == null ? [] : t0$)), {bypassCorsPreflight: (t0$0 = bypassCorsPreflight, t0$0 == null ? false : t0$0), withCredentials: (t0$1 = withCredentials, t0$1 == null ? false : t0$1)});
    }
    static ['_#new#tearOff'](opts) {
      let metadata = opts && 'metadata' in opts ? opts.metadata : null;
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let bypassCorsPreflight = opts && 'bypassCorsPreflight' in opts ? opts.bypassCorsPreflight : null;
      let withCredentials = opts && 'withCredentials' in opts ? opts.withCredentials : null;
      return call$.WebCallOptions.new({metadata: metadata, timeout: timeout, providers: providers, bypassCorsPreflight: bypassCorsPreflight, withCredentials: withCredentials});
    }
    mergedWith(other) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (other == null) return this;
      let mergedMetadata = (t0 = collection.LinkedHashMap.from(this.metadata), (() => {
        t0[$addAll](other.metadata);
        return t0;
      })());
      let mergedTimeout = (t0$ = other.timeout, t0$ == null ? this.timeout : t0$);
      let mergedProviders = (t0$0 = core.List.from(this.metadataProviders), (() => {
        t0$0[$addAll](other.metadataProviders);
        return t0$0;
      })());
      if (!call$.WebCallOptions.is(other)) {
        return new call$.WebCallOptions.__(T.MapOfString$String().unmodifiable(mergedMetadata), mergedTimeout, T.ListOfMapOfString$StringAndStringToFutureOrOfvoid().unmodifiable(mergedProviders), {bypassCorsPreflight: this.bypassCorsPreflight, withCredentials: this.withCredentials});
      }
      let mergedBypassCorsPreflight = (t0$1 = other.bypassCorsPreflight, t0$1 == null ? this.bypassCorsPreflight : t0$1);
      let mergedWithCredentials = (t0$2 = other.withCredentials, t0$2 == null ? this.withCredentials : t0$2);
      return new call$.WebCallOptions.__(T.MapOfString$String().unmodifiable(mergedMetadata), mergedTimeout, T.ListOfMapOfString$StringAndStringToFutureOrOfvoid().unmodifiable(mergedProviders), {bypassCorsPreflight: mergedBypassCorsPreflight, withCredentials: mergedWithCredentials});
    }
  };
  (call$.WebCallOptions.__ = function(metadata, timeout, metadataProviders, opts) {
    let bypassCorsPreflight = opts && 'bypassCorsPreflight' in opts ? opts.bypassCorsPreflight : null;
    let withCredentials = opts && 'withCredentials' in opts ? opts.withCredentials : null;
    this[bypassCorsPreflight$] = bypassCorsPreflight;
    this[withCredentials$] = withCredentials;
    call$.WebCallOptions.__proto__.__.call(this, metadata, timeout, metadataProviders, null);
    ;
  }).prototype = call$.WebCallOptions.prototype;
  dart.addTypeTests(call$.WebCallOptions);
  dart.addTypeCaches(call$.WebCallOptions);
  dart.setStaticMethodSignature(call$.WebCallOptions, () => ['new']);
  dart.setLibraryUri(call$.WebCallOptions, I[4]);
  dart.setFieldSignature(call$.WebCallOptions, () => ({
    __proto__: dart.getFields(call$.WebCallOptions.__proto__),
    bypassCorsPreflight: dart.finalFieldType(dart.nullable(core.bool)),
    withCredentials: dart.finalFieldType(dart.nullable(core.bool))
  }));
  var options$ = dart.privateName(call$, "ClientCall.options");
  var isCancelled = dart.privateName(call$, "ClientCall.isCancelled");
  var _headers = dart.privateName(call$, "_headers");
  var _trailers = dart.privateName(call$, "_trailers");
  var _hasReceivedResponses = dart.privateName(call$, "_hasReceivedResponses");
  var __ClientCall__headerMetadata = dart.privateName(call$, "_#ClientCall#_headerMetadata");
  var _stream = dart.privateName(call$, "_stream");
  var _responses = dart.privateName(call$, "_responses");
  var _requestSubscription = dart.privateName(call$, "_requestSubscription");
  var _responseSubscription = dart.privateName(call$, "_responseSubscription");
  var _timeoutTimer = dart.privateName(call$, "_timeoutTimer");
  var _responseTimeline = dart.privateName(call$, "_responseTimeline");
  var _method$ = dart.privateName(call$, "_method");
  var _requests$ = dart.privateName(call$, "_requests");
  var _requestTimeline$ = dart.privateName(call$, "_requestTimeline");
  var _onResponseListen = dart.privateName(call$, "_onResponseListen");
  var _onTimedOut = dart.privateName(call$, "_onTimedOut");
  var _headerMetadata = dart.privateName(call$, "_headerMetadata");
  var _terminateWithError = dart.privateName(call$, "_terminateWithError");
  var _finishTimelineWithError = dart.privateName(call$, "_finishTimelineWithError");
  var _safeTerminate = dart.privateName(call$, "_safeTerminate");
  var _sendRequest = dart.privateName(call$, "_sendRequest");
  var _onMetadataProviderError = dart.privateName(call$, "_onMetadataProviderError");
  var _onRequestError = dart.privateName(call$, "_onRequestError");
  var _onResponseData = dart.privateName(call$, "_onResponseData");
  var _onResponseError = dart.privateName(call$, "_onResponseError");
  var _onResponseDone = dart.privateName(call$, "_onResponseDone");
  var _responseError = dart.privateName(call$, "_responseError");
  var _checkForErrorStatus = dart.privateName(call$, "_checkForErrorStatus");
  var _terminate = dart.privateName(call$, "_terminate");
  const _is_ClientCall_default = Symbol('_is_ClientCall_default');
  call$.ClientCall$ = dart.generic((Q, R) => {
    var __t$QToListOfint = () => (__t$QToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [Q])))();
    var __t$StreamControllerOfR = () => (__t$StreamControllerOfR = dart.constFn(async.StreamController$(R)))();
    class ClientCall extends core.Object {
      get options() {
        return this[options$];
      }
      set options(value) {
        super.options = value;
      }
      get isCancelled() {
        return this[isCancelled];
      }
      set isCancelled(value) {
        this[isCancelled] = value;
      }
      get [_headerMetadata]() {
        let t0;
        t0 = this[__ClientCall__headerMetadata];
        return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_headerMetadata")) : t0;
      }
      set [_headerMetadata](t0) {
        this[__ClientCall__headerMetadata] = t0;
      }
      static ['_#new#tearOff'](Q, R, _method, _requests, options, _requestTimeline = null) {
        return new (call$.ClientCall$(Q, R)).new(_method, _requests, options, _requestTimeline);
      }
      onConnectionError(error) {
        this[_terminateWithError](new status$.GrpcError.unavailable("Error connecting: " + dart.str(error)));
      }
      [_terminateWithError](error) {
        this[_finishTimelineWithError](error, this[_requestTimeline$]);
        if (!this[_responses].isClosed) {
          this[_responses].addError(error);
        }
        this[_safeTerminate]();
      }
      static _sanitizeMetadata(metadata) {
        let sanitizedMetadata = new (T.IdentityMapOfString$String()).new();
        metadata[$forEach](dart.fn((key, value) => {
          let lowerCaseKey = key[$trim]()[$toLowerCase]();
          if (!lowerCaseKey[$startsWith](":") && !call$._reservedHeaders[$contains](lowerCaseKey)) {
            sanitizedMetadata[$_set](lowerCaseKey, value[$trim]());
          }
        }, T.StringAndStringTovoid()));
        return sanitizedMetadata;
      }
      static audiencePath(method) {
        let lastSlashPos = method.path[$lastIndexOf]("/");
        return lastSlashPos === -1 ? method.path : method.path[$substring](0, lastSlashPos);
      }
      onConnectionReady(connection) {
        if (this.isCancelled) return;
        if (this.options.metadataProviders[$isEmpty]) {
          this[_sendRequest](connection, call$.ClientCall._sanitizeMetadata(this.options.metadata));
        } else {
          let metadata = T.LinkedHashMapOfString$String().from(this.options.metadata);
          async.Future.forEach(T.MapOfString$StringAndStringToFutureOrOfvoid(), this.options.metadataProviders, dart.fn(provider => provider(metadata, connection.scheme + "://" + connection.authority + call$.ClientCall.audiencePath(this[_method$])), T.FnToFutureOrOfvoid())).then(dart.void, dart.fn(_ => this[_sendRequest](connection, call$.ClientCall._sanitizeMetadata(metadata)), T.dynamicTovoid())).catchError(dart.bind(this, _onMetadataProviderError));
        }
      }
      [_onMetadataProviderError](error) {
        this[_terminateWithError](new status$.GrpcError.internal("Error making call: " + dart.str(error)));
      }
      [_sendRequest](connection, metadata) {
        let t6;
        let stream = null;
        function stream$35get() {
          let t2;
          t2 = stream;
          return t2 == null ? dart.throw(new _internal.LateError.localNI("stream")) : t2;
        }
        dart.fn(stream$35get, T.VoidToGrpcTransportStream());
        function stream$35set(t3) {
          if (stream == null)
            return stream = t3;
          else
            dart.throw(new _internal.LateError.localAI("stream"));
        }
        dart.fn(stream$35set, T.GrpcTransportStreamTodynamic());
        try {
          stream$35set(connection.makeRequest(this[_method$].path, this.options.timeout, metadata, dart.bind(this, _onRequestError), {callOptions: this.options}));
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (core.Object.is(e)) {
            this[_terminateWithError](new status$.GrpcError.unavailable("Error making call: " + dart.str(e)));
            return;
          } else
            throw e$;
        }
        t6 = this[_requestTimeline$];
        t6 == null ? null : t6.instant("Request sent", {arguments: new _js_helper.LinkedMap.from(["metadata", metadata])});
        this[_requestSubscription] = this[_requests$].map(T.ListOfint(), dart.fn(data => {
          let t6, t6$, t7, t6$0;
          t6 = this[_requestTimeline$];
          t6 == null ? null : t6.instant("Data sent", {arguments: new _js_helper.LinkedMap.from(["data", dart.toString(data)])});
          t6$ = this[_requestTimeline$];
          t6$ == null ? null : t6$.finish();
          t6$0 = this[_method$];
          t7 = data;
          return __t$QToListOfint().as(t6$0.requestSerializer)(t7);
        }, __t$QToListOfint())).handleError(dart.bind(this, _onRequestError)).listen(T.ListOfintTovoid().as(dart.bind(stream$35get().outgoingMessages, 'add')), {onError: dart.bind(stream$35get().outgoingMessages, 'addError'), onDone: dart.bind(stream$35get().outgoingMessages, 'close'), cancelOnError: true});
        this[_stream] = stream$35get();
        this[_onResponseListen]();
      }
      [_finishTimelineWithError](error, timeline) {
        let t6;
        t6 = timeline;
        t6 == null ? null : t6.finish({arguments: new _js_helper.LinkedMap.from(["error", error.toString()])});
      }
      [_onTimedOut]() {
        let error = new status$.GrpcError.deadlineExceeded("Deadline exceeded");
        this[_finishTimelineWithError](error, this[_requestTimeline$]);
        this[_responses].addError(error);
        this[_safeTerminate]();
      }
      [_onResponseListen]() {
        if (this[_stream] != null && this[_responses].hasListener && this[_responseSubscription] == null) {
          let subscription = dart.nullCheck(this[_stream]).incomingMessages.listen(dart.bind(this, _onResponseData), {onError: dart.bind(this, _onResponseError), onDone: dart.bind(this, _onResponseDone), cancelOnError: true});
          if (this[_responses].isPaused) {
            subscription.pause();
          }
          this[_responses].onPause = dart.bind(subscription, 'pause');
          this[_responses].onResume = dart.bind(subscription, 'resume');
          this[_responses].onCancel = dart.bind(this, 'cancel');
          this[_responseSubscription] = subscription;
        }
      }
      [_responseError](error, stackTrace = null) {
        let t6, t6$;
        this[_finishTimelineWithError](error, this[_responseTimeline]);
        this[_responses].addError(error, stackTrace);
        t6 = this[_timeoutTimer];
        t6 == null ? null : t6.cancel();
        t6$ = this[_requestSubscription];
        t6$ == null ? null : t6$.cancel();
        dart.nullCheck(this[_responseSubscription]).cancel();
        this[_responses].close();
        dart.nullCheck(this[_stream]).terminate();
      }
      [_checkForErrorStatus](trailers) {
        let error = status$.grpcErrorDetailsFromTrailers(trailers);
        if (error != null) {
          this[_responseError](error);
        }
      }
      [_onResponseData](data) {
        let t7, t6, t6$, t7$, t7$0, t7$1;
        if (message.GrpcData.is(data)) {
          if (!this[_headers].isCompleted) {
            this[_responseError](new status$.GrpcError.unimplemented("Received data before headers"));
            return;
          }
          if (this[_trailers].isCompleted) {
            this[_responseError](new status$.GrpcError.unimplemented("Received data after trailers"));
            return;
          }
          try {
            let decodedData = (t6 = this[_method$], t7 = data.data, t6.responseDeserializer(t7));
            t6$ = this[_responseTimeline];
            t6$ == null ? null : t6$.instant("Data received", {arguments: new _js_helper.LinkedMap.from(["data", dart.toString(decodedData)])});
            this[_responses].add(decodedData);
            this[_hasReceivedResponses] = true;
          } catch (e$) {
            let e = dart.getThrown(e$);
            let s = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              this[_responseError](new status$.GrpcError.dataLoss("Error parsing response"), s);
            } else
              throw e$;
          }
        } else if (message.GrpcMetadata.is(data)) {
          if (!this[_headers].isCompleted) {
            this[_headerMetadata] = data.metadata;
            if (this[_requestTimeline$] != null) {
              this[_responseTimeline] = profiler.timelineTaskFactory({parent: this[_requestTimeline$], filterKey: "grpc/client"});
            }
            t7$ = this[_responseTimeline];
            t7$ == null ? null : t7$.start("gRPC Response");
            t7$0 = this[_responseTimeline];
            t7$0 == null ? null : t7$0.instant("Metadata received", {arguments: new _js_helper.LinkedMap.from(["headers", this[_headerMetadata][$toString]()])});
            this[_headers].complete(this[_headerMetadata]);
            return;
          }
          if (this[_trailers].isCompleted) {
            this[_responseError](new status$.GrpcError.unimplemented("Received multiple trailers"));
            return;
          }
          let metadata = data.metadata;
          t7$1 = this[_responseTimeline];
          t7$1 == null ? null : t7$1.instant("Metadata received", {arguments: new _js_helper.LinkedMap.from(["trailers", metadata[$toString]()])});
          this[_trailers].complete(metadata);
          this[_checkForErrorStatus](metadata);
        } else {
          this[_responseError](new status$.GrpcError.unimplemented("Unexpected frame received"));
        }
      }
      [_onResponseError](error, stackTrace) {
        if (status$.GrpcError.is(error)) {
          this[_responseError](error, stackTrace);
          return;
        }
        this[_responseError](new status$.GrpcError.unknown(dart.toString(error)), stackTrace);
      }
      [_onResponseDone]() {
        let t7, t7$;
        if (!this[_headers].isCompleted) {
          this[_responseError](new status$.GrpcError.unavailable("Did not receive anything"));
          return;
        }
        if (!this[_trailers].isCompleted) {
          if (this[_hasReceivedResponses]) {
            this[_responseError](new status$.GrpcError.unavailable("Missing trailers"));
            return;
          }
          this[_trailers].complete(this[_headerMetadata]);
          this[_checkForErrorStatus](this[_headerMetadata]);
        }
        t7 = this[_responseTimeline];
        t7 == null ? null : t7.finish();
        t7$ = this[_timeoutTimer];
        t7$ == null ? null : t7$.cancel();
        this[_responses].close();
        dart.nullCheck(this[_responseSubscription]).cancel();
      }
      [_onRequestError](error, stackTrace) {
        let t7, t7$, t7$0;
        if (!status$.GrpcError.is(error)) {
          error = new status$.GrpcError.unknown(dart.toString(error));
        }
        this[_finishTimelineWithError](error, this[_requestTimeline$]);
        this[_responses].addError(error, stackTrace);
        t7 = this[_timeoutTimer];
        t7 == null ? null : t7.cancel();
        this[_responses].close();
        t7$ = this[_requestSubscription];
        t7$ == null ? null : t7$.cancel();
        t7$0 = this[_responseSubscription];
        t7$0 == null ? null : t7$0.cancel();
        dart.nullCheck(this[_stream]).terminate();
      }
      get response() {
        return this[_responses].stream;
      }
      get headers() {
        return this[_headers].future;
      }
      get trailers() {
        return this[_trailers].future;
      }
      cancel() {
        if (!this[_responses].isClosed) {
          let error = new status$.GrpcError.cancelled("Cancelled by client.");
          this[_responses].addError(error);
          this[_finishTimelineWithError](error, this[_requestTimeline$]);
        }
        return this[_terminate]();
      }
      [_terminate]() {
        return async.async(dart.void, (function* _terminate() {
          let t7, t7$;
          this.isCancelled = true;
          t7 = this[_timeoutTimer];
          t7 == null ? null : t7.cancel();
          this[_responses].close();
          t7$ = this[_stream];
          t7$ == null ? null : t7$.terminate();
          let futures = T.JSArrayOfFuture().of([]);
          if (this[_requestSubscription] != null) {
            futures[$add](dart.nullCheck(this[_requestSubscription]).cancel());
          }
          if (this[_responseSubscription] != null) {
            futures[$add](dart.nullCheck(this[_responseSubscription]).cancel());
          }
          yield async.Future.wait(dart.dynamic, futures);
        }).bind(this));
      }
      [_safeTerminate]() {
        return async.async(dart.void, (function* _safeTerminate() {
          try {
            yield this[_terminate]();
          } catch (e) {
            let _ = dart.getThrown(e);
            if (core.Object.is(_)) {
            } else
              throw e;
          }
        }).bind(this));
      }
    }
    (ClientCall.new = function(_method, _requests, options, _requestTimeline = null) {
      let t1, t0;
      this[_headers] = T.CompleterOfMapOfString$String().new();
      this[_trailers] = T.CompleterOfMapOfString$String().new();
      this[_hasReceivedResponses] = false;
      this[__ClientCall__headerMetadata] = null;
      this[_stream] = null;
      this[_responses] = __t$StreamControllerOfR().new();
      this[_requestSubscription] = null;
      this[_responseSubscription] = null;
      this[isCancelled] = false;
      this[_timeoutTimer] = null;
      this[_responseTimeline] = null;
      this[_method$] = _method;
      this[_requests$] = _requests;
      this[options$] = options;
      this[_requestTimeline$] = _requestTimeline;
      t0 = this[_requestTimeline$];
      t0 == null ? null : t0.start("gRPC Request: " + this[_method$].path, {arguments: new _js_helper.LinkedMap.from(["method", this[_method$].path, "timeout", (t1 = this.options.timeout, t1 == null ? null : dart.toString(t1))])});
      this[_responses].onListen = dart.bind(this, _onResponseListen);
      if (this.options.timeout != null) {
        this[_timeoutTimer] = async.Timer.new(dart.nullCheck(this.options.timeout), dart.bind(this, _onTimedOut));
      }
    }).prototype = ClientCall.prototype;
    dart.addTypeTests(ClientCall);
    ClientCall.prototype[_is_ClientCall_default] = true;
    dart.addTypeCaches(ClientCall);
    ClientCall[dart.implements] = () => [common.Response];
    dart.setMethodSignature(ClientCall, () => ({
      __proto__: dart.getMethods(ClientCall.__proto__),
      onConnectionError: dart.fnType(dart.void, [dart.dynamic]),
      [_terminateWithError]: dart.fnType(dart.void, [status$.GrpcError]),
      onConnectionReady: dart.fnType(dart.void, [connection.ClientConnection]),
      [_onMetadataProviderError]: dart.fnType(dart.void, [dart.dynamic]),
      [_sendRequest]: dart.fnType(dart.void, [connection.ClientConnection, core.Map$(core.String, core.String)]),
      [_finishTimelineWithError]: dart.fnType(dart.void, [status$.GrpcError, dart.nullable(developer.TimelineTask)]),
      [_onTimedOut]: dart.fnType(dart.void, []),
      [_onResponseListen]: dart.fnType(dart.void, []),
      [_responseError]: dart.fnType(dart.void, [status$.GrpcError], [dart.nullable(core.StackTrace)]),
      [_checkForErrorStatus]: dart.fnType(dart.void, [core.Map$(core.String, core.String)]),
      [_onResponseData]: dart.fnType(dart.void, [message.GrpcMessage]),
      [_onResponseError]: dart.fnType(dart.void, [dart.dynamic, core.StackTrace]),
      [_onResponseDone]: dart.fnType(dart.void, []),
      [_onRequestError]: dart.fnType(dart.void, [dart.dynamic, core.StackTrace]),
      cancel: dart.fnType(async.Future$(dart.void), []),
      [_terminate]: dart.fnType(async.Future$(dart.void), []),
      [_safeTerminate]: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setStaticMethodSignature(ClientCall, () => ['_sanitizeMetadata', 'audiencePath']);
    dart.setGetterSignature(ClientCall, () => ({
      __proto__: dart.getGetters(ClientCall.__proto__),
      [_headerMetadata]: core.Map$(core.String, core.String),
      response: async.Stream$(R),
      headers: async.Future$(core.Map$(core.String, core.String)),
      trailers: async.Future$(core.Map$(core.String, core.String))
    }));
    dart.setSetterSignature(ClientCall, () => ({
      __proto__: dart.getSetters(ClientCall.__proto__),
      [_headerMetadata]: core.Map$(core.String, core.String)
    }));
    dart.setLibraryUri(ClientCall, I[4]);
    dart.setFieldSignature(ClientCall, () => ({
      __proto__: dart.getFields(ClientCall.__proto__),
      [_method$]: dart.finalFieldType(method.ClientMethod$(Q, R)),
      [_requests$]: dart.finalFieldType(async.Stream$(Q)),
      options: dart.finalFieldType(call$.CallOptions),
      [_headers]: dart.finalFieldType(async.Completer$(core.Map$(core.String, core.String))),
      [_trailers]: dart.finalFieldType(async.Completer$(core.Map$(core.String, core.String))),
      [_hasReceivedResponses]: dart.fieldType(core.bool),
      [__ClientCall__headerMetadata]: dart.fieldType(dart.nullable(core.Map$(core.String, core.String))),
      [_stream]: dart.fieldType(dart.nullable(transport.GrpcTransportStream)),
      [_responses]: dart.finalFieldType(async.StreamController$(R)),
      [_requestSubscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(core.List$(core.int)))),
      [_responseSubscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(message.GrpcMessage))),
      isCancelled: dart.fieldType(core.bool),
      [_timeoutTimer]: dart.fieldType(dart.nullable(async.Timer)),
      [_requestTimeline$]: dart.finalFieldType(dart.nullable(developer.TimelineTask)),
      [_responseTimeline]: dart.fieldType(dart.nullable(developer.TimelineTask))
    }));
    return ClientCall;
  });
  call$.ClientCall = call$.ClientCall$();
  dart.addTypeTests(call$.ClientCall, _is_ClientCall_default);
  dart.defineLazy(call$, {
    /*call$._reservedHeaders*/get _reservedHeaders() {
      return C[24] || CT.C24;
    }
  }, false);
  transport.GrpcTransportStream = class GrpcTransportStream extends core.Object {};
  (transport.GrpcTransportStream.new = function() {
    ;
  }).prototype = transport.GrpcTransportStream.prototype;
  dart.addTypeTests(transport.GrpcTransportStream);
  dart.addTypeCaches(transport.GrpcTransportStream);
  dart.setLibraryUri(transport.GrpcTransportStream, I[5]);
  message.GrpcMessage = class GrpcMessage extends core.Object {};
  (message.GrpcMessage.new = function() {
    ;
  }).prototype = message.GrpcMessage.prototype;
  dart.addTypeTests(message.GrpcMessage);
  dart.addTypeCaches(message.GrpcMessage);
  dart.setLibraryUri(message.GrpcMessage, I[6]);
  var metadata$0 = dart.privateName(message, "GrpcMetadata.metadata");
  message.GrpcMetadata = class GrpcMetadata extends message.GrpcMessage {
    get metadata() {
      return this[metadata$0];
    }
    set metadata(value) {
      super.metadata = value;
    }
    static ['_#new#tearOff'](metadata) {
      return new message.GrpcMetadata.new(metadata);
    }
    toString() {
      return "gRPC Metadata (" + dart.str(this.metadata) + ")";
    }
  };
  (message.GrpcMetadata.new = function(metadata) {
    this[metadata$0] = metadata;
    ;
  }).prototype = message.GrpcMetadata.prototype;
  dart.addTypeTests(message.GrpcMetadata);
  dart.addTypeCaches(message.GrpcMetadata);
  dart.setLibraryUri(message.GrpcMetadata, I[6]);
  dart.setFieldSignature(message.GrpcMetadata, () => ({
    __proto__: dart.getFields(message.GrpcMetadata.__proto__),
    metadata: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(message.GrpcMetadata, ['toString']);
  var data$ = dart.privateName(message, "GrpcData.data");
  var isCompressed$ = dart.privateName(message, "GrpcData.isCompressed");
  message.GrpcData = class GrpcData extends message.GrpcMessage {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get isCompressed() {
      return this[isCompressed$];
    }
    set isCompressed(value) {
      super.isCompressed = value;
    }
    static ['_#new#tearOff'](data, opts) {
      let isCompressed = opts && 'isCompressed' in opts ? opts.isCompressed : null;
      return new message.GrpcData.new(data, {isCompressed: isCompressed});
    }
    toString() {
      return "gRPC Data (" + dart.str(this.data[$length]) + " bytes)";
    }
  };
  (message.GrpcData.new = function(data, opts) {
    let isCompressed = opts && 'isCompressed' in opts ? opts.isCompressed : null;
    this[data$] = data;
    this[isCompressed$] = isCompressed;
    core.ArgumentError.checkNotNull(T.ListOfint(), this.data);
  }).prototype = message.GrpcData.prototype;
  dart.addTypeTests(message.GrpcData);
  dart.addTypeCaches(message.GrpcData);
  dart.setLibraryUri(message.GrpcData, I[6]);
  dart.setFieldSignature(message.GrpcData, () => ({
    __proto__: dart.getFields(message.GrpcData.__proto__),
    data: dart.finalFieldType(core.List$(core.int)),
    isCompressed: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(message.GrpcData, ['toString']);
  var __GrpcMessageSink_message = dart.privateName(message, "_#GrpcMessageSink#message");
  var _messageReceived = dart.privateName(message, "_messageReceived");
  message.GrpcMessageSink = class GrpcMessageSink extends core.Sink$(message.GrpcMessage) {
    get message() {
      let t8;
      t8 = this[__GrpcMessageSink_message];
      return t8 == null ? dart.throw(new _internal.LateError.fieldNI("message")) : t8;
    }
    set message(t8) {
      if (this[__GrpcMessageSink_message] == null)
        this[__GrpcMessageSink_message] = t8;
      else
        dart.throw(new _internal.LateError.fieldAI("message"));
    }
    add(data) {
      message.GrpcMessage.as(data);
      if (this[_messageReceived]) {
        dart.throw(new core.StateError.new("Too many messages received!"));
      }
      this.message = data;
      this[_messageReceived] = true;
    }
    close() {
      if (!this[_messageReceived]) {
        dart.throw(new core.StateError.new("No messages received!"));
      }
    }
    static ['_#new#tearOff']() {
      return new message.GrpcMessageSink.new();
    }
  };
  (message.GrpcMessageSink.new = function() {
    this[__GrpcMessageSink_message] = null;
    this[_messageReceived] = false;
    ;
  }).prototype = message.GrpcMessageSink.prototype;
  dart.addTypeTests(message.GrpcMessageSink);
  dart.addTypeCaches(message.GrpcMessageSink);
  dart.setMethodSignature(message.GrpcMessageSink, () => ({
    __proto__: dart.getMethods(message.GrpcMessageSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(message.GrpcMessageSink, () => ({
    __proto__: dart.getGetters(message.GrpcMessageSink.__proto__),
    message: message.GrpcMessage
  }));
  dart.setSetterSignature(message.GrpcMessageSink, () => ({
    __proto__: dart.getSetters(message.GrpcMessageSink.__proto__),
    message: message.GrpcMessage
  }));
  dart.setLibraryUri(message.GrpcMessageSink, I[6]);
  dart.setFieldSignature(message.GrpcMessageSink, () => ({
    __proto__: dart.getFields(message.GrpcMessageSink.__proto__),
    [__GrpcMessageSink_message]: dart.fieldType(dart.nullable(message.GrpcMessage)),
    [_messageReceived]: dart.fieldType(core.bool)
  }));
  message.frame = function frame(rawPayload, codec = null) {
    let compressedPayload = codec == null ? rawPayload : codec.compress(rawPayload);
    let payloadLength = compressedPayload[$length];
    let bytes = _native_typed_data.NativeUint8List.new(payloadLength + 5);
    let header = bytes[$buffer][$asByteData](0, 5);
    header[$setUint8](0, codec == null ? 0 : 1);
    header[$setUint32](1, payloadLength);
    bytes[$setRange](5, bytes[$length], compressedPayload);
    return bytes;
  };
  message.grpcDecompressor = function grpcDecompressor(opts) {
    let codecRegistry = opts && 'codecRegistry' in opts ? opts.codecRegistry : null;
    let codec = null;
    return new (T._StreamHandlerTransformerOfGrpcMessage$GrpcMessage()).new({handleData: dart.fn((value, sink) => {
        let t9;
        if (message.GrpcData.is(value) && value.isCompressed) {
          if (codec == null) {
            sink.addError(new status$.GrpcError.unimplemented("Compression mechanism not supported"));
            return;
          }
          sink.add(new message.GrpcData.new(dart.nullCheck(codec).decompress(value.data), {isCompressed: false}));
          return;
        }
        if (message.GrpcMetadata.is(value) && value.metadata[$containsKey]("grpc-encoding")) {
          codec = (t9 = codecRegistry, t9 == null ? null : t9.lookup(dart.nullCheck(value.metadata[$_get]("grpc-encoding"))));
        }
        sink.add(value);
      }, T.GrpcMessageAndEventSinkOfGrpcMessageTovoid())});
  };
  status$.StatusCode = class StatusCode extends core.Object {
    static fromHttpStatus(status) {
      let t9;
      t9 = status$.StatusCode._httpStatusToGrpcStatus[$_get](status);
      return t9 == null ? 2 : t9;
    }
    static ['_#new#tearOff']() {
      return new status$.StatusCode.new();
    }
  };
  (status$.StatusCode.new = function() {
    ;
  }).prototype = status$.StatusCode.prototype;
  dart.addTypeTests(status$.StatusCode);
  dart.addTypeCaches(status$.StatusCode);
  dart.setStaticMethodSignature(status$.StatusCode, () => ['fromHttpStatus']);
  dart.setLibraryUri(status$.StatusCode, I[7]);
  dart.setStaticFieldSignature(status$.StatusCode, () => ['ok', 'cancelled', 'unknown', 'invalidArgument', 'deadlineExceeded', 'notFound', 'alreadyExists', 'permissionDenied', 'resourceExhausted', 'failedPrecondition', 'aborted', 'outOfRange', 'unimplemented', 'internal', 'unavailable', 'dataLoss', 'unauthenticated', '_httpStatusToGrpcStatus']);
  dart.defineLazy(status$.StatusCode, {
    /*status$.StatusCode.ok*/get ok() {
      return 0;
    },
    /*status$.StatusCode.cancelled*/get cancelled() {
      return 1;
    },
    /*status$.StatusCode.unknown*/get unknown() {
      return 2;
    },
    /*status$.StatusCode.invalidArgument*/get invalidArgument() {
      return 3;
    },
    /*status$.StatusCode.deadlineExceeded*/get deadlineExceeded() {
      return 4;
    },
    /*status$.StatusCode.notFound*/get notFound() {
      return 5;
    },
    /*status$.StatusCode.alreadyExists*/get alreadyExists() {
      return 6;
    },
    /*status$.StatusCode.permissionDenied*/get permissionDenied() {
      return 7;
    },
    /*status$.StatusCode.resourceExhausted*/get resourceExhausted() {
      return 8;
    },
    /*status$.StatusCode.failedPrecondition*/get failedPrecondition() {
      return 9;
    },
    /*status$.StatusCode.aborted*/get aborted() {
      return 10;
    },
    /*status$.StatusCode.outOfRange*/get outOfRange() {
      return 11;
    },
    /*status$.StatusCode.unimplemented*/get unimplemented() {
      return 12;
    },
    /*status$.StatusCode.internal*/get internal() {
      return 13;
    },
    /*status$.StatusCode.unavailable*/get unavailable() {
      return 14;
    },
    /*status$.StatusCode.dataLoss*/get dataLoss() {
      return 15;
    },
    /*status$.StatusCode.unauthenticated*/get unauthenticated() {
      return 16;
    },
    /*status$.StatusCode._httpStatusToGrpcStatus*/get _httpStatusToGrpcStatus() {
      return C[25] || CT.C25;
    }
  }, false);
  var code$ = dart.privateName(status$, "GrpcError.code");
  var message$ = dart.privateName(status$, "GrpcError.message");
  var rawResponse$ = dart.privateName(status$, "GrpcError.rawResponse");
  var trailers$ = dart.privateName(status$, "GrpcError.trailers");
  var details$ = dart.privateName(status$, "GrpcError.details");
  status$.GrpcError = class GrpcError extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get rawResponse() {
      return this[rawResponse$];
    }
    set rawResponse(value) {
      super.rawResponse = value;
    }
    get trailers() {
      return this[trailers$];
    }
    set trailers(value) {
      super.trailers = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    static ['_#custom#tearOff'](code, message = null, details = null, rawResponse = null, trailers = C[26] || CT.C26) {
      return new status$.GrpcError.custom(code, message, details, rawResponse, trailers);
    }
    static ['_#ok#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.ok(message, details, rawResponse);
    }
    static ['_#cancelled#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.cancelled(message, details, rawResponse);
    }
    static ['_#unknown#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.unknown(message, details, rawResponse);
    }
    static ['_#invalidArgument#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.invalidArgument(message, details, rawResponse);
    }
    static ['_#deadlineExceeded#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.deadlineExceeded(message, details, rawResponse);
    }
    static ['_#notFound#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.notFound(message, details, rawResponse);
    }
    static ['_#alreadyExists#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.alreadyExists(message, details, rawResponse);
    }
    static ['_#permissionDenied#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.permissionDenied(message, details, rawResponse);
    }
    static ['_#resourceExhausted#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.resourceExhausted(message, details, rawResponse);
    }
    static ['_#failedPrecondition#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.failedPrecondition(message, details, rawResponse);
    }
    static ['_#aborted#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.aborted(message, details, rawResponse);
    }
    static ['_#outOfRange#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.outOfRange(message, details, rawResponse);
    }
    static ['_#unimplemented#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.unimplemented(message, details, rawResponse);
    }
    static ['_#internal#tearOff'](message = null, details = null, rawResponse = null, trailers = null) {
      return new status$.GrpcError.internal(message, details, rawResponse, trailers);
    }
    static ['_#unavailable#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.unavailable(message, details, rawResponse);
    }
    static ['_#dataLoss#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.dataLoss(message, details, rawResponse);
    }
    static ['_#unauthenticated#tearOff'](message = null, details = null, rawResponse = null) {
      return new status$.GrpcError.unauthenticated(message, details, rawResponse);
    }
    get codeName() {
      let t9;
      return (t9 = code$46pbenum.Code.valueOf(this.code), t9 == null ? code$46pbenum.Code.UNKNOWN : t9).name;
    }
    _equals(other) {
      if (other == null) return false;
      if (!status$.GrpcError.is(other)) return false;
      return this.code === other.code && this.message == other.message;
    }
    get hashCode() {
      let t9, t9$;
      return (this.code[$hashCode] ^ dart.notNull((t9$ = (t9 = this.message, t9 == null ? null : dart.hashCode(t9)), t9$ == null ? 17 : t9$))) >>> 0;
    }
    toString() {
      return "gRPC Error (code: " + dart.str(this.code) + ", codeName: " + this.codeName + ", message: " + dart.str(this.message) + ", " + "details: " + dart.str(this.details) + ", rawResponse: " + dart.str(this.rawResponse) + ", trailers: " + dart.str(this.trailers) + ")";
    }
  };
  (status$.GrpcError.custom = function(code, message = null, details = null, rawResponse = null, trailers = C[26] || CT.C26) {
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = trailers;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.ok = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 0;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.cancelled = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 1;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unknown = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 2;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.invalidArgument = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 3;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.deadlineExceeded = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 4;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.notFound = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 5;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.alreadyExists = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 6;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.permissionDenied = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 7;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.resourceExhausted = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 8;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.failedPrecondition = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 9;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.aborted = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 10;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.outOfRange = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 11;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unimplemented = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 12;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.internal = function(message = null, details = null, rawResponse = null, trailers = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = trailers;
    this[code$] = 13;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unavailable = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 14;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.dataLoss = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 15;
    ;
  }).prototype = status$.GrpcError.prototype;
  (status$.GrpcError.unauthenticated = function(message = null, details = null, rawResponse = null) {
    this[message$] = message;
    this[details$] = details;
    this[rawResponse$] = rawResponse;
    this[trailers$] = C[26] || CT.C26;
    this[code$] = 16;
    ;
  }).prototype = status$.GrpcError.prototype;
  dart.addTypeTests(status$.GrpcError);
  dart.addTypeCaches(status$.GrpcError);
  status$.GrpcError[dart.implements] = () => [core.Exception];
  dart.setGetterSignature(status$.GrpcError, () => ({
    __proto__: dart.getGetters(status$.GrpcError.__proto__),
    codeName: core.String
  }));
  dart.setLibraryUri(status$.GrpcError, I[7]);
  dart.setFieldSignature(status$.GrpcError, () => ({
    __proto__: dart.getFields(status$.GrpcError.__proto__),
    code: dart.finalFieldType(core.int),
    message: dart.finalFieldType(dart.nullable(core.String)),
    rawResponse: dart.finalFieldType(dart.nullable(core.Object)),
    trailers: dart.finalFieldType(dart.nullable(core.Map$(core.String, core.String))),
    details: dart.finalFieldType(dart.nullable(core.List$(protobuf.GeneratedMessage)))
  }));
  dart.defineExtensionMethods(status$.GrpcError, ['_equals', 'toString']);
  dart.defineExtensionAccessors(status$.GrpcError, ['hashCode']);
  status$.parseErrorDetailsFromAny = function parseErrorDetailsFromAny(any) {
    switch (any.typeUrl) {
      case "type.googleapis.com/google.rpc.RetryInfo":
      {
        return error_details$46pb.RetryInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.DebugInfo":
      {
        return error_details$46pb.DebugInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.QuotaFailure":
      {
        return error_details$46pb.QuotaFailure.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.ErrorInfo":
      {
        return error_details$46pb.ErrorInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.PreconditionFailure":
      {
        return error_details$46pb.PreconditionFailure.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.BadRequest":
      {
        return error_details$46pb.BadRequest.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.RequestInfo":
      {
        return error_details$46pb.RequestInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.ResourceInfo":
      {
        return error_details$46pb.ResourceInfo.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.Help":
      {
        return error_details$46pb.Help.fromBuffer(any.value);
      }
      case "type.googleapis.com/google.rpc.LocalizedMessage":
      {
        return error_details$46pb.LocalizedMessage.fromBuffer(any.value);
      }
      default:
      {
        return any;
      }
    }
  };
  status$.validateHttpStatusAndContentType = function validateHttpStatusAndContentType(httpStatus, headers, opts) {
    let t9, t9$, t9$0, t9$1, t9$2;
    let rawResponse = opts && 'rawResponse' in opts ? opts.rawResponse : null;
    if (httpStatus == null) {
      dart.throw(new status$.GrpcError.unknown("HTTP response status is unknown", null, rawResponse));
    }
    if (httpStatus === 0) {
      dart.throw(new status$.GrpcError.unknown("HTTP request completed without a status (potential CORS issue)", null, rawResponse));
    }
    let status = status$.StatusCode.fromHttpStatus(httpStatus);
    if (status !== 0) {
      let error = status$.grpcErrorDetailsFromTrailers(headers);
      if (error == null || error.code === 2) {
        dart.throw(new status$.GrpcError.custom(status, (t9$ = (t9 = error, t9 == null ? null : t9.message), t9$ == null ? "HTTP connection completed with " + dart.str(httpStatus) + " instead of 200" : t9$), (t9$0 = error, t9$0 == null ? null : t9$0.details), rawResponse, (t9$2 = (t9$1 = error, t9$1 == null ? null : t9$1.trailers), t9$2 == null ? status$.toCustomTrailers(headers) : t9$2)));
      }
      dart.throw(error);
    }
    let contentType = headers[$_get]("content-type");
    if (contentType == null) {
      dart.throw(new status$.GrpcError.unknown("missing content-type header", null, rawResponse));
    }
    if (!status$._validContentTypePrefix[$any](dart.bind(contentType, $startsWith))) {
      dart.throw(new status$.GrpcError.unknown("unsupported content-type (" + dart.str(contentType) + ")", null, rawResponse));
    }
  };
  status$.grpcErrorDetailsFromTrailers = function grpcErrorDetailsFromTrailers(trailers) {
    let status = trailers[$_get]("grpc-status");
    let statusCode = status != null ? core.int.parse(status) : 2;
    if (statusCode !== 0) {
      let message = status$._tryDecodeStatusMessage(trailers[$_get]("grpc-message"));
      let statusDetails = trailers[$_get]("grpc-status-details-bin");
      return new status$.GrpcError.custom(statusCode, message, statusDetails == null ? C[27] || CT.C27 : status$.decodeStatusDetails(statusDetails), null, status$.toCustomTrailers(trailers));
    }
    return null;
  };
  status$.toCustomTrailers = function toCustomTrailers(trailers) {
    let t9;
    t9 = T.LinkedHashMapOfString$String().from(trailers);
    return (() => {
      t9[$remove](":status");
      t9[$remove]("content-type");
      t9[$remove]("grpc-status");
      t9[$remove]("grpc-message");
      return t9;
    })();
  };
  status$.decodeStatusDetails = function decodeStatusDetails(data) {
    try {
      let parsedStatus = status$46pb.Status.fromBuffer(convert.base64Url.decode(data[$padRight]((data.length + 3 & ~3 >>> 0) >>> 0, "=")));
      return parsedStatus.details[$map](protobuf.GeneratedMessage, C[28] || CT.C28)[$toList]();
    } catch (e$) {
      let e = dart.getThrown(e$);
      if (core.Object.is(e)) {
        return T.JSArrayOfGeneratedMessage().of([]);
      } else
        throw e$;
    }
  };
  status$._tryDecodeStatusMessage = function _tryDecodeStatusMessage(statusMessage) {
    if (statusMessage == null) {
      return statusMessage;
    }
    try {
      return core.Uri.decodeFull(statusMessage);
    } catch (e) {
      let _ = dart.getThrown(e);
      if (core.Object.is(_)) {
        return statusMessage;
      } else
        throw e;
    }
  };
  dart.defineLazy(status$, {
    /*status$._statusDetailsHeader*/get _statusDetailsHeader() {
      return "grpc-status-details-bin";
    },
    /*status$._validContentTypePrefix*/get _validContentTypePrefix() {
      return C[29] || CT.C29;
    }
  }, false);
  io_bits_web.X509Certificate = class X509Certificate extends core.Object {
    static ['_#new#tearOff']() {
      return new io_bits_web.X509Certificate.new();
    }
  };
  (io_bits_web.X509Certificate.new = function() {
    ;
  }).prototype = io_bits_web.X509Certificate.prototype;
  dart.addTypeTests(io_bits_web.X509Certificate);
  dart.addTypeCaches(io_bits_web.X509Certificate);
  dart.setLibraryUri(io_bits_web.X509Certificate, I[8]);
  var ProtobufEnum_name = dart.privateName(protobuf, "ProtobufEnum.name");
  var ProtobufEnum_value = dart.privateName(protobuf, "ProtobufEnum.value");
  code$46pbenum.Code = class Code extends protobuf.ProtobufEnum {
    static valueOf(value) {
      return code$46pbenum.Code._byValue[$_get](value);
    }
    static ['_#_#tearOff'](v, n) {
      return new code$46pbenum.Code.__(v, n);
    }
  };
  (code$46pbenum.Code.__ = function(v, n) {
    code$46pbenum.Code.__proto__.new.call(this, v, n);
    ;
  }).prototype = code$46pbenum.Code.prototype;
  dart.addTypeTests(code$46pbenum.Code);
  dart.addTypeCaches(code$46pbenum.Code);
  dart.setStaticMethodSignature(code$46pbenum.Code, () => ['valueOf']);
  dart.setLibraryUri(code$46pbenum.Code, I[9]);
  dart.setStaticFieldSignature(code$46pbenum.Code, () => ['OK', 'CANCELLED', 'UNKNOWN', 'INVALID_ARGUMENT', 'DEADLINE_EXCEEDED', 'NOT_FOUND', 'ALREADY_EXISTS', 'PERMISSION_DENIED', 'UNAUTHENTICATED', 'RESOURCE_EXHAUSTED', 'FAILED_PRECONDITION', 'ABORTED', 'OUT_OF_RANGE', 'UNIMPLEMENTED', 'INTERNAL', 'UNAVAILABLE', 'DATA_LOSS', 'values', '_byValue']);
  dart.defineLazy(code$46pbenum.Code, {
    /*code$46pbenum.Code.OK*/get OK() {
      return C[30] || CT.C30;
    },
    /*code$46pbenum.Code.CANCELLED*/get CANCELLED() {
      return C[31] || CT.C31;
    },
    /*code$46pbenum.Code.UNKNOWN*/get UNKNOWN() {
      return C[32] || CT.C32;
    },
    /*code$46pbenum.Code.INVALID_ARGUMENT*/get INVALID_ARGUMENT() {
      return C[33] || CT.C33;
    },
    /*code$46pbenum.Code.DEADLINE_EXCEEDED*/get DEADLINE_EXCEEDED() {
      return C[34] || CT.C34;
    },
    /*code$46pbenum.Code.NOT_FOUND*/get NOT_FOUND() {
      return C[35] || CT.C35;
    },
    /*code$46pbenum.Code.ALREADY_EXISTS*/get ALREADY_EXISTS() {
      return C[36] || CT.C36;
    },
    /*code$46pbenum.Code.PERMISSION_DENIED*/get PERMISSION_DENIED() {
      return C[37] || CT.C37;
    },
    /*code$46pbenum.Code.UNAUTHENTICATED*/get UNAUTHENTICATED() {
      return C[38] || CT.C38;
    },
    /*code$46pbenum.Code.RESOURCE_EXHAUSTED*/get RESOURCE_EXHAUSTED() {
      return C[39] || CT.C39;
    },
    /*code$46pbenum.Code.FAILED_PRECONDITION*/get FAILED_PRECONDITION() {
      return C[40] || CT.C40;
    },
    /*code$46pbenum.Code.ABORTED*/get ABORTED() {
      return C[41] || CT.C41;
    },
    /*code$46pbenum.Code.OUT_OF_RANGE*/get OUT_OF_RANGE() {
      return C[42] || CT.C42;
    },
    /*code$46pbenum.Code.UNIMPLEMENTED*/get UNIMPLEMENTED() {
      return C[43] || CT.C43;
    },
    /*code$46pbenum.Code.INTERNAL*/get INTERNAL() {
      return C[44] || CT.C44;
    },
    /*code$46pbenum.Code.UNAVAILABLE*/get UNAVAILABLE() {
      return C[45] || CT.C45;
    },
    /*code$46pbenum.Code.DATA_LOSS*/get DATA_LOSS() {
      return C[46] || CT.C46;
    },
    /*code$46pbenum.Code.values*/get values() {
      return C[47] || CT.C47;
    },
    /*code$46pbenum.Code._byValue*/get _byValue() {
      return protobuf.ProtobufEnum.initByValue(code$46pbenum.Code, code$46pbenum.Code.values);
    }
  }, false);
  var IdentityCodec_encodingName = dart.privateName(codec, "IdentityCodec.encodingName");
  var _codecs = dart.privateName(codec_registry, "_codecs");
  var _supportedEncodings = dart.privateName(codec_registry, "_supportedEncodings");
  codec_registry.CodecRegistry = class CodecRegistry extends core.Object {
    static ['_#new#tearOff'](opts) {
      let codecs = opts && 'codecs' in opts ? opts.codecs : C[48] || CT.C48;
      return new codec_registry.CodecRegistry.new({codecs: codecs});
    }
    static empty() {
      return new codec_registry.CodecRegistry.new({codecs: T.JSArrayOfCodec().of([])});
    }
    static ['_#empty#tearOff']() {
      return codec_registry.CodecRegistry.empty();
    }
    lookup(codecName) {
      return this[_codecs][$_get](codecName);
    }
    get supportedEncodings() {
      return this[_supportedEncodings];
    }
  };
  (codec_registry.CodecRegistry.new = function(opts) {
    let codecs = opts && 'codecs' in opts ? opts.codecs : C[48] || CT.C48;
    this[_codecs] = (() => {
      let t11 = new (T.IdentityMapOfString$Codec()).new();
      for (let codec of codecs)
        t11[$_set](codec.encodingName, codec);
      return t11;
    })();
    this[_supportedEncodings] = codecs[$map](core.String, dart.fn(c => {
      if (c.encodingName[$contains](",")) {
        dart.throw(new core.ArgumentError.value(c.encodingName, "codecs", "contains entries with names containing \",\""));
      }
      return c.encodingName;
    }, T.CodecToString()))[$join](",");
    if (this[_codecs][$length] !== codecs[$length]) {
      dart.throw(new core.ArgumentError.value(codecs, "codecs", "contains multiple entries with the same name"));
    }
  }).prototype = codec_registry.CodecRegistry.prototype;
  dart.addTypeTests(codec_registry.CodecRegistry);
  dart.addTypeCaches(codec_registry.CodecRegistry);
  dart.setMethodSignature(codec_registry.CodecRegistry, () => ({
    __proto__: dart.getMethods(codec_registry.CodecRegistry.__proto__),
    lookup: dart.fnType(dart.nullable(codec.Codec), [core.String])
  }));
  dart.setStaticMethodSignature(codec_registry.CodecRegistry, () => ['empty']);
  dart.setGetterSignature(codec_registry.CodecRegistry, () => ({
    __proto__: dart.getGetters(codec_registry.CodecRegistry.__proto__),
    supportedEncodings: core.String
  }));
  dart.setLibraryUri(codec_registry.CodecRegistry, I[10]);
  dart.setFieldSignature(codec_registry.CodecRegistry, () => ({
    __proto__: dart.getFields(codec_registry.CodecRegistry.__proto__),
    [_codecs]: dart.finalFieldType(core.Map$(core.String, codec.Codec)),
    [_supportedEncodings]: dart.finalFieldType(core.String)
  }));
  codec.Codec = class Codec extends core.Object {};
  (codec.Codec.new = function() {
    ;
  }).prototype = codec.Codec.prototype;
  dart.addTypeTests(codec.Codec);
  dart.addTypeCaches(codec.Codec);
  dart.setLibraryUri(codec.Codec, I[11]);
  const encodingName = IdentityCodec_encodingName;
  codec.IdentityCodec = class IdentityCodec extends core.Object {
    get encodingName() {
      return this[encodingName];
    }
    set encodingName(value) {
      super.encodingName = value;
    }
    static ['_#new#tearOff']() {
      return new codec.IdentityCodec.new();
    }
    compress(data) {
      return data;
    }
    decompress(data) {
      return data;
    }
  };
  (codec.IdentityCodec.new = function() {
    this[encodingName] = "identity";
    ;
  }).prototype = codec.IdentityCodec.prototype;
  dart.addTypeTests(codec.IdentityCodec);
  dart.addTypeCaches(codec.IdentityCodec);
  codec.IdentityCodec[dart.implements] = () => [codec.Codec];
  dart.setMethodSignature(codec.IdentityCodec, () => ({
    __proto__: dart.getMethods(codec.IdentityCodec.__proto__),
    compress: dart.fnType(core.List$(core.int), [core.List$(core.int)]),
    decompress: dart.fnType(core.List$(core.int), [core.List$(core.int)])
  }));
  dart.setLibraryUri(codec.IdentityCodec, I[11]);
  dart.setFieldSignature(codec.IdentityCodec, () => ({
    __proto__: dart.getFields(codec.IdentityCodec.__proto__),
    encodingName: dart.finalFieldType(core.String)
  }));
  var encodingName$ = dart.privateName(codec, "GzipCodec.encodingName");
  codec.GzipCodec = class GzipCodec extends core.Object {
    get encodingName() {
      return this[encodingName$];
    }
    set encodingName(value) {
      super.encodingName = value;
    }
    static ['_#new#tearOff']() {
      return new codec.GzipCodec.new();
    }
    compress(data) {
      return dart.nullCheck(new gzip_encoder.GZipEncoder.new().encode(data));
    }
    decompress(data) {
      return new gzip_decoder.GZipDecoder.new().decodeBytes(data);
    }
  };
  (codec.GzipCodec.new = function() {
    this[encodingName$] = "gzip";
    ;
  }).prototype = codec.GzipCodec.prototype;
  dart.addTypeTests(codec.GzipCodec);
  dart.addTypeCaches(codec.GzipCodec);
  codec.GzipCodec[dart.implements] = () => [codec.Codec];
  dart.setMethodSignature(codec.GzipCodec, () => ({
    __proto__: dart.getMethods(codec.GzipCodec.__proto__),
    compress: dart.fnType(core.List$(core.int), [core.List$(core.int)]),
    decompress: dart.fnType(core.List$(core.int), [core.List$(core.int)])
  }));
  dart.setLibraryUri(codec.GzipCodec, I[11]);
  dart.setFieldSignature(codec.GzipCodec, () => ({
    __proto__: dart.getFields(codec.GzipCodec.__proto__),
    encodingName: dart.finalFieldType(core.String)
  }));
  var path$ = dart.privateName(method, "ClientMethod.path");
  var requestSerializer$ = dart.privateName(method, "ClientMethod.requestSerializer");
  var responseDeserializer$ = dart.privateName(method, "ClientMethod.responseDeserializer");
  const _is_ClientMethod_default = Symbol('_is_ClientMethod_default');
  method.ClientMethod$ = dart.generic((Q, R) => {
    class ClientMethod extends core.Object {
      get path() {
        return this[path$];
      }
      set path(value) {
        super.path = value;
      }
      get requestSerializer() {
        return this[requestSerializer$];
      }
      set requestSerializer(value) {
        super.requestSerializer = value;
      }
      get responseDeserializer() {
        return this[responseDeserializer$];
      }
      set responseDeserializer(value) {
        super.responseDeserializer = value;
      }
      static ['_#new#tearOff'](Q, R, path, requestSerializer, responseDeserializer) {
        return new (method.ClientMethod$(Q, R)).new(path, requestSerializer, responseDeserializer);
      }
    }
    (ClientMethod.new = function(path, requestSerializer, responseDeserializer) {
      this[path$] = path;
      this[requestSerializer$] = requestSerializer;
      this[responseDeserializer$] = responseDeserializer;
      ;
    }).prototype = ClientMethod.prototype;
    dart.addTypeTests(ClientMethod);
    ClientMethod.prototype[_is_ClientMethod_default] = true;
    dart.addTypeCaches(ClientMethod);
    dart.setLibraryUri(ClientMethod, I[12]);
    dart.setFieldSignature(ClientMethod, () => ({
      __proto__: dart.getFields(ClientMethod.__proto__),
      path: dart.finalFieldType(core.String),
      requestSerializer: dart.finalFieldType(dart.fnType(core.List$(core.int), [Q])),
      responseDeserializer: dart.finalFieldType(dart.fnType(R, [core.List$(core.int)]))
    }));
    return ClientMethod;
  });
  method.ClientMethod = method.ClientMethod$();
  dart.addTypeTests(method.ClientMethod, _is_ClientMethod_default);
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  connection.ConnectionState = class ConnectionState extends core._Enum {
    toString() {
      return "ConnectionState." + this[_name];
    }
  };
  (connection.ConnectionState.new = function(index, name) {
    connection.ConnectionState.__proto__.new.call(this, index, name);
    ;
  }).prototype = connection.ConnectionState.prototype;
  dart.addTypeTests(connection.ConnectionState);
  dart.addTypeCaches(connection.ConnectionState);
  dart.setLibraryUri(connection.ConnectionState, I[13]);
  dart.setStaticFieldSignature(connection.ConnectionState, () => ['values', 'connecting', 'ready', 'transientFailure', 'idle', 'shutdown']);
  dart.defineExtensionMethods(connection.ConnectionState, ['toString']);
  connection.ConnectionState.connecting = C[50] || CT.C50;
  connection.ConnectionState.ready = C[51] || CT.C51;
  connection.ConnectionState.transientFailure = C[52] || CT.C52;
  connection.ConnectionState.idle = C[53] || CT.C53;
  connection.ConnectionState.shutdown = C[54] || CT.C54;
  connection.ConnectionState.values = C[55] || CT.C55;
  connection.ClientConnection = class ClientConnection extends core.Object {};
  (connection.ClientConnection.new = function() {
    ;
  }).prototype = connection.ClientConnection.prototype;
  dart.addTypeTests(connection.ClientConnection);
  dart.addTypeCaches(connection.ClientConnection);
  dart.setLibraryUri(connection.ClientConnection, I[13]);
  common.Response = class Response extends core.Object {};
  (common.Response.new = function() {
    ;
  }).prototype = common.Response.prototype;
  dart.addTypeTests(common.Response);
  dart.addTypeCaches(common.Response);
  dart.setLibraryUri(common.Response, I[14]);
  var _call$ = dart.privateName(common, "ResponseFuture._call");
  var _call = dart.privateName(common, "_call");
  const _is__ResponseMixin_default = Symbol('_is__ResponseMixin_default');
  common._ResponseMixin$ = dart.generic((Q, R) => {
    class _ResponseMixin extends core.Object {
      get headers() {
        return this[_call].headers;
      }
      get trailers() {
        return this[_call].trailers;
      }
      cancel() {
        return this[_call].cancel();
      }
    }
    (_ResponseMixin.new = function() {
      ;
    }).prototype = _ResponseMixin.prototype;
    dart.addTypeTests(_ResponseMixin);
    _ResponseMixin.prototype[_is__ResponseMixin_default] = true;
    dart.addTypeCaches(_ResponseMixin);
    _ResponseMixin[dart.implements] = () => [common.Response];
    dart.setMethodSignature(_ResponseMixin, () => ({
      __proto__: dart.getMethods(_ResponseMixin.__proto__),
      cancel: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setGetterSignature(_ResponseMixin, () => ({
      __proto__: dart.getGetters(_ResponseMixin.__proto__),
      headers: async.Future$(core.Map$(core.String, core.String)),
      trailers: async.Future$(core.Map$(core.String, core.String))
    }));
    dart.setLibraryUri(_ResponseMixin, I[14]);
    return _ResponseMixin;
  });
  common._ResponseMixin = common._ResponseMixin$();
  dart.addTypeTests(common._ResponseMixin, _is__ResponseMixin_default);
  const _is_ResponseFuture_default = Symbol('_is_ResponseFuture_default');
  common.ResponseFuture$ = dart.generic(R => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    const DelegatingFuture__ResponseMixin$36 = class DelegatingFuture__ResponseMixin extends future.DelegatingFuture$(R) {};
    (DelegatingFuture__ResponseMixin$36.new = function(_future) {
      DelegatingFuture__ResponseMixin$36.__proto__.new.call(this, _future);
    }).prototype = DelegatingFuture__ResponseMixin$36.prototype;
    dart.applyMixin(DelegatingFuture__ResponseMixin$36, common._ResponseMixin$(dart.dynamic, R));
    class ResponseFuture extends DelegatingFuture__ResponseMixin$36 {
      get [_call]() {
        return this[_call$];
      }
      set [_call](value) {
        super[_call] = value;
      }
      static _ensureOnlyOneResponse(R, previous, element) {
        if (previous != null) {
          dart.throw(new status$.GrpcError.unimplemented("More than one response received"));
        }
        return element;
      }
      static _ensureOneResponse(R, value) {
        if (value == null) dart.throw(new status$.GrpcError.unimplemented("No responses received"));
        return value;
      }
      static ['_#new#tearOff'](R, _call) {
        return new (common.ResponseFuture$(R)).new(_call);
      }
    }
    (ResponseFuture.new = function(_call) {
      this[_call$] = _call;
      ResponseFuture.__proto__.new.call(this, _call.response.fold(__t$RN(), null, dart.gbind(C[56] || CT.C56, R)).then(R, dart.gbind(C[57] || CT.C57, R)));
      ;
    }).prototype = ResponseFuture.prototype;
    dart.addTypeTests(ResponseFuture);
    ResponseFuture.prototype[_is_ResponseFuture_default] = true;
    dart.addTypeCaches(ResponseFuture);
    dart.setStaticMethodSignature(ResponseFuture, () => ['_ensureOnlyOneResponse', '_ensureOneResponse']);
    dart.setLibraryUri(ResponseFuture, I[14]);
    dart.setFieldSignature(ResponseFuture, () => ({
      __proto__: dart.getFields(ResponseFuture.__proto__),
      [_call]: dart.finalFieldType(call$.ClientCall$(dart.dynamic, R))
    }));
    return ResponseFuture;
  });
  common.ResponseFuture = common.ResponseFuture$();
  dart.addTypeTests(common.ResponseFuture, _is_ResponseFuture_default);
  var _call$0 = dart.privateName(common, "ResponseStream._call");
  const _is_ResponseStream_default = Symbol('_is_ResponseStream_default');
  common.ResponseStream$ = dart.generic(R => {
    var __t$ResponseFutureOfR = () => (__t$ResponseFutureOfR = dart.constFn(common.ResponseFuture$(R)))();
    const DelegatingStream__ResponseMixin$36 = class DelegatingStream__ResponseMixin extends stream.DelegatingStream$(R) {};
    (DelegatingStream__ResponseMixin$36.new = function(stream) {
      DelegatingStream__ResponseMixin$36.__proto__.new.call(this, stream);
    }).prototype = DelegatingStream__ResponseMixin$36.prototype;
    dart.applyMixin(DelegatingStream__ResponseMixin$36, common._ResponseMixin$(dart.dynamic, R));
    class ResponseStream extends DelegatingStream__ResponseMixin$36 {
      get [_call]() {
        return this[_call$0];
      }
      set [_call](value) {
        super[_call] = value;
      }
      static ['_#new#tearOff'](R, _call) {
        return new (common.ResponseStream$(R)).new(_call);
      }
      get single() {
        return new (__t$ResponseFutureOfR()).new(this[_call]);
      }
    }
    (ResponseStream.new = function(_call) {
      this[_call$0] = _call;
      ResponseStream.__proto__.new.call(this, _call.response);
      ;
    }).prototype = ResponseStream.prototype;
    dart.addTypeTests(ResponseStream);
    ResponseStream.prototype[_is_ResponseStream_default] = true;
    dart.addTypeCaches(ResponseStream);
    dart.setGetterSignature(ResponseStream, () => ({
      __proto__: dart.getGetters(ResponseStream.__proto__),
      single: common.ResponseFuture$(R)
    }));
    dart.setLibraryUri(ResponseStream, I[14]);
    dart.setFieldSignature(ResponseStream, () => ({
      __proto__: dart.getFields(ResponseStream.__proto__),
      [_call]: dart.finalFieldType(call$.ClientCall$(dart.dynamic, R))
    }));
    return ResponseStream;
  });
  common.ResponseStream = common.ResponseStream$();
  dart.addTypeTests(common.ResponseStream, _is_ResponseStream_default);
  profiler._defaultTimelineTaskFactory = function _defaultTimelineTaskFactory(opts) {
    let filterKey = opts && 'filterKey' in opts ? opts.filterKey : null;
    let parent = opts && 'parent' in opts ? opts.parent : null;
    return new developer.TimelineTask.new({filterKey: filterKey, parent: parent});
  };
  dart.defineLazy(profiler, {
    /*profiler.timelineTaskFactory*/get timelineTaskFactory() {
      return C[58] || CT.C58;
    },
    set timelineTaskFactory(_) {},
    /*profiler.clientTimelineFilterKey*/get clientTimelineFilterKey() {
      return "grpc/client";
    },
    /*profiler.isTimelineLoggingEnabled*/get isTimelineLoggingEnabled() {
      return false;
    },
    set isTimelineLoggingEnabled(_) {}
  }, false);
  channel.ClientChannel = class ClientChannel extends core.Object {};
  (channel.ClientChannel.new = function() {
    ;
  }).prototype = channel.ClientChannel.prototype;
  dart.addTypeTests(channel.ClientChannel);
  dart.addTypeCaches(channel.ClientChannel);
  dart.setLibraryUri(channel.ClientChannel, I[15]);
  var __ClientChannelBase__connection = dart.privateName(channel, "_#ClientChannelBase#_connection");
  var _connected = dart.privateName(channel, "_connected");
  var _isShutdown = dart.privateName(channel, "_isShutdown");
  var _connection = dart.privateName(channel, "_connection");
  channel.ClientChannelBase = class ClientChannelBase extends core.Object {
    get [_connection]() {
      let t12;
      t12 = this[__ClientChannelBase__connection];
      return t12 == null ? dart.throw(new _internal.LateError.fieldNI("_connection")) : t12;
    }
    set [_connection](t12) {
      this[__ClientChannelBase__connection] = t12;
    }
    shutdown() {
      return async.async(dart.void, (function* shutdown() {
        if (this[_isShutdown]) return;
        this[_isShutdown] = true;
        if (this[_connected]) {
          yield this[_connection].shutdown();
        }
      }).bind(this));
    }
    terminate() {
      return async.async(dart.void, (function* terminate() {
        this[_isShutdown] = true;
        if (this[_connected]) {
          yield this[_connection].terminate();
        }
      }).bind(this));
    }
    getConnection() {
      return async.async(connection.ClientConnection, (function* getConnection() {
        if (this[_isShutdown]) dart.throw(new status$.GrpcError.unavailable("Channel shutting down."));
        if (!this[_connected]) {
          this[_connection] = this.createConnection();
          this[_connected] = true;
        }
        return this[_connection];
      }).bind(this));
    }
    createCall(Q, R, method, requests, options) {
      let call = new (call$.ClientCall$(Q, R)).new(method, requests, options, profiler.isTimelineLoggingEnabled ? profiler.timelineTaskFactory({filterKey: "grpc/client"}) : null);
      this.getConnection().then(core.Null, dart.fn(connection => {
        if (call.isCancelled) return;
        connection.dispatchCall(call);
      }, T.ClientConnectionToNull()), {onError: dart.bind(call, 'onConnectionError')});
      return call;
    }
  };
  (channel.ClientChannelBase.new = function() {
    this[__ClientChannelBase__connection] = null;
    this[_connected] = false;
    this[_isShutdown] = false;
    ;
  }).prototype = channel.ClientChannelBase.prototype;
  dart.addTypeTests(channel.ClientChannelBase);
  dart.addTypeCaches(channel.ClientChannelBase);
  channel.ClientChannelBase[dart.implements] = () => [channel.ClientChannel];
  dart.setMethodSignature(channel.ClientChannelBase, () => ({
    __proto__: dart.getMethods(channel.ClientChannelBase.__proto__),
    shutdown: dart.fnType(async.Future$(dart.void), []),
    terminate: dart.fnType(async.Future$(dart.void), []),
    getConnection: dart.fnType(async.Future$(connection.ClientConnection), []),
    createCall: dart.gFnType((Q, R) => [call$.ClientCall$(Q, R), [method.ClientMethod$(Q, R), async.Stream$(Q), call$.CallOptions]], (Q, R) => [dart.nullable(core.Object), dart.nullable(core.Object)])
  }));
  dart.setGetterSignature(channel.ClientChannelBase, () => ({
    __proto__: dart.getGetters(channel.ClientChannelBase.__proto__),
    [_connection]: connection.ClientConnection
  }));
  dart.setSetterSignature(channel.ClientChannelBase, () => ({
    __proto__: dart.getSetters(channel.ClientChannelBase.__proto__),
    [_connection]: connection.ClientConnection
  }));
  dart.setLibraryUri(channel.ClientChannelBase, I[15]);
  dart.setFieldSignature(channel.ClientChannelBase, () => ({
    __proto__: dart.getFields(channel.ClientChannelBase.__proto__),
    [__ClientChannelBase__connection]: dart.fieldType(dart.nullable(connection.ClientConnection)),
    [_connected]: dart.fieldType(core.bool),
    [_isShutdown]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/grpc/src/client/call", {
    "package:grpc/src/generated/google/rpc/status.pb.dart": status$46pb,
    "package:grpc/src/generated/google/protobuf/any.pb.dart": any$46pb,
    "package:grpc/src/generated/google/rpc/error_details.pb.dart": error_details$46pb,
    "package:grpc/src/generated/google/protobuf/duration.pb.dart": duration$46pb,
    "package:grpc/src/client/call.dart": call$,
    "package:grpc/src/client/transport/transport.dart": transport,
    "package:grpc/src/shared/message.dart": message,
    "package:grpc/src/shared/status.dart": status$,
    "package:grpc/src/shared/io_bits/io_bits.dart": io_bits,
    "package:grpc/src/shared/io_bits/io_bits_web.dart": io_bits_web,
    "package:grpc/src/generated/google/rpc/code.pbenum.dart": code$46pbenum,
    "package:grpc/src/shared/codec_registry.dart": codec_registry,
    "package:grpc/src/shared/codec.dart": codec,
    "package:grpc/src/client/method.dart": method,
    "package:grpc/src/client/connection.dart": connection,
    "package:grpc/src/client/common.dart": common,
    "package:grpc/src/shared/profiler.dart": profiler,
    "package:grpc/src/client/channel.dart": channel
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../generated/google/rpc/status.pb.dart","../generated/google/protobuf/any.pb.dart","../generated/google/rpc/error_details.pb.dart","../generated/google/protobuf/duration.pb.dart","call.dart","transport/transport.dart","../shared/message.dart","../shared/status.dart","../shared/io_bits/io_bits_web.dart","../generated/google/rpc/code.pbenum.dart","../shared/codec_registry.dart","../shared/codec.dart","method.dart","connection.dart","common.dart","../shared/profiler.dart","channel.dart"],"names":[],"mappings":"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","file":"call.sound.ddc.js"}');
  // Exports:
  return {
    src__generated__google__rpc__status$46pb: status$46pb,
    src__generated__google__protobuf__any$46pb: any$46pb,
    src__generated__google__rpc__error_details$46pb: error_details$46pb,
    src__generated__google__protobuf__duration$46pb: duration$46pb,
    src__client__call: call$,
    src__client__transport__transport: transport,
    src__shared__message: message,
    src__shared__status: status$,
    src__shared__io_bits__io_bits: io_bits,
    src__shared__io_bits__io_bits_web: io_bits_web,
    src__generated__google__rpc__code$46pbenum: code$46pbenum,
    src__shared__codec_registry: codec_registry,
    src__shared__codec: codec,
    src__client__method: method,
    src__client__connection: connection,
    src__client__common: common,
    src__shared__profiler: profiler,
    src__client__channel: channel
  };
}));

//# sourceMappingURL=call.sound.ddc.js.map
