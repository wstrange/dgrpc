define(['dart_sdk', 'packages/fixnum/fixnum'], (function load__packages__protobuf__protobuf(dart_sdk, packages__fixnum__fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fixnum = packages__fixnum__fixnum.fixnum;
  var protobuf = Object.create(dart.library);
  var type_registry = Object.create(dart.library);
  var permissive_compare = Object.create(dart.library);
  var json_parsing_context = Object.create(dart.library);
  var $length = dartx.length;
  var $getUint32 = dartx.getUint32;
  var $getInt32 = dartx.getInt32;
  var $buffer = dartx.buffer;
  var $offsetInBytes = dartx.offsetInBytes;
  var $getFloat32 = dartx.getFloat32;
  var $getFloat64 = dartx.getFloat64;
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  var $leftShift = dartx['<<'];
  var $_set = dartx._set;
  var $add = dartx.add;
  var $lengthInBytes = dartx.lengthInBytes;
  var $isNaN = dartx.isNaN;
  var $setFloat64 = dartx.setFloat64;
  var $abs = dartx.abs;
  var $isNegative = dartx.isNegative;
  var $isInfinite = dartx.isInfinite;
  var $setFloat32 = dartx.setFloat32;
  var $setInt32 = dartx.setInt32;
  var $_equals = dartx._equals;
  var $containsKey = dartx.containsKey;
  var $lastIndexOf = dartx.lastIndexOf;
  var $substring = dartx.substring;
  var $values = dartx.values;
  var $compareTo = dartx.compareTo;
  var $sort = dartx.sort;
  var $hashCode = dartx.hashCode;
  var $isEmpty = dartx.isEmpty;
  var $every = dartx.every;
  var $isNotEmpty = dartx.isNotEmpty;
  var $remove = dartx.remove;
  var $keys = dartx.keys;
  var $clear = dartx.clear;
  var $addAll = dartx.addAll;
  var $putIfAbsent = dartx.putIfAbsent;
  var $forEach = dartx.forEach;
  var $entries = dartx.entries;
  var $fold = dartx.fold;
  var $fillRange = dartx.fillRange;
  var $where = dartx.where;
  var $getUint64 = dartx.getUint64;
  var $toList = dartx.toList;
  var $toString = dartx.toString;
  var $setRange = dartx.setRange;
  var $join = dartx.join;
  var $iterator = dartx.iterator;
  var $map = dartx.map;
  var $expand = dartx.expand;
  var $contains = dartx.contains;
  var $reduce = dartx.reduce;
  var $any = dartx.any;
  var $toSet = dartx.toSet;
  var $take = dartx.take;
  var $takeWhile = dartx.takeWhile;
  var $skip = dartx.skip;
  var $skipWhile = dartx.skipWhile;
  var $first = dartx.first;
  var $last = dartx.last;
  var $single = dartx.single;
  var $firstWhere = dartx.firstWhere;
  var $lastWhere = dartx.lastWhere;
  var $elementAt = dartx.elementAt;
  var $indexOf = dartx.indexOf;
  var $sublist = dartx.sublist;
  var $getRange = dartx.getRange;
  var $asMap = dartx.asMap;
  var $reversed = dartx.reversed;
  var $shuffle = dartx.shuffle;
  var $insert = dartx.insert;
  var $insertAll = dartx.insertAll;
  var $setAll = dartx.setAll;
  var $removeAt = dartx.removeAt;
  var $removeLast = dartx.removeLast;
  var $removeWhere = dartx.removeWhere;
  var $retainWhere = dartx.retainWhere;
  var $removeRange = dartx.removeRange;
  var $replaceRange = dartx.replaceRange;
  var $startsWith = dartx.startsWith;
  var $toLowerCase = dartx.toLowerCase;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $toDouble = dartx.toDouble;
  var $codeUnitAt = dartx.codeUnitAt;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    dynamicAnddynamicToNull: () => (T$.dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))(),
    ListOfint: () => (T$.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfFieldInfo: () => (T$.JSArrayOfFieldInfo = dart.constFn(_interceptors.JSArray$(protobuf.FieldInfo)))(),
    IdentityMapOfint$FieldInfo: () => (T$.IdentityMapOfint$FieldInfo = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.FieldInfo)))(),
    IdentityMapOfString$FieldInfo: () => (T$.IdentityMapOfString$FieldInfo = dart.constFn(_js_helper.IdentityMap$(core.String, protobuf.FieldInfo)))(),
    IdentityMapOfint$int: () => (T$.IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ObjectNTovoid: () => (T$.ObjectNTovoid = dart.constFn(dart.fnType(dart.void, [T$.ObjectN()])))(),
    ListOfFieldInfo: () => (T$.ListOfFieldInfo = dart.constFn(core.List$(protobuf.FieldInfo)))(),
    FieldInfoAndFieldInfoToint: () => (T$.FieldInfoAndFieldInfoToint = dart.constFn(dart.fnType(core.int, [protobuf.FieldInfo, protobuf.FieldInfo])))(),
    VoidTodynamic: () => (T$.VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))(),
    ListOfGeneratedMessage: () => (T$.ListOfGeneratedMessage = dart.constFn(core.List$(protobuf.GeneratedMessage)))(),
    GeneratedMessageTobool: () => (T$.GeneratedMessageTobool = dart.constFn(dart.fnType(core.bool, [protobuf.GeneratedMessage])))(),
    IdentityMapOfint$Extension: () => (T$.IdentityMapOfint$Extension = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.Extension)))(),
    IdentityMapOfint$dynamic: () => (T$.IdentityMapOfint$dynamic = dart.constFn(_js_helper.IdentityMap$(core.int, dart.dynamic)))(),
    IterableOfObjectN: () => (T$.IterableOfObjectN = dart.constFn(core.Iterable$(T$.ObjectN())))(),
    MapOfint$Extension: () => (T$.MapOfint$Extension = dart.constFn(core.Map$(core.int, protobuf.Extension)))(),
    IdentityMapOfString$MapOfint$Extension: () => (T$.IdentityMapOfString$MapOfint$Extension = dart.constFn(_js_helper.IdentityMap$(core.String, T$.MapOfint$Extension())))(),
    VoidToMapOfint$Extension: () => (T$.VoidToMapOfint$Extension = dart.constFn(dart.fnType(T$.MapOfint$Extension(), [])))(),
    IterableOfGeneratedMessage: () => (T$.IterableOfGeneratedMessage = dart.constFn(core.Iterable$(protobuf.GeneratedMessage)))(),
    PbMapN: () => (T$.PbMapN = dart.constFn(dart.nullable(protobuf.PbMap)))(),
    dynamicTodynamic: () => (T$.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    intAndFieldInfoAnddynamicToint: () => (T$.intAndFieldInfoAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, protobuf.FieldInfo, dart.dynamic])))(),
    FieldInfoTobool: () => (T$.FieldInfoTobool = dart.constFn(dart.fnType(core.bool, [protobuf.FieldInfo])))(),
    intAndFieldInfoToint: () => (T$.intAndFieldInfoToint = dart.constFn(dart.fnType(core.int, [core.int, protobuf.FieldInfo])))(),
    intAndintToint: () => (T$.intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))(),
    intToint: () => (T$.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    dynamicAnddynamicTovoid: () => (T$.dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))(),
    dynamicAndStringTovoid: () => (T$.dynamicAndStringTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.String])))(),
    intTovoid: () => (T$.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    PbListBaseOfGeneratedMessage: () => (T$.PbListBaseOfGeneratedMessage = dart.constFn(protobuf.PbListBase$(protobuf.GeneratedMessage)))(),
    PbListBaseN: () => (T$.PbListBaseN = dart.constFn(dart.nullable(protobuf.PbListBase)))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    VoidToListOfint: () => (T$.VoidToListOfint = dart.constFn(dart.fnType(T$.ListOfint(), [])))(),
    VoidToString: () => (T$.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    VoidTodouble: () => (T$.VoidTodouble = dart.constFn(dart.fnType(core.double, [])))(),
    VoidToint: () => (T$.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    JSArrayOfint: () => (T$.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicAnddynamicTodynamic: () => (T$.dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))(),
    MapOfString$dynamic: () => (T$.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    FunctionN: () => (T$.FunctionN = dart.constFn(dart.nullable(core.Function)))(),
    LinkedMapOfFunctionN$Function: () => (T$.LinkedMapOfFunctionN$Function = dart.constFn(_js_helper.LinkedMap$(T$.FunctionN(), core.Function)))(),
    IdentityMapOfint$UnknownFieldSetField: () => (T$.IdentityMapOfint$UnknownFieldSetField = dart.constFn(_js_helper.IdentityMap$(core.int, protobuf.UnknownFieldSetField)))(),
    LinkedHashMapOfint$UnknownFieldSetField: () => (T$.LinkedHashMapOfint$UnknownFieldSetField = dart.constFn(collection.LinkedHashMap$(core.int, protobuf.UnknownFieldSetField)))(),
    VoidToUnknownFieldSetField: () => (T$.VoidToUnknownFieldSetField = dart.constFn(dart.fnType(protobuf.UnknownFieldSetField, [])))(),
    intAndObjectTovoid: () => (T$.intAndObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.Object])))(),
    JSArrayOfListOfint: () => (T$.JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(T$.ListOfint())))(),
    JSArrayOfInt64: () => (T$.JSArrayOfInt64 = dart.constFn(_interceptors.JSArray$(fixnum.Int64)))(),
    JSArrayOfUnknownFieldSet: () => (T$.JSArrayOfUnknownFieldSet = dart.constFn(_interceptors.JSArray$(protobuf.UnknownFieldSet)))(),
    ListOfListOfint: () => (T$.ListOfListOfint = dart.constFn(core.List$(T$.ListOfint())))(),
    ListOfInt64: () => (T$.ListOfInt64 = dart.constFn(core.List$(fixnum.Int64)))(),
    ListOfUnknownFieldSet: () => (T$.ListOfUnknownFieldSet = dart.constFn(core.List$(protobuf.UnknownFieldSet)))(),
    intAnddynamicToint: () => (T$.intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))(),
    ListTovoid: () => (T$.ListTovoid = dart.constFn(dart.fnType(dart.void, [core.List])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    VoidToUnknownFieldSet: () => (T$.VoidToUnknownFieldSet = dart.constFn(dart.fnType(protobuf.UnknownFieldSet, [])))(),
    intAndExtensionTovoid: () => (T$.intAndExtensionTovoid = dart.constFn(dart.fnType(dart.void, [core.int, protobuf.Extension])))(),
    PbListN: () => (T$.PbListN = dart.constFn(dart.nullable(protobuf.PbList)))(),
    VoidToPbList: () => (T$.VoidToPbList = dart.constFn(dart.fnType(protobuf.PbList, [])))(),
    VoidToPbMap: () => (T$.VoidToPbMap = dart.constFn(dart.fnType(protobuf.PbMap, [])))(),
    MatchToString: () => (T$.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    dynamicAndintTodynamic: () => (T$.dynamicAndintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, core.int])))(),
    IdentityMapOfString$dynamic: () => (T$.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    MapEntryToMapOfString$dynamic: () => (T$.MapEntryToMapOfString$dynamic = dart.constFn(dart.fnType(T$.MapOfString$dynamic(), [core.MapEntry])))(),
    dynamicAndMapFieldInfoToList: () => (T$.dynamicAndMapFieldInfoToList = dart.constFn(dart.fnType(core.List, [dart.dynamic, protobuf.MapFieldInfo])))(),
    StringN: () => (T$.StringN = dart.constFn(dart.nullable(core.String)))(),
    dynamicAndintToStringN: () => (T$.dynamicAndintToStringN = dart.constFn(dart.fnType(T$.StringN(), [dart.dynamic, core.int])))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    dynamicAndintNToObjectN: () => (T$.dynamicAndintNToObjectN = dart.constFn(dart.fnType(T$.ObjectN(), [dart.dynamic, T$.intN()])))(),
    MapEntryOfStringN$ObjectN: () => (T$.MapEntryOfStringN$ObjectN = dart.constFn(core.MapEntry$(T$.StringN(), T$.ObjectN())))(),
    dynamicAnddynamicToMapEntryOfStringN$ObjectN: () => (T$.dynamicAnddynamicToMapEntryOfStringN$ObjectN = dart.constFn(dart.fnType(T$.MapEntryOfStringN$ObjectN(), [dart.dynamic, dart.dynamic])))(),
    dynamicToObjectN: () => (T$.dynamicToObjectN = dart.constFn(dart.fnType(T$.ObjectN(), [dart.dynamic])))(),
    StringToint: () => (T$.StringToint = dart.constFn(dart.fnType(core.int, [core.String])))(),
    StringToInt64: () => (T$.StringToInt64 = dart.constFn(dart.fnType(fixnum.Int64, [core.String])))(),
    ProtobufEnumTobool: () => (T$.ProtobufEnumTobool = dart.constFn(dart.fnType(core.bool, [protobuf.ProtobufEnum])))(),
    ObjectNAndFieldInfoToObjectN: () => (T$.ObjectNAndFieldInfoToObjectN = dart.constFn(dart.fnType(T$.ObjectN(), [T$.ObjectN(), protobuf.FieldInfo])))(),
    StringAndintToObject: () => (T$.StringAndintToObject = dart.constFn(dart.fnType(core.Object, [core.String, core.int])))(),
    GeneratedMessageN: () => (T$.GeneratedMessageN = dart.constFn(dart.nullable(protobuf.GeneratedMessage)))(),
    dynamicAndObjectNTovoid: () => (T$.dynamicAndObjectNTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, T$.ObjectN()])))(),
    ObjectNAnd_FieldSetTovoid: () => (T$.ObjectNAnd_FieldSetTovoid = dart.constFn(dart.fnType(dart.void, [T$.ObjectN(), protobuf._FieldSet])))(),
    dynamicTobool: () => (T$.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    dynamicToUint8List: () => (T$.dynamicToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [dart.dynamic])))(),
    StringAndStringNTovoid: () => (T$.StringAndStringNTovoid = dart.constFn(dart.fnType(dart.void, [core.String], [T$.StringN()])))(),
    MapOfString$BuilderInfo: () => (T$.MapOfString$BuilderInfo = dart.constFn(core.Map$(core.String, protobuf.BuilderInfo)))(),
    MapEntryOfString$BuilderInfo: () => (T$.MapEntryOfString$BuilderInfo = dart.constFn(core.MapEntry$(core.String, protobuf.BuilderInfo)))(),
    GeneratedMessageToMapEntryOfString$BuilderInfo: () => (T$.GeneratedMessageToMapEntryOfString$BuilderInfo = dart.constFn(dart.fnType(T$.MapEntryOfString$BuilderInfo(), [protobuf.GeneratedMessage])))(),
    StringToString: () => (T$.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: protobuf.PackageName.prototype,
        [PackageName_name]: ""
      });
    },
    get C1() {
      return C[1] = dart.fn(protobuf._checkNotNull, T$.ObjectNTovoid());
    },
    get C2() {
      return C[2] = dart.constList([], dart.dynamic);
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: protobuf._EmptyExtensionRegistry.prototype
      });
    },
    get C4() {
      return C[4] = dart.constMap(core.String, T$.MapOfint$Extension(), []);
    },
    get C5() {
      return C[5] = dart.constList([], dart.Never);
    },
    get C6() {
      return C[6] = dart.fn(protobuf.PbFieldType._BOOL_FALSE, T$.VoidTobool());
    },
    get C7() {
      return C[7] = dart.fn(protobuf.PbFieldType._BYTES_EMPTY, T$.VoidToListOfint());
    },
    get C8() {
      return C[8] = dart.fn(protobuf.PbFieldType._STRING_EMPTY, T$.VoidToString());
    },
    get C9() {
      return C[9] = dart.fn(protobuf.PbFieldType._DOUBLE_ZERO, T$.VoidTodouble());
    },
    get C10() {
      return C[10] = dart.fn(protobuf.PbFieldType._INT_ZERO, T$.VoidToint());
    },
    get C12() {
      return C[12] = dart.constMap(core.String, protobuf.BuilderInfo, []);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: type_registry.TypeRegistry.prototype,
        [TypeRegistry__mapping]: C[12] || CT.C12
      });
    },
    get C13() {
      return C[13] = dart.fn(protobuf.GeneratedMessage._emptyReviver, T$.dynamicAnddynamicTodynamic());
    },
    get C14() {
      return C[14] = dart.fn(protobuf._checkFloat, T$.ObjectNTovoid());
    },
    get C15() {
      return C[15] = dart.fn(protobuf._checkSigned32, T$.ObjectNTovoid());
    },
    get C16() {
      return C[16] = dart.fn(protobuf._checkUnsigned32, T$.ObjectNTovoid());
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: true
      });
    },
    get C18() {
      return C[18] = dart.fn(protobuf.defaultFrozenMessageModificationHandler, T$.StringAndStringNTovoid());
    }
  }, false);
  var C = Array(19).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/protobuf/src/protobuf/coded_buffer_reader.dart",
    "package:protobuf/protobuf.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/builder_info.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/field_info.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/extension_field_set.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/field_set.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/unknown_field_set.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/json.dart",
    "org-dartlang-app:///packages/protobuf/src/protobuf/proto3_json.dart",
    "package:protobuf/src/protobuf/type_registry.dart",
    "package:protobuf/src/protobuf/json_parsing_context.dart"
  ];
  var _bufferPos = dart.privateName(protobuf, "_bufferPos");
  var _currentLimit = dart.privateName(protobuf, "_currentLimit");
  var _lastTag = dart.privateName(protobuf, "_lastTag");
  var _recursionDepth = dart.privateName(protobuf, "_recursionDepth");
  var _buffer = dart.privateName(protobuf, "_buffer");
  var _recursionLimit = dart.privateName(protobuf, "_recursionLimit");
  var _sizeLimit = dart.privateName(protobuf, "_sizeLimit");
  var _withLimit = dart.privateName(protobuf, "_withLimit");
  var _checkLimit = dart.privateName(protobuf, "_checkLimit");
  var _readRawVarint32 = dart.privateName(protobuf, "_readRawVarint32");
  var _readRawVarint64 = dart.privateName(protobuf, "_readRawVarint64");
  var _readByteData = dart.privateName(protobuf, "_readByteData");
  var _readRawVarintByte = dart.privateName(protobuf, "_readRawVarintByte");
  protobuf.CodedBufferReader = class CodedBufferReader extends core.Object {
    static ['_#new#tearOff'](buffer, opts) {
      let recursionLimit = opts && 'recursionLimit' in opts ? opts.recursionLimit : 64;
      let sizeLimit = opts && 'sizeLimit' in opts ? opts.sizeLimit : 67108864;
      return new protobuf.CodedBufferReader.new(buffer, {recursionLimit: recursionLimit, sizeLimit: sizeLimit});
    }
    checkLastTagWas(value) {
      if (this[_lastTag] !== value) {
        dart.throw(new protobuf.InvalidProtocolBufferException.invalidEndTag());
      }
    }
    isAtEnd() {
      return this[_bufferPos] >= this[_currentLimit];
    }
    [_withLimit](byteLimit, callback) {
      if (byteLimit < 0) {
        dart.throw(new core.ArgumentError.new("CodedBufferReader encountered an embedded string or message" + " which claimed to have negative size."));
      }
      byteLimit = byteLimit + this[_bufferPos];
      let oldLimit = this[_currentLimit];
      if (oldLimit !== -1 && byteLimit > oldLimit || byteLimit > this[_sizeLimit]) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
      this[_currentLimit] = byteLimit;
      dart.dcall(callback, []);
      this[_currentLimit] = oldLimit;
    }
    [_checkLimit](increment) {
      if (!(this[_currentLimit] !== -1)) dart.assertFailed(null, I[0], 55, 12, "_currentLimit != -1");
      this[_bufferPos] = this[_bufferPos] + increment;
      if (this[_bufferPos] > this[_currentLimit]) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
    }
    readGroup(fieldNumber, message, extensionRegistry) {
      if (this[_recursionDepth] >= this[_recursionLimit]) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      this[_recursionDepth] = this[_recursionDepth] + 1;
      message.mergeFromCodedBufferReader(this, extensionRegistry);
      this.checkLastTagWas(protobuf.makeTag(fieldNumber, 4));
      this[_recursionDepth] = this[_recursionDepth] - 1;
    }
    readUnknownFieldSetGroup(fieldNumber) {
      if (this[_recursionDepth] >= this[_recursionLimit]) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      this[_recursionDepth] = this[_recursionDepth] + 1;
      let unknownFieldSet = new protobuf.UnknownFieldSet.new();
      unknownFieldSet.mergeFromCodedBufferReader(this);
      this.checkLastTagWas(protobuf.makeTag(fieldNumber, 4));
      this[_recursionDepth] = this[_recursionDepth] - 1;
      return unknownFieldSet;
    }
    readMessage(message, extensionRegistry) {
      let length = this.readInt32();
      if (this[_recursionDepth] >= this[_recursionLimit]) {
        dart.throw(new protobuf.InvalidProtocolBufferException.recursionLimitExceeded());
      }
      if (length < 0) {
        dart.throw(new core.ArgumentError.new("CodedBufferReader encountered an embedded string or message" + " which claimed to have negative size."));
      }
      let oldLimit = this[_currentLimit];
      this[_currentLimit] = this[_bufferPos] + length;
      if (this[_currentLimit] > oldLimit) {
        dart.throw(new protobuf.InvalidProtocolBufferException.truncatedMessage());
      }
      this[_recursionDepth] = this[_recursionDepth] + 1;
      message.mergeFromCodedBufferReader(this, extensionRegistry);
      this.checkLastTagWas(0);
      this[_recursionDepth] = this[_recursionDepth] - 1;
      this[_currentLimit] = oldLimit;
    }
    readEnum() {
      return this.readInt32();
    }
    readInt32() {
      return this[_readRawVarint32](true);
    }
    readInt64() {
      return this[_readRawVarint64]();
    }
    readUint32() {
      return this[_readRawVarint32](false);
    }
    readUint64() {
      return this[_readRawVarint64]();
    }
    readSint32() {
      return protobuf.CodedBufferReader._decodeZigZag32(this.readUint32());
    }
    readSint64() {
      return protobuf.CodedBufferReader._decodeZigZag64(this.readUint64());
    }
    readFixed32() {
      return this[_readByteData](4)[$getUint32](0, typed_data.Endian.little);
    }
    readFixed64() {
      return this.readSfixed64();
    }
    readSfixed32() {
      return this[_readByteData](4)[$getInt32](0, typed_data.Endian.little);
    }
    readSfixed64() {
      let data = this[_readByteData](8);
      let view = typed_data.Uint8List.view(data[$buffer], data[$offsetInBytes], 8);
      return fixnum.Int64.fromBytes(view);
    }
    readBool() {
      return this[_readRawVarint32](true) !== 0;
    }
    readBytes() {
      let length = this.readInt32();
      this[_checkLimit](length);
      return typed_data.Uint8List.view(this[_buffer][$buffer], this[_buffer][$offsetInBytes] + this[_bufferPos] - length, length);
    }
    readString() {
      return protobuf._utf8.decode(this.readBytes());
    }
    readFloat() {
      return this[_readByteData](4)[$getFloat32](0, typed_data.Endian.little);
    }
    readDouble() {
      return this[_readByteData](8)[$getFloat64](0, typed_data.Endian.little);
    }
    readTag() {
      if (this.isAtEnd()) {
        this[_lastTag] = 0;
        return 0;
      }
      this[_lastTag] = this.readUint32();
      if (protobuf.getTagFieldNumber(this[_lastTag]) === 0) {
        dart.throw(new protobuf.InvalidProtocolBufferException.invalidTag());
      }
      return this[_lastTag];
    }
    static _decodeZigZag32(value) {
      if ((value & 1) === 1) {
        return -value[$rightShift](1) - 1;
      } else {
        return value[$rightShift](1);
      }
    }
    static _decodeZigZag64(value) {
      if (value['&'](1)._equals(1)) value = value._negate();
      return value['>>'](1);
    }
    [_readRawVarintByte]() {
      this[_checkLimit](1);
      return this[_buffer][$_get](this[_bufferPos] - 1);
    }
    [_readRawVarint32](signed) {
      let t0;
      let bufferPos = this[_bufferPos];
      let bytes = this[_currentLimit] - bufferPos;
      if (bytes > 10) bytes = 10;
      let result = 0;
      for (let i = 0; i < bytes; i = i + 1) {
        let byte = this[_buffer][$_get]((t0 = bufferPos, bufferPos = t0 + 1, t0));
        result = (result | (byte & 127)[$leftShift](i * 7)) >>> 0;
        if ((byte & 128) === 0) {
          result = (result & 4294967295) >>> 0;
          this[_bufferPos] = bufferPos;
          return signed ? result - 2 * ((2147483648 & result) >>> 0) : result;
        }
      }
      this[_bufferPos] = bufferPos;
      dart.throw(new protobuf.InvalidProtocolBufferException.malformedVarint());
    }
    [_readRawVarint64]() {
      let lo = 0;
      let hi = 0;
      for (let i = 0; i < 4; i = i + 1) {
        let byte = this[_readRawVarintByte]();
        lo = (lo | (byte & 127)[$leftShift](i * 7)) >>> 0;
        if ((byte & 128) === 0) return fixnum.Int64.fromInts(hi, lo);
      }
      let byte = this[_readRawVarintByte]();
      lo = (lo | (byte & 15) << 28 >>> 0) >>> 0;
      hi = byte >> 4 & 7;
      if ((byte & 128) === 0) {
        return fixnum.Int64.fromInts(hi, lo);
      }
      for (let i = 0; i < 5; i = i + 1) {
        let byte = this[_readRawVarintByte]();
        hi = (hi | (byte & 127)[$leftShift](i * 7 + 3)) >>> 0;
        if ((byte & 128) === 0) return fixnum.Int64.fromInts(hi, lo);
      }
      dart.throw(new protobuf.InvalidProtocolBufferException.malformedVarint());
    }
    [_readByteData](sizeInBytes) {
      this[_checkLimit](sizeInBytes);
      return typed_data.ByteData.view(this[_buffer][$buffer], this[_buffer][$offsetInBytes] + this[_bufferPos] - sizeInBytes, sizeInBytes);
    }
  };
  (protobuf.CodedBufferReader.new = function(buffer, opts) {
    let recursionLimit = opts && 'recursionLimit' in opts ? opts.recursionLimit : 64;
    let sizeLimit = opts && 'sizeLimit' in opts ? opts.sizeLimit : 67108864;
    this[_bufferPos] = 0;
    this[_currentLimit] = -1;
    this[_lastTag] = 0;
    this[_recursionDepth] = 0;
    this[_buffer] = typed_data.Uint8List.is(buffer) ? buffer : _native_typed_data.NativeUint8List.fromList(buffer);
    this[_recursionLimit] = recursionLimit;
    this[_sizeLimit] = math.min(core.int, sizeLimit, buffer[$length]);
    this[_currentLimit] = this[_sizeLimit];
  }).prototype = protobuf.CodedBufferReader.prototype;
  dart.addTypeTests(protobuf.CodedBufferReader);
  dart.addTypeCaches(protobuf.CodedBufferReader);
  dart.setMethodSignature(protobuf.CodedBufferReader, () => ({
    __proto__: dart.getMethods(protobuf.CodedBufferReader.__proto__),
    checkLastTagWas: dart.fnType(dart.void, [core.int]),
    isAtEnd: dart.fnType(core.bool, []),
    [_withLimit]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_checkLimit]: dart.fnType(dart.void, [core.int]),
    readGroup: dart.fnType(dart.void, [core.int, protobuf.GeneratedMessage, protobuf.ExtensionRegistry]),
    readUnknownFieldSetGroup: dart.fnType(protobuf.UnknownFieldSet, [core.int]),
    readMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage, protobuf.ExtensionRegistry]),
    readEnum: dart.fnType(core.int, []),
    readInt32: dart.fnType(core.int, []),
    readInt64: dart.fnType(fixnum.Int64, []),
    readUint32: dart.fnType(core.int, []),
    readUint64: dart.fnType(fixnum.Int64, []),
    readSint32: dart.fnType(core.int, []),
    readSint64: dart.fnType(fixnum.Int64, []),
    readFixed32: dart.fnType(core.int, []),
    readFixed64: dart.fnType(fixnum.Int64, []),
    readSfixed32: dart.fnType(core.int, []),
    readSfixed64: dart.fnType(fixnum.Int64, []),
    readBool: dart.fnType(core.bool, []),
    readBytes: dart.fnType(core.List$(core.int), []),
    readString: dart.fnType(core.String, []),
    readFloat: dart.fnType(core.double, []),
    readDouble: dart.fnType(core.double, []),
    readTag: dart.fnType(core.int, []),
    [_readRawVarintByte]: dart.fnType(core.int, []),
    [_readRawVarint32]: dart.fnType(core.int, [core.bool]),
    [_readRawVarint64]: dart.fnType(fixnum.Int64, []),
    [_readByteData]: dart.fnType(typed_data.ByteData, [core.int])
  }));
  dart.setStaticMethodSignature(protobuf.CodedBufferReader, () => ['_decodeZigZag32', '_decodeZigZag64']);
  dart.setLibraryUri(protobuf.CodedBufferReader, I[1]);
  dart.setFieldSignature(protobuf.CodedBufferReader, () => ({
    __proto__: dart.getFields(protobuf.CodedBufferReader.__proto__),
    [_buffer]: dart.finalFieldType(typed_data.Uint8List),
    [_bufferPos]: dart.fieldType(core.int),
    [_currentLimit]: dart.fieldType(core.int),
    [_lastTag]: dart.fieldType(core.int),
    [_recursionDepth]: dart.fieldType(core.int),
    [_recursionLimit]: dart.finalFieldType(core.int),
    [_sizeLimit]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(protobuf.CodedBufferReader, () => ['DEFAULT_RECURSION_LIMIT', 'DEFAULT_SIZE_LIMIT']);
  dart.defineLazy(protobuf.CodedBufferReader, {
    /*protobuf.CodedBufferReader.DEFAULT_RECURSION_LIMIT*/get DEFAULT_RECURSION_LIMIT() {
      return 64;
    },
    /*protobuf.CodedBufferReader.DEFAULT_SIZE_LIMIT*/get DEFAULT_SIZE_LIMIT() {
      return 67108864;
    }
  }, false);
  var _splices = dart.privateName(protobuf, "_splices");
  var _lastSplicePos = dart.privateName(protobuf, "_lastSplicePos");
  var _outputChunk = dart.privateName(protobuf, "_outputChunk");
  var _bytesInChunk = dart.privateName(protobuf, "_bytesInChunk");
  var _outputChunkAsByteData = dart.privateName(protobuf, "_outputChunkAsByteData");
  var _outputChunks = dart.privateName(protobuf, "_outputChunks");
  var _outputChunksBytes = dart.privateName(protobuf, "_outputChunksBytes");
  var _bytesTotal = dart.privateName(protobuf, "_bytesTotal");
  var _commitChunk = dart.privateName(protobuf, "_commitChunk");
  var _writeTag = dart.privateName(protobuf, "_writeTag");
  var _startLengthDelimited = dart.privateName(protobuf, "_startLengthDelimited");
  var _writeValueAs = dart.privateName(protobuf, "_writeValueAs");
  var _endLengthDelimited = dart.privateName(protobuf, "_endLengthDelimited");
  var _writeValue = dart.privateName(protobuf, "_writeValue");
  var _commitSplice = dart.privateName(protobuf, "_commitSplice");
  var _copyInto = dart.privateName(protobuf, "_copyInto");
  var _ensureBytes = dart.privateName(protobuf, "_ensureBytes");
  var _varint32LengthInBytes = dart.privateName(protobuf, "_varint32LengthInBytes");
  var _writeVarint32 = dart.privateName(protobuf, "_writeVarint32");
  var _writeVarint64 = dart.privateName(protobuf, "_writeVarint64");
  var _writeInt32 = dart.privateName(protobuf, "_writeInt32");
  var _writeDouble = dart.privateName(protobuf, "_writeDouble");
  var _writeFloat = dart.privateName(protobuf, "_writeFloat");
  var _writeInt64 = dart.privateName(protobuf, "_writeInt64");
  var _writeBytesNoTag = dart.privateName(protobuf, "_writeBytesNoTag");
  protobuf.CodedBufferWriter = class CodedBufferWriter extends core.Object {
    get lengthInBytes() {
      return this[_bytesTotal];
    }
    static ['_#new#tearOff']() {
      return new protobuf.CodedBufferWriter.new();
    }
    writeField(fieldNumber, fieldType, fieldValue) {
      let valueType = (fieldType & ~7 >>> 0) >>> 0;
      if ((fieldType & 4) !== 0) {
        if (!dart.dtest(dart.dload(fieldValue, 'isEmpty'))) {
          this[_writeTag](fieldNumber, 2);
          let mark = this[_startLengthDelimited]();
          for (let value of core.Iterable.as(fieldValue)) {
            this[_writeValueAs](valueType, value);
          }
          this[_endLengthDelimited](mark);
        }
        return;
      }
      let wireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(valueType));
      if ((fieldType & 4194304) !== 0) {
        let keyWireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(core.int.as(dart.dload(fieldValue, 'keyFieldType'))));
        let valueWireFormat = protobuf.CodedBufferWriter._wireTypes[$_get](protobuf.CodedBufferWriter._valueTypeIndex(core.int.as(dart.dload(fieldValue, 'valueFieldType'))));
        dart.dsend(fieldValue, 'forEach', [dart.fn((key, value) => {
            this[_writeTag](fieldNumber, 2);
            let mark = this[_startLengthDelimited]();
            this[_writeValue](1, core.int.as(dart.dload(fieldValue, 'keyFieldType')), key, keyWireFormat);
            this[_writeValue](2, core.int.as(dart.dload(fieldValue, 'valueFieldType')), value, valueWireFormat);
            this[_endLengthDelimited](mark);
          }, T$.dynamicAnddynamicToNull())]);
        return;
      }
      if ((fieldType & 2) !== 0) {
        for (let i = 0; i < core.num.as(dart.dload(fieldValue, 'length')); i = i + 1) {
          this[_writeValue](fieldNumber, valueType, dart.dsend(fieldValue, '_get', [i]), wireFormat);
        }
        return;
      }
      this[_writeValue](fieldNumber, valueType, fieldValue, wireFormat);
    }
    toBuffer() {
      let result = _native_typed_data.NativeUint8List.new(this[_bytesTotal]);
      this.writeTo(result);
      return result;
    }
    writeTo(buffer, offset = 0) {
      let t0, t0$, t0$0, t0$1;
      if (buffer[$length] - offset < this[_bytesTotal]) {
        return false;
      }
      this[_commitChunk](false);
      this[_commitSplice]();
      let outPos = offset;
      let chunkIndex = 0;
      let chunkPos = 0;
      for (let i = 0; i < this[_splices][$length]; i = i + 1) {
        let action = this[_splices][$_get](i);
        if (core.int.is(action)) {
          if (dart.notNull(action) <= 0) {
            let v = 0 - dart.notNull(action);
            while (v >= 128) {
              buffer[$_set]((t0 = outPos, outPos = t0 + 1, t0), 128 | v & 127);
              v = v[$rightShift](7);
            }
            buffer[$_set]((t0$ = outPos, outPos = t0$ + 1, t0$), v);
          } else {
            let bytesToCopy = action;
            while (bytesToCopy > 0) {
              let chunk = typed_data.Uint8List.as(this[_outputChunks][$_get](chunkIndex));
              let bytesInChunk = core.int.as(this[_outputChunks][$_get](chunkIndex + 1));
              let leftInChunk = bytesInChunk - chunkPos;
              let bytesToCopyFromChunk = leftInChunk > bytesToCopy ? bytesToCopy : leftInChunk;
              let endPos = chunkPos + bytesToCopyFromChunk;
              while (chunkPos < endPos) {
                buffer[$_set]((t0$0 = outPos, outPos = t0$0 + 1, t0$0), chunk[$_get]((t0$1 = chunkPos, chunkPos = t0$1 + 1, t0$1)));
              }
              bytesToCopy = bytesToCopy - bytesToCopyFromChunk;
              if (chunkPos === bytesInChunk) {
                chunkIndex = chunkIndex + 2;
                chunkPos = 0;
              }
            }
          }
        } else {
          outPos = this[_copyInto](buffer, outPos, typed_data.TypedData.as(action));
        }
      }
      return true;
    }
    [_commitChunk](allocateNew) {
      if (this[_bytesInChunk] !== 0) {
        this[_outputChunks][$add](this[_outputChunk]);
        this[_outputChunks][$add](this[_bytesInChunk]);
        this[_outputChunksBytes] = this[_outputChunksBytes] + this[_bytesInChunk];
      }
      if (allocateNew) {
        this[_outputChunk] = _native_typed_data.NativeUint8List.new(512);
        this[_bytesInChunk] = 0;
        this[_outputChunkAsByteData] = typed_data.ByteData.view(dart.nullCheck(this[_outputChunk])[$buffer]);
      } else {
        this[_outputChunk] = this[_outputChunkAsByteData] = null;
        this[_bytesInChunk] = 0;
      }
    }
    [_ensureBytes](count) {
      if (this[_bytesInChunk] + count > 512) {
        this[_commitChunk](true);
      }
    }
    [_commitSplice]() {
      let pos = this[_bytesInChunk] + this[_outputChunksBytes];
      let bytes = pos - this[_lastSplicePos];
      if (bytes > 0) {
        this[_splices][$add](bytes);
      }
      this[_lastSplicePos] = pos;
    }
    writeRawBytes(value) {
      this[_commitSplice]();
      this[_splices][$add](value);
      this[_bytesTotal] = this[_bytesTotal] + value[$lengthInBytes];
    }
    [_startLengthDelimited]() {
      this[_commitSplice]();
      let index = this[_splices][$length];
      this[_splices][$add](this[_bytesTotal]);
      return index;
    }
    [_endLengthDelimited](index) {
      let writtenSizeInBytes = dart.asInt(this[_bytesTotal] - core.num.as(this[_splices][$_get](index)));
      this[_splices][$_set](index, 0 - writtenSizeInBytes);
      this[_bytesTotal] = this[_bytesTotal] + this[_varint32LengthInBytes](writtenSizeInBytes);
    }
    [_varint32LengthInBytes](value) {
      value = (value & 4294967295) >>> 0;
      if (value < 128) return 1;
      if (value < 16384) return 2;
      if (value < 2097152) return 3;
      if (value < 268435456) return 4;
      return 5;
    }
    [_writeVarint32](value) {
      let t0, t0$;
      this[_ensureBytes](5);
      let i = this[_bytesInChunk];
      while (value >= 128) {
        dart.nullCheck(this[_outputChunk])[$_set]((t0 = i, i = t0 + 1, t0), 128 | value & 127);
        value = value[$rightShift](7);
      }
      dart.nullCheck(this[_outputChunk])[$_set]((t0$ = i, i = t0$ + 1, t0$), value);
      this[_bytesTotal] = this[_bytesTotal] + (i - this[_bytesInChunk]);
      this[_bytesInChunk] = i;
    }
    [_writeVarint64](value) {
      let t0, t0$;
      this[_ensureBytes](10);
      let i = this[_bytesInChunk];
      let lo = value.toUnsigned(32).toInt();
      let hi = value['>>'](32).toUnsigned(32).toInt();
      while (hi > 0 || lo >= 128) {
        dart.nullCheck(this[_outputChunk])[$_set]((t0 = i, i = t0 + 1, t0), 128 | lo & 127);
        lo = (lo[$rightShift](7) | (hi & 127) << 25 >>> 0) >>> 0;
        hi = hi[$rightShift](7);
      }
      dart.nullCheck(this[_outputChunk])[$_set]((t0$ = i, i = t0$ + 1, t0$), lo);
      this[_bytesTotal] = this[_bytesTotal] + (i - this[_bytesInChunk]);
      this[_bytesInChunk] = i;
    }
    [_writeDouble](value) {
      if (value[$isNaN]) {
        this[_writeInt32](0);
        this[_writeInt32](2146959360);
        return;
      }
      this[_ensureBytes](8);
      dart.nullCheck(this[_outputChunkAsByteData])[$setFloat64](this[_bytesInChunk], value, typed_data.Endian.little);
      this[_bytesInChunk] = this[_bytesInChunk] + 8;
      this[_bytesTotal] = this[_bytesTotal] + 8;
    }
    [_writeFloat](value) {
      if (value[$isNaN]) {
        this[_writeInt32](2143289344);
      } else if (value[$abs]() < 1.401298464324817e-45) {
        this[_writeInt32](value[$isNegative] ? 2147483648 : 0);
      } else if (value[$isInfinite] || value[$abs]() > 3.4028234663852886e+38) {
        this[_writeInt32](value[$isNegative] ? 4286578688 : 2139095040);
      } else {
        this[_ensureBytes](4);
        dart.nullCheck(this[_outputChunkAsByteData])[$setFloat32](this[_bytesInChunk], value, typed_data.Endian.little);
        this[_bytesInChunk] = this[_bytesInChunk] + 4;
        this[_bytesTotal] = this[_bytesTotal] + 4;
      }
    }
    [_writeInt32](value) {
      this[_ensureBytes](4);
      dart.nullCheck(this[_outputChunkAsByteData])[$setInt32](this[_bytesInChunk], (value & 4294967295) >>> 0, typed_data.Endian.little);
      this[_bytesInChunk] = this[_bytesInChunk] + 4;
      this[_bytesTotal] = this[_bytesTotal] + 4;
    }
    [_writeInt64](value) {
      this[_writeInt32](value.toUnsigned(32).toInt());
      this[_writeInt32](value['>>'](32).toUnsigned(32).toInt());
    }
    [_writeValueAs](valueType, value) {
      switch (valueType) {
        case 16:
        {
          this[_writeVarint32](dart.dtest(value) ? 1 : 0);
          break;
        }
        case 32:
        {
          this[_writeBytesNoTag](typed_data.TypedData.is(value) ? value : _native_typed_data.NativeUint8List.fromList(T$.ListOfint().as(value)));
          break;
        }
        case 64:
        {
          this[_writeBytesNoTag](protobuf._utf8.encode(core.String.as(value)));
          break;
        }
        case 128:
        {
          this[_writeDouble](core.double.as(value));
          break;
        }
        case 256:
        {
          this[_writeFloat](core.double.as(value));
          break;
        }
        case 512:
        {
          this[_writeVarint32](core.int.as(dart.dsend(dart.dload(value, 'value'), '&', [4294967295])));
          break;
        }
        case 1024:
        {
          dart.dsend(value, 'writeToCodedBufferWriter', [this]);
          break;
        }
        case 2048:
        {
          this[_writeVarint64](fixnum.Int64.new(core.int.as(value)));
          break;
        }
        case 4096:
        {
          this[_writeVarint64](fixnum.Int64.as(value));
          break;
        }
        case 8192:
        {
          this[_writeVarint32](protobuf._encodeZigZag32(core.int.as(value)));
          break;
        }
        case 16384:
        {
          this[_writeVarint64](protobuf._encodeZigZag64(fixnum.Int64.as(value)));
          break;
        }
        case 32768:
        {
          this[_writeVarint32](core.int.as(value));
          break;
        }
        case 65536:
        {
          this[_writeVarint64](fixnum.Int64.as(value));
          break;
        }
        case 131072:
        {
          this[_writeInt32](core.int.as(value));
          break;
        }
        case 262144:
        {
          this[_writeInt64](fixnum.Int64.as(value));
          break;
        }
        case 524288:
        {
          this[_writeInt32](core.int.as(value));
          break;
        }
        case 1048576:
        {
          this[_writeInt64](fixnum.Int64.as(value));
          break;
        }
        case 2097152:
        {
          let mark = this[_startLengthDelimited]();
          dart.dsend(value, 'writeToCodedBufferWriter', [this]);
          this[_endLengthDelimited](mark);
          break;
        }
      }
    }
    [_writeBytesNoTag](value) {
      this.writeInt32NoTag(core.int.as(dart.dload(value, 'length')));
      this.writeRawBytes(typed_data.TypedData.as(value));
    }
    [_writeTag](fieldNumber, wireFormat) {
      this.writeInt32NoTag(protobuf.makeTag(fieldNumber, wireFormat));
    }
    [_writeValue](fieldNumber, valueType, value, wireFormat) {
      this[_writeTag](fieldNumber, wireFormat);
      this[_writeValueAs](valueType, value);
      if (valueType === 1024) {
        this[_writeTag](fieldNumber, 4);
      }
    }
    writeInt32NoTag(value) {
      this[_writeVarint32]((value & 4294967295) >>> 0);
    }
    [_copyInto](buffer, pos, value) {
      let t0, t0$;
      if (typed_data.Uint8List.is(value)) {
        let len = value[$length];
        for (let j = 0; j < len; j = j + 1) {
          buffer[$_set]((t0 = pos, pos = t0 + 1, t0), value[$_get](j));
        }
        return pos;
      } else {
        let len = value[$lengthInBytes];
        let u8 = typed_data.Uint8List.view(value[$buffer], value[$offsetInBytes], value[$lengthInBytes]);
        for (let j = 0; j < len; j = j + 1) {
          buffer[$_set]((t0$ = pos, pos = t0$ + 1, t0$), u8[$_get](j));
        }
        return pos;
      }
    }
    static _valueTypeIndex(powerOf2) {
      return (125613361 * powerOf2)[$rightShift](27) & 31;
    }
  };
  (protobuf.CodedBufferWriter.new = function() {
    this[_splices] = [];
    this[_lastSplicePos] = 0;
    this[_outputChunk] = null;
    this[_bytesInChunk] = 0;
    this[_outputChunkAsByteData] = null;
    this[_outputChunks] = [];
    this[_outputChunksBytes] = 0;
    this[_bytesTotal] = 0;
    this[_commitChunk](true);
  }).prototype = protobuf.CodedBufferWriter.prototype;
  dart.addTypeTests(protobuf.CodedBufferWriter);
  dart.addTypeCaches(protobuf.CodedBufferWriter);
  dart.setMethodSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getMethods(protobuf.CodedBufferWriter.__proto__),
    writeField: dart.fnType(dart.void, [core.int, core.int, dart.dynamic]),
    toBuffer: dart.fnType(typed_data.Uint8List, []),
    writeTo: dart.fnType(core.bool, [typed_data.Uint8List], [core.int]),
    [_commitChunk]: dart.fnType(dart.void, [core.bool]),
    [_ensureBytes]: dart.fnType(dart.void, [core.int]),
    [_commitSplice]: dart.fnType(dart.void, []),
    writeRawBytes: dart.fnType(dart.void, [typed_data.TypedData]),
    [_startLengthDelimited]: dart.fnType(core.int, []),
    [_endLengthDelimited]: dart.fnType(dart.void, [core.int]),
    [_varint32LengthInBytes]: dart.fnType(core.int, [core.int]),
    [_writeVarint32]: dart.fnType(dart.void, [core.int]),
    [_writeVarint64]: dart.fnType(dart.void, [fixnum.Int64]),
    [_writeDouble]: dart.fnType(dart.void, [core.double]),
    [_writeFloat]: dart.fnType(dart.void, [core.double]),
    [_writeInt32]: dart.fnType(dart.void, [core.int]),
    [_writeInt64]: dart.fnType(dart.void, [fixnum.Int64]),
    [_writeValueAs]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_writeBytesNoTag]: dart.fnType(dart.void, [dart.dynamic]),
    [_writeTag]: dart.fnType(dart.void, [core.int, core.int]),
    [_writeValue]: dart.fnType(dart.void, [core.int, core.int, dart.dynamic, core.int]),
    writeInt32NoTag: dart.fnType(dart.void, [core.int]),
    [_copyInto]: dart.fnType(core.int, [typed_data.Uint8List, core.int, typed_data.TypedData])
  }));
  dart.setStaticMethodSignature(protobuf.CodedBufferWriter, () => ['_valueTypeIndex']);
  dart.setGetterSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getGetters(protobuf.CodedBufferWriter.__proto__),
    lengthInBytes: core.int
  }));
  dart.setLibraryUri(protobuf.CodedBufferWriter, I[1]);
  dart.setFieldSignature(protobuf.CodedBufferWriter, () => ({
    __proto__: dart.getFields(protobuf.CodedBufferWriter.__proto__),
    [_splices]: dart.finalFieldType(core.List),
    [_lastSplicePos]: dart.fieldType(core.int),
    [_outputChunk]: dart.fieldType(dart.nullable(typed_data.Uint8List)),
    [_bytesInChunk]: dart.fieldType(core.int),
    [_outputChunkAsByteData]: dart.fieldType(dart.nullable(typed_data.ByteData)),
    [_outputChunks]: dart.finalFieldType(core.List),
    [_outputChunksBytes]: dart.fieldType(core.int),
    [_bytesTotal]: dart.fieldType(core.int)
  }));
  dart.setStaticFieldSignature(protobuf.CodedBufferWriter, () => ['_chunkLength', '_BOOL_BIT_INDEX', '_BYTES_BIT_INDEX', '_STRING_BIT_INDEX', '_DOUBLE_BIT_INDEX', '_FLOAT_BIT_INDEX', '_ENUM_BIT_INDEX', '_GROUP_BIT_INDEX', '_INT32_BIT_INDEX', '_INT64_BIT_INDEX', '_SINT32_BIT_INDEX', '_SINT64_BIT_INDEX', '_UINT32_BIT_INDEX', '_UINT64_BIT_INDEX', '_FIXED32_BIT_INDEX', '_FIXED64_BIT_INDEX', '_SFIXED32_BIT_INDEX', '_SFIXED64_BIT_INDEX', '_MESSAGE_BIT_INDEX', '_wireTypes']);
  dart.defineLazy(protobuf.CodedBufferWriter, {
    /*protobuf.CodedBufferWriter._chunkLength*/get _chunkLength() {
      return 512;
    },
    /*protobuf.CodedBufferWriter._BOOL_BIT_INDEX*/get _BOOL_BIT_INDEX() {
      return 14;
    },
    /*protobuf.CodedBufferWriter._BYTES_BIT_INDEX*/get _BYTES_BIT_INDEX() {
      return 29;
    },
    /*protobuf.CodedBufferWriter._STRING_BIT_INDEX*/get _STRING_BIT_INDEX() {
      return 27;
    },
    /*protobuf.CodedBufferWriter._DOUBLE_BIT_INDEX*/get _DOUBLE_BIT_INDEX() {
      return 23;
    },
    /*protobuf.CodedBufferWriter._FLOAT_BIT_INDEX*/get _FLOAT_BIT_INDEX() {
      return 15;
    },
    /*protobuf.CodedBufferWriter._ENUM_BIT_INDEX*/get _ENUM_BIT_INDEX() {
      return 31;
    },
    /*protobuf.CodedBufferWriter._GROUP_BIT_INDEX*/get _GROUP_BIT_INDEX() {
      return 30;
    },
    /*protobuf.CodedBufferWriter._INT32_BIT_INDEX*/get _INT32_BIT_INDEX() {
      return 28;
    },
    /*protobuf.CodedBufferWriter._INT64_BIT_INDEX*/get _INT64_BIT_INDEX() {
      return 25;
    },
    /*protobuf.CodedBufferWriter._SINT32_BIT_INDEX*/get _SINT32_BIT_INDEX() {
      return 18;
    },
    /*protobuf.CodedBufferWriter._SINT64_BIT_INDEX*/get _SINT64_BIT_INDEX() {
      return 5;
    },
    /*protobuf.CodedBufferWriter._UINT32_BIT_INDEX*/get _UINT32_BIT_INDEX() {
      return 11;
    },
    /*protobuf.CodedBufferWriter._UINT64_BIT_INDEX*/get _UINT64_BIT_INDEX() {
      return 22;
    },
    /*protobuf.CodedBufferWriter._FIXED32_BIT_INDEX*/get _FIXED32_BIT_INDEX() {
      return 13;
    },
    /*protobuf.CodedBufferWriter._FIXED64_BIT_INDEX*/get _FIXED64_BIT_INDEX() {
      return 26;
    },
    /*protobuf.CodedBufferWriter._SFIXED32_BIT_INDEX*/get _SFIXED32_BIT_INDEX() {
      return 21;
    },
    /*protobuf.CodedBufferWriter._SFIXED64_BIT_INDEX*/get _SFIXED64_BIT_INDEX() {
      return 10;
    },
    /*protobuf.CodedBufferWriter._MESSAGE_BIT_INDEX*/get _MESSAGE_BIT_INDEX() {
      return 20;
    },
    /*protobuf.CodedBufferWriter._wireTypes*/get _wireTypes() {
      let t0;
      return t0 = _native_typed_data.NativeUint8List.new(32), (() => {
        t0[$_set](14, 0);
        t0[$_set](29, 2);
        t0[$_set](27, 2);
        t0[$_set](23, 1);
        t0[$_set](15, 5);
        t0[$_set](31, 0);
        t0[$_set](30, 3);
        t0[$_set](28, 0);
        t0[$_set](25, 0);
        t0[$_set](18, 0);
        t0[$_set](5, 0);
        t0[$_set](11, 0);
        t0[$_set](22, 0);
        t0[$_set](13, 5);
        t0[$_set](26, 1);
        t0[$_set](21, 5);
        t0[$_set](10, 1);
        t0[$_set](20, 2);
        return t0;
      })();
    }
  }, false);
  var qualifiedMessageName = dart.privateName(protobuf, "BuilderInfo.qualifiedMessageName");
  var byIndex = dart.privateName(protobuf, "BuilderInfo.byIndex");
  var fieldInfo = dart.privateName(protobuf, "BuilderInfo.fieldInfo");
  var byTagAsString = dart.privateName(protobuf, "BuilderInfo.byTagAsString");
  var byName = dart.privateName(protobuf, "BuilderInfo.byName");
  var oneofs = dart.privateName(protobuf, "BuilderInfo.oneofs");
  var hasExtensions = dart.privateName(protobuf, "BuilderInfo.hasExtensions");
  var hasRequiredFields = dart.privateName(protobuf, "BuilderInfo.hasRequiredFields");
  var toProto3Json$ = dart.privateName(protobuf, "BuilderInfo.toProto3Json");
  var fromProto3Json$ = dart.privateName(protobuf, "BuilderInfo.fromProto3Json");
  var createEmptyInstance$ = dart.privateName(protobuf, "BuilderInfo.createEmptyInstance");
  var PackageName_name = dart.privateName(protobuf, "PackageName.name");
  var _sortedByTag = dart.privateName(protobuf, "_sortedByTag");
  var _addField = dart.privateName(protobuf, "_addField");
  var _isDummy = dart.privateName(protobuf, "_isDummy");
  var _computeSortedByTag = dart.privateName(protobuf, "_computeSortedByTag");
  var _makeEmptyMessage = dart.privateName(protobuf, "_makeEmptyMessage");
  var _decodeEnum = dart.privateName(protobuf, "_decodeEnum");
  protobuf.BuilderInfo = class BuilderInfo extends core.Object {
    get qualifiedMessageName() {
      return this[qualifiedMessageName];
    }
    set qualifiedMessageName(value) {
      super.qualifiedMessageName = value;
    }
    get byIndex() {
      return this[byIndex];
    }
    set byIndex(value) {
      super.byIndex = value;
    }
    get fieldInfo() {
      return this[fieldInfo];
    }
    set fieldInfo(value) {
      super.fieldInfo = value;
    }
    get byTagAsString() {
      return this[byTagAsString];
    }
    set byTagAsString(value) {
      super.byTagAsString = value;
    }
    get byName() {
      return this[byName];
    }
    set byName(value) {
      super.byName = value;
    }
    get oneofs() {
      return this[oneofs];
    }
    set oneofs(value) {
      super.oneofs = value;
    }
    get hasExtensions() {
      return this[hasExtensions];
    }
    set hasExtensions(value) {
      this[hasExtensions] = value;
    }
    get hasRequiredFields() {
      return this[hasRequiredFields];
    }
    set hasRequiredFields(value) {
      this[hasRequiredFields] = value;
    }
    get toProto3Json() {
      return this[toProto3Json$];
    }
    set toProto3Json(value) {
      super.toProto3Json = value;
    }
    get fromProto3Json() {
      return this[fromProto3Json$];
    }
    set fromProto3Json(value) {
      super.fromProto3Json = value;
    }
    get createEmptyInstance() {
      return this[createEmptyInstance$];
    }
    set createEmptyInstance(value) {
      super.createEmptyInstance = value;
    }
    static ['_#new#tearOff'](messageName, opts) {
      let $package = opts && 'package' in opts ? opts.package : C[0] || CT.C0;
      let createEmptyInstance = opts && 'createEmptyInstance' in opts ? opts.createEmptyInstance : null;
      let toProto3Json = opts && 'toProto3Json' in opts ? opts.toProto3Json : null;
      let fromProto3Json = opts && 'fromProto3Json' in opts ? opts.fromProto3Json : null;
      return new protobuf.BuilderInfo.new(messageName, {package: $package, createEmptyInstance: createEmptyInstance, toProto3Json: toProto3Json, fromProto3Json: fromProto3Json});
    }
    add(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let index = this.byIndex[$length];
      let fieldInfo = tagNumber === 0 ? new protobuf.FieldInfo.dummy(index) : new (protobuf.FieldInfo$(T)).new(name, tagNumber, index, dart.nullCheck(fieldType), {defaultOrMaker: defaultOrMaker, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      this[_addField](fieldInfo);
    }
    addMapField(K, V, tagNumber, name, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, opts) {
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let index = this.byIndex[$length];
      this[_addField](new (protobuf.MapFieldInfo$(K, V)).new(name, tagNumber, index, 6291456, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, {defaultEnumValue: defaultEnumValue, protoName: protoName}));
    }
    addRepeated(T, tagNumber, name, fieldType, check, subBuilder, valueOf, enumValues, opts) {
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let index = this.byIndex[$length];
      this[_addField](new (protobuf.FieldInfo$(T)).repeated(name, tagNumber, index, fieldType, check, subBuilder, {valueOf: valueOf, enumValues: enumValues, defaultEnumValue: defaultEnumValue, protoName: protoName}));
    }
    [_addField](fi) {
      this.byIndex[$add](fi);
      if (!this.byIndex[$_get](dart.nullCheck(fi.index))[$_equals](fi)) dart.assertFailed(null, I[2], 92, 12, "byIndex[fi.index!] == fi");
      if (!fi[_isDummy]) {
        this.fieldInfo[$_set](fi.tagNumber, fi);
        this.byTagAsString[$_set](dart.str(fi.tagNumber), fi);
        this.byName[$_set](fi.name, fi);
      }
    }
    a(T, tagNumber, name, fieldType, opts) {
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, fieldType, defaultOrMaker, subBuilder, valueOf, enumValues, {protoName: protoName});
    }
    aOS(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(core.String, tagNumber, name, 64, null, null, null, null, {protoName: protoName});
    }
    pPS(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.addRepeated(core.String, tagNumber, name, 66, protobuf.getCheckFunction(66), null, null, null, {protoName: protoName});
    }
    aQS(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(core.String, tagNumber, name, 65, null, null, null, null, {protoName: protoName});
    }
    aInt64(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(fixnum.Int64, tagNumber, name, 4096, fixnum.Int64.ZERO, null, null, null, {protoName: protoName});
    }
    aOB(tagNumber, name, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(core.bool, tagNumber, name, 16, null, null, null, null, {protoName: protoName});
    }
    e(T, tagNumber, name, fieldType, opts) {
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, fieldType, defaultOrMaker, null, valueOf, enumValues, {protoName: protoName});
    }
    p(T, tagNumber, name, fieldType, opts) {
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      if (!(!protobuf._isGroupOrMessage(fieldType) && !protobuf._isEnum(fieldType))) dart.assertFailed(null, I[2], 159, 12, "!_isGroupOrMessage(fieldType) && !_isEnum(fieldType)");
      this.addRepeated(T, tagNumber, name, fieldType, protobuf.getCheckFunction(fieldType), null, null, null, {protoName: protoName});
    }
    pc(T, tagNumber, name, fieldType, opts) {
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      if (!(protobuf._isGroupOrMessage(fieldType) || protobuf._isEnum(fieldType))) dart.assertFailed(null, I[2], 172, 12, "_isGroupOrMessage(fieldType) || _isEnum(fieldType)");
      this.addRepeated(T, tagNumber, name, fieldType, C[1] || CT.C1, subBuilder, valueOf, enumValues, {defaultEnumValue: defaultEnumValue, protoName: protoName});
    }
    aOM(T, tagNumber, name, opts) {
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, 2097152, protobuf.GeneratedMessage._defaultMakerFor(T, subBuilder), subBuilder, null, null, {protoName: protoName});
    }
    aQM(T, tagNumber, name, opts) {
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this.add(T, tagNumber, name, 2097153, protobuf.GeneratedMessage._defaultMakerFor(T, subBuilder), subBuilder, null, null, {protoName: protoName});
    }
    oo(oneofIndex, tags) {
      for (let tag of tags) {
        this.oneofs[$_set](tag, oneofIndex);
      }
    }
    m(K, V, tagNumber, name, opts) {
      let t0;
      let entryClassName = opts && 'entryClassName' in opts ? opts.entryClassName : null;
      let keyFieldType = opts && 'keyFieldType' in opts ? opts.keyFieldType : null;
      let valueFieldType = opts && 'valueFieldType' in opts ? opts.valueFieldType : null;
      let valueCreator = opts && 'valueCreator' in opts ? opts.valueCreator : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let packageName = opts && 'packageName' in opts ? opts.packageName : C[0] || CT.C0;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      let mapEntryBuilderInfo = (t0 = new protobuf.BuilderInfo.new(entryClassName, {package: packageName}), (() => {
        t0.add(dart.dynamic, 1, "key", keyFieldType, null, null, null, null);
        t0.add(dart.dynamic, 2, "value", valueFieldType, null, valueCreator, valueOf, enumValues);
        return t0;
      })());
      this.addMapField(K, V, tagNumber, name, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, {defaultEnumValue: defaultEnumValue, protoName: protoName});
    }
    containsTagNumber(tagNumber) {
      return this.fieldInfo[$containsKey](tagNumber);
    }
    defaultValue(tagNumber) {
      let func = this.makeDefault(tagNumber);
      return func == null ? null : func();
    }
    fieldName(tagNumber) {
      let t0;
      let i = this.fieldInfo[$_get](tagNumber);
      t0 = i;
      return t0 == null ? null : t0.name;
    }
    fieldType(tagNumber) {
      let t0;
      let i = this.fieldInfo[$_get](tagNumber);
      t0 = i;
      return t0 == null ? null : t0.type;
    }
    makeDefault(tagNumber) {
      let t0;
      let i = this.fieldInfo[$_get](tagNumber);
      t0 = i;
      return t0 == null ? null : t0.makeDefault;
    }
    subBuilder(tagNumber) {
      let t0;
      let i = this.fieldInfo[$_get](tagNumber);
      t0 = i;
      return t0 == null ? null : t0.subBuilder;
    }
    tagNumber(fieldName) {
      let t0;
      let i = this.byName[$_get](fieldName);
      t0 = i;
      return t0 == null ? null : t0.tagNumber;
    }
    valueOfFunc(tagNumber) {
      let t0;
      let i = this.fieldInfo[$_get](tagNumber);
      t0 = i;
      return t0 == null ? null : t0.valueOf;
    }
    get sortedByTag() {
      let t0;
      t0 = this[_sortedByTag];
      return t0 == null ? this[_sortedByTag] = this[_computeSortedByTag]() : t0;
    }
    get messageName() {
      let lastDot = this.qualifiedMessageName[$lastIndexOf](".");
      return lastDot === -1 ? this.qualifiedMessageName : this.qualifiedMessageName[$substring](lastDot + 1);
    }
    [_computeSortedByTag]() {
      let t0;
      t0 = T$.ListOfFieldInfo().from(this.fieldInfo[$values], {growable: false});
      return (() => {
        t0[$sort](dart.fn((a, b) => a.tagNumber[$compareTo](b.tagNumber), T$.FieldInfoAndFieldInfoToint()));
        return t0;
      })();
    }
    [_makeEmptyMessage](tagNumber, extensionRegistry) {
      let subBuilderFunc = this.subBuilder(tagNumber);
      if (subBuilderFunc == null && extensionRegistry != null) {
        subBuilderFunc = dart.nullCheck(extensionRegistry.getExtension(this.qualifiedMessageName, tagNumber)).subBuilder;
      }
      return dart.nullCheck(subBuilderFunc)();
    }
    [_decodeEnum](tagNumber, registry, rawValue) {
      let f = this.valueOfFunc(tagNumber);
      if (f == null && registry != null) {
        f = dart.nullCheck(registry.getExtension(this.qualifiedMessageName, tagNumber)).valueOf;
      }
      return dart.nullCheck(f)(rawValue);
    }
  };
  (protobuf.BuilderInfo.new = function(messageName, opts) {
    let $package = opts && 'package' in opts ? opts.package : C[0] || CT.C0;
    let createEmptyInstance = opts && 'createEmptyInstance' in opts ? opts.createEmptyInstance : null;
    let toProto3Json = opts && 'toProto3Json' in opts ? opts.toProto3Json : null;
    let fromProto3Json = opts && 'fromProto3Json' in opts ? opts.fromProto3Json : null;
    this[byIndex] = T$.JSArrayOfFieldInfo().of([]);
    this[fieldInfo] = new (T$.IdentityMapOfint$FieldInfo()).new();
    this[byTagAsString] = new (T$.IdentityMapOfString$FieldInfo()).new();
    this[byName] = new (T$.IdentityMapOfString$FieldInfo()).new();
    this[oneofs] = new (T$.IdentityMapOfint$int()).new();
    this[hasExtensions] = false;
    this[hasRequiredFields] = true;
    this[_sortedByTag] = null;
    this[createEmptyInstance$] = createEmptyInstance;
    this[toProto3Json$] = toProto3Json;
    this[fromProto3Json$] = fromProto3Json;
    this[qualifiedMessageName] = $package.prefix + dart.str(messageName);
    ;
  }).prototype = protobuf.BuilderInfo.prototype;
  dart.addTypeTests(protobuf.BuilderInfo);
  dart.addTypeCaches(protobuf.BuilderInfo);
  dart.setMethodSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getMethods(protobuf.BuilderInfo.__proto__),
    add: dart.gFnType(T => [dart.void, [core.int, core.String, dart.nullable(core.int), dart.dynamic, dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])), dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int])), dart.nullable(core.List$(protobuf.ProtobufEnum))], {protoName: dart.nullable(core.String)}, {}], T => [dart.nullable(core.Object)]),
    addMapField: dart.gFnType((K, V) => [dart.void, [core.int, core.String, dart.nullable(core.int), dart.nullable(core.int), protobuf.BuilderInfo, dart.nullable(dart.fnType(protobuf.GeneratedMessage, []))], {defaultEnumValue: dart.nullable(protobuf.ProtobufEnum), protoName: dart.nullable(core.String)}, {}], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    addRepeated: dart.gFnType(T => [dart.void, [core.int, core.String, core.int, dart.fnType(dart.void, [dart.nullable(T)]), dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])), dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int])), dart.nullable(core.List$(protobuf.ProtobufEnum))], {defaultEnumValue: dart.nullable(protobuf.ProtobufEnum), protoName: dart.nullable(core.String)}, {}], T => [dart.nullable(core.Object)]),
    [_addField]: dart.fnType(dart.void, [protobuf.FieldInfo]),
    a: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {defaultOrMaker: dart.dynamic, enumValues: dart.nullable(core.List$(protobuf.ProtobufEnum)), protoName: dart.nullable(core.String), subBuilder: dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])), valueOf: dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int]))}, {}], T => [dart.nullable(core.Object)]),
    aOS: dart.fnType(dart.void, [core.int, core.String], {protoName: dart.nullable(core.String)}, {}),
    pPS: dart.fnType(dart.void, [core.int, core.String], {protoName: dart.nullable(core.String)}, {}),
    aQS: dart.fnType(dart.void, [core.int, core.String], {protoName: dart.nullable(core.String)}, {}),
    aInt64: dart.fnType(dart.void, [core.int, core.String], {protoName: dart.nullable(core.String)}, {}),
    aOB: dart.fnType(dart.void, [core.int, core.String], {protoName: dart.nullable(core.String)}, {}),
    e: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {defaultOrMaker: dart.dynamic, enumValues: dart.nullable(core.List$(protobuf.ProtobufEnum)), protoName: dart.nullable(core.String), valueOf: dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int]))}, {}], T => [dart.nullable(core.Object)]),
    p: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {protoName: dart.nullable(core.String)}, {}], T => [dart.nullable(core.Object)]),
    pc: dart.gFnType(T => [dart.void, [core.int, core.String, core.int], {defaultEnumValue: dart.nullable(protobuf.ProtobufEnum), enumValues: dart.nullable(core.List$(protobuf.ProtobufEnum)), protoName: dart.nullable(core.String), subBuilder: dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])), valueOf: dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int]))}, {}], T => [dart.nullable(core.Object)]),
    aOM: dart.gFnType(T => [dart.void, [core.int, core.String], {protoName: dart.nullable(core.String), subBuilder: dart.nullable(dart.fnType(T, []))}, {}], T => [protobuf.GeneratedMessage]),
    aQM: dart.gFnType(T => [dart.void, [core.int, core.String], {protoName: dart.nullable(core.String), subBuilder: dart.nullable(dart.fnType(T, []))}, {}], T => [protobuf.GeneratedMessage]),
    oo: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    m: dart.gFnType((K, V) => [dart.void, [core.int, core.String], {defaultEnumValue: dart.nullable(protobuf.ProtobufEnum), entryClassName: dart.nullable(core.String), enumValues: dart.nullable(core.List$(protobuf.ProtobufEnum)), keyFieldType: dart.nullable(core.int), packageName: protobuf.PackageName, protoName: dart.nullable(core.String), valueCreator: dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])), valueFieldType: dart.nullable(core.int), valueOf: dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int]))}, {}], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    containsTagNumber: dart.fnType(core.bool, [core.int]),
    defaultValue: dart.fnType(dart.dynamic, [core.int]),
    fieldName: dart.fnType(dart.nullable(core.String), [core.int]),
    fieldType: dart.fnType(dart.nullable(core.int), [core.int]),
    makeDefault: dart.fnType(dart.nullable(dart.fnType(dart.dynamic, [])), [core.int]),
    subBuilder: dart.fnType(dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])), [core.int]),
    tagNumber: dart.fnType(dart.nullable(core.int), [core.String]),
    valueOfFunc: dart.fnType(dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int])), [core.int]),
    [_computeSortedByTag]: dart.fnType(core.List$(protobuf.FieldInfo), []),
    [_makeEmptyMessage]: dart.fnType(protobuf.GeneratedMessage, [core.int, dart.nullable(protobuf.ExtensionRegistry)]),
    [_decodeEnum]: dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int, dart.nullable(protobuf.ExtensionRegistry), core.int])
  }));
  dart.setGetterSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getGetters(protobuf.BuilderInfo.__proto__),
    sortedByTag: core.List$(protobuf.FieldInfo),
    messageName: core.String
  }));
  dart.setLibraryUri(protobuf.BuilderInfo, I[1]);
  dart.setFieldSignature(protobuf.BuilderInfo, () => ({
    __proto__: dart.getFields(protobuf.BuilderInfo.__proto__),
    qualifiedMessageName: dart.finalFieldType(core.String),
    byIndex: dart.finalFieldType(core.List$(protobuf.FieldInfo)),
    fieldInfo: dart.finalFieldType(core.Map$(core.int, protobuf.FieldInfo)),
    byTagAsString: dart.finalFieldType(core.Map$(core.String, protobuf.FieldInfo)),
    byName: dart.finalFieldType(core.Map$(core.String, protobuf.FieldInfo)),
    oneofs: dart.finalFieldType(core.Map$(core.int, core.int)),
    hasExtensions: dart.fieldType(core.bool),
    hasRequiredFields: dart.fieldType(core.bool),
    [_sortedByTag]: dart.fieldType(dart.nullable(core.List$(protobuf.FieldInfo))),
    toProto3Json: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(core.Object), [protobuf.GeneratedMessage, type_registry.TypeRegistry]))),
    fromProto3Json: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, [protobuf.GeneratedMessage, core.Object, type_registry.TypeRegistry, json_parsing_context.JsonParsingContext]))),
    createEmptyInstance: dart.finalFieldType(dart.nullable(dart.fnType(protobuf.GeneratedMessage, [])))
  }));
  var tagNumber$ = dart.privateName(protobuf, "TagNumber.tagNumber");
  protobuf.TagNumber = class TagNumber extends core.Object {
    get tagNumber() {
      return this[tagNumber$];
    }
    set tagNumber(value) {
      super.tagNumber = value;
    }
    static ['_#new#tearOff'](tagNumber) {
      return new protobuf.TagNumber.new(tagNumber);
    }
  };
  (protobuf.TagNumber.new = function(tagNumber) {
    this[tagNumber$] = tagNumber;
    ;
  }).prototype = protobuf.TagNumber.prototype;
  dart.addTypeTests(protobuf.TagNumber);
  dart.addTypeCaches(protobuf.TagNumber);
  dart.setLibraryUri(protobuf.TagNumber, I[1]);
  dart.setFieldSignature(protobuf.TagNumber, () => ({
    __proto__: dart.getFields(protobuf.TagNumber.__proto__),
    tagNumber: dart.finalFieldType(core.int)
  }));
  protobuf.EventPlugin = class EventPlugin extends core.Object {};
  (protobuf.EventPlugin.new = function() {
    ;
  }).prototype = protobuf.EventPlugin.prototype;
  dart.addTypeTests(protobuf.EventPlugin);
  dart.addTypeCaches(protobuf.EventPlugin);
  dart.setLibraryUri(protobuf.EventPlugin, I[1]);
  var message$ = dart.privateName(protobuf, "InvalidProtocolBufferException.message");
  protobuf.InvalidProtocolBufferException = class InvalidProtocolBufferException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#_#tearOff'](message) {
      return new protobuf.InvalidProtocolBufferException.__(message);
    }
    toString() {
      return "InvalidProtocolBufferException: " + this.message;
    }
    static ['_#invalidEndTag#tearOff']() {
      return new protobuf.InvalidProtocolBufferException.invalidEndTag();
    }
    static ['_#invalidTag#tearOff']() {
      return new protobuf.InvalidProtocolBufferException.invalidTag();
    }
    static ['_#invalidWireType#tearOff']() {
      return new protobuf.InvalidProtocolBufferException.invalidWireType();
    }
    static ['_#malformedVarint#tearOff']() {
      return new protobuf.InvalidProtocolBufferException.malformedVarint();
    }
    static ['_#recursionLimitExceeded#tearOff']() {
      return new protobuf.InvalidProtocolBufferException.recursionLimitExceeded();
    }
    static ['_#truncatedMessage#tearOff']() {
      return new protobuf.InvalidProtocolBufferException.truncatedMessage();
    }
    static ['_#wrongAnyMessage#tearOff'](anyTypeName, unpackerTypeName) {
      return new protobuf.InvalidProtocolBufferException.wrongAnyMessage(anyTypeName, unpackerTypeName);
    }
  };
  (protobuf.InvalidProtocolBufferException.__ = function(message) {
    this[message$] = message;
    ;
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidEndTag = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message end-group tag did not match expected tag.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidTag = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message contained an invalid tag (zero).");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.invalidWireType = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message tag had invalid wire type.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.malformedVarint = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "CodedBufferReader encountered a malformed varint.");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.recursionLimitExceeded = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.truncatedMessage = function() {
    protobuf.InvalidProtocolBufferException.__.call(this, "While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  (protobuf.InvalidProtocolBufferException.wrongAnyMessage = function(anyTypeName, unpackerTypeName) {
    protobuf.InvalidProtocolBufferException.__.call(this, "The type of the Any message (" + anyTypeName + ") does not match the given\nunpacker (" + dart.str(unpackerTypeName) + ").\n");
  }).prototype = protobuf.InvalidProtocolBufferException.prototype;
  dart.addTypeTests(protobuf.InvalidProtocolBufferException);
  dart.addTypeCaches(protobuf.InvalidProtocolBufferException);
  protobuf.InvalidProtocolBufferException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(protobuf.InvalidProtocolBufferException, I[1]);
  dart.setFieldSignature(protobuf.InvalidProtocolBufferException, () => ({
    __proto__: dart.getFields(protobuf.InvalidProtocolBufferException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(protobuf.InvalidProtocolBufferException, ['toString']);
  var extendee$ = dart.privateName(protobuf, "Extension.extendee");
  var name$ = dart.privateName(protobuf, "FieldInfo.name");
  var protoName$ = dart.privateName(protobuf, "FieldInfo.protoName");
  var tagNumber$0 = dart.privateName(protobuf, "FieldInfo.tagNumber");
  var index$ = dart.privateName(protobuf, "FieldInfo.index");
  var type$ = dart.privateName(protobuf, "FieldInfo.type");
  var makeDefault = dart.privateName(protobuf, "FieldInfo.makeDefault");
  var subBuilder$ = dart.privateName(protobuf, "FieldInfo.subBuilder");
  var enumValues$ = dart.privateName(protobuf, "FieldInfo.enumValues");
  var defaultEnumValue$ = dart.privateName(protobuf, "FieldInfo.defaultEnumValue");
  var valueOf$ = dart.privateName(protobuf, "FieldInfo.valueOf");
  var check$ = dart.privateName(protobuf, "FieldInfo.check");
  var _emptyList = dart.privateName(protobuf, "_emptyList");
  var _fieldSet = dart.privateName(protobuf, "_fieldSet");
  var _hasRequiredValues = dart.privateName(protobuf, "_hasRequiredValues");
  var _hasRequiredFields = dart.privateName(protobuf, "_hasRequiredFields");
  var _appendInvalidFields = dart.privateName(protobuf, "_appendInvalidFields");
  var _createRepeatedField = dart.privateName(protobuf, "_createRepeatedField");
  var _createRepeatedFieldWithType = dart.privateName(protobuf, "_createRepeatedFieldWithType");
  var _ensureRepeatedField = dart.privateName(protobuf, "_ensureRepeatedField");
  const _is_FieldInfo_default = Symbol('_is_FieldInfo_default');
  protobuf.FieldInfo$ = dart.generic(T => {
    var __t$PbListOfT = () => (__t$PbListOfT = dart.constFn(protobuf.PbList$(T)))();
    var __t$VoidToPbListOfT = () => (__t$VoidToPbListOfT = dart.constFn(dart.fnType(__t$PbListOfT(), [])))();
    var __t$FrozenPbListOfT = () => (__t$FrozenPbListOfT = dart.constFn(protobuf.FrozenPbList$(T)))();
    var __t$JSArrayOfT = () => (__t$JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class FieldInfo extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get protoName() {
        return this[protoName$];
      }
      set protoName(value) {
        super.protoName = value;
      }
      get tagNumber() {
        return this[tagNumber$0];
      }
      set tagNumber(value) {
        super.tagNumber = value;
      }
      get index() {
        return this[index$];
      }
      set index(value) {
        super.index = value;
      }
      get type() {
        return this[type$];
      }
      set type(value) {
        super.type = value;
      }
      get makeDefault() {
        return this[makeDefault];
      }
      set makeDefault(value) {
        super.makeDefault = value;
      }
      get subBuilder() {
        return this[subBuilder$];
      }
      set subBuilder(value) {
        super.subBuilder = value;
      }
      get enumValues() {
        return this[enumValues$];
      }
      set enumValues(value) {
        super.enumValues = value;
      }
      get defaultEnumValue() {
        return this[defaultEnumValue$];
      }
      set defaultEnumValue(value) {
        super.defaultEnumValue = value;
      }
      get valueOf() {
        return this[valueOf$];
      }
      set valueOf(value) {
        super.valueOf = value;
      }
      get check() {
        return this[check$];
      }
      set check(value) {
        super.check = value;
      }
      static ['_#new#tearOff'](T, name, tagNumber, index, type, opts) {
        let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
        let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
        let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
        let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
        let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
        let protoName = opts && 'protoName' in opts ? opts.protoName : null;
        return new (protobuf.FieldInfo$(T)).new(name, tagNumber, index, type, {defaultOrMaker: defaultOrMaker, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, defaultEnumValue: defaultEnumValue, protoName: protoName});
      }
      static ['_#dummy#tearOff'](T, index) {
        return new (protobuf.FieldInfo$(T)).dummy(index);
      }
      static ['_#repeated#tearOff'](T, name, tagNumber, index, type, check, subBuilder, opts) {
        let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
        let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
        let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
        let protoName = opts && 'protoName' in opts ? opts.protoName : null;
        return new (protobuf.FieldInfo$(T)).repeated(name, tagNumber, index, type, check, subBuilder, {valueOf: valueOf, enumValues: enumValues, defaultEnumValue: defaultEnumValue, protoName: protoName});
      }
      static findMakeDefault(type, defaultOrMaker) {
        if (defaultOrMaker == null) return protobuf.PbFieldType._defaultForType(type);
        if (T$.VoidTodynamic().is(defaultOrMaker)) return defaultOrMaker;
        return dart.fn(() => defaultOrMaker, T$.VoidTodynamic());
      }
      get [_isDummy]() {
        return this.tagNumber === 0;
      }
      get isRequired() {
        return protobuf._isRequired(this.type);
      }
      get isRepeated() {
        return protobuf._isRepeated(this.type);
      }
      get isGroupOrMessage() {
        return protobuf._isGroupOrMessage(this.type);
      }
      get isEnum() {
        return protobuf._isEnum(this.type);
      }
      get isMapField() {
        return protobuf._isMapField(this.type);
      }
      get readonlyDefault() {
        let t0;
        if (this.isRepeated) {
          t0 = this[_emptyList];
          return t0 == null ? this[_emptyList] = new (__t$FrozenPbListOfT()).__(__t$JSArrayOfT().of([])) : t0;
        }
        return dart.nullCheck(this.makeDefault)();
      }
      [_hasRequiredValues](value) {
        if (value == null) return !this.isRequired;
        if (!protobuf._isGroupOrMessage(this.type)) return true;
        if (!this.isRepeated) {
          let message = protobuf.GeneratedMessage.as(value);
          return message[_fieldSet][_hasRequiredValues]();
        }
        let list = T$.ListOfGeneratedMessage().as(value);
        if (list[$isEmpty]) return true;
        if (!list[$_get](0)[_fieldSet][_hasRequiredFields]) return true;
        return list[$every](dart.fn(m => m[_fieldSet][_hasRequiredValues](), T$.GeneratedMessageTobool()));
      }
      [_appendInvalidFields](problems, value, prefix) {
        if (value == null) {
          if (this.isRequired) problems[$add](prefix + this.name);
        } else if (!protobuf._isGroupOrMessage(this.type)) {
        } else if (!this.isRepeated) {
          let message = protobuf.GeneratedMessage.as(value);
          message[_fieldSet][_appendInvalidFields](problems, prefix + this.name + ".");
        } else {
          let list = T$.ListOfGeneratedMessage().as(value);
          if (list[$isEmpty]) return;
          if (!list[$_get](0)[_fieldSet][_hasRequiredFields]) return;
          let position = 0;
          for (let message of list) {
            message[_fieldSet][_appendInvalidFields](problems, prefix + this.name + "[" + dart.str(position) + "].");
            position = position + 1;
          }
        }
      }
      [_createRepeatedField](m) {
        if (!this.isRepeated) dart.assertFailed(null, I[3], 173, 12, "isRepeated");
        return m.createRepeatedField(T, this.tagNumber, this);
      }
      [_createRepeatedFieldWithType](S, m) {
        dart.checkTypeBound(S, T, 'S');
        if (!this.isRepeated) dart.assertFailed(null, I[3], 179, 12, "isRepeated");
        return m.createRepeatedField(S, this.tagNumber, protobuf.FieldInfo$(S).as(this));
      }
      [_ensureRepeatedField](meta, fs) {
        return fs[_ensureRepeatedField](T, meta, this);
      }
      toString() {
        return this.name;
      }
    }
    (FieldInfo.new = function(name, tagNumber, index, type, opts) {
      let t0;
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[_emptyList] = null;
      this[name$] = name;
      this[tagNumber$0] = tagNumber;
      this[index$] = index;
      this[type$] = type;
      this[subBuilder$] = subBuilder;
      this[valueOf$] = valueOf;
      this[enumValues$] = enumValues;
      this[defaultEnumValue$] = defaultEnumValue;
      this[makeDefault] = protobuf.FieldInfo.findMakeDefault(type, defaultOrMaker);
      this[check$] = null;
      this[protoName$] = (t0 = protoName, t0 == null ? protobuf._unCamelCase(name) : t0);
      if (!(type !== 0)) dart.assertFailed(null, I[3], 61, 16, "type != 0");
      if (!(!protobuf._isGroupOrMessage(type) || subBuilder != null || protobuf._isMapField(type))) dart.assertFailed(null, I[3], 62, 16, "!_isGroupOrMessage(type) ||\n            subBuilder != null ||\n            _isMapField(type)");
      if (!(!protobuf._isEnum(type) || valueOf != null)) dart.assertFailed(null, I[3], 65, 16, "!_isEnum(type) || valueOf != null");
      ;
    }).prototype = FieldInfo.prototype;
    (FieldInfo.dummy = function(index) {
      this[_emptyList] = null;
      this[index$] = index;
      this[name$] = "<removed field>";
      this[protoName$] = "<removed field>";
      this[tagNumber$0] = 0;
      this[type$] = 0;
      this[makeDefault] = null;
      this[valueOf$] = null;
      this[check$] = null;
      this[enumValues$] = null;
      this[defaultEnumValue$] = null;
      this[subBuilder$] = null;
      ;
    }).prototype = FieldInfo.prototype;
    (FieldInfo.repeated = function(name, tagNumber, index, type, check, subBuilder, opts) {
      let t0;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[_emptyList] = null;
      this[name$] = name;
      this[tagNumber$0] = tagNumber;
      this[index$] = index;
      this[type$] = type;
      this[check$] = check;
      this[subBuilder$] = subBuilder;
      this[valueOf$] = valueOf;
      this[enumValues$] = enumValues;
      this[defaultEnumValue$] = defaultEnumValue;
      this[makeDefault] = dart.fn(() => new (__t$PbListOfT()).new({check: dart.nullCheck(check)}), __t$VoidToPbListOfT());
      this[protoName$] = (t0 = protoName, t0 == null ? protobuf._unCamelCase(name) : t0);
      core.ArgumentError.checkNotNull(core.String, this.name, "name");
      core.ArgumentError.checkNotNull(core.int, this.tagNumber, "tagNumber");
      if (!protobuf._isRepeated(this.type)) dart.assertFailed(null, I[3], 87, 12, "_isRepeated(type)");
      if (!(this.check != null)) dart.assertFailed(null, I[3], 88, 12, "check != null");
      if (!(!protobuf._isEnum(this.type) || this.valueOf != null)) dart.assertFailed(null, I[3], 89, 12, "!_isEnum(type) || valueOf != null");
    }).prototype = FieldInfo.prototype;
    dart.addTypeTests(FieldInfo);
    FieldInfo.prototype[_is_FieldInfo_default] = true;
    dart.addTypeCaches(FieldInfo);
    dart.setMethodSignature(FieldInfo, () => ({
      __proto__: dart.getMethods(FieldInfo.__proto__),
      [_hasRequiredValues]: dart.fnType(core.bool, [dart.dynamic]),
      [_appendInvalidFields]: dart.fnType(dart.void, [core.List$(core.String), dart.dynamic, core.String]),
      [_createRepeatedField]: dart.fnType(core.List$(dart.nullable(T)), [protobuf.GeneratedMessage]),
      [_createRepeatedFieldWithType]: dart.gFnType(S => [core.List$(S), [protobuf.GeneratedMessage]], S => [T]),
      [_ensureRepeatedField]: dart.fnType(core.List$(dart.nullable(T)), [protobuf.BuilderInfo, protobuf._FieldSet])
    }));
    dart.setStaticMethodSignature(FieldInfo, () => ['findMakeDefault']);
    dart.setGetterSignature(FieldInfo, () => ({
      __proto__: dart.getGetters(FieldInfo.__proto__),
      [_isDummy]: core.bool,
      isRequired: core.bool,
      isRepeated: core.bool,
      isGroupOrMessage: core.bool,
      isEnum: core.bool,
      isMapField: core.bool,
      readonlyDefault: dart.dynamic
    }));
    dart.setLibraryUri(FieldInfo, I[1]);
    dart.setFieldSignature(FieldInfo, () => ({
      __proto__: dart.getFields(FieldInfo.__proto__),
      [_emptyList]: dart.fieldType(dart.nullable(protobuf.FrozenPbList$(T))),
      name: dart.finalFieldType(core.String),
      protoName: dart.finalFieldType(core.String),
      tagNumber: dart.finalFieldType(core.int),
      index: dart.finalFieldType(dart.nullable(core.int)),
      type: dart.finalFieldType(core.int),
      makeDefault: dart.finalFieldType(dart.nullable(dart.fnType(dart.dynamic, []))),
      subBuilder: dart.finalFieldType(dart.nullable(dart.fnType(protobuf.GeneratedMessage, []))),
      enumValues: dart.finalFieldType(dart.nullable(core.List$(protobuf.ProtobufEnum))),
      defaultEnumValue: dart.finalFieldType(dart.nullable(protobuf.ProtobufEnum)),
      valueOf: dart.finalFieldType(dart.nullable(dart.fnType(dart.nullable(protobuf.ProtobufEnum), [core.int]))),
      check: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [dart.nullable(T)])))
    }));
    dart.defineExtensionMethods(FieldInfo, ['toString']);
    return FieldInfo;
  });
  protobuf.FieldInfo = protobuf.FieldInfo$();
  dart.addTypeTests(protobuf.FieldInfo, _is_FieldInfo_default);
  const _is_Extension_default = Symbol('_is_Extension_default');
  protobuf.Extension$ = dart.generic(T => {
    class Extension extends protobuf.FieldInfo$(T) {
      get extendee() {
        return this[extendee$];
      }
      set extendee(value) {
        super.extendee = value;
      }
      static ['_#new#tearOff'](T, extendee, name, tagNumber, fieldType, opts) {
        let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
        let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
        let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
        let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
        let protoName = opts && 'protoName' in opts ? opts.protoName : null;
        return new (protobuf.Extension$(T)).new(extendee, name, tagNumber, fieldType, {defaultOrMaker: defaultOrMaker, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      }
      static ['_#repeated#tearOff'](T, extendee, name, tagNumber, fieldType, opts) {
        let check = opts && 'check' in opts ? opts.check : null;
        let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
        let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
        let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
        let protoName = opts && 'protoName' in opts ? opts.protoName : null;
        return new (protobuf.Extension$(T)).repeated(extendee, name, tagNumber, fieldType, {check: check, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      }
      get hashCode() {
        return this.extendee[$hashCode] * 31 + this.tagNumber;
      }
      _equals(other) {
        if (other == null) return false;
        if (!protobuf.Extension.is(other)) return false;
        let o = other;
        return this.extendee === o.extendee && this.tagNumber === o.tagNumber;
      }
    }
    (Extension.new = function(extendee, name, tagNumber, fieldType, opts) {
      let defaultOrMaker = opts && 'defaultOrMaker' in opts ? opts.defaultOrMaker : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[extendee$] = extendee;
      Extension.__proto__.new.call(this, name, tagNumber, null, fieldType, {defaultOrMaker: defaultOrMaker, subBuilder: subBuilder, valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      ;
    }).prototype = Extension.prototype;
    (Extension.repeated = function(extendee, name, tagNumber, fieldType, opts) {
      let check = opts && 'check' in opts ? opts.check : null;
      let subBuilder = opts && 'subBuilder' in opts ? opts.subBuilder : null;
      let valueOf = opts && 'valueOf' in opts ? opts.valueOf : null;
      let enumValues = opts && 'enumValues' in opts ? opts.enumValues : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[extendee$] = extendee;
      Extension.__proto__.repeated.call(this, name, tagNumber, null, fieldType, check, subBuilder, {valueOf: valueOf, enumValues: enumValues, protoName: protoName});
      ;
    }).prototype = Extension.prototype;
    dart.addTypeTests(Extension);
    Extension.prototype[_is_Extension_default] = true;
    dart.addTypeCaches(Extension);
    dart.setLibraryUri(Extension, I[1]);
    dart.setFieldSignature(Extension, () => ({
      __proto__: dart.getFields(Extension.__proto__),
      extendee: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(Extension, ['_equals']);
    dart.defineExtensionAccessors(Extension, ['hashCode']);
    return Extension;
  });
  protobuf.Extension = protobuf.Extension$();
  dart.addTypeTests(protobuf.Extension, _is_Extension_default);
  var _info = dart.privateName(protobuf, "_info");
  var _values = dart.privateName(protobuf, "_values");
  var _isReadOnly = dart.privateName(protobuf, "_isReadOnly");
  var _parent$ = dart.privateName(protobuf, "_parent");
  var _getInfoOrNull = dart.privateName(protobuf, "_getInfoOrNull");
  var _getList = dart.privateName(protobuf, "_getList");
  var _validateInfo = dart.privateName(protobuf, "_validateInfo");
  var _addInfoUnchecked = dart.privateName(protobuf, "_addInfoUnchecked");
  var _getFieldOrNull = dart.privateName(protobuf, "_getFieldOrNull");
  var _checkNotInUnknown = dart.privateName(protobuf, "_checkNotInUnknown");
  var _getFieldOrDefault = dart.privateName(protobuf, "_getFieldOrDefault");
  var _hasField = dart.privateName(protobuf, "_hasField");
  var _messageName = dart.privateName(protobuf, "_messageName");
  var _addInfoAndCreateList = dart.privateName(protobuf, "_addInfoAndCreateList");
  var _message$ = dart.privateName(protobuf, "_message");
  var _setFieldUnchecked = dart.privateName(protobuf, "_setFieldUnchecked");
  var _clearField = dart.privateName(protobuf, "_clearField");
  var _clearFieldAndInfo = dart.privateName(protobuf, "_clearFieldAndInfo");
  var _ensureWritable = dart.privateName(protobuf, "_ensureWritable");
  var _hasObservers = dart.privateName(protobuf, "_hasObservers");
  var _eventPlugin$ = dart.privateName(protobuf, "_eventPlugin");
  var _setFieldFailedMessage = dart.privateName(protobuf, "_setFieldFailedMessage");
  var _validateField = dart.privateName(protobuf, "_validateField");
  var _setField = dart.privateName(protobuf, "_setField");
  var _setFieldAndInfo = dart.privateName(protobuf, "_setFieldAndInfo");
  var _tagNumbers = dart.privateName(protobuf, "_tagNumbers");
  var _infos = dart.privateName(protobuf, "_infos");
  var _hasValues = dart.privateName(protobuf, "_hasValues");
  var _equalValues = dart.privateName(protobuf, "_equalValues");
  var _clearValues = dart.privateName(protobuf, "_clearValues");
  var _shallowCopyValues = dart.privateName(protobuf, "_shallowCopyValues");
  var _markReadOnly = dart.privateName(protobuf, "_markReadOnly");
  var _hasUnknownFields = dart.privateName(protobuf, "_hasUnknownFields");
  var _unknownFields = dart.privateName(protobuf, "_unknownFields");
  protobuf._ExtensionFieldSet = class _ExtensionFieldSet extends core.Object {
    static ['_#new#tearOff'](_parent) {
      return new protobuf._ExtensionFieldSet.new(_parent);
    }
    [_getInfoOrNull](tagNumber) {
      return this[_info][$_get](tagNumber);
    }
    [_getFieldOrDefault](fi) {
      if (fi.isRepeated) return this[_getList](core.Object, fi);
      this[_validateInfo](fi);
      this[_addInfoUnchecked](fi);
      let value = this[_getFieldOrNull](fi);
      if (value == null) {
        this[_checkNotInUnknown](fi);
        return dart.nullCheck(fi.makeDefault)();
      }
      return value;
    }
    [_hasField](tagNumber) {
      let value = this[_values][$_get](tagNumber);
      if (value == null) return false;
      if (core.List.is(value)) return value[$isNotEmpty];
      return true;
    }
    [_ensureRepeatedField](T, fi) {
      if (!!this[_isReadOnly]) dart.assertFailed(null, I[4], 43, 12, "!_isReadOnly");
      if (!fi.isRepeated) dart.assertFailed(null, I[4], 44, 12, "fi.isRepeated");
      if (!(fi.extendee === "" || fi.extendee === this[_parent$][_messageName])) dart.assertFailed(null, I[4], 45, 12, "fi.extendee == '' || fi.extendee == _parent._messageName");
      let list = this[_values][$_get](fi.tagNumber);
      if (list != null) return core.List$(T).as(list);
      return core.List$(dart.nullable(T)).as(this[_addInfoAndCreateList](fi));
    }
    [_getList](T, fi) {
      let value = this[_values][$_get](fi.tagNumber);
      if (value != null) return core.List$(T).as(value);
      this[_checkNotInUnknown](fi);
      if (this[_isReadOnly]) return core.List$(T).unmodifiable(C[2] || CT.C2);
      return core.List$(dart.nullable(T)).as(this[_addInfoAndCreateList](fi));
    }
    [_addInfoAndCreateList](fi) {
      this[_validateInfo](fi);
      let newList = fi[_createRepeatedField](dart.nullCheck(this[_parent$][_message$]));
      this[_addInfoUnchecked](fi);
      this[_setFieldUnchecked](fi, newList);
      return newList;
    }
    [_getFieldOrNull](extension) {
      return this[_values][$_get](extension.tagNumber);
    }
    [_clearFieldAndInfo](fi) {
      this[_clearField](fi);
      this[_info][$remove](fi.tagNumber);
    }
    [_clearField](fi) {
      this[_ensureWritable]();
      this[_validateInfo](fi);
      if (this[_parent$][_hasObservers]) dart.nullCheck(this[_parent$][_eventPlugin$]).beforeClearField(fi);
      this[_values][$remove](fi.tagNumber);
    }
    [_setField](tagNumber, value) {
      let fi = this[_getInfoOrNull](tagNumber);
      if (fi == null) {
        dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + dart.str(this[_parent$]) + "._messageName"));
      }
      if (fi.isRepeated) {
        dart.throw(new core.ArgumentError.new(this[_parent$][_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_ensureWritable]();
      this[_parent$][_validateField](fi, value);
      this[_setFieldUnchecked](fi, value);
    }
    [_setFieldAndInfo](fi, value) {
      this[_ensureWritable]();
      if (fi.isRepeated) {
        dart.throw(new core.ArgumentError.new(this[_parent$][_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_ensureWritable]();
      this[_validateInfo](fi);
      this[_parent$][_validateField](fi, value);
      this[_addInfoUnchecked](fi);
      this[_setFieldUnchecked](fi, value);
    }
    [_ensureWritable]() {
      if (this[_isReadOnly]) protobuf.frozenMessageModificationHandler(this[_parent$][_messageName]);
    }
    [_validateInfo](fi) {
      if (fi.extendee !== this[_parent$][_messageName]) {
        dart.throw(new core.ArgumentError.new("Extension " + dart.str(fi) + " not legal for message " + this[_parent$][_messageName]));
      }
    }
    [_addInfoUnchecked](fi) {
      if (!(fi.extendee === this[_parent$][_messageName])) dart.assertFailed(null, I[4], 127, 12, "fi.extendee == _parent._messageName");
      this[_info][$_set](fi.tagNumber, fi);
    }
    [_setFieldUnchecked](fi, value) {
      if (this[_parent$][_hasObservers]) {
        dart.nullCheck(this[_parent$][_eventPlugin$]).beforeSetField(fi, value);
      }
      this[_values][$_set](fi.tagNumber, value);
    }
    get [_tagNumbers]() {
      return this[_values][$keys];
    }
    get [_infos]() {
      return this[_info][$values];
    }
    get [_hasValues]() {
      return this[_values][$isNotEmpty];
    }
    [_equalValues](other) {
      return other != null && protobuf._areMapsEqual(this[_values], other[_values]);
    }
    [_clearValues]() {
      return this[_values][$clear]();
    }
    [_shallowCopyValues](original) {
      for (let tagNumber of original[_tagNumbers]) {
        let extension = dart.nullCheck(original[_getInfoOrNull](tagNumber));
        this[_addInfoUnchecked](extension);
        let value = original[_getFieldOrNull](extension);
        if (value == null) continue;
        if (extension.isRepeated) {
          if (!protobuf.PbListBase.is(value)) dart.assertFailed(null, I[4], 162, 16, "value is PbListBase");
          this[_ensureRepeatedField](core.Object, extension)[$addAll](T$.IterableOfObjectN().as(value));
        } else {
          this[_setFieldUnchecked](extension, value);
        }
      }
    }
    [_markReadOnly]() {
      if (this[_isReadOnly]) return;
      this[_isReadOnly] = true;
      for (let field of this[_info][$values]) {
        if (field.isRepeated) {
          let entries = this[_values][$_get](field.tagNumber);
          if (entries == null) continue;
          if (field.isGroupOrMessage) {
            for (let subMessage of T$.ListOfGeneratedMessage().as(entries)) {
              subMessage.freeze();
            }
          }
          this[_values][$_set](field.tagNumber, dart.dsend(entries, 'toFrozenPbList', []));
        } else if (field.isGroupOrMessage) {
          let entry = this[_values][$_get](field.tagNumber);
          if (entry != null) {
            protobuf.GeneratedMessage.as(entry).freeze();
          }
        }
      }
    }
    [_checkNotInUnknown](extension) {
      if (this[_parent$][_hasUnknownFields] && dart.nullCheck(this[_parent$][_unknownFields]).hasField(extension.tagNumber)) {
        dart.throw(new core.StateError.new("Trying to get " + dart.str(extension) + " that is present as an unknown field. " + "Parse the message with this extension in the extension registry or " + "use `ExtensionRegistry.reparseMessage`."));
      }
    }
  };
  (protobuf._ExtensionFieldSet.new = function(_parent) {
    this[_info] = new (T$.IdentityMapOfint$Extension()).new();
    this[_values] = new (T$.IdentityMapOfint$dynamic()).new();
    this[_isReadOnly] = false;
    this[_parent$] = _parent;
    ;
  }).prototype = protobuf._ExtensionFieldSet.prototype;
  dart.addTypeTests(protobuf._ExtensionFieldSet);
  dart.addTypeCaches(protobuf._ExtensionFieldSet);
  dart.setMethodSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getMethods(protobuf._ExtensionFieldSet.__proto__),
    [_getInfoOrNull]: dart.fnType(dart.nullable(protobuf.Extension), [dart.nullable(core.int)]),
    [_getFieldOrDefault]: dart.fnType(dart.dynamic, [protobuf.Extension]),
    [_hasField]: dart.fnType(core.bool, [core.int]),
    [_ensureRepeatedField]: dart.gFnType(T => [core.List$(dart.nullable(T)), [protobuf.Extension$(dart.nullable(T))]], T => [dart.nullable(core.Object)]),
    [_getList]: dart.gFnType(T => [core.List$(dart.nullable(T)), [protobuf.Extension$(dart.nullable(T))]], T => [dart.nullable(core.Object)]),
    [_addInfoAndCreateList]: dart.fnType(core.List, [protobuf.Extension]),
    [_getFieldOrNull]: dart.fnType(dart.dynamic, [protobuf.Extension]),
    [_clearFieldAndInfo]: dart.fnType(dart.void, [protobuf.Extension]),
    [_clearField]: dart.fnType(dart.void, [protobuf.Extension]),
    [_setField]: dart.fnType(dart.void, [core.int, dart.dynamic]),
    [_setFieldAndInfo]: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    [_ensureWritable]: dart.fnType(dart.void, []),
    [_validateInfo]: dart.fnType(dart.void, [protobuf.Extension]),
    [_addInfoUnchecked]: dart.fnType(dart.void, [protobuf.Extension]),
    [_setFieldUnchecked]: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    [_equalValues]: dart.fnType(core.bool, [dart.nullable(protobuf._ExtensionFieldSet)]),
    [_clearValues]: dart.fnType(dart.void, []),
    [_shallowCopyValues]: dart.fnType(dart.void, [protobuf._ExtensionFieldSet]),
    [_markReadOnly]: dart.fnType(dart.void, []),
    [_checkNotInUnknown]: dart.fnType(dart.void, [protobuf.Extension])
  }));
  dart.setGetterSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getGetters(protobuf._ExtensionFieldSet.__proto__),
    [_tagNumbers]: core.Iterable$(core.int),
    [_infos]: core.Iterable$(protobuf.Extension),
    [_hasValues]: core.bool
  }));
  dart.setLibraryUri(protobuf._ExtensionFieldSet, I[1]);
  dart.setFieldSignature(protobuf._ExtensionFieldSet, () => ({
    __proto__: dart.getFields(protobuf._ExtensionFieldSet.__proto__),
    [_parent$]: dart.finalFieldType(protobuf._FieldSet),
    [_info]: dart.finalFieldType(core.Map$(core.int, protobuf.Extension)),
    [_values]: dart.finalFieldType(core.Map$(core.int, dart.dynamic)),
    [_isReadOnly]: dart.fieldType(core.bool)
  }));
  var _extensions = dart.privateName(protobuf, "_extensions");
  protobuf.ExtensionRegistry = class ExtensionRegistry extends core.Object {
    add(extension) {
      let map = this[_extensions][$putIfAbsent](extension.extendee, dart.fn(() => new (T$.IdentityMapOfint$Extension()).new(), T$.VoidToMapOfint$Extension()));
      map[$_set](extension.tagNumber, extension);
    }
    addAll(extensions) {
      extensions[$forEach](dart.bind(this, 'add'));
    }
    getExtension(messageName, tagNumber) {
      let map = this[_extensions][$_get](messageName);
      if (map != null) {
        return map[$_get](tagNumber);
      }
      return null;
    }
    reparseMessage(T, message) {
      return protobuf._reparseMessage(T, message, this);
    }
    static ['_#new#tearOff']() {
      return new protobuf.ExtensionRegistry.new();
    }
  };
  (protobuf.ExtensionRegistry.new = function() {
    this[_extensions] = new (T$.IdentityMapOfString$MapOfint$Extension()).new();
    ;
  }).prototype = protobuf.ExtensionRegistry.prototype;
  dart.addTypeTests(protobuf.ExtensionRegistry);
  dart.addTypeCaches(protobuf.ExtensionRegistry);
  dart.setMethodSignature(protobuf.ExtensionRegistry, () => ({
    __proto__: dart.getMethods(protobuf.ExtensionRegistry.__proto__),
    add: dart.fnType(dart.void, [protobuf.Extension]),
    addAll: dart.fnType(dart.void, [core.Iterable$(protobuf.Extension)]),
    getExtension: dart.fnType(dart.nullable(protobuf.Extension), [core.String, core.int]),
    reparseMessage: dart.gFnType(T => [T, [T]], T => [protobuf.GeneratedMessage])
  }));
  dart.setLibraryUri(protobuf.ExtensionRegistry, I[1]);
  dart.setFieldSignature(protobuf.ExtensionRegistry, () => ({
    __proto__: dart.getFields(protobuf.ExtensionRegistry.__proto__),
    [_extensions]: dart.finalFieldType(core.Map$(core.String, core.Map$(core.int, protobuf.Extension)))
  }));
  dart.setStaticFieldSignature(protobuf.ExtensionRegistry, () => ['EMPTY']);
  dart.defineLazy(protobuf.ExtensionRegistry, {
    /*protobuf.ExtensionRegistry.EMPTY*/get EMPTY() {
      return C[3] || CT.C3;
    }
  }, false);
  protobuf._EmptyExtensionRegistry = class _EmptyExtensionRegistry extends core.Object {
    static ['_#new#tearOff']() {
      return new protobuf._EmptyExtensionRegistry.new();
    }
    get [_extensions]() {
      return C[4] || CT.C4;
    }
    add(extension) {
      dart.throw(new core.UnsupportedError.new("Immutable ExtensionRegistry"));
    }
    addAll(extensions) {
      dart.throw(new core.UnsupportedError.new("Immutable ExtensionRegistry"));
    }
    getExtension(messageName, tagNumber) {
      return null;
    }
    reparseMessage(T, message) {
      return protobuf._reparseMessage(T, message, this);
    }
  };
  (protobuf._EmptyExtensionRegistry.new = function() {
    ;
  }).prototype = protobuf._EmptyExtensionRegistry.prototype;
  dart.addTypeTests(protobuf._EmptyExtensionRegistry);
  dart.addTypeCaches(protobuf._EmptyExtensionRegistry);
  protobuf._EmptyExtensionRegistry[dart.implements] = () => [protobuf.ExtensionRegistry];
  dart.setMethodSignature(protobuf._EmptyExtensionRegistry, () => ({
    __proto__: dart.getMethods(protobuf._EmptyExtensionRegistry.__proto__),
    add: dart.fnType(dart.void, [protobuf.Extension]),
    addAll: dart.fnType(dart.void, [core.Iterable$(protobuf.Extension)]),
    getExtension: dart.fnType(dart.nullable(protobuf.Extension), [core.String, core.int]),
    reparseMessage: dart.gFnType(T => [T, [T]], T => [protobuf.GeneratedMessage])
  }));
  dart.setGetterSignature(protobuf._EmptyExtensionRegistry, () => ({
    __proto__: dart.getGetters(protobuf._EmptyExtensionRegistry.__proto__),
    [_extensions]: core.Map$(core.String, core.Map$(core.int, protobuf.Extension))
  }));
  dart.setLibraryUri(protobuf._EmptyExtensionRegistry, I[1]);
  var keyFieldType$ = dart.privateName(protobuf, "MapFieldInfo.keyFieldType");
  var valueFieldType$ = dart.privateName(protobuf, "MapFieldInfo.valueFieldType");
  var valueCreator$ = dart.privateName(protobuf, "MapFieldInfo.valueCreator");
  var mapEntryBuilderInfo$ = dart.privateName(protobuf, "MapFieldInfo.mapEntryBuilderInfo");
  var _ensureMapField = dart.privateName(protobuf, "_ensureMapField");
  var _createMapField = dart.privateName(protobuf, "_createMapField");
  var keyFieldType$0 = dart.privateName(protobuf, "PbMap.keyFieldType");
  var valueFieldType$0 = dart.privateName(protobuf, "PbMap.valueFieldType");
  var _isReadonly = dart.privateName(protobuf, "_isReadonly");
  var _wrappedMap = dart.privateName(protobuf, "_wrappedMap");
  var _checkNotNull = dart.privateName(protobuf, "_checkNotNull");
  var _mergeEntry = dart.privateName(protobuf, "_mergeEntry");
  const _is_PbMap_default = Symbol('_is_PbMap_default');
  protobuf.PbMap$ = dart.generic((K, V) => {
    var __t$LinkedMapOfK$V = () => (__t$LinkedMapOfK$V = dart.constFn(_js_helper.LinkedMap$(K, V)))();
    var __t$MapOfK$V = () => (__t$MapOfK$V = dart.constFn(core.Map$(K, V)))();
    var __t$MapEntryOfK$V = () => (__t$MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    var __t$intAndMapEntryOfK$VToint = () => (__t$intAndMapEntryOfK$VToint = dart.constFn(dart.fnType(core.int, [core.int, __t$MapEntryOfK$V()])))();
    class PbMap extends collection.MapBase$(K, V) {
      get keyFieldType() {
        return this[keyFieldType$0];
      }
      set keyFieldType(value) {
        super.keyFieldType = value;
      }
      get valueFieldType() {
        return this[valueFieldType$0];
      }
      set valueFieldType(value) {
        super.valueFieldType = value;
      }
      static ['_#new#tearOff'](K, V, keyFieldType, valueFieldType, info = null) {
        return new (protobuf.PbMap$(K, V)).new(keyFieldType, valueFieldType, info);
      }
      static ['_#unmodifiable#tearOff'](K, V, other) {
        return new (protobuf.PbMap$(K, V)).unmodifiable(other);
      }
      _get(key) {
        return this[_wrappedMap][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K.as(key);
        V.as(value);
        if (this[_isReadonly]) {
          dart.throw(new core.UnsupportedError.new("Attempted to change a read-only map field"));
        }
        this[_checkNotNull](key);
        this[_checkNotNull](value);
        this[_wrappedMap][$_set](key, value);
        return value$;
      }
      _equals(other) {
        if (other == null) return false;
        if (other === this) {
          return true;
        }
        if (!protobuf.PbMap.is(other)) {
          return false;
        }
        if (other[$length] !== this[$length]) {
          return false;
        }
        for (let key of this.keys) {
          if (!other[$containsKey](key)) {
            return false;
          }
        }
        for (let key of this.keys) {
          if (!dart.equals(other._get(key), this._get(key))) {
            return false;
          }
        }
        return true;
      }
      get hashCode() {
        return this[_wrappedMap][$entries][$fold](core.int, 0, dart.fn((h, entry) => (h ^ protobuf._HashUtils._hash2(entry.key, entry.value)) >>> 0, __t$intAndMapEntryOfK$VToint()));
      }
      clear() {
        if (this[_isReadonly]) {
          dart.throw(new core.UnsupportedError.new("Attempted to change a read-only map field"));
        }
        this[_wrappedMap][$clear]();
      }
      get keys() {
        return this[_wrappedMap][$keys];
      }
      remove(key) {
        if (this[_isReadonly]) {
          dart.throw(new core.UnsupportedError.new("Attempted to change a read-only map field"));
        }
        return this[_wrappedMap][$remove](key);
      }
      [_mergeEntry](mapEntryMeta, input, registry = null) {
        let t0, t0$;
        let length = input.readInt32();
        let oldLimit = input[_currentLimit];
        input[_currentLimit] = input[_bufferPos] + length;
        let entryFieldSet = new protobuf._FieldSet.new(null, mapEntryMeta, null);
        protobuf._mergeFromCodedBufferReader(mapEntryMeta, entryFieldSet, input, dart.nullCheck(registry));
        input.checkLastTagWas(0);
        input[_currentLimit] = oldLimit;
        let key = (t0 = entryFieldSet[_values][$_get](0), t0 == null ? dart.nullCheck(mapEntryMeta.byIndex[$_get](0).makeDefault)() : t0);
        let value = (t0$ = entryFieldSet[_values][$_get](1), t0$ == null ? dart.nullCheck(mapEntryMeta.byIndex[$_get](1).makeDefault)() : t0$);
        this[_wrappedMap][$_set](K.as(key), V.as(value));
      }
      [_checkNotNull](val) {
        if (val == null) {
          dart.throw(new core.ArgumentError.new("Can't add a null to a map field"));
        }
      }
      freeze() {
        this[_isReadonly] = true;
        if (protobuf._isGroupOrMessage(dart.nullCheck(this.valueFieldType))) {
          for (let subMessage of T$.IterableOfGeneratedMessage().as(this[$values])) {
            subMessage.freeze();
          }
        }
        return this;
      }
    }
    (PbMap.new = function(keyFieldType, valueFieldType, info = null) {
      this[_isReadonly] = false;
      this[keyFieldType$0] = keyFieldType;
      this[valueFieldType$0] = valueFieldType;
      this[_wrappedMap] = new (__t$LinkedMapOfK$V()).new();
      ;
    }).prototype = PbMap.prototype;
    (PbMap.unmodifiable = function(other) {
      this[_isReadonly] = false;
      this[keyFieldType$0] = other.keyFieldType;
      this[valueFieldType$0] = other.valueFieldType;
      this[_wrappedMap] = __t$MapOfK$V().unmodifiable(other[_wrappedMap]);
      this[_isReadonly] = other[_isReadonly];
      ;
    }).prototype = PbMap.prototype;
    dart.addTypeTests(PbMap);
    PbMap.prototype[_is_PbMap_default] = true;
    dart.addTypeCaches(PbMap);
    dart.setMethodSignature(PbMap, () => ({
      __proto__: dart.getMethods(PbMap.__proto__),
      _get: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [$_get]: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      _set: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [dart.nullable(core.Object), dart.nullable(core.Object)]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      remove: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [$remove]: dart.fnType(dart.nullable(V), [dart.nullable(core.Object)]),
      [_mergeEntry]: dart.fnType(dart.void, [protobuf.BuilderInfo, protobuf.CodedBufferReader], [dart.nullable(protobuf.ExtensionRegistry)]),
      [_checkNotNull]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      freeze: dart.fnType(protobuf.PbMap, [])
    }));
    dart.setGetterSignature(PbMap, () => ({
      __proto__: dart.getGetters(PbMap.__proto__),
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K)
    }));
    dart.setLibraryUri(PbMap, I[1]);
    dart.setFieldSignature(PbMap, () => ({
      __proto__: dart.getFields(PbMap.__proto__),
      keyFieldType: dart.finalFieldType(dart.nullable(core.int)),
      valueFieldType: dart.finalFieldType(dart.nullable(core.int)),
      [_wrappedMap]: dart.finalFieldType(core.Map$(K, V)),
      [_isReadonly]: dart.fieldType(core.bool)
    }));
    dart.setStaticFieldSignature(PbMap, () => ['_keyFieldNumber', '_valueFieldNumber']);
    dart.defineExtensionMethods(PbMap, [
      '_get',
      '_set',
      '_equals',
      'clear',
      'remove'
    ]);
    dart.defineExtensionAccessors(PbMap, ['hashCode', 'keys']);
    return PbMap;
  });
  protobuf.PbMap = protobuf.PbMap$();
  dart.defineLazy(protobuf.PbMap, {
    /*protobuf.PbMap._keyFieldNumber*/get _keyFieldNumber() {
      return 1;
    },
    /*protobuf.PbMap._valueFieldNumber*/get _valueFieldNumber() {
      return 2;
    }
  }, false);
  dart.addTypeTests(protobuf.PbMap, _is_PbMap_default);
  const _is_MapFieldInfo_default = Symbol('_is_MapFieldInfo_default');
  protobuf.MapFieldInfo$ = dart.generic((K, V) => {
    var __t$PbMapOfK$V = () => (__t$PbMapOfK$V = dart.constFn(protobuf.PbMap$(K, V)))();
    var __t$VoidToPbMapOfK$V = () => (__t$VoidToPbMapOfK$V = dart.constFn(dart.fnType(__t$PbMapOfK$V(), [])))();
    class MapFieldInfo extends protobuf.FieldInfo$(dart.nullable(protobuf.PbMap$(K, V))) {
      get keyFieldType() {
        return this[keyFieldType$];
      }
      set keyFieldType(value) {
        super.keyFieldType = value;
      }
      get valueFieldType() {
        return this[valueFieldType$];
      }
      set valueFieldType(value) {
        super.valueFieldType = value;
      }
      get valueCreator() {
        return this[valueCreator$];
      }
      set valueCreator(value) {
        super.valueCreator = value;
      }
      get mapEntryBuilderInfo() {
        return this[mapEntryBuilderInfo$];
      }
      set mapEntryBuilderInfo(value) {
        super.mapEntryBuilderInfo = value;
      }
      static ['_#new#tearOff'](K, V, name, tagNumber, index, type, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, opts) {
        let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
        let protoName = opts && 'protoName' in opts ? opts.protoName : null;
        return new (protobuf.MapFieldInfo$(K, V)).new(name, tagNumber, index, type, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, {defaultEnumValue: defaultEnumValue, protoName: protoName});
      }
      get valueFieldInfo() {
        return dart.nullCheck(this.mapEntryBuilderInfo.fieldInfo[$_get](2));
      }
      [_ensureMapField](meta, fs) {
        return fs[_ensureMapField](K, V, meta, this);
      }
      [_createMapField](m) {
        if (!this.isMapField) dart.assertFailed(null, I[3], 241, 12, "isMapField");
        return m.createMapField(K, V, this.tagNumber, this);
      }
    }
    (MapFieldInfo.new = function(name, tagNumber, index, type, keyFieldType, valueFieldType, mapEntryBuilderInfo, valueCreator, opts) {
      let defaultEnumValue = opts && 'defaultEnumValue' in opts ? opts.defaultEnumValue : null;
      let protoName = opts && 'protoName' in opts ? opts.protoName : null;
      this[keyFieldType$] = keyFieldType;
      this[valueFieldType$] = valueFieldType;
      this[mapEntryBuilderInfo$] = mapEntryBuilderInfo;
      this[valueCreator$] = valueCreator;
      MapFieldInfo.__proto__.new.call(this, name, tagNumber, index, type, {defaultOrMaker: dart.fn(() => new (__t$PbMapOfK$V()).new(keyFieldType, valueFieldType, mapEntryBuilderInfo), __t$VoidToPbMapOfK$V()), defaultEnumValue: defaultEnumValue, protoName: protoName});
      core.ArgumentError.checkNotNull(core.String, name, "name");
      core.ArgumentError.checkNotNull(core.int, tagNumber, "tagNumber");
      if (!protobuf._isMapField(type)) dart.assertFailed(null, I[3], 229, 12, "_isMapField(type)");
      if (!(!protobuf._isEnum(type) || this.valueOf != null)) dart.assertFailed(null, I[3], 230, 12, "!_isEnum(type) || valueOf != null");
    }).prototype = MapFieldInfo.prototype;
    dart.addTypeTests(MapFieldInfo);
    MapFieldInfo.prototype[_is_MapFieldInfo_default] = true;
    dart.addTypeCaches(MapFieldInfo);
    dart.setMethodSignature(MapFieldInfo, () => ({
      __proto__: dart.getMethods(MapFieldInfo.__proto__),
      [_ensureMapField]: dart.fnType(core.Map$(K, V), [protobuf.BuilderInfo, protobuf._FieldSet]),
      [_createMapField]: dart.fnType(core.Map$(K, V), [protobuf.GeneratedMessage])
    }));
    dart.setGetterSignature(MapFieldInfo, () => ({
      __proto__: dart.getGetters(MapFieldInfo.__proto__),
      valueFieldInfo: protobuf.FieldInfo
    }));
    dart.setLibraryUri(MapFieldInfo, I[1]);
    dart.setFieldSignature(MapFieldInfo, () => ({
      __proto__: dart.getFields(MapFieldInfo.__proto__),
      keyFieldType: dart.finalFieldType(dart.nullable(core.int)),
      valueFieldType: dart.finalFieldType(dart.nullable(core.int)),
      valueCreator: dart.finalFieldType(dart.nullable(dart.fnType(protobuf.GeneratedMessage, []))),
      mapEntryBuilderInfo: dart.finalFieldType(protobuf.BuilderInfo)
    }));
    return MapFieldInfo;
  });
  protobuf.MapFieldInfo = protobuf.MapFieldInfo$();
  dart.addTypeTests(protobuf.MapFieldInfo, _is_MapFieldInfo_default);
  var _frozenState = dart.privateName(protobuf, "_frozenState");
  var _oneofCases = dart.privateName(protobuf, "_oneofCases");
  var _meta = dart.privateName(protobuf, "_meta");
  var _memoizedHashCode = dart.privateName(protobuf, "_memoizedHashCode");
  var _infosSortedByTag = dart.privateName(protobuf, "_infosSortedByTag");
  var _hasExtensions = dart.privateName(protobuf, "_hasExtensions");
  var _ensureExtensions = dart.privateName(protobuf, "_ensureExtensions");
  var _ensureUnknownFields = dart.privateName(protobuf, "_ensureUnknownFields");
  var _nonExtensionInfo = dart.privateName(protobuf, "_nonExtensionInfo");
  var _nonExtensionInfoByIndex = dart.privateName(protobuf, "_nonExtensionInfoByIndex");
  var _getFieldInfoOrNull = dart.privateName(protobuf, "_getFieldInfoOrNull");
  var _ensureInfo = dart.privateName(protobuf, "_ensureInfo");
  var _getDefault = dart.privateName(protobuf, "_getDefault");
  var _getField = dart.privateName(protobuf, "_getField");
  var _setNonExtensionFieldUnchecked = dart.privateName(protobuf, "_setNonExtensionFieldUnchecked");
  var _getDefaultList = dart.privateName(protobuf, "_getDefaultList");
  var _getDefaultMap = dart.privateName(protobuf, "_getDefaultMap");
  var _getFieldOrNullByTag = dart.privateName(protobuf, "_getFieldOrNullByTag");
  var _$has = dart.privateName(protobuf, "_$has");
  var _$get = dart.privateName(protobuf, "_$get");
  var _$getND = dart.privateName(protobuf, "_$getND");
  var _$set = dart.privateName(protobuf, "_$set");
  var _$ensure = dart.privateName(protobuf, "_$ensure");
  var _$getList = dart.privateName(protobuf, "_$getList");
  var _$getMap = dart.privateName(protobuf, "_$getMap");
  var _$getB = dart.privateName(protobuf, "_$getB");
  var _$getBF = dart.privateName(protobuf, "_$getBF");
  var _$getI = dart.privateName(protobuf, "_$getI");
  var _$getIZ = dart.privateName(protobuf, "_$getIZ");
  var _$getS = dart.privateName(protobuf, "_$getS");
  var _$getSZ = dart.privateName(protobuf, "_$getSZ");
  var _$getI64 = dart.privateName(protobuf, "_$getI64");
  var _$check = dart.privateName(protobuf, "_$check");
  var _clear = dart.privateName(protobuf, "_clear");
  var _equalFieldValues = dart.privateName(protobuf, "_equalFieldValues");
  var _equals = dart.privateName(protobuf, "_equals");
  var _hashCode = dart.privateName(protobuf, "_hashCode");
  var _mergeField = dart.privateName(protobuf, "_mergeField");
  var _mergeFromMessage = dart.privateName(protobuf, "_mergeFromMessage");
  var _hasRequiredExtensionValues = dart.privateName(protobuf, "_hasRequiredExtensionValues");
  var _fields = dart.privateName(protobuf, "_fields");
  protobuf._FieldSet = class _FieldSet extends core.Object {
    get [_meta]() {
      return dart.nullCheck(this[_message$]).info_;
    }
    get [_isReadOnly]() {
      return typeof this[_frozenState] == 'boolean' ? core.bool.as(this[_frozenState]) : true;
    }
    get [_memoizedHashCode]() {
      return core.int.is(this[_frozenState]) ? core.int.as(this[_frozenState]) : null;
    }
    static ['_#new#tearOff'](_message, meta, _eventPlugin) {
      return new protobuf._FieldSet.new(_message, meta, _eventPlugin);
    }
    static _makeValueList(length) {
      if (length === 0) return protobuf._FieldSet._zeroList;
      return core.List.filled(length, null, {growable: false});
    }
    get [_messageName]() {
      return this[_meta].qualifiedMessageName;
    }
    get [_hasRequiredFields]() {
      return this[_meta].hasRequiredFields;
    }
    get [_infos]() {
      return this[_meta].fieldInfo[$values];
    }
    get [_infosSortedByTag]() {
      return this[_meta].sortedByTag;
    }
    get [_hasObservers]() {
      return this[_eventPlugin$] != null && dart.nullCheck(this[_eventPlugin$]).hasObservers;
    }
    get [_hasExtensions]() {
      return this[_extensions] != null;
    }
    get [_hasUnknownFields]() {
      return this[_unknownFields] != null;
    }
    [_ensureExtensions]() {
      if (!this[_hasExtensions]) this[_extensions] = new protobuf._ExtensionFieldSet.new(this);
      return dart.nullCheck(this[_extensions]);
    }
    [_ensureUnknownFields]() {
      if (this[_unknownFields] == null) {
        if (this[_isReadOnly]) return protobuf.UnknownFieldSet.emptyUnknownFieldSet;
        this[_unknownFields] = new protobuf.UnknownFieldSet.new();
      }
      return dart.nullCheck(this[_unknownFields]);
    }
    [_nonExtensionInfo](meta, tagNumber) {
      return meta.fieldInfo[$_get](tagNumber);
    }
    [_nonExtensionInfoByIndex](index) {
      return this[_meta].byIndex[$_get](index);
    }
    [_ensureInfo](tagNumber) {
      let fi = this[_getFieldInfoOrNull](tagNumber);
      if (fi != null) return fi;
      dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + this[_messageName]));
    }
    [_getFieldInfoOrNull](tagNumber) {
      let fi = this[_nonExtensionInfo](this[_meta], tagNumber);
      if (fi != null) return fi;
      if (!this[_hasExtensions]) return null;
      return dart.nullCheck(this[_extensions])[_getInfoOrNull](tagNumber);
    }
    [_markReadOnly]() {
      if (this[_isReadOnly]) return;
      this[_frozenState] = true;
      for (let field of this[_meta].sortedByTag) {
        if (field.isRepeated) {
          let entries = this[_values][$_get](dart.nullCheck(field.index));
          if (entries == null) continue;
          if (field.isGroupOrMessage) {
            for (let subMessage of T$.ListOfGeneratedMessage().as(entries)) {
              subMessage.freeze();
            }
          }
          this[_values][$_set](dart.nullCheck(field.index), dart.dsend(entries, 'toFrozenPbList', []));
        } else if (field.isMapField) {
          let map = T$.PbMapN().as(this[_values][$_get](dart.nullCheck(field.index)));
          if (map == null) continue;
          this[_values][$_set](dart.nullCheck(field.index), map.freeze());
        } else if (field.isGroupOrMessage) {
          let entry = this[_values][$_get](dart.nullCheck(field.index));
          if (entry != null) {
            protobuf.GeneratedMessage.as(entry).freeze();
          }
        }
      }
      if (this[_hasExtensions]) {
        this[_ensureExtensions]()[_markReadOnly]();
      }
      if (this[_hasUnknownFields]) {
        this[_ensureUnknownFields]()[_markReadOnly]();
      }
    }
    [_ensureWritable]() {
      if (this[_isReadOnly]) protobuf.frozenMessageModificationHandler(this[_messageName]);
    }
    [_getField](tagNumber) {
      let fi = this[_nonExtensionInfo](this[_meta], tagNumber);
      if (fi != null) {
        let value = this[_values][$_get](dart.nullCheck(fi.index));
        if (value != null) return value;
        return this[_getDefault](fi);
      }
      if (this[_hasExtensions]) {
        let fi = dart.nullCheck(this[_extensions])[_getInfoOrNull](tagNumber);
        if (fi != null) {
          return dart.nullCheck(this[_extensions])[_getFieldOrDefault](fi);
        }
      }
      dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + this[_messageName]));
    }
    [_getDefault](fi) {
      if (!fi.isRepeated) return dart.nullCheck(fi.makeDefault)();
      if (this[_isReadOnly]) return fi.readonlyDefault;
      let value = fi[_createRepeatedField](dart.nullCheck(this[_message$]));
      this[_setNonExtensionFieldUnchecked](this[_meta], fi, value);
      return value;
    }
    [_getDefaultList](T, fi) {
      if (!fi.isRepeated) dart.assertFailed(null, I[5], 246, 12, "fi.isRepeated");
      if (this[_isReadOnly]) return new (protobuf.FrozenPbList$(T)).__(C[5] || CT.C5);
      let value = fi[_createRepeatedFieldWithType](T, dart.nullCheck(this[_message$]));
      this[_setNonExtensionFieldUnchecked](this[_meta], fi, value);
      return value;
    }
    [_getDefaultMap](K, V, fi) {
      if (!fi.isMapField) dart.assertFailed(null, I[5], 258, 12, "fi.isMapField");
      if (this[_isReadOnly]) {
        return new (protobuf.PbMap$(K, V)).unmodifiable(new (protobuf.PbMap$(K, V)).new(fi.keyFieldType, fi.valueFieldType));
      }
      let value = fi[_createMapField](dart.nullCheck(this[_message$]));
      this[_setNonExtensionFieldUnchecked](this[_meta], fi, value);
      return value;
    }
    [_getFieldOrNullByTag](tagNumber) {
      let fi = this[_getFieldInfoOrNull](tagNumber);
      if (fi == null) return null;
      return this[_getFieldOrNull](fi);
    }
    [_getFieldOrNull](fi) {
      if (fi.index != null) return this[_values][$_get](dart.nullCheck(fi.index));
      if (!this[_hasExtensions]) return null;
      return dart.nullCheck(this[_extensions])[_getFieldOrNull](protobuf.Extension.as(fi));
    }
    [_hasField](tagNumber) {
      let fi = this[_nonExtensionInfo](this[_meta], tagNumber);
      if (fi != null) return this[_$has](dart.nullCheck(fi.index));
      if (!this[_hasExtensions]) return false;
      return dart.nullCheck(this[_extensions])[_hasField](tagNumber);
    }
    [_clearField](tagNumber) {
      this[_ensureWritable]();
      let meta = this[_meta];
      let fi = this[_nonExtensionInfo](meta, tagNumber);
      if (fi != null) {
        if (this[_hasObservers]) dart.nullCheck(this[_eventPlugin$]).beforeClearField(fi);
        this[_values][$_set](dart.nullCheck(fi.index), null);
        if (meta.oneofs[$containsKey](fi.tagNumber)) {
          dart.nullCheck(this[_oneofCases])[$remove](meta.oneofs[$_get](fi.tagNumber));
        }
        let oneofIndex = meta.oneofs[$_get](fi.tagNumber);
        if (oneofIndex != null) dart.nullCheck(this[_oneofCases])[$_set](oneofIndex, 0);
        return;
      }
      if (this[_hasExtensions]) {
        let fi = dart.nullCheck(this[_extensions])[_getInfoOrNull](tagNumber);
        if (fi != null) {
          dart.nullCheck(this[_extensions])[_clearField](fi);
          return;
        }
      }
    }
    [_setField](tagNumber, value) {
      core.ArgumentError.checkNotNull(core.Object, value, "value");
      let meta = this[_meta];
      let fi = this[_nonExtensionInfo](meta, tagNumber);
      if (fi == null) {
        if (!this[_hasExtensions]) {
          dart.throw(new core.ArgumentError.new("tag " + dart.str(tagNumber) + " not defined in " + this[_messageName]));
        }
        dart.nullCheck(this[_extensions])[_setField](tagNumber, value);
        return;
      }
      if (fi.isRepeated) {
        dart.throw(new core.ArgumentError.new(this[_setFieldFailedMessage](fi, value, "repeating field (use get + .add())")));
      }
      this[_validateField](fi, value);
      this[_setNonExtensionFieldUnchecked](meta, fi, value);
    }
    [_setFieldUnchecked](meta, fi, value) {
      let t0;
      core.ArgumentError.checkNotNull(protobuf.FieldInfo, fi, "fi");
      if (!!fi.isRepeated) dart.assertFailed(null, I[5], 354, 12, "!fi.isRepeated");
      if (fi.index == null) {
        t0 = this[_ensureExtensions]();
        (() => {
          t0[_addInfoUnchecked](protobuf.Extension.as(fi));
          t0[_setFieldUnchecked](fi, value);
          return t0;
        })();
      } else {
        this[_setNonExtensionFieldUnchecked](meta, fi, value);
      }
    }
    [_ensureRepeatedField](T, meta, fi) {
      if (!!this[_isReadOnly]) dart.assertFailed(null, I[5], 371, 12, "!_isReadOnly");
      if (!fi.isRepeated) dart.assertFailed(null, I[5], 372, 12, "fi.isRepeated");
      if (fi.index == null) {
        return this[_ensureExtensions]()[_ensureRepeatedField](T, protobuf.Extension$(T).as(fi));
      }
      let value = this[_getFieldOrNull](fi);
      if (value != null) return core.List$(T).as(value);
      let newValue = fi[_createRepeatedField](dart.nullCheck(this[_message$]));
      this[_setNonExtensionFieldUnchecked](meta, fi, newValue);
      return newValue;
    }
    [_ensureMapField](K, V, meta, fi) {
      if (!!this[_isReadOnly]) dart.assertFailed(null, I[5], 385, 12, "!_isReadOnly");
      if (!fi.isMapField) dart.assertFailed(null, I[5], 386, 12, "fi.isMapField");
      if (!(fi.index != null)) dart.assertFailed(null, I[5], 387, 12, "fi.index != null");
      let value = this[_getFieldOrNull](fi);
      if (value != null) return protobuf.PbMap$(K, V).as(core.Map$(K, V).as(value));
      let newValue = fi[_createMapField](dart.nullCheck(this[_message$]));
      this[_setNonExtensionFieldUnchecked](meta, fi, newValue);
      return protobuf.PbMap$(K, V).as(newValue);
    }
    [_setNonExtensionFieldUnchecked](meta, fi, value) {
      let tag = fi.tagNumber;
      let oneofIndex = meta.oneofs[$_get](tag);
      if (oneofIndex != null) {
        this[_clearField](dart.nullCheck(this[_oneofCases])[$_get](oneofIndex));
        dart.nullCheck(this[_oneofCases])[$_set](oneofIndex, tag);
      }
      if (this[_hasObservers]) {
        dart.nullCheck(this[_eventPlugin$]).beforeSetField(fi, value);
      }
      this[_values][$_set](dart.nullCheck(fi.index), value);
    }
    [_$get](T, index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value != null) return T.as(value);
      if (defaultValue != null) return defaultValue;
      return T.as(this[_getDefault](this[_nonExtensionInfoByIndex](index)));
    }
    [_$getND](index) {
      let value = this[_values][$_get](index);
      if (value != null) return value;
      return this[_getDefault](this[_nonExtensionInfoByIndex](index));
    }
    [_$ensure](T, index) {
      if (!this[_$has](index)) {
        let value = dart.nullCheck(this[_nonExtensionInfoByIndex](index).subBuilder)();
        this[_$set](index, value);
        return T.as(value);
      }
      return T.as(this[_$getND](index));
    }
    [_$getList](T, index) {
      let value = this[_values][$_get](index);
      if (value != null) return core.List$(T).as(value);
      return this[_getDefaultList](T, protobuf.FieldInfo$(T).as(this[_nonExtensionInfoByIndex](index)));
    }
    [_$getMap](K, V, parentMessage, index) {
      let value = this[_values][$_get](index);
      if (value != null) return core.Map$(K, V).as(value);
      return this[_getDefaultMap](K, V, protobuf.MapFieldInfo$(K, V).as(this[_nonExtensionInfoByIndex](index)));
    }
    [_$getB](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.bool.as(value);
      return result;
    }
    [_$getBF](index) {
      let value = this[_values][$_get](index);
      if (value == null) return false;
      let result = core.bool.as(value);
      return result;
    }
    [_$getI](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.int.as(value);
      return result;
    }
    [_$getIZ](index) {
      let value = this[_values][$_get](index);
      if (value == null) return 0;
      let result = core.int.as(value);
      return result;
    }
    [_$getS](index, defaultValue) {
      let value = this[_values][$_get](index);
      if (value == null) {
        if (defaultValue != null) return defaultValue;
        value = this[_getDefault](this[_nonExtensionInfoByIndex](index));
      }
      let result = core.String.as(value);
      return result;
    }
    [_$getSZ](index) {
      let value = this[_values][$_get](index);
      if (value == null) return "";
      let result = core.String.as(value);
      return result;
    }
    [_$getI64](index) {
      let value = this[_values][$_get](index);
      value == null ? value = this[_getDefault](this[_nonExtensionInfoByIndex](index)) : null;
      let result = fixnum.Int64.as(value);
      return result;
    }
    [_$has](index) {
      let value = this[_values][$_get](index);
      if (value == null) return false;
      if (core.List.is(value)) return value[$isNotEmpty];
      return true;
    }
    [_$set](index, value) {
      if (!!this[_nonExtensionInfoByIndex](index).isRepeated) dart.assertFailed(null, I[5], 543, 12, "!_nonExtensionInfoByIndex(index).isRepeated");
      if (!this[_$check](index, value)) dart.assertFailed(null, I[5], 544, 12, "_$check(index, value)");
      this[_ensureWritable]();
      if (value == null) {
        this[_$check](index, value);
      }
      if (this[_hasObservers]) {
        dart.nullCheck(this[_eventPlugin$]).beforeSetField(this[_nonExtensionInfoByIndex](index), value);
      }
      let meta = this[_meta];
      let tag = meta.byIndex[$_get](index).tagNumber;
      let oneofIndex = meta.oneofs[$_get](tag);
      if (oneofIndex != null) {
        this[_clearField](dart.nullCheck(this[_oneofCases])[$_get](oneofIndex));
        dart.nullCheck(this[_oneofCases])[$_set](oneofIndex, tag);
      }
      this[_values][$_set](index, value);
    }
    [_$check](index, newValue) {
      this[_validateField](this[_nonExtensionInfoByIndex](index), newValue);
      return true;
    }
    [_clear]() {
      this[_ensureWritable]();
      if (this[_unknownFields] != null) {
        dart.nullCheck(this[_unknownFields]).clear();
      }
      if (this[_hasObservers]) {
        for (let fi of this[_infos]) {
          if (this[_values][$_get](dart.nullCheck(fi.index)) != null) {
            dart.nullCheck(this[_eventPlugin$]).beforeClearField(fi);
          }
        }
        if (this[_hasExtensions]) {
          for (let key of dart.nullCheck(this[_extensions])[_tagNumbers]) {
            let fi = dart.nullCheck(dart.nullCheck(this[_extensions])[_getInfoOrNull](key));
            dart.nullCheck(this[_eventPlugin$]).beforeClearField(fi);
          }
        }
      }
      if (this[_values][$isNotEmpty]) this[_values][$fillRange](0, this[_values][$length], null);
      if (this[_hasExtensions]) dart.nullCheck(this[_extensions])[_clearValues]();
    }
    [_equals](o) {
      if (!this[_meta][$_equals](o[_meta])) return false;
      for (let i = 0; i < this[_values][$length]; i = i + 1) {
        if (!this[_equalFieldValues](this[_values][$_get](i), o[_values][$_get](i))) return false;
      }
      if (!this[_hasExtensions] || !dart.nullCheck(this[_extensions])[_hasValues]) {
        if (o[_hasExtensions] && dart.nullCheck(o[_extensions])[_hasValues]) {
          return false;
        }
      } else {
        if (!dart.nullCheck(this[_extensions])[_equalValues](o[_extensions])) return false;
      }
      if (this[_unknownFields] == null || dart.nullCheck(this[_unknownFields]).isEmpty) {
        if (o[_unknownFields] != null && dart.nullCheck(o[_unknownFields]).isNotEmpty) {
          return false;
        }
      } else {
        if (!dart.equals(this[_unknownFields], o[_unknownFields])) return false;
      }
      return true;
    }
    [_equalFieldValues](left, right) {
      let t0;
      if (left != null && right != null) return protobuf._deepEquals(left, right);
      let val = (t0 = left, t0 == null ? right : t0);
      if (val == null) return true;
      if (core.List.is(val) && val[$isEmpty]) return true;
      return false;
    }
    get [_hashCode]() {
      if (protobuf._hashCodesCanBeMemoized && this[_memoizedHashCode] != null) {
        return dart.nullCheck(this[_memoizedHashCode]);
      }
      function hashField(hash, fi, value) {
        if (core.List.is(value) && value[$isEmpty]) {
          return hash;
        }
        hash = protobuf._HashUtils._combine(hash, fi.tagNumber);
        if (protobuf._isBytes(fi.type)) {
          hash = protobuf._HashUtils._combine(hash, protobuf._HashUtils._hashObjects(core.Iterable.as(value)));
        } else if (!protobuf._isEnum(fi.type)) {
          hash = protobuf._HashUtils._combine(hash, dart.hashCode(value));
        } else if (fi.isRepeated) {
          hash = protobuf._HashUtils._hashObjects(core.Iterable.as(dart.dsend(value, 'map', [dart.fn(enm => dart.dload(enm, 'value'), T$.dynamicTodynamic())])));
        } else {
          let enm = protobuf.ProtobufEnum.as(value);
          hash = protobuf._HashUtils._combine(hash, enm.value);
        }
        return hash;
      }
      dart.fn(hashField, T$.intAndFieldInfoAnddynamicToint());
      const hashEachField = hash => {
        hash = this[_infosSortedByTag][$where](dart.fn(fi => this[_values][$_get](dart.nullCheck(fi.index)) != null, T$.FieldInfoTobool()))[$fold](core.int, hash, dart.fn((h, fi) => hashField(h, fi, this[_values][$_get](dart.nullCheck(fi.index))), T$.intAndFieldInfoToint()));
        if (!this[_hasExtensions]) return hash;
        hash = protobuf._sorted(core.int, dart.nullCheck(this[_extensions])[_tagNumbers])[$fold](core.int, hash, dart.fn((h, tagNumber) => {
          let fi = dart.nullCheck(dart.nullCheck(this[_extensions])[_getInfoOrNull](tagNumber));
          return hashField(h, fi, dart.nullCheck(this[_extensions])[_getFieldOrNull](fi));
        }, T$.intAndintToint()));
        return hash;
      };
      dart.fn(hashEachField, T$.intToint());
      let hash = protobuf._HashUtils._combine(0, this[_meta][$hashCode]);
      hash = hashEachField(hash);
      if (this[_hasUnknownFields]) {
        hash = protobuf._HashUtils._combine(hash, dart.hashCode(this[_unknownFields]));
      }
      if (this[_isReadOnly] && protobuf._hashCodesCanBeMemoized) {
        this[_frozenState] = hash;
      }
      return hash;
    }
    writeString(out, indent) {
      let t0;
      function renderValue(key, value) {
        if (protobuf.GeneratedMessage.is(value)) {
          out.write(indent + dart.str(key) + ": {\n");
          value[_fieldSet].writeString(out, indent + "  ");
          out.write(indent + "}\n");
        } else if (core.MapEntry.is(value)) {
          out.write(indent + dart.str(key) + ": {" + dart.str(value.key) + " : " + dart.str(value.value) + "} \n");
        } else {
          out.write(indent + dart.str(key) + ": " + dart.str(value) + "\n");
        }
      }
      dart.fn(renderValue, T$.dynamicAnddynamicTovoid());
      function writeFieldValue(fieldValue, name) {
        if (fieldValue == null) return;
        if (typed_data.ByteData.is(fieldValue)) {
          let value = fieldValue[$getUint64](0, typed_data.Endian.little);
          renderValue(name, value);
        } else if (protobuf.PbListBase.is(fieldValue)) {
          for (let value of fieldValue) {
            renderValue(name, value);
          }
        } else if (protobuf.PbMap.is(fieldValue)) {
          for (let entry of fieldValue[$entries]) {
            renderValue(name, entry);
          }
        } else {
          renderValue(name, fieldValue);
        }
      }
      dart.fn(writeFieldValue, T$.dynamicAndStringTovoid());
      for (let fi of this[_infosSortedByTag]) {
        writeFieldValue(this[_values][$_get](dart.nullCheck(fi.index)), fi.name);
      }
      if (this[_hasExtensions]) {
        t0 = dart.nullCheck(this[_extensions])[_info][$keys][$toList]();
        (() => {
          t0[$sort]();
          t0[$forEach](dart.fn(tagNumber => writeFieldValue(dart.nullCheck(this[_extensions])[_values][$_get](tagNumber), "[" + dart.nullCheck(dart.nullCheck(this[_extensions])[_info][$_get](tagNumber)).name + "]"), T$.intTovoid()));
          return t0;
        })();
      }
      if (this[_hasUnknownFields]) {
        out.write(dart.toString(this[_unknownFields]));
      } else {
        out.write(new protobuf.UnknownFieldSet.new().toString());
      }
    }
    [_mergeFromMessage](other) {
      for (let fi of other[_infosSortedByTag]) {
        let value = other[_values][$_get](dart.nullCheck(fi.index));
        if (value != null) this[_mergeField](fi, value, {isExtension: false});
      }
      if (other[_hasExtensions]) {
        let others = dart.nullCheck(other[_extensions]);
        for (let tagNumber of others[_tagNumbers]) {
          let extension = dart.nullCheck(others[_getInfoOrNull](tagNumber));
          let value = others[_getFieldOrNull](extension);
          this[_mergeField](extension, value, {isExtension: true});
        }
      }
      if (other[_hasUnknownFields]) {
        this[_ensureUnknownFields]().mergeFromUnknownFieldSet(dart.nullCheck(other[_unknownFields]));
      }
    }
    [_mergeField](otherFi, fieldValue, opts) {
      let t1;
      let isExtension = opts && 'isExtension' in opts ? opts.isExtension : null;
      let tagNumber = otherFi.tagNumber;
      let meta = this[_meta];
      let fi = this[_nonExtensionInfo](meta, tagNumber);
      if (fi == null && dart.nullCheck(isExtension)) {
        fi = otherFi;
      }
      let mustClone = protobuf._isGroupOrMessage(otherFi.type);
      if (dart.nullCheck(fi).isMapField) {
        let f = protobuf.MapFieldInfo.as(fi);
        mustClone = protobuf._isGroupOrMessage(dart.nullCheck(f.valueFieldType));
        let map = protobuf.PbMap.as(f[_ensureMapField](meta, this));
        if (mustClone) {
          for (let t0 of core.Iterable.as(dart.dload(fieldValue, 'entries'))) {
            let entry = core.MapEntry.as(t0);
            map._set(entry.key, protobuf['GeneratedMessageGenericExtensions|deepCopy'](protobuf.GeneratedMessage, protobuf.GeneratedMessage.as(entry.value)));
          }
        } else {
          map[$addAll](core.Map.as(fieldValue));
        }
        return;
      }
      if (fi.isRepeated) {
        if (mustClone) {
          let pbList = T$.PbListBaseOfGeneratedMessage().as(fieldValue);
          let repeatedFields = fi[_ensureRepeatedField](meta, this);
          for (let i = 0; i < pbList.length; i = i + 1) {
            repeatedFields[$add](protobuf['GeneratedMessageGenericExtensions|deepCopy'](protobuf.GeneratedMessage, pbList._get(i)));
          }
        } else {
          let pbList = protobuf.PbListBase.as(fieldValue);
          fi[_ensureRepeatedField](meta, this)[$addAll](pbList);
        }
        return;
      }
      if (otherFi.isGroupOrMessage) {
        let currentFi = dart.nullCheck(isExtension) ? this[_ensureExtensions]()[_getFieldOrNull](protobuf.Extension.as(fi)) : this[_values][$_get](dart.nullCheck(fi.index));
        if (currentFi == null) {
          fieldValue = protobuf['GeneratedMessageGenericExtensions|deepCopy'](protobuf.GeneratedMessage, protobuf.GeneratedMessage.as(fieldValue));
        } else {
          fieldValue = (t1 = currentFi, (() => {
            dart.dsend(t1, 'mergeFromMessage', [fieldValue]);
            return t1;
          })());
        }
      }
      if (dart.nullCheck(isExtension)) {
        this[_ensureExtensions]()[_setFieldAndInfo](protobuf.Extension.as(fi), fieldValue);
      } else {
        this[_validateField](fi, fieldValue);
        this[_setNonExtensionFieldUnchecked](meta, fi, fieldValue);
      }
    }
    [_validateField](fi, newValue) {
      this[_ensureWritable]();
      let message = protobuf._getFieldError(fi.type, newValue);
      if (message != null) {
        dart.throw(new core.ArgumentError.new(this[_setFieldFailedMessage](fi, newValue, message)));
      }
    }
    [_setFieldFailedMessage](fi, value, detail) {
      return "Illegal to set field " + fi.name + " (" + dart.str(fi.tagNumber) + ") of " + this[_messageName] + " to value (" + dart.str(value) + "): " + detail;
    }
    [_hasRequiredValues]() {
      if (!this[_hasRequiredFields]) return true;
      for (let fi of this[_infos]) {
        let value = this[_values][$_get](dart.nullCheck(fi.index));
        if (!fi[_hasRequiredValues](value)) return false;
      }
      return this[_hasRequiredExtensionValues]();
    }
    [_hasRequiredExtensionValues]() {
      if (!this[_hasExtensions]) return true;
      for (let fi of dart.nullCheck(this[_extensions])[_infos]) {
        let value = dart.nullCheck(this[_extensions])[_getFieldOrNull](fi);
        if (!fi[_hasRequiredValues](value)) return false;
      }
      return true;
    }
    [_appendInvalidFields](problems, prefix) {
      if (!this[_hasRequiredFields]) return;
      for (let fi of this[_infos]) {
        let value = this[_values][$_get](dart.nullCheck(fi.index));
        fi[_appendInvalidFields](problems, value, prefix);
      }
    }
    [_shallowCopyValues](original) {
      let t1, t1$, t1$0;
      this[_values][$setRange](0, original[_values][$length], original[_values]);
      let info = this[_meta];
      for (let index = 0; index < info.byIndex[$length]; index = index + 1) {
        let fieldInfo = info.byIndex[$_get](index);
        if (fieldInfo.isMapField) {
          let map = T$.PbMapN().as(this[_values][$_get](index));
          if (map != null) {
            this[_values][$_set](index, (t1 = protobuf.MapFieldInfo.as(fieldInfo)[_createMapField](dart.nullCheck(this[_message$])), (() => {
              t1[$addAll](map);
              return t1;
            })()));
          }
        } else if (fieldInfo.isRepeated) {
          let list = T$.PbListBaseN().as(this[_values][$_get](index));
          if (list != null) {
            this[_values][$_set](index, (t1$ = fieldInfo[_createRepeatedField](dart.nullCheck(this[_message$])), (() => {
              t1$[$addAll](list);
              return t1$;
            })()));
          }
        }
      }
      if (original[_hasExtensions]) {
        this[_ensureExtensions]()[_shallowCopyValues](dart.nullCheck(original[_extensions]));
      }
      if (original[_hasUnknownFields]) {
        this[_ensureUnknownFields]()[_fields][$addAll](dart.nullCheck(original[_unknownFields])[_fields]);
      }
      t1$0 = this[_oneofCases];
      t1$0 == null ? null : t1$0[$addAll](dart.nullCheck(original[_oneofCases]));
    }
  };
  (protobuf._FieldSet.new = function(_message, meta, _eventPlugin) {
    this[_extensions] = null;
    this[_unknownFields] = null;
    this[_frozenState] = false;
    this[_message$] = _message;
    this[_eventPlugin$] = _eventPlugin;
    this[_values] = protobuf._FieldSet._makeValueList(meta.byIndex[$length]);
    this[_oneofCases] = meta.oneofs[$isEmpty] ? null : new (T$.IdentityMapOfint$int()).new();
    ;
  }).prototype = protobuf._FieldSet.prototype;
  dart.addTypeTests(protobuf._FieldSet);
  dart.addTypeCaches(protobuf._FieldSet);
  dart.setMethodSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getMethods(protobuf._FieldSet.__proto__),
    [_ensureExtensions]: dart.fnType(protobuf._ExtensionFieldSet, []),
    [_ensureUnknownFields]: dart.fnType(protobuf.UnknownFieldSet, []),
    [_nonExtensionInfo]: dart.fnType(dart.nullable(protobuf.FieldInfo), [protobuf.BuilderInfo, dart.nullable(core.int)]),
    [_nonExtensionInfoByIndex]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_ensureInfo]: dart.fnType(protobuf.FieldInfo, [core.int]),
    [_getFieldInfoOrNull]: dart.fnType(dart.nullable(protobuf.FieldInfo), [core.int]),
    [_markReadOnly]: dart.fnType(dart.void, []),
    [_ensureWritable]: dart.fnType(dart.void, []),
    [_getField]: dart.fnType(dart.dynamic, [core.int]),
    [_getDefault]: dart.fnType(dart.dynamic, [protobuf.FieldInfo]),
    [_getDefaultList]: dart.gFnType(T => [core.List$(T), [protobuf.FieldInfo$(T)]], T => [dart.nullable(core.Object)]),
    [_getDefaultMap]: dart.gFnType((K, V) => [core.Map$(K, V), [protobuf.MapFieldInfo$(K, V)]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_getFieldOrNullByTag]: dart.fnType(dart.dynamic, [core.int]),
    [_getFieldOrNull]: dart.fnType(dart.dynamic, [protobuf.FieldInfo]),
    [_hasField]: dart.fnType(core.bool, [core.int]),
    [_clearField]: dart.fnType(dart.void, [dart.nullable(core.int)]),
    [_setField]: dart.fnType(dart.void, [core.int, core.Object]),
    [_setFieldUnchecked]: dart.fnType(dart.void, [protobuf.BuilderInfo, protobuf.FieldInfo, dart.dynamic]),
    [_ensureRepeatedField]: dart.gFnType(T => [core.List$(dart.nullable(T)), [protobuf.BuilderInfo, protobuf.FieldInfo$(T)]], T => [dart.nullable(core.Object)]),
    [_ensureMapField]: dart.gFnType((K, V) => [protobuf.PbMap$(K, V), [protobuf.BuilderInfo, protobuf.MapFieldInfo$(K, V)]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_setNonExtensionFieldUnchecked]: dart.fnType(dart.void, [protobuf.BuilderInfo, protobuf.FieldInfo, dart.dynamic]),
    [_$get]: dart.gFnType(T => [T, [core.int, dart.nullable(T)]], T => [dart.nullable(core.Object)]),
    [_$getND]: dart.fnType(dart.dynamic, [core.int]),
    [_$ensure]: dart.gFnType(T => [T, [core.int]], T => [dart.nullable(core.Object)]),
    [_$getList]: dart.gFnType(T => [core.List$(T), [core.int]], T => [dart.nullable(core.Object)]),
    [_$getMap]: dart.gFnType((K, V) => [core.Map$(K, V), [protobuf.GeneratedMessage, core.int]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    [_$getB]: dart.fnType(core.bool, [core.int, dart.nullable(core.bool)]),
    [_$getBF]: dart.fnType(core.bool, [core.int]),
    [_$getI]: dart.fnType(core.int, [core.int, dart.nullable(core.int)]),
    [_$getIZ]: dart.fnType(core.int, [core.int]),
    [_$getS]: dart.fnType(core.String, [core.int, dart.nullable(core.String)]),
    [_$getSZ]: dart.fnType(core.String, [core.int]),
    [_$getI64]: dart.fnType(fixnum.Int64, [core.int]),
    [_$has]: dart.fnType(core.bool, [core.int]),
    [_$set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
    [_$check]: dart.fnType(core.bool, [core.int, dart.dynamic]),
    [_clear]: dart.fnType(dart.void, []),
    [_equals]: dart.fnType(core.bool, [protobuf._FieldSet]),
    [_equalFieldValues]: dart.fnType(core.bool, [dart.dynamic, dart.dynamic]),
    writeString: dart.fnType(dart.void, [core.StringBuffer, core.String]),
    [_mergeFromMessage]: dart.fnType(dart.void, [protobuf._FieldSet]),
    [_mergeField]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic], {isExtension: dart.nullable(core.bool)}, {}),
    [_validateField]: dart.fnType(dart.void, [protobuf.FieldInfo, dart.dynamic]),
    [_setFieldFailedMessage]: dart.fnType(core.String, [protobuf.FieldInfo, dart.dynamic, core.String]),
    [_hasRequiredValues]: dart.fnType(core.bool, []),
    [_hasRequiredExtensionValues]: dart.fnType(core.bool, []),
    [_appendInvalidFields]: dart.fnType(dart.void, [core.List$(core.String), core.String]),
    [_shallowCopyValues]: dart.fnType(dart.void, [protobuf._FieldSet])
  }));
  dart.setStaticMethodSignature(protobuf._FieldSet, () => ['_makeValueList']);
  dart.setGetterSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getGetters(protobuf._FieldSet.__proto__),
    [_meta]: protobuf.BuilderInfo,
    [_isReadOnly]: core.bool,
    [_memoizedHashCode]: dart.nullable(core.int),
    [_messageName]: core.String,
    [_hasRequiredFields]: core.bool,
    [_infos]: core.Iterable$(protobuf.FieldInfo),
    [_infosSortedByTag]: core.Iterable$(protobuf.FieldInfo),
    [_hasObservers]: core.bool,
    [_hasExtensions]: core.bool,
    [_hasUnknownFields]: core.bool,
    [_hashCode]: core.int
  }));
  dart.setLibraryUri(protobuf._FieldSet, I[1]);
  dart.setFieldSignature(protobuf._FieldSet, () => ({
    __proto__: dart.getFields(protobuf._FieldSet.__proto__),
    [_message$]: dart.finalFieldType(dart.nullable(protobuf.GeneratedMessage)),
    [_eventPlugin$]: dart.finalFieldType(dart.nullable(protobuf.EventPlugin)),
    [_values]: dart.finalFieldType(core.List),
    [_extensions]: dart.fieldType(dart.nullable(protobuf._ExtensionFieldSet)),
    [_unknownFields]: dart.fieldType(dart.nullable(protobuf.UnknownFieldSet)),
    [_frozenState]: dart.fieldType(core.Object),
    [_oneofCases]: dart.finalFieldType(dart.nullable(core.Map$(core.int, core.int)))
  }));
  dart.setStaticFieldSignature(protobuf._FieldSet, () => ['_zeroList']);
  dart.defineLazy(protobuf._FieldSet, {
    /*protobuf._FieldSet._zeroList*/get _zeroList() {
      return [];
    }
  }, false);
  protobuf.PbFieldType = class PbFieldType extends core.Object {
    static _baseType(fieldType) {
      return (fieldType & ~(1 | 2 | 4 | 4194304) >>> 0) >>> 0;
    }
    static _defaultForType(type) {
      switch (type) {
        case 16:
        case 17:
        {
          return C[6] || CT.C6;
        }
        case 32:
        case 33:
        {
          return C[7] || CT.C7;
        }
        case 64:
        case 65:
        {
          return C[8] || CT.C8;
        }
        case 256:
        case 257:
        case 128:
        case 129:
        {
          return C[9] || CT.C9;
        }
        case 2048:
        case 2049:
        case 4096:
        case 4097:
        case 8192:
        case 8193:
        case 16384:
        case 16385:
        case 32768:
        case 32769:
        case 65536:
        case 65537:
        case 131072:
        case 131073:
        case 262144:
        case 262145:
        case 524288:
        case 524289:
        case 1048576:
        case 1048577:
        {
          return C[10] || CT.C10;
        }
        default:
        {
          return null;
        }
      }
    }
    static _STRING_EMPTY() {
      return "";
    }
    static _BYTES_EMPTY() {
      return T$.JSArrayOfint().of([]);
    }
    static _BOOL_FALSE() {
      return false;
    }
    static _INT_ZERO() {
      return 0;
    }
    static _DOUBLE_ZERO() {
      return 0.0;
    }
    static ['_#new#tearOff']() {
      return new protobuf.PbFieldType.new();
    }
  };
  (protobuf.PbFieldType.new = function() {
    ;
  }).prototype = protobuf.PbFieldType.prototype;
  dart.addTypeTests(protobuf.PbFieldType);
  dart.addTypeCaches(protobuf.PbFieldType);
  dart.setStaticMethodSignature(protobuf.PbFieldType, () => ['_baseType', '_defaultForType', '_STRING_EMPTY', '_BYTES_EMPTY', '_BOOL_FALSE', '_INT_ZERO', '_DOUBLE_ZERO']);
  dart.setLibraryUri(protobuf.PbFieldType, I[1]);
  dart.setStaticFieldSignature(protobuf.PbFieldType, () => ['_REQUIRED_BIT', '_REPEATED_BIT', '_PACKED_BIT', '_BOOL_BIT', '_BYTES_BIT', '_STRING_BIT', '_DOUBLE_BIT', '_FLOAT_BIT', '_ENUM_BIT', '_GROUP_BIT', '_INT32_BIT', '_INT64_BIT', '_SINT32_BIT', '_SINT64_BIT', '_UINT32_BIT', '_UINT64_BIT', '_FIXED32_BIT', '_FIXED64_BIT', '_SFIXED32_BIT', '_SFIXED64_BIT', '_MESSAGE_BIT', '_MAP_BIT', '_OPTIONAL_BOOL', '_OPTIONAL_BYTES', '_OPTIONAL_STRING', '_OPTIONAL_FLOAT', '_OPTIONAL_DOUBLE', '_OPTIONAL_ENUM', '_OPTIONAL_GROUP', '_OPTIONAL_INT32', '_OPTIONAL_INT64', '_OPTIONAL_SINT32', '_OPTIONAL_SINT64', '_OPTIONAL_UINT32', '_OPTIONAL_UINT64', '_OPTIONAL_FIXED32', '_OPTIONAL_FIXED64', '_OPTIONAL_SFIXED32', '_OPTIONAL_SFIXED64', '_OPTIONAL_MESSAGE', '_REQUIRED_BOOL', '_REQUIRED_BYTES', '_REQUIRED_STRING', '_REQUIRED_FLOAT', '_REQUIRED_DOUBLE', '_REQUIRED_ENUM', '_REQUIRED_GROUP', '_REQUIRED_INT32', '_REQUIRED_INT64', '_REQUIRED_SINT32', '_REQUIRED_SINT64', '_REQUIRED_UINT32', '_REQUIRED_UINT64', '_REQUIRED_FIXED32', '_REQUIRED_FIXED64', '_REQUIRED_SFIXED32', '_REQUIRED_SFIXED64', '_REQUIRED_MESSAGE', '_REPEATED_BOOL', '_REPEATED_BYTES', '_REPEATED_STRING', '_REPEATED_FLOAT', '_REPEATED_DOUBLE', '_REPEATED_ENUM', '_REPEATED_GROUP', '_REPEATED_INT32', '_REPEATED_INT64', '_REPEATED_SINT32', '_REPEATED_SINT64', '_REPEATED_UINT32', '_REPEATED_UINT64', '_REPEATED_FIXED32', '_REPEATED_FIXED64', '_REPEATED_SFIXED32', '_REPEATED_SFIXED64', '_REPEATED_MESSAGE', '_PACKED_BOOL', '_PACKED_FLOAT', '_PACKED_DOUBLE', '_PACKED_ENUM', '_PACKED_INT32', '_PACKED_INT64', '_PACKED_SINT32', '_PACKED_SINT64', '_PACKED_UINT32', '_PACKED_UINT64', '_PACKED_FIXED32', '_PACKED_FIXED64', '_PACKED_SFIXED32', '_PACKED_SFIXED64', '_MAP', 'OB', 'OY', 'OS', 'OF', 'OD', 'OE', 'OG', 'O3', 'O6', 'OS3', 'OS6', 'OU3', 'OU6', 'OF3', 'OF6', 'OSF3', 'OSF6', 'OM', 'QB', 'QY', 'QS', 'QF', 'QD', 'QE', 'QG', 'Q3', 'Q6', 'QS3', 'QS6', 'QU3', 'QU6', 'QF3', 'QF6', 'QSF3', 'QSF6', 'QM', 'PB', 'PY', 'PS', 'PF', 'PD', 'PE', 'PG', 'P3', 'P6', 'PS3', 'PS6', 'PU3', 'PU6', 'PF3', 'PF6', 'PSF3', 'PSF6', 'PM', 'KB', 'KE', 'KF', 'KD', 'K3', 'K6', 'KS3', 'KS6', 'KU3', 'KU6', 'KF3', 'KF6', 'KSF3', 'KSF6', 'M']);
  dart.defineLazy(protobuf.PbFieldType, {
    /*protobuf.PbFieldType._REQUIRED_BIT*/get _REQUIRED_BIT() {
      return 1;
    },
    /*protobuf.PbFieldType._REPEATED_BIT*/get _REPEATED_BIT() {
      return 2;
    },
    /*protobuf.PbFieldType._PACKED_BIT*/get _PACKED_BIT() {
      return 4;
    },
    /*protobuf.PbFieldType._BOOL_BIT*/get _BOOL_BIT() {
      return 16;
    },
    /*protobuf.PbFieldType._BYTES_BIT*/get _BYTES_BIT() {
      return 32;
    },
    /*protobuf.PbFieldType._STRING_BIT*/get _STRING_BIT() {
      return 64;
    },
    /*protobuf.PbFieldType._DOUBLE_BIT*/get _DOUBLE_BIT() {
      return 128;
    },
    /*protobuf.PbFieldType._FLOAT_BIT*/get _FLOAT_BIT() {
      return 256;
    },
    /*protobuf.PbFieldType._ENUM_BIT*/get _ENUM_BIT() {
      return 512;
    },
    /*protobuf.PbFieldType._GROUP_BIT*/get _GROUP_BIT() {
      return 1024;
    },
    /*protobuf.PbFieldType._INT32_BIT*/get _INT32_BIT() {
      return 2048;
    },
    /*protobuf.PbFieldType._INT64_BIT*/get _INT64_BIT() {
      return 4096;
    },
    /*protobuf.PbFieldType._SINT32_BIT*/get _SINT32_BIT() {
      return 8192;
    },
    /*protobuf.PbFieldType._SINT64_BIT*/get _SINT64_BIT() {
      return 16384;
    },
    /*protobuf.PbFieldType._UINT32_BIT*/get _UINT32_BIT() {
      return 32768;
    },
    /*protobuf.PbFieldType._UINT64_BIT*/get _UINT64_BIT() {
      return 65536;
    },
    /*protobuf.PbFieldType._FIXED32_BIT*/get _FIXED32_BIT() {
      return 131072;
    },
    /*protobuf.PbFieldType._FIXED64_BIT*/get _FIXED64_BIT() {
      return 262144;
    },
    /*protobuf.PbFieldType._SFIXED32_BIT*/get _SFIXED32_BIT() {
      return 524288;
    },
    /*protobuf.PbFieldType._SFIXED64_BIT*/get _SFIXED64_BIT() {
      return 1048576;
    },
    /*protobuf.PbFieldType._MESSAGE_BIT*/get _MESSAGE_BIT() {
      return 2097152;
    },
    /*protobuf.PbFieldType._MAP_BIT*/get _MAP_BIT() {
      return 4194304;
    },
    /*protobuf.PbFieldType._OPTIONAL_BOOL*/get _OPTIONAL_BOOL() {
      return 16;
    },
    /*protobuf.PbFieldType._OPTIONAL_BYTES*/get _OPTIONAL_BYTES() {
      return 32;
    },
    /*protobuf.PbFieldType._OPTIONAL_STRING*/get _OPTIONAL_STRING() {
      return 64;
    },
    /*protobuf.PbFieldType._OPTIONAL_FLOAT*/get _OPTIONAL_FLOAT() {
      return 256;
    },
    /*protobuf.PbFieldType._OPTIONAL_DOUBLE*/get _OPTIONAL_DOUBLE() {
      return 128;
    },
    /*protobuf.PbFieldType._OPTIONAL_ENUM*/get _OPTIONAL_ENUM() {
      return 512;
    },
    /*protobuf.PbFieldType._OPTIONAL_GROUP*/get _OPTIONAL_GROUP() {
      return 1024;
    },
    /*protobuf.PbFieldType._OPTIONAL_INT32*/get _OPTIONAL_INT32() {
      return 2048;
    },
    /*protobuf.PbFieldType._OPTIONAL_INT64*/get _OPTIONAL_INT64() {
      return 4096;
    },
    /*protobuf.PbFieldType._OPTIONAL_SINT32*/get _OPTIONAL_SINT32() {
      return 8192;
    },
    /*protobuf.PbFieldType._OPTIONAL_SINT64*/get _OPTIONAL_SINT64() {
      return 16384;
    },
    /*protobuf.PbFieldType._OPTIONAL_UINT32*/get _OPTIONAL_UINT32() {
      return 32768;
    },
    /*protobuf.PbFieldType._OPTIONAL_UINT64*/get _OPTIONAL_UINT64() {
      return 65536;
    },
    /*protobuf.PbFieldType._OPTIONAL_FIXED32*/get _OPTIONAL_FIXED32() {
      return 131072;
    },
    /*protobuf.PbFieldType._OPTIONAL_FIXED64*/get _OPTIONAL_FIXED64() {
      return 262144;
    },
    /*protobuf.PbFieldType._OPTIONAL_SFIXED32*/get _OPTIONAL_SFIXED32() {
      return 524288;
    },
    /*protobuf.PbFieldType._OPTIONAL_SFIXED64*/get _OPTIONAL_SFIXED64() {
      return 1048576;
    },
    /*protobuf.PbFieldType._OPTIONAL_MESSAGE*/get _OPTIONAL_MESSAGE() {
      return 2097152;
    },
    /*protobuf.PbFieldType._REQUIRED_BOOL*/get _REQUIRED_BOOL() {
      return 17;
    },
    /*protobuf.PbFieldType._REQUIRED_BYTES*/get _REQUIRED_BYTES() {
      return 33;
    },
    /*protobuf.PbFieldType._REQUIRED_STRING*/get _REQUIRED_STRING() {
      return 65;
    },
    /*protobuf.PbFieldType._REQUIRED_FLOAT*/get _REQUIRED_FLOAT() {
      return 257;
    },
    /*protobuf.PbFieldType._REQUIRED_DOUBLE*/get _REQUIRED_DOUBLE() {
      return 129;
    },
    /*protobuf.PbFieldType._REQUIRED_ENUM*/get _REQUIRED_ENUM() {
      return 513;
    },
    /*protobuf.PbFieldType._REQUIRED_GROUP*/get _REQUIRED_GROUP() {
      return 1025;
    },
    /*protobuf.PbFieldType._REQUIRED_INT32*/get _REQUIRED_INT32() {
      return 2049;
    },
    /*protobuf.PbFieldType._REQUIRED_INT64*/get _REQUIRED_INT64() {
      return 4097;
    },
    /*protobuf.PbFieldType._REQUIRED_SINT32*/get _REQUIRED_SINT32() {
      return 8193;
    },
    /*protobuf.PbFieldType._REQUIRED_SINT64*/get _REQUIRED_SINT64() {
      return 16385;
    },
    /*protobuf.PbFieldType._REQUIRED_UINT32*/get _REQUIRED_UINT32() {
      return 32769;
    },
    /*protobuf.PbFieldType._REQUIRED_UINT64*/get _REQUIRED_UINT64() {
      return 65537;
    },
    /*protobuf.PbFieldType._REQUIRED_FIXED32*/get _REQUIRED_FIXED32() {
      return 131073;
    },
    /*protobuf.PbFieldType._REQUIRED_FIXED64*/get _REQUIRED_FIXED64() {
      return 262145;
    },
    /*protobuf.PbFieldType._REQUIRED_SFIXED32*/get _REQUIRED_SFIXED32() {
      return 524289;
    },
    /*protobuf.PbFieldType._REQUIRED_SFIXED64*/get _REQUIRED_SFIXED64() {
      return 1048577;
    },
    /*protobuf.PbFieldType._REQUIRED_MESSAGE*/get _REQUIRED_MESSAGE() {
      return 2097153;
    },
    /*protobuf.PbFieldType._REPEATED_BOOL*/get _REPEATED_BOOL() {
      return 18;
    },
    /*protobuf.PbFieldType._REPEATED_BYTES*/get _REPEATED_BYTES() {
      return 34;
    },
    /*protobuf.PbFieldType._REPEATED_STRING*/get _REPEATED_STRING() {
      return 66;
    },
    /*protobuf.PbFieldType._REPEATED_FLOAT*/get _REPEATED_FLOAT() {
      return 258;
    },
    /*protobuf.PbFieldType._REPEATED_DOUBLE*/get _REPEATED_DOUBLE() {
      return 130;
    },
    /*protobuf.PbFieldType._REPEATED_ENUM*/get _REPEATED_ENUM() {
      return 514;
    },
    /*protobuf.PbFieldType._REPEATED_GROUP*/get _REPEATED_GROUP() {
      return 1026;
    },
    /*protobuf.PbFieldType._REPEATED_INT32*/get _REPEATED_INT32() {
      return 2050;
    },
    /*protobuf.PbFieldType._REPEATED_INT64*/get _REPEATED_INT64() {
      return 4098;
    },
    /*protobuf.PbFieldType._REPEATED_SINT32*/get _REPEATED_SINT32() {
      return 8194;
    },
    /*protobuf.PbFieldType._REPEATED_SINT64*/get _REPEATED_SINT64() {
      return 16386;
    },
    /*protobuf.PbFieldType._REPEATED_UINT32*/get _REPEATED_UINT32() {
      return 32770;
    },
    /*protobuf.PbFieldType._REPEATED_UINT64*/get _REPEATED_UINT64() {
      return 65538;
    },
    /*protobuf.PbFieldType._REPEATED_FIXED32*/get _REPEATED_FIXED32() {
      return 131074;
    },
    /*protobuf.PbFieldType._REPEATED_FIXED64*/get _REPEATED_FIXED64() {
      return 262146;
    },
    /*protobuf.PbFieldType._REPEATED_SFIXED32*/get _REPEATED_SFIXED32() {
      return 524290;
    },
    /*protobuf.PbFieldType._REPEATED_SFIXED64*/get _REPEATED_SFIXED64() {
      return 1048578;
    },
    /*protobuf.PbFieldType._REPEATED_MESSAGE*/get _REPEATED_MESSAGE() {
      return 2097154;
    },
    /*protobuf.PbFieldType._PACKED_BOOL*/get _PACKED_BOOL() {
      return 22;
    },
    /*protobuf.PbFieldType._PACKED_FLOAT*/get _PACKED_FLOAT() {
      return 262;
    },
    /*protobuf.PbFieldType._PACKED_DOUBLE*/get _PACKED_DOUBLE() {
      return 134;
    },
    /*protobuf.PbFieldType._PACKED_ENUM*/get _PACKED_ENUM() {
      return 518;
    },
    /*protobuf.PbFieldType._PACKED_INT32*/get _PACKED_INT32() {
      return 2054;
    },
    /*protobuf.PbFieldType._PACKED_INT64*/get _PACKED_INT64() {
      return 4102;
    },
    /*protobuf.PbFieldType._PACKED_SINT32*/get _PACKED_SINT32() {
      return 8198;
    },
    /*protobuf.PbFieldType._PACKED_SINT64*/get _PACKED_SINT64() {
      return 16390;
    },
    /*protobuf.PbFieldType._PACKED_UINT32*/get _PACKED_UINT32() {
      return 32774;
    },
    /*protobuf.PbFieldType._PACKED_UINT64*/get _PACKED_UINT64() {
      return 65542;
    },
    /*protobuf.PbFieldType._PACKED_FIXED32*/get _PACKED_FIXED32() {
      return 131078;
    },
    /*protobuf.PbFieldType._PACKED_FIXED64*/get _PACKED_FIXED64() {
      return 262150;
    },
    /*protobuf.PbFieldType._PACKED_SFIXED32*/get _PACKED_SFIXED32() {
      return 524294;
    },
    /*protobuf.PbFieldType._PACKED_SFIXED64*/get _PACKED_SFIXED64() {
      return 1048582;
    },
    /*protobuf.PbFieldType._MAP*/get _MAP() {
      return 6291456;
    },
    /*protobuf.PbFieldType.OB*/get OB() {
      return 16;
    },
    /*protobuf.PbFieldType.OY*/get OY() {
      return 32;
    },
    /*protobuf.PbFieldType.OS*/get OS() {
      return 64;
    },
    /*protobuf.PbFieldType.OF*/get OF() {
      return 256;
    },
    /*protobuf.PbFieldType.OD*/get OD() {
      return 128;
    },
    /*protobuf.PbFieldType.OE*/get OE() {
      return 512;
    },
    /*protobuf.PbFieldType.OG*/get OG() {
      return 1024;
    },
    /*protobuf.PbFieldType.O3*/get O3() {
      return 2048;
    },
    /*protobuf.PbFieldType.O6*/get O6() {
      return 4096;
    },
    /*protobuf.PbFieldType.OS3*/get OS3() {
      return 8192;
    },
    /*protobuf.PbFieldType.OS6*/get OS6() {
      return 16384;
    },
    /*protobuf.PbFieldType.OU3*/get OU3() {
      return 32768;
    },
    /*protobuf.PbFieldType.OU6*/get OU6() {
      return 65536;
    },
    /*protobuf.PbFieldType.OF3*/get OF3() {
      return 131072;
    },
    /*protobuf.PbFieldType.OF6*/get OF6() {
      return 262144;
    },
    /*protobuf.PbFieldType.OSF3*/get OSF3() {
      return 524288;
    },
    /*protobuf.PbFieldType.OSF6*/get OSF6() {
      return 1048576;
    },
    /*protobuf.PbFieldType.OM*/get OM() {
      return 2097152;
    },
    /*protobuf.PbFieldType.QB*/get QB() {
      return 17;
    },
    /*protobuf.PbFieldType.QY*/get QY() {
      return 33;
    },
    /*protobuf.PbFieldType.QS*/get QS() {
      return 65;
    },
    /*protobuf.PbFieldType.QF*/get QF() {
      return 257;
    },
    /*protobuf.PbFieldType.QD*/get QD() {
      return 129;
    },
    /*protobuf.PbFieldType.QE*/get QE() {
      return 513;
    },
    /*protobuf.PbFieldType.QG*/get QG() {
      return 1025;
    },
    /*protobuf.PbFieldType.Q3*/get Q3() {
      return 2049;
    },
    /*protobuf.PbFieldType.Q6*/get Q6() {
      return 4097;
    },
    /*protobuf.PbFieldType.QS3*/get QS3() {
      return 8193;
    },
    /*protobuf.PbFieldType.QS6*/get QS6() {
      return 16385;
    },
    /*protobuf.PbFieldType.QU3*/get QU3() {
      return 32769;
    },
    /*protobuf.PbFieldType.QU6*/get QU6() {
      return 65537;
    },
    /*protobuf.PbFieldType.QF3*/get QF3() {
      return 131073;
    },
    /*protobuf.PbFieldType.QF6*/get QF6() {
      return 262145;
    },
    /*protobuf.PbFieldType.QSF3*/get QSF3() {
      return 524289;
    },
    /*protobuf.PbFieldType.QSF6*/get QSF6() {
      return 1048577;
    },
    /*protobuf.PbFieldType.QM*/get QM() {
      return 2097153;
    },
    /*protobuf.PbFieldType.PB*/get PB() {
      return 18;
    },
    /*protobuf.PbFieldType.PY*/get PY() {
      return 34;
    },
    /*protobuf.PbFieldType.PS*/get PS() {
      return 66;
    },
    /*protobuf.PbFieldType.PF*/get PF() {
      return 258;
    },
    /*protobuf.PbFieldType.PD*/get PD() {
      return 130;
    },
    /*protobuf.PbFieldType.PE*/get PE() {
      return 514;
    },
    /*protobuf.PbFieldType.PG*/get PG() {
      return 1026;
    },
    /*protobuf.PbFieldType.P3*/get P3() {
      return 2050;
    },
    /*protobuf.PbFieldType.P6*/get P6() {
      return 4098;
    },
    /*protobuf.PbFieldType.PS3*/get PS3() {
      return 8194;
    },
    /*protobuf.PbFieldType.PS6*/get PS6() {
      return 16386;
    },
    /*protobuf.PbFieldType.PU3*/get PU3() {
      return 32770;
    },
    /*protobuf.PbFieldType.PU6*/get PU6() {
      return 65538;
    },
    /*protobuf.PbFieldType.PF3*/get PF3() {
      return 131074;
    },
    /*protobuf.PbFieldType.PF6*/get PF6() {
      return 262146;
    },
    /*protobuf.PbFieldType.PSF3*/get PSF3() {
      return 524290;
    },
    /*protobuf.PbFieldType.PSF6*/get PSF6() {
      return 1048578;
    },
    /*protobuf.PbFieldType.PM*/get PM() {
      return 2097154;
    },
    /*protobuf.PbFieldType.KB*/get KB() {
      return 22;
    },
    /*protobuf.PbFieldType.KE*/get KE() {
      return 518;
    },
    /*protobuf.PbFieldType.KF*/get KF() {
      return 262;
    },
    /*protobuf.PbFieldType.KD*/get KD() {
      return 134;
    },
    /*protobuf.PbFieldType.K3*/get K3() {
      return 2054;
    },
    /*protobuf.PbFieldType.K6*/get K6() {
      return 4102;
    },
    /*protobuf.PbFieldType.KS3*/get KS3() {
      return 8198;
    },
    /*protobuf.PbFieldType.KS6*/get KS6() {
      return 16390;
    },
    /*protobuf.PbFieldType.KU3*/get KU3() {
      return 32774;
    },
    /*protobuf.PbFieldType.KU6*/get KU6() {
      return 65542;
    },
    /*protobuf.PbFieldType.KF3*/get KF3() {
      return 131078;
    },
    /*protobuf.PbFieldType.KF6*/get KF6() {
      return 262150;
    },
    /*protobuf.PbFieldType.KSF3*/get KSF3() {
      return 524294;
    },
    /*protobuf.PbFieldType.KSF6*/get KSF6() {
      return 1048582;
    },
    /*protobuf.PbFieldType.M*/get M() {
      return 6291456;
    }
  }, false);
  var __fieldSet = dart.privateName(protobuf, "__fieldSet");
  var TypeRegistry__mapping = dart.privateName(type_registry, "TypeRegistry._mapping");
  protobuf.GeneratedMessage = class GeneratedMessage extends core.Object {
    get [_fieldSet]() {
      return dart.nullCheck(this[__fieldSet]);
    }
    get eventPlugin() {
      return null;
    }
    get unknownFields() {
      return this[_fieldSet][_ensureUnknownFields]();
    }
    freeze() {
      this[_fieldSet][_markReadOnly]();
      return this;
    }
    get isFrozen() {
      return this[_fieldSet][_isReadOnly];
    }
    toBuilder() {
      let result = this.createEmptyInstance();
      result[_fieldSet][_shallowCopyValues](this[_fieldSet]);
      return result;
    }
    copyWith(updates) {
      let builder = this.toBuilder();
      updates(builder);
      return builder.freeze();
    }
    hasRequiredFields() {
      return this.info_.hasRequiredFields;
    }
    isInitialized() {
      return this[_fieldSet][_hasRequiredValues]();
    }
    clear() {
      return this[_fieldSet][_clear]();
    }
    getTagNumber(fieldName) {
      return this.info_.tagNumber(fieldName);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      return protobuf.GeneratedMessage.is(other) ? this[_fieldSet][_equals](other[_fieldSet]) : false;
    }
    get hashCode() {
      return this[_fieldSet][_hashCode];
    }
    toString() {
      return this.toDebugString();
    }
    toDebugString() {
      let out = new core.StringBuffer.new();
      this[_fieldSet].writeString(out, "");
      return out.toString();
    }
    check() {
      let t1;
      if (!this.isInitialized()) {
        let invalidFields = T$.JSArrayOfString().of([]);
        this[_fieldSet][_appendInvalidFields](invalidFields, "");
        let missingFields = (t1 = invalidFields, (() => {
          t1[$sort]();
          return t1;
        })())[$join](", ");
        dart.throw(new core.StateError.new("Message missing required fields: " + missingFields));
      }
    }
    writeToBuffer() {
      let out = new protobuf.CodedBufferWriter.new();
      this.writeToCodedBufferWriter(out);
      return out.toBuffer();
    }
    writeToCodedBufferWriter(output) {
      return protobuf._writeToCodedBufferWriter(this[_fieldSet], output);
    }
    mergeFromCodedBufferReader(input, extensionRegistry = C[3] || CT.C3) {
      let meta = this[_fieldSet][_meta];
      protobuf._mergeFromCodedBufferReader(meta, this[_fieldSet], input, extensionRegistry);
    }
    mergeFromBuffer(input, extensionRegistry = C[3] || CT.C3) {
      let codedInput = new protobuf.CodedBufferReader.new(input);
      let meta = this[_fieldSet][_meta];
      protobuf._mergeFromCodedBufferReader(meta, this[_fieldSet], codedInput, extensionRegistry);
      codedInput.checkLastTagWas(0);
    }
    writeToJsonMap() {
      return protobuf._writeToJsonMap(this[_fieldSet]);
    }
    writeToJson() {
      return convert.jsonEncode(this.writeToJsonMap());
    }
    toProto3Json(opts) {
      let typeRegistry = opts && 'typeRegistry' in opts ? opts.typeRegistry : C[11] || CT.C11;
      return protobuf._writeToProto3Json(this[_fieldSet], typeRegistry);
    }
    mergeFromProto3Json(json, opts) {
      let typeRegistry = opts && 'typeRegistry' in opts ? opts.typeRegistry : C[11] || CT.C11;
      let ignoreUnknownFields = opts && 'ignoreUnknownFields' in opts ? opts.ignoreUnknownFields : false;
      let supportNamesWithUnderscores = opts && 'supportNamesWithUnderscores' in opts ? opts.supportNamesWithUnderscores : true;
      let permissiveEnums = opts && 'permissiveEnums' in opts ? opts.permissiveEnums : false;
      return protobuf._mergeFromProto3Json(json, this[_fieldSet], typeRegistry, ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums);
    }
    mergeFromJson(data, extensionRegistry = C[3] || CT.C3) {
      let jsonMap = T$.MapOfString$dynamic().as(convert.jsonDecode(data, {reviver: C[13] || CT.C13}));
      protobuf._mergeFromJsonMap(this[_fieldSet], jsonMap, extensionRegistry);
    }
    static _emptyReviver(k, v) {
      return v;
    }
    mergeFromJsonMap(json, extensionRegistry = C[3] || CT.C3) {
      protobuf._mergeFromJsonMap(this[_fieldSet], json, extensionRegistry);
    }
    addExtension(extension, value) {
      if (!extension.isRepeated) {
        dart.throw(new core.ArgumentError.new("Cannot add to a non-repeated field (use setExtension())"));
      }
      this[_fieldSet][_ensureExtensions]()[_ensureRepeatedField](core.Object, extension)[$add](value);
    }
    clearExtension(extension) {
      if (this[_fieldSet][_hasExtensions]) {
        dart.nullCheck(this[_fieldSet][_extensions])[_clearFieldAndInfo](extension);
      }
    }
    clearField(tagNumber) {
      return this[_fieldSet][_clearField](tagNumber);
    }
    $_whichOneof(oneofIndex) {
      let t1;
      t1 = dart.nullCheck(this[_fieldSet][_oneofCases])[$_get](oneofIndex);
      return t1 == null ? 0 : t1;
    }
    extensionsAreInitialized() {
      return this[_fieldSet][_hasRequiredExtensionValues]();
    }
    getExtension(extension) {
      return this[_fieldSet][_ensureExtensions]()[_getFieldOrDefault](extension);
    }
    getField(tagNumber) {
      return this[_fieldSet][_getField](tagNumber);
    }
    createRepeatedField(T, tagNumber, fi) {
      return new (protobuf.PbList$(T)).new({check: dart.nullCheck(dart.nullable(dart.fnType(dart.void, [dart.nullable(T)])).as(fi.check))});
    }
    createMapField(K, V, tagNumber, fi) {
      return new (protobuf.PbMap$(K, V)).new(fi.keyFieldType, fi.valueFieldType);
    }
    getFieldOrNull(tagNumber) {
      return this[_fieldSet][_getFieldOrNullByTag](tagNumber);
    }
    getDefaultForField(tagNumber) {
      return this[_fieldSet][_ensureInfo](tagNumber).readonlyDefault;
    }
    hasExtension(extension) {
      return this[_fieldSet][_hasExtensions] && dart.nullCheck(this[_fieldSet][_extensions])[_getFieldOrNull](extension) != null;
    }
    hasField(tagNumber) {
      return this[_fieldSet][_hasField](tagNumber);
    }
    mergeFromMessage(other) {
      return this[_fieldSet][_mergeFromMessage](other[_fieldSet]);
    }
    mergeUnknownFields(unknownFieldSet) {
      return this[_fieldSet][_ensureUnknownFields]().mergeFromUnknownFieldSet(unknownFieldSet);
    }
    setExtension(extension, value) {
      core.ArgumentError.checkNotNull(core.Object, value, "value");
      if (protobuf._isRepeated(extension.type)) {
        dart.throw(new core.ArgumentError.new(this[_fieldSet][_setFieldFailedMessage](extension, value, "repeating field (use get + .add())")));
      }
      this[_fieldSet][_ensureExtensions]()[_setFieldAndInfo](extension, value);
    }
    setField(tagNumber, value) {
      this[_fieldSet][_setField](tagNumber, value);
    }
    $_get(T, index, defaultValue) {
      return this[_fieldSet][_$get](T, index, defaultValue);
    }
    $_getN(T, index) {
      return T.as(this[_fieldSet][_$getND](index));
    }
    $_ensure(T, index) {
      return this[_fieldSet][_$ensure](T, index);
    }
    $_getList(T, index) {
      return this[_fieldSet][_$getList](T, index);
    }
    $_getMap(K, V, index) {
      return this[_fieldSet][_$getMap](K, V, this, index);
    }
    $_getB(index, defaultValue) {
      return this[_fieldSet][_$getB](index, defaultValue);
    }
    $_getBF(index) {
      return this[_fieldSet][_$getBF](index);
    }
    $_getI(index, defaultValue) {
      return this[_fieldSet][_$getI](index, defaultValue);
    }
    $_getIZ(index) {
      return this[_fieldSet][_$getIZ](index);
    }
    $_getS(index, defaultValue) {
      return this[_fieldSet][_$getS](index, defaultValue);
    }
    $_getSZ(index) {
      return this[_fieldSet][_$getSZ](index);
    }
    $_getI64(index) {
      return this[_fieldSet][_$getI64](index);
    }
    $_has(index) {
      return this[_fieldSet][_$has](index);
    }
    $_setBool(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setBytes(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setString(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setFloat(index, value) {
      core.ArgumentError.checkNotNull(core.double, value, "value");
      if (!protobuf._isFloat32(value)) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setDouble(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    $_setSignedInt32(index, value) {
      core.ArgumentError.checkNotNull(core.int, value, "value");
      if (!protobuf._isSigned32(value)) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setUnsignedInt32(index, value) {
      core.ArgumentError.checkNotNull(core.int, value, "value");
      if (!protobuf._isUnsigned32(value)) {
        this[_fieldSet][_$check](index, value);
      }
      this[_fieldSet][_$set](index, value);
    }
    $_setInt64(index, value) {
      return this[_fieldSet][_$set](index, value);
    }
    static _defaultMakerFor(T, createFn) {
      let t4, t3, t2, t1;
      return dart.fnType(T, []).as((t1 = protobuf.GeneratedMessage._defaultMakers, t2 = createFn, t3 = t1[$_get](t2), t3 == null ? (t4 = protobuf.GeneratedMessage._createDefaultMakerFor(T, dart.nullCheck(createFn)), t1[$_set](t2, t4), t4) : t3));
    }
    static _createDefaultMakerFor(T, createFn) {
      let defaultValue = null;
      function defaultMaker() {
        let t2, t1;
        t1 = defaultValue;
        return t1 == null ? defaultValue = (t2 = createFn(), (() => {
          t2.freeze();
          return t2;
        })()) : t1;
      }
      dart.fn(defaultMaker, dart.fnType(T, []));
      return defaultMaker;
    }
    static $_defaultFor(T, createFn) {
      return protobuf.GeneratedMessage._defaultMakerFor(T, createFn)();
    }
  };
  (protobuf.GeneratedMessage.new = function() {
    this[__fieldSet] = null;
    this[__fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) dart.nullCheck(this.eventPlugin).attach(this);
  }).prototype = protobuf.GeneratedMessage.prototype;
  (protobuf.GeneratedMessage.fromBuffer = function(input, extensionRegistry) {
    this[__fieldSet] = null;
    this[__fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) dart.nullCheck(this.eventPlugin).attach(this);
    this.mergeFromBuffer(input, extensionRegistry);
  }).prototype = protobuf.GeneratedMessage.prototype;
  (protobuf.GeneratedMessage.fromJson = function(input, extensionRegistry) {
    this[__fieldSet] = null;
    this[__fieldSet] = new protobuf._FieldSet.new(this, this.info_, this.eventPlugin);
    if (this.eventPlugin != null) dart.nullCheck(this.eventPlugin).attach(this);
    this.mergeFromJson(input, extensionRegistry);
  }).prototype = protobuf.GeneratedMessage.prototype;
  dart.addTypeTests(protobuf.GeneratedMessage);
  dart.addTypeCaches(protobuf.GeneratedMessage);
  dart.setMethodSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getMethods(protobuf.GeneratedMessage.__proto__),
    freeze: dart.fnType(protobuf.GeneratedMessage, []),
    toBuilder: dart.fnType(protobuf.GeneratedMessage, []),
    copyWith: dart.fnType(protobuf.GeneratedMessage, [dart.fnType(dart.void, [protobuf.GeneratedMessage])]),
    hasRequiredFields: dart.fnType(core.bool, []),
    isInitialized: dart.fnType(core.bool, []),
    clear: dart.fnType(dart.void, []),
    getTagNumber: dart.fnType(dart.nullable(core.int), [core.String]),
    toDebugString: dart.fnType(core.String, []),
    check: dart.fnType(dart.void, []),
    writeToBuffer: dart.fnType(typed_data.Uint8List, []),
    writeToCodedBufferWriter: dart.fnType(dart.void, [protobuf.CodedBufferWriter]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
    mergeFromBuffer: dart.fnType(dart.void, [core.List$(core.int)], [protobuf.ExtensionRegistry]),
    writeToJsonMap: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    writeToJson: dart.fnType(core.String, []),
    toProto3Json: dart.fnType(dart.nullable(core.Object), [], {typeRegistry: type_registry.TypeRegistry}, {}),
    mergeFromProto3Json: dart.fnType(dart.void, [dart.nullable(core.Object)], {ignoreUnknownFields: core.bool, permissiveEnums: core.bool, supportNamesWithUnderscores: core.bool, typeRegistry: type_registry.TypeRegistry}, {}),
    mergeFromJson: dart.fnType(dart.void, [core.String], [protobuf.ExtensionRegistry]),
    mergeFromJsonMap: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], [protobuf.ExtensionRegistry]),
    addExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    clearExtension: dart.fnType(dart.void, [protobuf.Extension]),
    clearField: dart.fnType(dart.void, [core.int]),
    $_whichOneof: dart.fnType(core.int, [core.int]),
    extensionsAreInitialized: dart.fnType(core.bool, []),
    getExtension: dart.fnType(dart.dynamic, [protobuf.Extension]),
    getField: dart.fnType(dart.dynamic, [core.int]),
    createRepeatedField: dart.gFnType(T => [core.List$(T), [core.int, protobuf.FieldInfo$(T)]], T => [dart.nullable(core.Object)]),
    createMapField: dart.gFnType((K, V) => [core.Map$(K, V), [core.int, protobuf.MapFieldInfo$(K, V)]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    getFieldOrNull: dart.fnType(dart.dynamic, [core.int]),
    getDefaultForField: dart.fnType(dart.dynamic, [core.int]),
    hasExtension: dart.fnType(core.bool, [protobuf.Extension]),
    hasField: dart.fnType(core.bool, [core.int]),
    mergeFromMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage]),
    mergeUnknownFields: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    setExtension: dart.fnType(dart.void, [protobuf.Extension, core.Object]),
    setField: dart.fnType(dart.void, [core.int, core.Object]),
    $_get: dart.gFnType(T => [T, [core.int, T]], T => [dart.nullable(core.Object)]),
    $_getN: dart.gFnType(T => [T, [core.int]], T => [dart.nullable(core.Object)]),
    $_ensure: dart.gFnType(T => [T, [core.int]], T => [dart.nullable(core.Object)]),
    $_getList: dart.gFnType(T => [core.List$(T), [core.int]], T => [dart.nullable(core.Object)]),
    $_getMap: dart.gFnType((K, V) => [core.Map$(K, V), [core.int]], (K, V) => [dart.nullable(core.Object), dart.nullable(core.Object)]),
    $_getB: dart.fnType(core.bool, [core.int, core.bool]),
    $_getBF: dart.fnType(core.bool, [core.int]),
    $_getI: dart.fnType(core.int, [core.int, core.int]),
    $_getIZ: dart.fnType(core.int, [core.int]),
    $_getS: dart.fnType(core.String, [core.int, core.String]),
    $_getSZ: dart.fnType(core.String, [core.int]),
    $_getI64: dart.fnType(fixnum.Int64, [core.int]),
    $_has: dart.fnType(core.bool, [core.int]),
    $_setBool: dart.fnType(dart.void, [core.int, core.bool]),
    $_setBytes: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    $_setString: dart.fnType(dart.void, [core.int, core.String]),
    $_setFloat: dart.fnType(dart.void, [core.int, core.double]),
    $_setDouble: dart.fnType(dart.void, [core.int, core.double]),
    $_setSignedInt32: dart.fnType(dart.void, [core.int, core.int]),
    $_setUnsignedInt32: dart.fnType(dart.void, [core.int, core.int]),
    $_setInt64: dart.fnType(dart.void, [core.int, fixnum.Int64])
  }));
  dart.setStaticMethodSignature(protobuf.GeneratedMessage, () => ['_emptyReviver', '_defaultMakerFor', '_createDefaultMakerFor', '$_defaultFor']);
  dart.setGetterSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getGetters(protobuf.GeneratedMessage.__proto__),
    [_fieldSet]: protobuf._FieldSet,
    eventPlugin: dart.nullable(protobuf.EventPlugin),
    unknownFields: protobuf.UnknownFieldSet,
    isFrozen: core.bool
  }));
  dart.setLibraryUri(protobuf.GeneratedMessage, I[1]);
  dart.setFieldSignature(protobuf.GeneratedMessage, () => ({
    __proto__: dart.getFields(protobuf.GeneratedMessage.__proto__),
    [__fieldSet]: dart.fieldType(dart.nullable(protobuf._FieldSet))
  }));
  dart.setStaticFieldSignature(protobuf.GeneratedMessage, () => ['_defaultMakers']);
  dart.defineExtensionMethods(protobuf.GeneratedMessage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(protobuf.GeneratedMessage, ['hashCode']);
  dart.defineLazy(protobuf.GeneratedMessage, {
    /*protobuf.GeneratedMessage._defaultMakers*/get _defaultMakers() {
      return new (T$.LinkedMapOfFunctionN$Function()).new();
    }
  }, false);
  const name$0 = PackageName_name;
  protobuf.PackageName = class PackageName extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](name) {
      return new protobuf.PackageName.new(name);
    }
    get prefix() {
      return this.name === "" ? "" : this.name + ".";
    }
  };
  (protobuf.PackageName.new = function(name) {
    this[name$0] = name;
    ;
  }).prototype = protobuf.PackageName.prototype;
  dart.addTypeTests(protobuf.PackageName);
  dart.addTypeCaches(protobuf.PackageName);
  dart.setGetterSignature(protobuf.PackageName, () => ({
    __proto__: dart.getGetters(protobuf.PackageName.__proto__),
    prefix: core.String
  }));
  dart.setLibraryUri(protobuf.PackageName, I[1]);
  dart.setFieldSignature(protobuf.PackageName, () => ({
    __proto__: dart.getFields(protobuf.PackageName.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  protobuf.ServerContext = class ServerContext extends core.Object {
    static ['_#new#tearOff']() {
      return new protobuf.ServerContext.new();
    }
  };
  (protobuf.ServerContext.new = function() {
    ;
  }).prototype = protobuf.ServerContext.prototype;
  dart.addTypeTests(protobuf.ServerContext);
  dart.addTypeCaches(protobuf.ServerContext);
  dart.setLibraryUri(protobuf.ServerContext, I[1]);
  protobuf.GeneratedService = class GeneratedService extends core.Object {};
  (protobuf.GeneratedService.new = function() {
    ;
  }).prototype = protobuf.GeneratedService.prototype;
  dart.addTypeTests(protobuf.GeneratedService);
  dart.addTypeCaches(protobuf.GeneratedService);
  dart.setLibraryUri(protobuf.GeneratedService, I[1]);
  var _wrappedList$ = dart.privateName(protobuf, "_wrappedList");
  var _unsupported = dart.privateName(protobuf, "_unsupported");
  var check$0 = dart.privateName(protobuf, "PbListBase.check");
  const _is_PbListBase_default = Symbol('_is_PbListBase_default');
  protobuf.PbListBase$ = dart.generic(E => {
    var __t$JSArrayOfE = () => (__t$JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    var __t$ENTovoid = () => (__t$ENTovoid = dart.constFn(dart.fnType(dart.void, [__t$EN()])))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$EAndEToE = () => (__t$EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    var __t$VoidToE = () => (__t$VoidToE = dart.constFn(dart.fnType(E, [])))();
    var __t$VoidToNE = () => (__t$VoidToNE = dart.constFn(dart.nullable(__t$VoidToE())))();
    class PbListBase extends collection.ListBase$(E) {
      get check() {
        return this[check$0];
      }
      set check(value) {
        super.check = value;
      }
      _equals(other) {
        if (other == null) return false;
        return protobuf.PbListBase.is(other) && protobuf._areListsEqual(other, this);
      }
      get hashCode() {
        return protobuf._HashUtils._hashObjects(this[_wrappedList$]);
      }
      get iterator() {
        return this[_wrappedList$][$iterator];
      }
      map(T, f) {
        return this[_wrappedList$][$map](T, f);
      }
      where(test) {
        return this[_wrappedList$][$where](test);
      }
      expand(T, f) {
        return this[_wrappedList$][$expand](T, f);
      }
      contains(element) {
        return this[_wrappedList$][$contains](element);
      }
      forEach(action) {
        this[_wrappedList$][$forEach](action);
      }
      reduce(combine) {
        __t$EAndEToE().as(combine);
        return this[_wrappedList$][$reduce](combine);
      }
      fold(T, initialValue, combine) {
        return this[_wrappedList$][$fold](T, initialValue, combine);
      }
      every(test) {
        return this[_wrappedList$][$every](test);
      }
      join(separator = "") {
        return this[_wrappedList$][$join](separator);
      }
      any(test) {
        return this[_wrappedList$][$any](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_wrappedList$][$toList]({growable: growable});
      }
      toSet() {
        return this[_wrappedList$][$toSet]();
      }
      get isEmpty() {
        return this[_wrappedList$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_wrappedList$][$isNotEmpty];
      }
      take(count) {
        return this[_wrappedList$][$take](count);
      }
      takeWhile(test) {
        return this[_wrappedList$][$takeWhile](test);
      }
      skip(count) {
        return this[_wrappedList$][$skip](count);
      }
      skipWhile(test) {
        return this[_wrappedList$][$skipWhile](test);
      }
      get first() {
        return this[_wrappedList$][$first];
      }
      set first(value) {
        super.first = value;
      }
      get last() {
        return this[_wrappedList$][$last];
      }
      set last(value) {
        super.last = value;
      }
      get single() {
        return this[_wrappedList$][$single];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_wrappedList$][$firstWhere](test, {orElse: orElse});
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        __t$VoidToNE().as(orElse);
        return this[_wrappedList$][$lastWhere](test, {orElse: orElse});
      }
      elementAt(index) {
        return this[_wrappedList$][$elementAt](index);
      }
      toString() {
        return this[_wrappedList$][$toString]();
      }
      _get(index) {
        return this[_wrappedList$][$_get](index);
      }
      get length() {
        return this[_wrappedList$][$length];
      }
      indexOf(element, start = 0) {
        return this[_wrappedList$][$indexOf](E.as(element), start);
      }
      lastIndexOf(element, start = null) {
        return this[_wrappedList$][$lastIndexOf](E.as(element), start);
      }
      sublist(start, end = null) {
        return this[_wrappedList$][$sublist](start, end);
      }
      getRange(start, end) {
        return this[_wrappedList$][$getRange](start, end);
      }
      asMap() {
        return this[_wrappedList$][$asMap]();
      }
      _set(index, value$) {
        let value = value$;
        let t1;
        E.as(value);
        t1 = value;
        this.check(t1);
        this[_wrappedList$][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (newLength > this.length) {
          dart.throw(new core.UnsupportedError.new("Extending protobuf lists is not supported"));
        }
        this[_wrappedList$][$length] = newLength;
      }
    }
    (PbListBase.__ = function(_wrappedList, opts) {
      let check = opts && 'check' in opts ? opts.check : C[1] || CT.C1;
      this[_wrappedList$] = _wrappedList;
      this[check$0] = check;
      ;
    }).prototype = PbListBase.prototype;
    (PbListBase._noList = function(opts) {
      let check = opts && 'check' in opts ? opts.check : C[1] || CT.C1;
      this[check$0] = check;
      this[_wrappedList$] = __t$JSArrayOfE().of([]);
      core.ArgumentError.checkNotNull(__t$ENTovoid(), this.check, "check");
    }).prototype = PbListBase.prototype;
    (PbListBase._from = function(from) {
      this[_wrappedList$] = __t$ListOfE().from(from);
      this[check$0] = C[1] || CT.C1;
      ;
    }).prototype = PbListBase.prototype;
    dart.addTypeTests(PbListBase);
    PbListBase.prototype[_is_PbListBase_default] = true;
    dart.addTypeCaches(PbListBase);
    dart.setMethodSignature(PbListBase, () => ({
      __proto__: dart.getMethods(PbListBase.__proto__),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]], T => [dart.nullable(core.Object)]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]], T => [dart.nullable(core.Object)]),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]], T => [dart.nullable(core.Object)]),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(PbListBase, () => ({
      __proto__: dart.getGetters(PbListBase.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(PbListBase, () => ({
      __proto__: dart.getSetters(PbListBase.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(PbListBase, I[1]);
    dart.setFieldSignature(PbListBase, () => ({
      __proto__: dart.getFields(PbListBase.__proto__),
      [_wrappedList$]: dart.finalFieldType(core.List$(E)),
      check: dart.finalFieldType(dart.fnType(dart.void, [dart.nullable(E)]))
    }));
    dart.defineExtensionMethods(PbListBase, [
      '_equals',
      'map',
      'where',
      'expand',
      'contains',
      'forEach',
      'reduce',
      'fold',
      'every',
      'join',
      'any',
      'toList',
      'toSet',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'firstWhere',
      'lastWhere',
      'elementAt',
      'toString',
      '_get',
      'indexOf',
      'lastIndexOf',
      'sublist',
      'getRange',
      'asMap',
      '_set'
    ]);
    dart.defineExtensionAccessors(PbListBase, [
      'hashCode',
      'iterator',
      'isEmpty',
      'isNotEmpty',
      'first',
      'last',
      'single',
      'length'
    ]);
    return PbListBase;
  });
  protobuf.PbListBase = protobuf.PbListBase$();
  dart.addTypeTests(protobuf.PbListBase, _is_PbListBase_default);
  const _is_FrozenPbList_default = Symbol('_is_FrozenPbList_default');
  protobuf.FrozenPbList$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    class FrozenPbList extends protobuf.PbListBase$(E) {
      static ['_#_#tearOff'](E, wrappedList) {
        return new (protobuf.FrozenPbList$(E)).__(wrappedList);
      }
      static from(other) {
        return new (protobuf.FrozenPbList$(E)).__(other[_wrappedList$]);
      }
      static ['_#from#tearOff'](E, other) {
        return protobuf.FrozenPbList$(E).from(other);
      }
      [_unsupported](method) {
        return new core.UnsupportedError.new("Cannot call " + method + " on an unmodifiable list");
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        dart.throw(this[_unsupported]("set"));
        return value$;
      }
      set length(newLength) {
        return dart.throw(this[_unsupported]("set length"));
      }
      get length() {
        return super.length;
      }
      setAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        return dart.throw(this[_unsupported]("setAll"));
      }
      add(element) {
        __t$EN().as(element);
        return dart.throw(this[_unsupported]("add"));
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        return dart.throw(this[_unsupported]("addAll"));
      }
      insert(index, element) {
        E.as(element);
        return dart.throw(this[_unsupported]("insert"));
      }
      insertAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        return dart.throw(this[_unsupported]("insertAll"));
      }
      remove(element) {
        return dart.throw(this[_unsupported]("remove"));
      }
      removeWhere(test) {
        return dart.throw(this[_unsupported]("removeWhere"));
      }
      retainWhere(test) {
        return dart.throw(this[_unsupported]("retainWhere"));
      }
      sort(compare = null) {
        return dart.throw(this[_unsupported]("sort"));
      }
      shuffle(random = null) {
        return dart.throw(this[_unsupported]("shuffle"));
      }
      clear() {
        return dart.throw(this[_unsupported]("clear"));
      }
      removeAt(index) {
        return dart.throw(this[_unsupported]("removeAt"));
      }
      removeLast() {
        return dart.throw(this[_unsupported]("removeLast"));
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        return dart.throw(this[_unsupported]("setRange"));
      }
      removeRange(start, end) {
        return dart.throw(this[_unsupported]("removeRange"));
      }
      replaceRange(start, end, newContents) {
        __t$IterableOfE().as(newContents);
        return dart.throw(this[_unsupported]("replaceRange"));
      }
      fillRange(start, end, fill = null) {
        __t$EN().as(fill);
        return dart.throw(this[_unsupported]("fillRange"));
      }
    }
    (FrozenPbList.__ = function(wrappedList) {
      FrozenPbList.__proto__.__.call(this, wrappedList);
      ;
    }).prototype = FrozenPbList.prototype;
    dart.addTypeTests(FrozenPbList);
    FrozenPbList.prototype[_is_FrozenPbList_default] = true;
    dart.addTypeCaches(FrozenPbList);
    dart.setMethodSignature(FrozenPbList, () => ({
      __proto__: dart.getMethods(FrozenPbList.__proto__),
      [_unsupported]: dart.fnType(core.UnsupportedError, [core.String])
    }));
    dart.setStaticMethodSignature(FrozenPbList, () => ['from']);
    dart.setLibraryUri(FrozenPbList, I[1]);
    dart.defineExtensionMethods(FrozenPbList, [
      '_set',
      'setAll',
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeWhere',
      'retainWhere',
      'sort',
      'shuffle',
      'clear',
      'removeAt',
      'removeLast',
      'setRange',
      'removeRange',
      'replaceRange',
      'fillRange'
    ]);
    dart.defineExtensionAccessors(FrozenPbList, ['length']);
    return FrozenPbList;
  });
  protobuf.FrozenPbList = protobuf.FrozenPbList$();
  dart.addTypeTests(protobuf.FrozenPbList, _is_FrozenPbList_default);
  const _is_PbList_default = Symbol('_is_PbList_default');
  protobuf.PbList$ = dart.generic(E => {
    var __t$FrozenPbListOfE = () => (__t$FrozenPbListOfE = dart.constFn(protobuf.FrozenPbList$(E)))();
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    class PbList extends protobuf.PbListBase$(E) {
      static ['_#new#tearOff'](E, opts) {
        let check = opts && 'check' in opts ? opts.check : C[1] || CT.C1;
        return new (protobuf.PbList$(E)).new({check: check});
      }
      static ['_#from#tearOff'](E, from) {
        return new (protobuf.PbList$(E)).from(from);
      }
      static ['_#forFieldType#tearOff'](E, fieldType) {
        return new (protobuf.PbList$(E)).forFieldType(fieldType);
      }
      toFrozenPbList() {
        return __t$FrozenPbListOfE().from(this);
      }
      add(element) {
        let t1;
        E.as(element);
        t1 = element;
        this.check(t1);
        this[_wrappedList$][$add](element);
      }
      addAll(iterable) {
        __t$IterableOfE().as(iterable);
        iterable[$forEach](this.check);
        this[_wrappedList$][$addAll](iterable);
      }
      get reversed() {
        return this[_wrappedList$][$reversed];
      }
      sort(compare = null) {
        return this[_wrappedList$][$sort](compare);
      }
      shuffle(random = null) {
        return this[_wrappedList$][$shuffle](random);
      }
      clear() {
        return this[_wrappedList$][$clear]();
      }
      insert(index, element) {
        let t1;
        E.as(element);
        t1 = element;
        this.check(t1);
        this[_wrappedList$][$insert](index, element);
      }
      insertAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        iterable[$forEach](this.check);
        this[_wrappedList$][$insertAll](index, iterable);
      }
      setAll(index, iterable) {
        __t$IterableOfE().as(iterable);
        iterable[$forEach](this.check);
        this[_wrappedList$][$setAll](index, iterable);
      }
      remove(element) {
        return this[_wrappedList$][$remove](element);
      }
      removeAt(index) {
        return this[_wrappedList$][$removeAt](index);
      }
      removeLast() {
        return this[_wrappedList$][$removeLast]();
      }
      removeWhere(test) {
        return this[_wrappedList$][$removeWhere](test);
      }
      retainWhere(test) {
        return this[_wrappedList$][$retainWhere](test);
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        iterable[$skip](skipCount)[$take](end - start)[$forEach](this.check);
        this[_wrappedList$][$setRange](start, end, iterable, skipCount);
      }
      removeRange(start, end) {
        return this[_wrappedList$][$removeRange](start, end);
      }
      fillRange(start, end, fill = null) {
        let t1;
        __t$EN().as(fill);
        t1 = fill;
        this.check(t1);
        this[_wrappedList$][$fillRange](start, end, fill);
      }
      replaceRange(start, end, newContents) {
        __t$IterableOfE().as(newContents);
        let values = newContents[$toList]();
        newContents[$forEach](this.check);
        this[_wrappedList$][$replaceRange](start, end, values);
      }
    }
    (PbList.new = function(opts) {
      let check = opts && 'check' in opts ? opts.check : C[1] || CT.C1;
      PbList.__proto__._noList.call(this, {check: check});
      ;
    }).prototype = PbList.prototype;
    (PbList.from = function(from) {
      PbList.__proto__._from.call(this, from);
      ;
    }).prototype = PbList.prototype;
    (PbList.forFieldType = function(fieldType) {
      PbList.__proto__._noList.call(this, {check: protobuf.getCheckFunction(fieldType)});
      ;
    }).prototype = PbList.prototype;
    dart.addTypeTests(PbList);
    PbList.prototype[_is_PbList_default] = true;
    dart.addTypeCaches(PbList);
    dart.setMethodSignature(PbList, () => ({
      __proto__: dart.getMethods(PbList.__proto__),
      toFrozenPbList: dart.fnType(protobuf.FrozenPbList$(E), [])
    }));
    dart.setLibraryUri(PbList, I[1]);
    dart.defineExtensionMethods(PbList, [
      'add',
      'addAll',
      'sort',
      'shuffle',
      'clear',
      'insert',
      'insertAll',
      'setAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'setRange',
      'removeRange',
      'fillRange',
      'replaceRange'
    ]);
    dart.defineExtensionAccessors(PbList, ['reversed']);
    return PbList;
  });
  protobuf.PbList = protobuf.PbList$();
  dart.addTypeTests(protobuf.PbList, _is_PbList_default);
  var value$ = dart.privateName(protobuf, "ProtobufEnum.value");
  var name$1 = dart.privateName(protobuf, "ProtobufEnum.name");
  protobuf.ProtobufEnum = class ProtobufEnum extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    static ['_#new#tearOff'](value, name) {
      return new protobuf.ProtobufEnum.new(value, name);
    }
    static initByValue(T, byIndex) {
      let byValue = new (_js_helper.IdentityMap$(core.int, T)).new();
      for (let v of byIndex) {
        byValue[$_set](v.value, v);
      }
      return byValue;
    }
    get hashCode() {
      return this.value;
    }
    toString() {
      return this.name;
    }
  };
  (protobuf.ProtobufEnum.new = function(value, name) {
    this[value$] = value;
    this[name$1] = name;
    ;
  }).prototype = protobuf.ProtobufEnum.prototype;
  dart.addTypeTests(protobuf.ProtobufEnum);
  dart.addTypeCaches(protobuf.ProtobufEnum);
  dart.setStaticMethodSignature(protobuf.ProtobufEnum, () => ['initByValue']);
  dart.setLibraryUri(protobuf.ProtobufEnum, I[1]);
  dart.setFieldSignature(protobuf.ProtobufEnum, () => ({
    __proto__: dart.getFields(protobuf.ProtobufEnum.__proto__),
    value: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(protobuf.ProtobufEnum, ['toString']);
  dart.defineExtensionAccessors(protobuf.ProtobufEnum, ['hashCode']);
  var _readonly = dart.privateName(protobuf, "_readonly");
  protobuf.ReadonlyMessageMixin = class ReadonlyMessageMixin extends core.Object {
    addExtension(extension, value) {
      return this[_readonly]("addExtension");
    }
    clear() {
      return this[_readonly]("clear");
    }
    clearExtension(extension) {
      return this[_readonly]("clearExtension");
    }
    clearField(tagNumber) {
      return this[_readonly]("clearField");
    }
    createRepeatedField(T, tagNumber, fi) {
      this[_readonly]("createRepeatedField");
      return null;
    }
    mergeFromBuffer(input, extensionRegistry = C[3] || CT.C3) {
      return this[_readonly]("mergeFromBuffer");
    }
    mergeFromCodedBufferReader(input, extensionRegistry = C[3] || CT.C3) {
      return this[_readonly]("mergeFromCodedBufferReader");
    }
    mergeFromJson(data, extensionRegistry = C[3] || CT.C3) {
      return this[_readonly]("mergeFromJson");
    }
    mergeFromJsonMap(json, extensionRegistry = C[3] || CT.C3) {
      return this[_readonly]("mergeFromJsonMap");
    }
    mergeFromMessage(other) {
      return this[_readonly]("mergeFromMessage");
    }
    mergeUnknownFields(unknownFieldSet) {
      return this[_readonly]("mergeUnknownFields");
    }
    setExtension(extension, value) {
      return this[_readonly]("setExtension");
    }
    setField(tagNumber, value, fieldType = null) {
      return this[_readonly]("setField");
    }
    [_readonly](methodName) {
      let messageType = this.info_.qualifiedMessageName;
      protobuf.frozenMessageModificationHandler(messageType, methodName);
    }
  };
  (protobuf.ReadonlyMessageMixin.new = function() {
    ;
  }).prototype = protobuf.ReadonlyMessageMixin.prototype;
  dart.addTypeTests(protobuf.ReadonlyMessageMixin);
  dart.addTypeCaches(protobuf.ReadonlyMessageMixin);
  dart.setMethodSignature(protobuf.ReadonlyMessageMixin, () => ({
    __proto__: dart.getMethods(protobuf.ReadonlyMessageMixin.__proto__),
    addExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    clear: dart.fnType(dart.void, []),
    clearExtension: dart.fnType(dart.void, [protobuf.Extension]),
    clearField: dart.fnType(dart.void, [core.int]),
    createRepeatedField: dart.gFnType(T => [dart.nullable(core.List$(T)), [core.int, protobuf.FieldInfo$(T)]], T => [dart.nullable(core.Object)]),
    mergeFromBuffer: dart.fnType(dart.void, [core.List$(core.int)], [protobuf.ExtensionRegistry]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader], [protobuf.ExtensionRegistry]),
    mergeFromJson: dart.fnType(dart.void, [core.String], [protobuf.ExtensionRegistry]),
    mergeFromJsonMap: dart.fnType(dart.void, [core.Map$(core.String, dart.dynamic)], [protobuf.ExtensionRegistry]),
    mergeFromMessage: dart.fnType(dart.void, [protobuf.GeneratedMessage]),
    mergeUnknownFields: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    setExtension: dart.fnType(dart.void, [protobuf.Extension, dart.dynamic]),
    setField: dart.fnType(dart.void, [core.int, dart.dynamic], [dart.nullable(core.int)]),
    [_readonly]: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(protobuf.ReadonlyMessageMixin, I[1]);
  var timeout$ = dart.privateName(protobuf, "ClientContext.timeout");
  protobuf.ClientContext = class ClientContext extends core.Object {
    get timeout() {
      return this[timeout$];
    }
    set timeout(value) {
      super.timeout = value;
    }
    static ['_#new#tearOff'](opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : null;
      return new protobuf.ClientContext.new({timeout: timeout});
    }
  };
  (protobuf.ClientContext.new = function(opts) {
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    this[timeout$] = timeout;
    ;
  }).prototype = protobuf.ClientContext.prototype;
  dart.addTypeTests(protobuf.ClientContext);
  dart.addTypeCaches(protobuf.ClientContext);
  dart.setLibraryUri(protobuf.ClientContext, I[1]);
  dart.setFieldSignature(protobuf.ClientContext, () => ({
    __proto__: dart.getFields(protobuf.ClientContext.__proto__),
    timeout: dart.finalFieldType(dart.nullable(core.Duration))
  }));
  protobuf.RpcClient = class RpcClient extends core.Object {};
  (protobuf.RpcClient.new = function() {
    ;
  }).prototype = protobuf.RpcClient.prototype;
  dart.addTypeTests(protobuf.RpcClient);
  dart.addTypeCaches(protobuf.RpcClient);
  dart.setLibraryUri(protobuf.RpcClient, I[1]);
  var _checkFieldNumber = dart.privateName(protobuf, "_checkFieldNumber");
  var _toString = dart.privateName(protobuf, "_toString");
  protobuf.UnknownFieldSet = class UnknownFieldSet extends core.Object {
    static ['_#new#tearOff']() {
      return new protobuf.UnknownFieldSet.new();
    }
    static ['_#_clone#tearOff'](unknownFieldSet) {
      return new protobuf.UnknownFieldSet._clone(unknownFieldSet);
    }
    clone() {
      return new protobuf.UnknownFieldSet._clone(this);
    }
    get isEmpty() {
      return this[_fields][$isEmpty];
    }
    get isNotEmpty() {
      return this[_fields][$isNotEmpty];
    }
    asMap() {
      return T$.LinkedHashMapOfint$UnknownFieldSetField().from(this[_fields]);
    }
    clear() {
      this[_ensureWritable]("clear");
      this[_fields][$clear]();
    }
    getField(tagNumber) {
      return this[_fields][$_get](tagNumber);
    }
    hasField(tagNumber) {
      return this[_fields][$containsKey](tagNumber);
    }
    addField(number, field) {
      this[_ensureWritable]("addField");
      this[_checkFieldNumber](number);
      this[_fields][$_set](number, field);
    }
    mergeField(number, field) {
      let t1;
      this[_ensureWritable]("mergeField");
      t1 = this[_getField](number);
      (() => {
        t1.varints[$addAll](field.varints);
        t1.fixed32s[$addAll](field.fixed32s);
        t1.fixed64s[$addAll](field.fixed64s);
        t1.lengthDelimited[$addAll](field.lengthDelimited);
        t1.groups[$addAll](field.groups);
        return t1;
      })();
    }
    mergeFieldFromBuffer(tag, input) {
      this[_ensureWritable]("mergeFieldFromBuffer");
      let number = protobuf.getTagFieldNumber(tag);
      switch (protobuf.getTagWireType(tag)) {
        case 0:
        {
          this.mergeVarintField(number, input.readInt64());
          return true;
        }
        case 1:
        {
          this.mergeFixed64Field(number, input.readFixed64());
          return true;
        }
        case 2:
        {
          this.mergeLengthDelimitedField(number, input.readBytes());
          return true;
        }
        case 3:
        {
          let subGroup = input.readUnknownFieldSetGroup(number);
          this.mergeGroupField(number, subGroup);
          return true;
        }
        case 4:
        {
          return false;
        }
        case 5:
        {
          this.mergeFixed32Field(number, input.readFixed32());
          return true;
        }
        default:
        {
          dart.throw(new protobuf.InvalidProtocolBufferException.invalidWireType());
        }
      }
    }
    mergeFromCodedBufferReader(input) {
      this[_ensureWritable]("mergeFromCodedBufferReader");
      while (true) {
        let tag = input.readTag();
        if (tag === 0 || !this.mergeFieldFromBuffer(tag, input)) {
          break;
        }
      }
    }
    mergeFromUnknownFieldSet(other) {
      this[_ensureWritable]("mergeFromUnknownFieldSet");
      for (let key of other[_fields][$keys]) {
        this.mergeField(key, dart.nullCheck(other[_fields][$_get](key)));
      }
    }
    [_checkFieldNumber](number) {
      if (number === 0) {
        dart.throw(new core.ArgumentError.new("Zero is not a valid field number."));
      }
    }
    mergeFixed32Field(number, value) {
      this[_ensureWritable]("mergeFixed32Field");
      this[_getField](number).addFixed32(value);
    }
    mergeFixed64Field(number, value) {
      this[_ensureWritable]("mergeFixed64Field");
      this[_getField](number).addFixed64(value);
    }
    mergeGroupField(number, value) {
      this[_ensureWritable]("mergeGroupField");
      this[_getField](number).addGroup(value);
    }
    mergeLengthDelimitedField(number, value) {
      this[_ensureWritable]("mergeLengthDelimitedField");
      this[_getField](number).addLengthDelimited(value);
    }
    mergeVarintField(number, value) {
      this[_ensureWritable]("mergeVarintField");
      this[_getField](number).addVarint(value);
    }
    [_getField](number) {
      this[_checkFieldNumber](number);
      if (this[_isReadOnly]) if (!this[_fields][$containsKey](number)) dart.assertFailed(null, I[6], 128, 29, "_fields.containsKey(number)");
      return this[_fields][$putIfAbsent](number, dart.fn(() => new protobuf.UnknownFieldSetField.new(), T$.VoidToUnknownFieldSetField()));
    }
    _equals(other) {
      if (other == null) return false;
      if (!protobuf.UnknownFieldSet.is(other)) return false;
      let o = other;
      return protobuf._areMapsEqual(o[_fields], this[_fields]);
    }
    get hashCode() {
      let hash = 0;
      this[_fields][$forEach](dart.fn((number, value) => {
        hash = 536870911 & 37 * hash + number;
        hash = 536870911 & 53 * hash + value[$hashCode];
      }, T$.intAndObjectTovoid()));
      return hash;
    }
    toString() {
      return this[_toString]("");
    }
    [_toString](indent) {
      let t1;
      let stringBuffer = new core.StringBuffer.new();
      for (let tag of protobuf._sorted(core.int, this[_fields][$keys])) {
        let field = dart.nullCheck(this[_fields][$_get](tag));
        for (let value of field.values) {
          if (protobuf.UnknownFieldSet.is(value)) {
            t1 = stringBuffer;
            (() => {
              t1.write(indent + dart.str(tag) + ": {\n");
              t1.write(value[_toString](indent + "  "));
              t1.write(indent + "}\n");
              return t1;
            })();
          } else {
            if (typed_data.ByteData.is(value)) {
              value = value[$getUint64](0, typed_data.Endian.little);
            }
            stringBuffer.write(indent + dart.str(tag) + ": " + dart.str(value) + "\n");
          }
        }
      }
      return stringBuffer.toString();
    }
    writeToCodedBufferWriter(output) {
      for (let key of this[_fields][$keys]) {
        dart.nullCheck(this[_fields][$_get](key)).writeTo(key, output);
      }
    }
    [_markReadOnly]() {
      if (this[_isReadOnly]) return;
      for (let f of this[_fields][$values]) {
        f[_markReadOnly]();
      }
      this[_isReadOnly] = true;
    }
    [_ensureWritable](methodName) {
      if (this[_isReadOnly]) {
        protobuf.frozenMessageModificationHandler("UnknownFieldSet", methodName);
      }
    }
  };
  (protobuf.UnknownFieldSet.new = function() {
    this[_fields] = new (T$.IdentityMapOfint$UnknownFieldSetField()).new();
    this[_isReadOnly] = false;
    ;
  }).prototype = protobuf.UnknownFieldSet.prototype;
  (protobuf.UnknownFieldSet._clone = function(unknownFieldSet) {
    this[_fields] = new (T$.IdentityMapOfint$UnknownFieldSetField()).new();
    this[_isReadOnly] = false;
    this.mergeFromUnknownFieldSet(unknownFieldSet);
  }).prototype = protobuf.UnknownFieldSet.prototype;
  dart.addTypeTests(protobuf.UnknownFieldSet);
  dart.addTypeCaches(protobuf.UnknownFieldSet);
  dart.setMethodSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getMethods(protobuf.UnknownFieldSet.__proto__),
    clone: dart.fnType(protobuf.UnknownFieldSet, []),
    asMap: dart.fnType(core.Map$(core.int, protobuf.UnknownFieldSetField), []),
    clear: dart.fnType(dart.void, []),
    getField: dart.fnType(dart.nullable(protobuf.UnknownFieldSetField), [core.int]),
    hasField: dart.fnType(core.bool, [core.int]),
    addField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSetField]),
    mergeField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSetField]),
    mergeFieldFromBuffer: dart.fnType(core.bool, [core.int, protobuf.CodedBufferReader]),
    mergeFromCodedBufferReader: dart.fnType(dart.void, [protobuf.CodedBufferReader]),
    mergeFromUnknownFieldSet: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    [_checkFieldNumber]: dart.fnType(dart.void, [core.int]),
    mergeFixed32Field: dart.fnType(dart.void, [core.int, core.int]),
    mergeFixed64Field: dart.fnType(dart.void, [core.int, fixnum.Int64]),
    mergeGroupField: dart.fnType(dart.void, [core.int, protobuf.UnknownFieldSet]),
    mergeLengthDelimitedField: dart.fnType(dart.void, [core.int, core.List$(core.int)]),
    mergeVarintField: dart.fnType(dart.void, [core.int, fixnum.Int64]),
    [_getField]: dart.fnType(protobuf.UnknownFieldSetField, [core.int]),
    [_toString]: dart.fnType(core.String, [core.String]),
    writeToCodedBufferWriter: dart.fnType(dart.void, [protobuf.CodedBufferWriter]),
    [_markReadOnly]: dart.fnType(dart.void, []),
    [_ensureWritable]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getGetters(protobuf.UnknownFieldSet.__proto__),
    isEmpty: core.bool,
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(protobuf.UnknownFieldSet, I[1]);
  dart.setFieldSignature(protobuf.UnknownFieldSet, () => ({
    __proto__: dart.getFields(protobuf.UnknownFieldSet.__proto__),
    [_fields]: dart.finalFieldType(core.Map$(core.int, protobuf.UnknownFieldSetField)),
    [_isReadOnly]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(protobuf.UnknownFieldSet, () => ['emptyUnknownFieldSet']);
  dart.defineExtensionMethods(protobuf.UnknownFieldSet, ['_equals', 'toString']);
  dart.defineExtensionAccessors(protobuf.UnknownFieldSet, ['hashCode']);
  dart.defineLazy(protobuf.UnknownFieldSet, {
    /*protobuf.UnknownFieldSet.emptyUnknownFieldSet*/get emptyUnknownFieldSet() {
      let t1;
      return t1 = new protobuf.UnknownFieldSet.new(), (() => {
        t1[_markReadOnly]();
        return t1;
      })();
    }
  }, false);
  var _lengthDelimited = dart.privateName(protobuf, "_lengthDelimited");
  var _varints = dart.privateName(protobuf, "_varints");
  var _fixed32s = dart.privateName(protobuf, "_fixed32s");
  var _fixed64s = dart.privateName(protobuf, "_fixed64s");
  var _groups = dart.privateName(protobuf, "_groups");
  protobuf.UnknownFieldSetField = class UnknownFieldSetField extends core.Object {
    get lengthDelimited() {
      return this[_lengthDelimited];
    }
    get varints() {
      return this[_varints];
    }
    get fixed32s() {
      return this[_fixed32s];
    }
    get fixed64s() {
      return this[_fixed64s];
    }
    get groups() {
      return this[_groups];
    }
    [_markReadOnly]() {
      if (this[_isReadOnly]) return;
      this[_isReadOnly] = true;
      this[_lengthDelimited] = T$.ListOfListOfint().unmodifiable(this[_lengthDelimited]);
      this[_varints] = T$.ListOfInt64().unmodifiable(this[_varints]);
      this[_fixed32s] = T$.ListOfint().unmodifiable(this[_fixed32s]);
      this[_fixed64s] = T$.ListOfInt64().unmodifiable(this[_fixed64s]);
      this[_groups] = T$.ListOfUnknownFieldSet().unmodifiable(this[_groups]);
    }
    _equals(other) {
      if (other == null) return false;
      if (!protobuf.UnknownFieldSetField.is(other)) return false;
      let o = other;
      if (this.lengthDelimited[$length] !== o.lengthDelimited[$length]) return false;
      for (let i = 0; i < this.lengthDelimited[$length]; i = i + 1) {
        if (!protobuf._areListsEqual(o.lengthDelimited[$_get](i), this.lengthDelimited[$_get](i))) {
          return false;
        }
      }
      if (!protobuf._areListsEqual(o.varints, this.varints)) return false;
      if (!protobuf._areListsEqual(o.fixed32s, this.fixed32s)) return false;
      if (!protobuf._areListsEqual(o.fixed64s, this.fixed64s)) return false;
      if (!protobuf._areListsEqual(o.groups, this.groups)) return false;
      return true;
    }
    get hashCode() {
      let hash = 0;
      for (let value of this.lengthDelimited) {
        for (let i = 0; i < value[$length]; i = i + 1) {
          hash = 536870911 & hash + value[$_get](i);
          hash = 536870911 & hash + ((524287 & hash) << 10);
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = 536870911 & hash + ((67108863 & hash) << 3);
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = 536870911 & hash + ((16383 & hash) << 15);
      }
      for (let value of this.varints) {
        hash = 536870911 & hash + 7 * value.hashCode;
      }
      for (let value of this.fixed32s) {
        hash = 536870911 & hash + 37 * value[$hashCode];
      }
      for (let value of this.fixed64s) {
        hash = 536870911 & hash + 53 * value.hashCode;
      }
      for (let value of this.groups) {
        hash = 536870911 & hash + value.hashCode;
      }
      return hash;
    }
    get values() {
      return (() => {
        let t1 = core.List.of(this.lengthDelimited);
        t1[$addAll](this.varints);
        t1[$addAll](this.fixed32s);
        t1[$addAll](this.fixed64s);
        t1[$addAll](this.groups);
        return t1;
      })();
    }
    writeTo(fieldNumber, output) {
      function write(type, value) {
        output.writeField(fieldNumber, core.int.as(type), value);
      }
      dart.fn(write, T$.dynamicAnddynamicTovoid());
      write(65538, this.varints);
      write(131074, this.fixed32s);
      write(262146, this.fixed64s);
      write(34, this.lengthDelimited);
      write(1026, this.groups);
    }
    addGroup(value) {
      this.groups[$add](value);
    }
    addLengthDelimited(value) {
      this.lengthDelimited[$add](value);
    }
    addFixed32(value) {
      this.fixed32s[$add](value);
    }
    addFixed64(value) {
      this.fixed64s[$add](value);
    }
    addVarint(value) {
      this.varints[$add](value);
    }
    hasRequiredFields() {
      return false;
    }
    isInitialized() {
      return true;
    }
    get length() {
      return this.values[$length];
    }
    static ['_#new#tearOff']() {
      return new protobuf.UnknownFieldSetField.new();
    }
  };
  (protobuf.UnknownFieldSetField.new = function() {
    this[_lengthDelimited] = T$.JSArrayOfListOfint().of([]);
    this[_varints] = T$.JSArrayOfInt64().of([]);
    this[_fixed32s] = T$.JSArrayOfint().of([]);
    this[_fixed64s] = T$.JSArrayOfInt64().of([]);
    this[_groups] = T$.JSArrayOfUnknownFieldSet().of([]);
    this[_isReadOnly] = false;
    ;
  }).prototype = protobuf.UnknownFieldSetField.prototype;
  dart.addTypeTests(protobuf.UnknownFieldSetField);
  dart.addTypeCaches(protobuf.UnknownFieldSetField);
  dart.setMethodSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getMethods(protobuf.UnknownFieldSetField.__proto__),
    [_markReadOnly]: dart.fnType(dart.void, []),
    writeTo: dart.fnType(dart.void, [core.int, protobuf.CodedBufferWriter]),
    addGroup: dart.fnType(dart.void, [protobuf.UnknownFieldSet]),
    addLengthDelimited: dart.fnType(dart.void, [core.List$(core.int)]),
    addFixed32: dart.fnType(dart.void, [core.int]),
    addFixed64: dart.fnType(dart.void, [fixnum.Int64]),
    addVarint: dart.fnType(dart.void, [fixnum.Int64]),
    hasRequiredFields: dart.fnType(core.bool, []),
    isInitialized: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getGetters(protobuf.UnknownFieldSetField.__proto__),
    lengthDelimited: core.List$(core.List$(core.int)),
    varints: core.List$(fixnum.Int64),
    fixed32s: core.List$(core.int),
    fixed64s: core.List$(fixnum.Int64),
    groups: core.List$(protobuf.UnknownFieldSet),
    values: core.List,
    length: core.int
  }));
  dart.setLibraryUri(protobuf.UnknownFieldSetField, I[1]);
  dart.setFieldSignature(protobuf.UnknownFieldSetField, () => ({
    __proto__: dart.getFields(protobuf.UnknownFieldSetField.__proto__),
    [_lengthDelimited]: dart.fieldType(core.List$(core.List$(core.int))),
    [_varints]: dart.fieldType(core.List$(fixnum.Int64)),
    [_fixed32s]: dart.fieldType(core.List$(core.int)),
    [_fixed64s]: dart.fieldType(core.List$(fixnum.Int64)),
    [_groups]: dart.fieldType(core.List$(protobuf.UnknownFieldSet)),
    [_isReadOnly]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(protobuf.UnknownFieldSetField, ['_equals']);
  dart.defineExtensionAccessors(protobuf.UnknownFieldSetField, ['hashCode']);
  protobuf._HashUtils = class _HashUtils extends core.Object {
    static _combine(hash, value) {
      hash = 536870911 & hash + value;
      hash = 536870911 & hash + ((524287 & hash) << 10);
      return (hash ^ hash[$rightShift](6)) >>> 0;
    }
    static _finish(hash) {
      hash = 536870911 & hash + ((67108863 & hash) << 3);
      hash = (hash ^ hash[$rightShift](11)) >>> 0;
      return 536870911 & hash + ((16383 & hash) << 15);
    }
    static _hashObjects(objects) {
      return protobuf._HashUtils._finish(objects[$fold](core.int, 0, dart.fn((h, i) => protobuf._HashUtils._combine(h, dart.hashCode(i)), T$.intAnddynamicToint())));
    }
    static _hash2(a, b) {
      return protobuf._HashUtils._finish(protobuf._HashUtils._combine(protobuf._HashUtils._combine(0, dart.hashCode(a)), dart.hashCode(b)));
    }
    static ['_#new#tearOff']() {
      return new protobuf._HashUtils.new();
    }
  };
  (protobuf._HashUtils.new = function() {
    ;
  }).prototype = protobuf._HashUtils.prototype;
  dart.addTypeTests(protobuf._HashUtils);
  dart.addTypeCaches(protobuf._HashUtils);
  dart.setStaticMethodSignature(protobuf._HashUtils, () => ['_combine', '_finish', '_hashObjects', '_hash2']);
  dart.setLibraryUri(protobuf._HashUtils, I[1]);
  protobuf.makeLongInt = function makeLongInt(n) {
    return fixnum.Int64.new(n);
  };
  protobuf.parseLongInt = function parseLongInt(text) {
    if (text[$startsWith]("0x")) return fixnum.Int64.parseHex(text[$substring](2));
    if (text[$startsWith]("+0x")) return fixnum.Int64.parseHex(text[$substring](3));
    if (text[$startsWith]("-0x")) return fixnum.Int64.parseHex(text[$substring](3))._negate();
    return fixnum.Int64.parseInt(text);
  };
  protobuf._writeToCodedBufferWriter = function _writeToCodedBufferWriter(fs, out) {
    for (let fi of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](dart.nullCheck(fi.index));
      if (value == null) continue;
      out.writeField(fi.tagNumber, fi.type, value);
    }
    if (fs[_hasExtensions]) {
      for (let tagNumber of protobuf._sorted(core.int, dart.nullCheck(fs[_extensions])[_tagNumbers])) {
        let fi = dart.nullCheck(dart.nullCheck(fs[_extensions])[_getInfoOrNull](tagNumber));
        out.writeField(tagNumber, fi.type, dart.nullCheck(fs[_extensions])[_getFieldOrNull](fi));
      }
    }
    if (fs[_hasUnknownFields]) {
      dart.nullCheck(fs[_unknownFields]).writeToCodedBufferWriter(out);
    }
  };
  protobuf._mergeFromCodedBufferReader = function _mergeFromCodedBufferReader(meta, fs, input, registry) {
    core.ArgumentError.checkNotNull(protobuf.ExtensionRegistry, registry);
    while (true) {
      let tag = input.readTag();
      if (tag === 0) return;
      let wireType = tag & 7;
      let tagNumber = tag[$rightShift](3);
      let fi = fs[_nonExtensionInfo](meta, tagNumber);
      fi == null ? fi = registry.getExtension(meta.qualifiedMessageName, tagNumber) : null;
      if (fi == null || !protobuf._wireTypeMatches(fi.type, wireType)) {
        if (!fs[_ensureUnknownFields]().mergeFieldFromBuffer(tag, input)) {
          return;
        }
        continue;
      }
      let fieldType = fi.type;
      fieldType = (fieldType & ~(4 | 1) >>> 0) >>> 0;
      switch (fieldType) {
        case 16:
        {
          fs[_setFieldUnchecked](meta, fi, input.readBool());
          break;
        }
        case 32:
        {
          fs[_setFieldUnchecked](meta, fi, input.readBytes());
          break;
        }
        case 64:
        {
          fs[_setFieldUnchecked](meta, fi, input.readString());
          break;
        }
        case 256:
        {
          fs[_setFieldUnchecked](meta, fi, input.readFloat());
          break;
        }
        case 128:
        {
          fs[_setFieldUnchecked](meta, fi, input.readDouble());
          break;
        }
        case 512:
        {
          let rawValue = input.readEnum();
          let value = meta[_decodeEnum](tagNumber, registry, rawValue);
          if (value == null) {
            let unknown = fs[_ensureUnknownFields]();
            unknown.mergeVarintField(tagNumber, fixnum.Int64.new(rawValue));
          } else {
            fs[_setFieldUnchecked](meta, fi, value);
          }
          break;
        }
        case 1024:
        {
          let subMessage = meta[_makeEmptyMessage](tagNumber, registry);
          let oldValue = fs[_getFieldOrNull](fi);
          if (oldValue != null) {
            subMessage.mergeFromMessage(protobuf.GeneratedMessage.as(oldValue));
          }
          input.readGroup(tagNumber, subMessage, registry);
          fs[_setFieldUnchecked](meta, fi, subMessage);
          break;
        }
        case 2048:
        {
          fs[_setFieldUnchecked](meta, fi, input.readInt32());
          break;
        }
        case 4096:
        {
          fs[_setFieldUnchecked](meta, fi, input.readInt64());
          break;
        }
        case 8192:
        {
          fs[_setFieldUnchecked](meta, fi, input.readSint32());
          break;
        }
        case 16384:
        {
          fs[_setFieldUnchecked](meta, fi, input.readSint64());
          break;
        }
        case 32768:
        {
          fs[_setFieldUnchecked](meta, fi, input.readUint32());
          break;
        }
        case 65536:
        {
          fs[_setFieldUnchecked](meta, fi, input.readUint64());
          break;
        }
        case 131072:
        {
          fs[_setFieldUnchecked](meta, fi, input.readFixed32());
          break;
        }
        case 262144:
        {
          fs[_setFieldUnchecked](meta, fi, input.readFixed64());
          break;
        }
        case 524288:
        {
          fs[_setFieldUnchecked](meta, fi, input.readSfixed32());
          break;
        }
        case 1048576:
        {
          fs[_setFieldUnchecked](meta, fi, input.readSfixed64());
          break;
        }
        case 2097152:
        {
          let subMessage = meta[_makeEmptyMessage](tagNumber, registry);
          let oldValue = fs[_getFieldOrNull](fi);
          if (oldValue != null) {
            subMessage.mergeFromMessage(protobuf.GeneratedMessage.as(oldValue));
          }
          input.readMessage(subMessage, registry);
          fs[_setFieldUnchecked](meta, fi, subMessage);
          break;
        }
        case 18:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readBool'));
          break;
        }
        case 34:
        {
          fs[_ensureRepeatedField](dart.dynamic, meta, fi)[$add](input.readBytes());
          break;
        }
        case 66:
        {
          fs[_ensureRepeatedField](dart.dynamic, meta, fi)[$add](input.readString());
          break;
        }
        case 258:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readFloat'));
          break;
        }
        case 130:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readDouble'));
          break;
        }
        case 514:
        {
          protobuf._readPackableToListEnum(meta, fs, input, wireType, fi, tagNumber, registry);
          break;
        }
        case 1026:
        {
          let subMessage = meta[_makeEmptyMessage](tagNumber, registry);
          input.readGroup(tagNumber, subMessage, registry);
          fs[_ensureRepeatedField](dart.dynamic, meta, fi)[$add](subMessage);
          break;
        }
        case 2050:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readInt32'));
          break;
        }
        case 4098:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readInt64'));
          break;
        }
        case 8194:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readSint32'));
          break;
        }
        case 16386:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readSint64'));
          break;
        }
        case 32770:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readUint32'));
          break;
        }
        case 65538:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readUint64'));
          break;
        }
        case 131074:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readFixed32'));
          break;
        }
        case 262146:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readFixed64'));
          break;
        }
        case 524290:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readSfixed32'));
          break;
        }
        case 1048578:
        {
          protobuf._readPackable(meta, fs, input, wireType, fi, dart.bind(input, 'readSfixed64'));
          break;
        }
        case 2097154:
        {
          let subMessage = meta[_makeEmptyMessage](tagNumber, registry);
          input.readMessage(subMessage, registry);
          fs[_ensureRepeatedField](dart.dynamic, meta, fi)[$add](subMessage);
          break;
        }
        case 6291456:
        {
          let mapFieldInfo = protobuf.MapFieldInfo.as(fi);
          let mapEntryMeta = mapFieldInfo.mapEntryBuilderInfo;
          fs[_ensureMapField](dart.dynamic, dart.dynamic, meta, mapFieldInfo)[_mergeEntry](mapEntryMeta, input, registry);
          break;
        }
        default:
        {
          dart.throw("Unknown field type " + dart.str(fieldType));
        }
      }
    }
  };
  protobuf._readPackable = function _readPackable(meta, fs, input, wireType, fi, readFunc) {
    function readToList(list) {
      return list[$add](dart.dcall(readFunc, []));
    }
    dart.fn(readToList, T$.ListTovoid());
    protobuf._readPackableToList(meta, fs, input, wireType, fi, readToList);
  };
  protobuf._readPackableToListEnum = function _readPackableToListEnum(meta, fs, input, wireType, fi, tagNumber, registry) {
    function readToList(list) {
      let rawValue = input.readEnum();
      let value = meta[_decodeEnum](tagNumber, registry, rawValue);
      if (value == null) {
        let unknown = fs[_ensureUnknownFields]();
        unknown.mergeVarintField(tagNumber, fixnum.Int64.new(rawValue));
      } else {
        list[$add](value);
      }
    }
    dart.fn(readToList, T$.ListTovoid());
    protobuf._readPackableToList(meta, fs, input, wireType, fi, readToList);
  };
  protobuf._readPackableToList = function _readPackableToList(meta, fs, input, wireType, fi, readToList) {
    let list = fs[_ensureRepeatedField](dart.dynamic, meta, fi);
    if (wireType === 2) {
      input[_withLimit](input.readInt32(), dart.fn(() => {
        while (!input.isAtEnd()) {
          dart.dcall(readToList, [list]);
        }
      }, T$.VoidToNull()));
    } else {
      dart.dcall(readToList, [list]);
    }
  };
  protobuf._encodeZigZag32 = function _encodeZigZag32(value) {
    return (value << 1 ^ value[$rightShift](31)) >>> 0;
  };
  protobuf._encodeZigZag64 = function _encodeZigZag64(value) {
    return value['<<'](1)['^'](value['>>'](63));
  };
  protobuf._reparseMessage = function _reparseMessage(T, message, extensionRegistry) {
    let t2, t2$;
    let result = null;
    function ensureResult() {
      if (result == null) {
        result == null ? result = T.as(dart.nullCheck(message.info_.createEmptyInstance)()) : null;
        dart.nullCheck(result)[_fieldSet][_shallowCopyValues](message[_fieldSet]);
      }
      return dart.nullCheck(result);
    }
    dart.fn(ensureResult, dart.fnType(T, []));
    let resultUnknownFields = null;
    function ensureUnknownFields() {
      let t2;
      t2 = resultUnknownFields;
      return t2 == null ? resultUnknownFields = dart.nullCheck(ensureResult()[_fieldSet][_unknownFields]) : t2;
    }
    dart.fn(ensureUnknownFields, T$.VoidToUnknownFieldSet());
    let messageUnknownFields = message[_fieldSet][_unknownFields];
    if (messageUnknownFields != null) {
      let codedBufferWriter = new protobuf.CodedBufferWriter.new();
      t2 = extensionRegistry[_extensions][$_get](message.info_.qualifiedMessageName);
      t2 == null ? null : t2[$forEach](dart.fn((tagNumber, extension) => {
        let unknownField = messageUnknownFields[_fields][$_get](tagNumber);
        if (unknownField != null) {
          unknownField.writeTo(tagNumber, codedBufferWriter);
          ensureUnknownFields()[_fields][$remove](tagNumber);
        }
      }, T$.intAndExtensionTovoid()));
      if (codedBufferWriter.toBuffer()[$isNotEmpty]) {
        ensureResult().mergeFromBuffer(codedBufferWriter.toBuffer(), extensionRegistry);
      }
    }
    for (let field of message[_fieldSet][_meta].byIndex) {
      let resultEntries = null;
      function ensureEntries() {
        let t2;
        return protobuf.PbList.as((t2 = resultEntries, t2 == null ? resultEntries = T$.PbListN().as(ensureResult()[_fieldSet][_values][$_get](dart.nullCheck(field.index))) : t2));
      }
      dart.fn(ensureEntries, T$.VoidToPbList());
      let resultMap = null;
      function ensureMap() {
        let t2;
        return protobuf.PbMap.as((t2 = resultMap, t2 == null ? resultMap = T$.PbMapN().as(ensureResult()[_fieldSet][_values][$_get](dart.nullCheck(field.index))) : t2));
      }
      dart.fn(ensureMap, T$.VoidToPbMap());
      if (field.isRepeated) {
        let messageEntries = message[_fieldSet][_values][$_get](dart.nullCheck(field.index));
        if (messageEntries == null) continue;
        if (field.isGroupOrMessage) {
          for (let i = 0; i < core.num.as(dart.dload(messageEntries, 'length')); i = i + 1) {
            let entry = protobuf.GeneratedMessage.as(dart.dsend(messageEntries, '_get', [i]));
            let reparsedEntry = protobuf._reparseMessage(protobuf.GeneratedMessage, entry, extensionRegistry);
            if (entry !== reparsedEntry) {
              ensureEntries()._set(i, reparsedEntry);
            }
          }
        }
      } else if (protobuf.MapFieldInfo.is(field)) {
        let messageMap = message[_fieldSet][_values][$_get](dart.nullCheck(field.index));
        if (messageMap == null) continue;
        if (protobuf._isGroupOrMessage(dart.nullCheck(field.valueFieldType))) {
          for (let key of core.Iterable.as(dart.dload(messageMap, 'keys'))) {
            let value = protobuf.GeneratedMessage.as(dart.dsend(messageMap, '_get', [key]));
            let reparsedValue = protobuf._reparseMessage(protobuf.GeneratedMessage, value, extensionRegistry);
            if (value !== reparsedValue) {
              ensureMap()._set(key, reparsedValue);
            }
          }
        }
      } else if (field.isGroupOrMessage) {
        let messageSubField = message[_fieldSet][_values][$_get](dart.nullCheck(field.index));
        if (messageSubField == null) continue;
        let reparsedSubField = protobuf._reparseMessage(protobuf.GeneratedMessage, protobuf.GeneratedMessage.as(messageSubField), extensionRegistry);
        if (messageSubField !== reparsedSubField) {
          ensureResult()[_fieldSet][_values][$_set](dart.nullCheck(field.index), reparsedSubField);
        }
      }
    }
    if (result != null && message.isFrozen) {
      dart.nullCheck(result).freeze();
    }
    t2$ = result;
    return t2$ == null ? message : t2$;
  };
  protobuf._getFieldError = function _getFieldError(fieldType, value) {
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case 16:
      {
        if (!(typeof value == 'boolean')) return "not type bool";
        return null;
      }
      case 32:
      {
        if (!core.List.is(value)) return "not List";
        return null;
      }
      case 64:
      {
        if (!(typeof value == 'string')) return "not type String";
        return null;
      }
      case 256:
      {
        if (!(typeof value == 'number')) return "not type double";
        if (!protobuf._isFloat32(value)) return "out of range for float";
        return null;
      }
      case 128:
      {
        if (!(typeof value == 'number')) return "not type double";
        return null;
      }
      case 512:
      {
        if (!protobuf.ProtobufEnum.is(value)) return "not type ProtobufEnum";
        return null;
      }
      case 2048:
      case 8192:
      case 524288:
      {
        if (!core.int.is(value)) return "not type int";
        if (!protobuf._isSigned32(value)) return "out of range for signed 32-bit int";
        return null;
      }
      case 32768:
      case 131072:
      {
        if (!core.int.is(value)) return "not type int";
        if (!protobuf._isUnsigned32(value)) return "out of range for unsigned 32-bit int";
        return null;
      }
      case 4096:
      case 16384:
      case 65536:
      case 262144:
      case 1048576:
      {
        if (!fixnum.Int64.is(value)) return "not Int64";
        return null;
      }
      case 1024:
      case 2097152:
      {
        if (!protobuf.GeneratedMessage.is(value)) return "not a GeneratedMessage";
        return null;
      }
      default:
      {
        return "field has unknown type " + dart.str(fieldType);
      }
    }
  };
  protobuf.checkItemFailed = function checkItemFailed(val, className) {
    dart.throw(new core.ArgumentError.new("Value (" + dart.str(val) + ") is not an instance of " + className));
  };
  protobuf.getCheckFunction = function getCheckFunction(fieldType) {
    switch ((fieldType & ~7 >>> 0) >>> 0) {
      case 16:
      case 32:
      case 64:
      case 128:
      case 512:
      case 1024:
      case 2097152:
      case 4096:
      case 16384:
      case 1048576:
      case 65536:
      case 262144:
      {
        return C[1] || CT.C1;
      }
      case 256:
      {
        return C[14] || CT.C14;
      }
      case 2048:
      case 8192:
      case 524288:
      {
        return C[15] || CT.C15;
      }
      case 32768:
      case 131072:
      {
        return C[16] || CT.C16;
      }
    }
    dart.throw(new core.ArgumentError.new("check function not implemented: " + dart.str(fieldType)));
  };
  protobuf._checkNotNull = function _checkNotNull$(val) {
    if (val == null) {
      dart.throw(new core.ArgumentError.new("Can't add a null to a repeated field"));
    }
  };
  protobuf._checkFloat = function _checkFloat(val) {
    if (!protobuf._isFloat32(core.double.as(val))) dart.throw(protobuf._createFieldRangeError(val, "a float"));
  };
  protobuf._checkSigned32 = function _checkSigned32(val) {
    if (!protobuf._isSigned32(core.int.as(val))) {
      dart.throw(protobuf._createFieldRangeError(val, "a signed int32"));
    }
  };
  protobuf._checkUnsigned32 = function _checkUnsigned32(val) {
    if (!protobuf._isUnsigned32(core.int.as(val))) {
      dart.throw(protobuf._createFieldRangeError(val, "an unsigned int32"));
    }
  };
  protobuf._createFieldRangeError = function _createFieldRangeError(val, wantedType) {
    return new core.RangeError.new("Value (" + dart.str(val) + ") is not " + wantedType);
  };
  protobuf._isSigned32 = function _isSigned32(value) {
    return -2147483648 <= value && value <= 2147483647;
  };
  protobuf._isUnsigned32 = function _isUnsigned32(value) {
    return 0 <= value && value <= 4294967295;
  };
  protobuf._isFloat32 = function _isFloat32(value) {
    return value[$isNaN] || value[$isInfinite] || -3.4028234663852886e+38 <= value && value <= 3.4028234663852886e+38;
  };
  protobuf._unCamelCase = function _unCamelCase(name) {
    return name[$replaceAllMapped](protobuf._upperCase, dart.fn(match => "_" + dart.nullCheck(match.group(0))[$toLowerCase](), T$.MatchToString()));
  };
  protobuf.defaultFrozenMessageModificationHandler = function defaultFrozenMessageModificationHandler(messageName, methodName = null) {
    if (methodName != null) {
      dart.throw(new core.UnsupportedError.new("Attempted to call " + dart.str(methodName) + " on a read-only message (" + messageName + ")"));
    }
    dart.throw(new core.UnsupportedError.new("Attempted to change a read-only message (" + messageName + ")"));
  };
  protobuf._isRepeated = function _isRepeated(fieldType) {
    return (fieldType & 2) !== 0;
  };
  protobuf._isRequired = function _isRequired(fieldType) {
    return (fieldType & 1) !== 0;
  };
  protobuf._isEnum = function _isEnum(fieldType) {
    return protobuf.PbFieldType._baseType(fieldType) === 512;
  };
  protobuf._isBytes = function _isBytes(fieldType) {
    return protobuf.PbFieldType._baseType(fieldType) === 32;
  };
  protobuf._isGroupOrMessage = function _isGroupOrMessage(fieldType) {
    return (fieldType & (1024 | 2097152) >>> 0) !== 0;
  };
  protobuf._isMapField = function _isMapField(fieldType) {
    return (fieldType & 4194304) !== 0;
  };
  protobuf['GeneratedMessageGenericExtensions|rebuild'] = function GeneratedMessageGenericExtensions$124rebuild(T, $this, updates) {
    let t3;
    if (!$this.isFrozen) {
      dart.throw(new core.ArgumentError.new("Rebuilding only works on frozen messages."));
    }
    let t = $this.toBuilder();
    updates(T.as(t));
    t3 = t;
    return (() => {
      t3.freeze();
      return t3;
    })();
  };
  protobuf['GeneratedMessageGenericExtensions|get#rebuild'] = function GeneratedMessageGenericExtensions$124get$35rebuild(T, $this) {
    return dart.fn(updates => protobuf['GeneratedMessageGenericExtensions|rebuild'](T, $this, updates), dart.fnType(T, [dart.fnType(dart.void, [T])]));
  };
  protobuf['GeneratedMessageGenericExtensions|deepCopy'] = function GeneratedMessageGenericExtensions$124deepCopy(T, $this) {
    let t5;
    t5 = T.as(dart.nullCheck($this.info_.createEmptyInstance)());
    return (() => {
      t5.mergeFromMessage($this);
      return t5;
    })();
  };
  protobuf['GeneratedMessageGenericExtensions|get#deepCopy'] = function GeneratedMessageGenericExtensions$124get$35deepCopy(T, $this) {
    return dart.fn(() => protobuf['GeneratedMessageGenericExtensions|deepCopy'](T, $this), dart.fnType(T, []));
  };
  protobuf._writeToJsonMap = function _writeToJsonMap(fs) {
    function convertToMap(fieldValue, fieldType) {
      let baseType = protobuf.PbFieldType._baseType(fieldType);
      if (protobuf._isRepeated(fieldType)) {
        return core.List.from(core.Iterable.as(dart.dsend(fieldValue, 'map', [dart.fn(e => convertToMap(e, baseType), T$.dynamicTodynamic())])));
      }
      switch (baseType) {
        case 16:
        case 64:
        case 256:
        case 128:
        case 2048:
        case 8192:
        case 32768:
        case 131072:
        case 524288:
        {
          return fieldValue;
        }
        case 32:
        {
          return convert.base64Encode(T$.ListOfint().as(fieldValue));
        }
        case 512:
        {
          return dart.dload(fieldValue, 'value');
        }
        case 4096:
        case 16384:
        case 1048576:
        {
          return dart.toString(fieldValue);
        }
        case 65536:
        case 262144:
        {
          return dart.dsend(fieldValue, 'toStringUnsigned', []);
        }
        case 1024:
        case 2097152:
        {
          return dart.dsend(fieldValue, 'writeToJsonMap', []);
        }
        default:
        {
          dart.throw("Unknown type " + dart.str(fieldType));
        }
      }
    }
    dart.fn(convertToMap, T$.dynamicAndintTodynamic());
    function _writeMap(fieldValue, fi) {
      return core.List.from(core.Iterable.as(dart.dsend(dart.dload(fieldValue, 'entries'), 'map', [dart.fn(e => new (T$.IdentityMapOfString$dynamic()).from([dart.str(1), convertToMap(e.key, dart.nullCheck(fi.keyFieldType)), dart.str(2), convertToMap(e.value, dart.nullCheck(fi.valueFieldType))]), T$.MapEntryToMapOfString$dynamic())])));
    }
    dart.fn(_writeMap, T$.dynamicAndMapFieldInfoToList());
    let result = new (T$.IdentityMapOfString$dynamic()).new();
    for (let fi of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](dart.nullCheck(fi.index));
      if (value == null || core.List.is(value) && value[$isEmpty]) {
        continue;
      }
      if (protobuf._isMapField(fi.type)) {
        result[$_set](dart.str(fi.tagNumber), _writeMap(value, protobuf.MapFieldInfo.as(fi)));
        continue;
      }
      result[$_set](dart.str(fi.tagNumber), convertToMap(value, fi.type));
    }
    if (fs[_hasExtensions]) {
      for (let tagNumber of protobuf._sorted(core.int, dart.nullCheck(fs[_extensions])[_tagNumbers])) {
        let value = dart.nullCheck(fs[_extensions])[_values][$_get](tagNumber);
        if (core.List.is(value) && value[$isEmpty]) {
          continue;
        }
        let fi = dart.nullCheck(dart.nullCheck(fs[_extensions])[_getInfoOrNull](tagNumber));
        result[$_set](dart.str(tagNumber), convertToMap(value, fi.type));
      }
    }
    return result;
  };
  protobuf._mergeFromJsonMap = function _mergeFromJsonMap(fs, json, registry) {
    let keys = json[$keys];
    let meta = fs[_meta];
    for (let key of keys) {
      let fi = meta.byTagAsString[$_get](key);
      if (fi == null) {
        if (registry == null) continue;
        fi = registry.getExtension(fs[_messageName], core.int.parse(key));
        if (fi == null) continue;
      }
      if (fi.isMapField) {
        protobuf._appendJsonMap(meta, fs, core.List.as(json[$_get](key)), protobuf.MapFieldInfo.as(fi), registry);
      } else if (fi.isRepeated) {
        protobuf._appendJsonList(meta, fs, core.List.as(json[$_get](key)), fi, registry);
      } else {
        protobuf._setJsonField(meta, fs, json[$_get](key), fi, registry);
      }
    }
  };
  protobuf._appendJsonList = function _appendJsonList(meta, fs, jsonList, fi, registry) {
    let repeated = fi[_ensureRepeatedField](meta, fs);
    for (let i = 0, len = jsonList[$length]; i < len; i = i + 1) {
      let value = jsonList[$_get](i);
      let convertedValue = protobuf._convertJsonValue(meta, fs, value, fi.tagNumber, fi.type, registry);
      convertedValue == null ? convertedValue = fi.defaultEnumValue : null;
      repeated[$add](convertedValue);
    }
  };
  protobuf._appendJsonMap = function _appendJsonMap(meta, fs, jsonList, fi, registry) {
    let entryMeta = fi.mapEntryBuilderInfo;
    let map = protobuf.PbMap.as(fi[_ensureMapField](meta, fs));
    for (let jsonEntryDynamic of jsonList) {
      let jsonEntry = T$.MapOfString$dynamic().as(jsonEntryDynamic);
      let entryFieldSet = new protobuf._FieldSet.new(null, entryMeta, null);
      let convertedKey = protobuf._convertJsonValue(entryMeta, entryFieldSet, jsonEntry[$_get](dart.str(1)), 1, dart.nullCheck(fi.keyFieldType), registry);
      let convertedValue = protobuf._convertJsonValue(entryMeta, entryFieldSet, jsonEntry[$_get](dart.str(2)), 2, dart.nullCheck(fi.valueFieldType), registry);
      convertedValue == null ? convertedValue = fi.defaultEnumValue : null;
      map._set(convertedKey, convertedValue);
    }
  };
  protobuf._setJsonField = function _setJsonField(meta, fs, json, fi, registry) {
    let value = protobuf._convertJsonValue(meta, fs, json, fi.tagNumber, fi.type, registry);
    if (value == null) return;
    if (!dart.fn(() => {
      fs[_validateField](fi, value);
      return true;
    }, T$.VoidTobool())()) dart.assertFailed(null, I[7], 159, 10, "() {\n    fs._validateField(fi, value);\n    return true;\n  }()");
    fs[_setFieldUnchecked](meta, fi, value);
  };
  protobuf._convertJsonValue = function _convertJsonValue(meta, fs, value, tagNumber, fieldType, registry) {
    let expectedType = null;
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case 16:
      {
        if (typeof value == 'boolean') {
          return value;
        } else if (typeof value == 'string') {
          if (value === "true") {
            return true;
          } else if (value === "false") {
            return false;
          }
        } else if (typeof value == 'number') {
          if (value === 1) {
            return true;
          } else if (value === 0) {
            return false;
          }
        }
        expectedType = "bool (true, false, \"true\", \"false\", 1, 0)";
        break;
      }
      case 32:
      {
        if (typeof value == 'string') {
          return convert.base64Decode(value);
        }
        expectedType = "Base64 String";
        break;
      }
      case 64:
      {
        if (typeof value == 'string') {
          return value;
        }
        expectedType = "String";
        break;
      }
      case 256:
      case 128:
      {
        if (typeof value == 'number') {
          return value;
        } else if (typeof value == 'number') {
          return value[$toDouble]();
        } else if (typeof value == 'string') {
          return core.double.parse(value);
        }
        expectedType = "num or stringified num";
        break;
      }
      case 512:
      {
        if (typeof value == 'string') {
          value = core.int.parse(value);
        }
        if (core.int.is(value)) {
          return meta[_decodeEnum](tagNumber, registry, value);
        }
        expectedType = "int or stringified int";
        break;
      }
      case 2048:
      case 8192:
      case 32768:
      case 524288:
      {
        if (core.int.is(value)) return value;
        if (typeof value == 'string') return core.int.parse(value);
        expectedType = "int or stringified int";
        break;
      }
      case 131072:
      {
        let validatedValue = null;
        if (core.int.is(value)) validatedValue = value;
        if (typeof value == 'string') validatedValue = core.int.parse(value);
        if (validatedValue != null && dart.notNull(validatedValue) < 0) {
          validatedValue = dart.notNull(validatedValue) + 2 * (1 << 31 >>> 0);
        }
        if (validatedValue != null) return validatedValue;
        expectedType = "int or stringified int";
        break;
      }
      case 4096:
      case 16384:
      case 65536:
      case 262144:
      case 1048576:
      {
        if (core.int.is(value)) return fixnum.Int64.new(value);
        if (typeof value == 'string') return fixnum.Int64.parseInt(value);
        expectedType = "int or stringified int";
        break;
      }
      case 1024:
      case 2097152:
      {
        if (core.Map.is(value)) {
          let messageValue = T$.MapOfString$dynamic().as(value);
          let subMessage = meta[_makeEmptyMessage](tagNumber, registry);
          protobuf._mergeFromJsonMap(subMessage[_fieldSet], messageValue, registry);
          return subMessage;
        }
        expectedType = "nested message or group";
        break;
      }
      default:
      {
        dart.throw(new core.ArgumentError.new("Unknown type " + dart.str(fieldType)));
      }
    }
    dart.throw(new core.ArgumentError.new("Expected type " + expectedType + ", got " + dart.str(value)));
  };
  protobuf._writeToProto3Json = function _writeToProto3Json(fs, typeRegistry) {
    function convertToMapKey(key, keyType) {
      let baseType = protobuf.PbFieldType._baseType(keyType);
      if (!!protobuf._isRepeated(keyType)) dart.assertFailed(null, I[8], 11, 12, "!_isRepeated(keyType)");
      switch (baseType) {
        case 16:
        {
          return dart.dtest(key) ? "true" : "false";
        }
        case 64:
        {
          return T$.StringN().as(key);
        }
        case 65536:
        {
          return fixnum.Int64.as(key).toStringUnsigned();
        }
        case 2048:
        case 8192:
        case 32768:
        case 131072:
        case 524288:
        case 4096:
        case 16384:
        case 1048576:
        case 262144:
        {
          return dart.toString(key);
        }
        default:
        {
          dart.throw(new core.StateError.new("Not a valid key type " + dart.str(keyType)));
        }
      }
    }
    dart.fn(convertToMapKey, T$.dynamicAndintToStringN());
    function valueToProto3Json(fieldValue, fieldType) {
      if (fieldValue == null) return null;
      if (protobuf._isGroupOrMessage(dart.nullCheck(fieldType))) {
        return protobuf._writeToProto3Json(protobuf.GeneratedMessage.as(fieldValue)[_fieldSet], typeRegistry);
      } else if (protobuf._isEnum(fieldType)) {
        return protobuf.ProtobufEnum.as(fieldValue).name;
      } else {
        let baseType = protobuf.PbFieldType._baseType(fieldType);
        switch (baseType) {
          case 16:
          {
            return dart.dtest(fieldValue) ? true : false;
          }
          case 64:
          {
            return fieldValue;
          }
          case 2048:
          case 8192:
          case 32768:
          case 131072:
          case 524288:
          {
            return fieldValue;
          }
          case 4096:
          case 16384:
          case 1048576:
          case 262144:
          {
            return dart.toString(fieldValue);
          }
          case 256:
          case 128:
          {
            let value = core.double.as(fieldValue);
            if (value[$isNaN]) return "NaN";
            if (value[$isInfinite]) {
              if (value[$isNegative]) {
                return "-Infinity";
              } else {
                return "Infinity";
              }
            }
            return value;
          }
          case 65536:
          {
            return fixnum.Int64.as(fieldValue).toStringUnsigned();
          }
          case 32:
          {
            return convert.base64Encode(T$.ListOfint().as(fieldValue));
          }
          default:
          {
            dart.throw(new core.StateError.new("Invariant violation: unexpected value type " + dart.str(fieldType)));
          }
        }
      }
    }
    dart.fn(valueToProto3Json, T$.dynamicAndintNToObjectN());
    let meta = fs[_meta];
    if (meta.toProto3Json != null) {
      return dart.nullCheck(meta.toProto3Json)(dart.nullCheck(fs[_message$]), typeRegistry);
    }
    let result = new (T$.IdentityMapOfString$dynamic()).new();
    for (let fieldInfo of fs[_infosSortedByTag]) {
      let value = fs[_values][$_get](dart.nullCheck(fieldInfo.index));
      if (value == null || core.List.is(value) && value[$isEmpty]) {
        continue;
      }
      let jsonValue = null;
      if (fieldInfo.isMapField) {
        jsonValue = protobuf.PbMap.as(value)[$map](T$.StringN(), T$.ObjectN(), dart.fn((key, entryValue) => {
          let mapEntryInfo = protobuf.MapFieldInfo.as(fieldInfo);
          return new (T$.MapEntryOfStringN$ObjectN()).__(convertToMapKey(key, dart.nullCheck(mapEntryInfo.keyFieldType)), valueToProto3Json(entryValue, mapEntryInfo.valueFieldType));
        }, T$.dynamicAnddynamicToMapEntryOfStringN$ObjectN()));
      } else if (fieldInfo.isRepeated) {
        jsonValue = protobuf.PbListBase.as(value).map(T$.ObjectN(), dart.fn(element => valueToProto3Json(element, fieldInfo.type), T$.dynamicToObjectN()))[$toList]();
      } else {
        jsonValue = valueToProto3Json(value, fieldInfo.type);
      }
      result[$_set](fieldInfo.name, jsonValue);
    }
    return result;
  };
  protobuf['_FindFirst|findFirst'] = function _FindFirst$124findFirst(E, $this, test) {
    for (let element of $this) {
      if (test(element)) return element;
    }
    return null;
  };
  protobuf['_FindFirst|get#findFirst'] = function _FindFirst$124get$35findFirst(E, $this) {
    return dart.fn(test => protobuf['_FindFirst|findFirst'](E, $this, test), dart.fnType(dart.nullable(E), [dart.fnType(core.bool, [E])]));
  };
  protobuf._mergeFromProto3Json = function _mergeFromProto3Json(json, fieldSet, typeRegistry, ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums) {
    let context = new json_parsing_context.JsonParsingContext.new(ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums);
    function recursionHelper(json, fieldSet) {
      function tryParse32Bit(s) {
        let t8;
        t8 = core.int.tryParse(s);
        return t8 == null ? dart.throw(context.parseException("expected integer", s)) : t8;
      }
      dart.fn(tryParse32Bit, T$.StringToint());
      function check32BitSigned(n) {
        if (n < -2147483648 || n > 2147483647) {
          dart.throw(context.parseException("expected 32 bit unsigned integer", n));
        }
        return n;
      }
      dart.fn(check32BitSigned, T$.intToint());
      function check32BitUnsigned(n) {
        if (n < 0 || n > 4294967295) {
          dart.throw(context.parseException("expected 32 bit unsigned integer", n));
        }
        return n;
      }
      dart.fn(check32BitUnsigned, T$.intToint());
      function tryParse64Bit(s) {
        let result = null;
        try {
          result = fixnum.Int64.parseInt(s);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.FormatException.is(ex)) {
            dart.throw(context.parseException("expected integer", json));
          } else
            throw e;
        }
        return result;
      }
      dart.fn(tryParse64Bit, T$.StringToInt64());
      function convertProto3JsonValue(value, fieldInfo) {
        let t12, t12$;
        if (value == null) {
          return dart.nullCheck(fieldInfo.makeDefault)();
        }
        let fieldType = fieldInfo.type;
        switch (protobuf.PbFieldType._baseType(fieldType)) {
          case 16:
          {
            if (typeof value == 'boolean') {
              return value;
            }
            dart.throw(context.parseException("Expected bool value", json));
          }
          case 32:
          {
            if (typeof value == 'string') {
              let result = null;
              try {
                result = convert.base64Decode(value);
              } catch (e) {
                let ex = dart.getThrown(e);
                if (core.FormatException.is(ex)) {
                  dart.throw(context.parseException("Expected bytes encoded as base64 String", json));
                } else
                  throw e;
              }
              return result;
            }
            dart.throw(context.parseException("Expected bytes encoded as base64 String", value));
          }
          case 64:
          {
            if (typeof value == 'string') {
              return value;
            }
            dart.throw(context.parseException("Expected String value", value));
          }
          case 256:
          case 128:
          {
            if (typeof value == 'number') {
              return value;
            } else if (typeof value == 'number') {
              return value[$toDouble]();
            } else if (typeof value == 'string') {
              t12 = core.double.tryParse(value);
              return t12 == null ? dart.throw(context.parseException("Expected String to encode a double", value)) : t12;
            }
            dart.throw(context.parseException("Expected a double represented as a String or number", value));
          }
          case 512:
          {
            if (typeof value == 'string') {
              let result = permissiveEnums ? protobuf['_FindFirst|findFirst'](protobuf.ProtobufEnum, dart.nullCheck(fieldInfo.enumValues), dart.fn(e => permissive_compare.permissiveCompare(e.name, value), T$.ProtobufEnumTobool())) : protobuf['_FindFirst|findFirst'](protobuf.ProtobufEnum, dart.nullCheck(fieldInfo.enumValues), dart.fn(e => e.name === value, T$.ProtobufEnumTobool()));
              if (result != null || ignoreUnknownFields) return result;
              dart.throw(context.parseException("Unknown enum value", value));
            } else if (core.int.is(value)) {
              t12$ = dart.nullCheck(fieldInfo.valueOf)(value);
              return t12$ == null ? ignoreUnknownFields ? null : dart.throw(context.parseException("Unknown enum value", value)) : t12$;
            }
            dart.throw(context.parseException("Expected enum as a string or integer", value));
          }
          case 32768:
          {
            let result = null;
            if (core.int.is(value)) {
              result = value;
            } else if (typeof value == 'string') {
              result = tryParse32Bit(value);
            } else {
              dart.throw(context.parseException("Expected int or stringified int", value));
            }
            return check32BitUnsigned(result);
          }
          case 2048:
          case 8192:
          case 131072:
          case 524288:
          {
            let result = null;
            if (core.int.is(value)) {
              result = value;
            } else if (typeof value == 'string') {
              result = tryParse32Bit(value);
            } else {
              dart.throw(context.parseException("Expected int or stringified int", value));
            }
            check32BitSigned(result);
            return result;
          }
          case 65536:
          {
            let result = null;
            if (core.int.is(value)) {
              result = fixnum.Int64.new(value);
            } else if (typeof value == 'string') {
              result = tryParse64Bit(value);
            } else {
              dart.throw(context.parseException("Expected int or stringified int", value));
            }
            return result;
          }
          case 4096:
          case 16384:
          case 262144:
          case 1048576:
          {
            if (core.int.is(value)) return fixnum.Int64.new(value);
            if (typeof value == 'string') {
              let result = null;
              try {
                result = fixnum.Int64.parseInt(value);
              } catch (e$) {
                let ex$ = dart.getThrown(e$);
                if (core.FormatException.is(ex$)) {
                  dart.throw(context.parseException("Expected int or stringified int", value));
                } else
                  throw e$;
              }
              return result;
            }
            dart.throw(context.parseException("Expected int or stringified int", value));
          }
          case 1024:
          case 2097152:
          {
            let subMessage = dart.nullCheck(fieldInfo.subBuilder)();
            recursionHelper(value, subMessage[_fieldSet]);
            return subMessage;
          }
          default:
          {
            dart.throw(new core.StateError.new("Unknown type " + dart.str(fieldType)));
          }
        }
      }
      dart.fn(convertProto3JsonValue, T$.ObjectNAndFieldInfoToObjectN());
      function decodeMapKey(key, fieldType) {
        switch (protobuf.PbFieldType._baseType(fieldType)) {
          case 16:
          {
            switch (key) {
              case "true":
              {
                return true;
              }
              case "false":
              {
                return false;
              }
              default:
              {
                dart.throw(context.parseException("Wrong boolean key, should be one of (\"true\", \"false\")", key));
              }
            }
            dart.throw(new core.StateError.new("(Should have been) unreachable statement"));
          }
          case 64:
          {
            return key;
          }
          case 65536:
          {
            return tryParse64Bit(key);
          }
          case 4096:
          case 16384:
          case 1048576:
          case 262144:
          {
            return tryParse64Bit(key);
          }
          case 2048:
          case 8192:
          case 131072:
          case 524288:
          {
            return check32BitSigned(tryParse32Bit(key));
          }
          case 32768:
          {
            return check32BitUnsigned(tryParse32Bit(key));
          }
          default:
          {
            dart.throw(new core.StateError.new("Not a valid key type " + dart.str(fieldType)));
          }
        }
      }
      dart.fn(decodeMapKey, T$.StringAndintToObject());
      if (json == null) {
        return;
      }
      let meta = fieldSet[_meta];
      let wellKnownConverter = meta.fromProto3Json;
      if (wellKnownConverter != null) {
        wellKnownConverter(dart.nullCheck(fieldSet[_message$]), json, typeRegistry, context);
      } else {
        if (core.Map.is(json)) {
          let byName = meta.byName;
          json[$forEach](dart.fn((key, value) => {
            if (!(typeof key == 'string')) {
              dart.throw(context.parseException("Key was not a String", key));
            }
            context.addMapIndex(key);
            let fieldInfo = byName[$_get](key);
            if (fieldInfo == null && supportNamesWithUnderscores) {
              fieldInfo = protobuf['_FindFirst|findFirst'](protobuf.FieldInfo, byName[$values], dart.fn(info => info.protoName === key, T$.FieldInfoTobool()));
            }
            if (fieldInfo == null) {
              if (ignoreUnknownFields) {
                return;
              } else {
                dart.throw(context.parseException("Unknown field name '" + dart.str(key) + "'", key));
              }
            }
            if (protobuf._isMapField(fieldInfo.type)) {
              if (core.Map.is(value)) {
                let mapFieldInfo = protobuf.MapFieldInfo.as(fieldInfo);
                let fieldValues = fieldSet[_ensureMapField](dart.dynamic, dart.dynamic, meta, fieldInfo);
                value[$forEach](dart.fn((subKey, subValue) => {
                  if (!(typeof subKey == 'string')) {
                    dart.throw(context.parseException("Expected a String key", subKey));
                  }
                  context.addMapIndex(subKey);
                  fieldValues[$_set](decodeMapKey(subKey, dart.nullCheck(mapFieldInfo.keyFieldType)), convertProto3JsonValue(subValue, mapFieldInfo.valueFieldInfo));
                  context.popIndex();
                }, T$.dynamicAnddynamicTovoid()));
              } else {
                dart.throw(context.parseException("Expected a map", value));
              }
            } else if (protobuf._isRepeated(fieldInfo.type)) {
              if (value == null) {
                fieldSet[_ensureRepeatedField](dart.dynamic, meta, fieldInfo);
              } else if (core.List.is(value)) {
                let values = fieldSet[_ensureRepeatedField](dart.dynamic, meta, fieldInfo);
                for (let i = 0; i < value[$length]; i = i + 1) {
                  let entry = value[$_get](i);
                  context.addListIndex(i);
                  values[$add](convertProto3JsonValue(entry, fieldInfo));
                  context.popIndex();
                }
              } else {
                dart.throw(context.parseException("Expected a list", value));
              }
            } else if (protobuf._isGroupOrMessage(fieldInfo.type)) {
              let parsedSubMessage = protobuf.GeneratedMessage.as(convertProto3JsonValue(value, fieldInfo));
              let original = T$.GeneratedMessageN().as(fieldSet[_values][$_get](dart.nullCheck(fieldInfo.index)));
              if (original == null) {
                fieldSet[_setNonExtensionFieldUnchecked](meta, fieldInfo, parsedSubMessage);
              } else {
                original.mergeFromMessage(parsedSubMessage);
              }
            } else {
              fieldSet[_setFieldUnchecked](meta, fieldInfo, convertProto3JsonValue(value, fieldInfo));
            }
            context.popIndex();
          }, T$.dynamicAndObjectNTovoid()));
        } else {
          dart.throw(context.parseException("Expected JSON object", json));
        }
      }
    }
    dart.fn(recursionHelper, T$.ObjectNAnd_FieldSetTovoid());
    recursionHelper(json, fieldSet);
  };
  protobuf.unpackIntoHelper = function unpackIntoHelper(T, value, instance, typeUrl, opts) {
    let extensionRegistry = opts && 'extensionRegistry' in opts ? opts.extensionRegistry : C[3] || CT.C3;
    if (!protobuf.canUnpackIntoHelper(instance, typeUrl)) {
      let typeName = instance.info_.qualifiedMessageName;
      dart.throw(new protobuf.InvalidProtocolBufferException.wrongAnyMessage(protobuf._typeNameFromUrl(typeUrl), typeName));
    }
    instance.mergeFromBuffer(value, extensionRegistry);
  };
  protobuf.canUnpackIntoHelper = function canUnpackIntoHelper(instance, typeUrl) {
    return instance.info_.qualifiedMessageName === protobuf._typeNameFromUrl(typeUrl);
  };
  protobuf._typeNameFromUrl = function _typeNameFromUrl(typeUrl) {
    let index = typeUrl[$lastIndexOf]("/");
    return index === -1 ? "" : typeUrl[$substring](index + 1);
  };
  protobuf._deepEquals = function _deepEquals(lhs, rhs) {
    if (protobuf.GeneratedMessage.is(lhs)) return dart.equals(lhs, rhs);
    if (protobuf.GeneratedMessage.is(rhs)) return false;
    if (core.List.is(lhs) && core.List.is(rhs)) return protobuf._areListsEqual(lhs, rhs);
    if (core.Map.is(lhs) && core.Map.is(rhs)) return protobuf._areMapsEqual(lhs, rhs);
    if (typed_data.ByteData.is(lhs) && typed_data.ByteData.is(rhs)) {
      return protobuf._areByteDataEqual(lhs, rhs);
    }
    return dart.equals(lhs, rhs);
  };
  protobuf._areListsEqual = function _areListsEqual(lhs, rhs) {
    if (lhs[$length] !== rhs[$length]) return false;
    for (let i = 0; i < lhs[$length]; i = i + 1) {
      if (!protobuf._deepEquals(lhs[$_get](i), rhs[$_get](i))) return false;
    }
    return true;
  };
  protobuf._areMapsEqual = function _areMapsEqual(lhs, rhs) {
    if (lhs[$length] !== rhs[$length]) return false;
    return lhs[$keys][$every](dart.fn(key => protobuf._deepEquals(lhs[$_get](key), rhs[$_get](key)), T$.dynamicTobool()));
  };
  protobuf._areByteDataEqual = function _areByteDataEqual(lhs, rhs) {
    function asBytes(d) {
      return typed_data.Uint8List.view(typed_data.ByteBuffer.as(dart.dload(d, 'buffer')), core.int.as(dart.dload(d, 'offsetInBytes')), T$.intN().as(dart.dload(d, 'lengthInBytes')));
    }
    dart.fn(asBytes, T$.dynamicToUint8List());
    return protobuf._areListsEqual(asBytes(lhs), asBytes(rhs));
  };
  protobuf.sorted = function sorted(T, list) {
    let t14;
    t14 = core.List$(T).from(list);
    return (() => {
      t14[$sort]();
      return t14;
    })();
  };
  protobuf._sorted = function _sorted(T, list) {
    let t14;
    t14 = core.List$(T).from(list);
    return (() => {
      t14[$sort]();
      return t14;
    })();
  };
  protobuf.getTagFieldNumber = function getTagFieldNumber(tag) {
    return tag[$rightShift](3);
  };
  protobuf.getTagWireType = function getTagWireType(tag) {
    return (tag & 7) >>> 0;
  };
  protobuf.makeTag = function makeTag(fieldNumber, tag) {
    return (fieldNumber[$leftShift](3) | tag) >>> 0;
  };
  protobuf._wireTypeMatches = function _wireTypeMatches(fieldType, wireType) {
    switch (protobuf.PbFieldType._baseType(fieldType)) {
      case 16:
      case 512:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      {
        return wireType === 0 || wireType === 2;
      }
      case 256:
      case 131072:
      case 524288:
      {
        return wireType === 5 || wireType === 2;
      }
      case 128:
      case 262144:
      case 1048576:
      {
        return wireType === 1 || wireType === 2;
      }
      case 32:
      case 64:
      case 2097152:
      {
        return wireType === 2;
      }
      case 1024:
      {
        return wireType === 3;
      }
      default:
      {
        return false;
      }
    }
  };
  dart.copyProperties(protobuf, {
    get frozenMessageModificationHandler() {
      return protobuf._frozenMessageModificationHandler;
    },
    set frozenMessageModificationHandler(value) {
      protobuf._hashCodesCanBeMemoized = false;
      protobuf._frozenMessageModificationHandler = value;
    }
  });
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  dart.defineLazy(protobuf, {
    /*protobuf._utf8*/get _utf8() {
      return C[17] || CT.C17;
    },
    /*protobuf._upperCase*/get _upperCase() {
      return core.RegExp.new("[A-Z]");
    },
    /*protobuf._frozenMessageModificationHandler*/get _frozenMessageModificationHandler() {
      return C[18] || CT.C18;
    },
    set _frozenMessageModificationHandler(_) {},
    /*protobuf._hashCodesCanBeMemoized*/get _hashCodesCanBeMemoized() {
      return true;
    },
    set _hashCodesCanBeMemoized(_) {},
    /*protobuf.TAG_TYPE_BITS*/get TAG_TYPE_BITS() {
      return 3;
    },
    /*protobuf.TAG_TYPE_MASK*/get TAG_TYPE_MASK() {
      return 7;
    },
    /*protobuf.WIRETYPE_VARINT*/get WIRETYPE_VARINT() {
      return 0;
    },
    /*protobuf.WIRETYPE_FIXED64*/get WIRETYPE_FIXED64() {
      return 1;
    },
    /*protobuf.WIRETYPE_LENGTH_DELIMITED*/get WIRETYPE_LENGTH_DELIMITED() {
      return 2;
    },
    /*protobuf.WIRETYPE_START_GROUP*/get WIRETYPE_START_GROUP() {
      return 3;
    },
    /*protobuf.WIRETYPE_END_GROUP*/get WIRETYPE_END_GROUP() {
      return 4;
    },
    /*protobuf.WIRETYPE_FIXED32*/get WIRETYPE_FIXED32() {
      return 5;
    }
  }, false);
  var _mapping = dart.privateName(type_registry, "_mapping");
  const _mapping$ = TypeRegistry__mapping;
  type_registry.TypeRegistry = class TypeRegistry extends core.Object {
    get [_mapping]() {
      return this[_mapping$];
    }
    set [_mapping](value) {
      super[_mapping] = value;
    }
    static ['_#new#tearOff'](types) {
      return new type_registry.TypeRegistry.new(types);
    }
    static ['_#empty#tearOff']() {
      return new type_registry.TypeRegistry.empty();
    }
    lookup(qualifiedName) {
      return this[_mapping][$_get](qualifiedName);
    }
  };
  (type_registry.TypeRegistry.new = function(types) {
    this[_mapping$] = T$.MapOfString$BuilderInfo().fromEntries(types[$map](T$.MapEntryOfString$BuilderInfo(), dart.fn(message => new (T$.MapEntryOfString$BuilderInfo()).__(message.info_.qualifiedMessageName, message.info_), T$.GeneratedMessageToMapEntryOfString$BuilderInfo())));
    ;
  }).prototype = type_registry.TypeRegistry.prototype;
  (type_registry.TypeRegistry.empty = function() {
    this[_mapping$] = C[12] || CT.C12;
    ;
  }).prototype = type_registry.TypeRegistry.prototype;
  dart.addTypeTests(type_registry.TypeRegistry);
  dart.addTypeCaches(type_registry.TypeRegistry);
  dart.setMethodSignature(type_registry.TypeRegistry, () => ({
    __proto__: dart.getMethods(type_registry.TypeRegistry.__proto__),
    lookup: dart.fnType(dart.nullable(protobuf.BuilderInfo), [core.String])
  }));
  dart.setLibraryUri(type_registry.TypeRegistry, I[9]);
  dart.setFieldSignature(type_registry.TypeRegistry, () => ({
    __proto__: dart.getFields(type_registry.TypeRegistry.__proto__),
    [_mapping]: dart.finalFieldType(core.Map$(core.String, protobuf.BuilderInfo))
  }));
  permissive_compare.permissiveCompare = function permissiveCompare(a, b) {
    let t14, t14$;
    let i = 0;
    let j = 0;
    while (true) {
      let ca = null;
      let cb = null;
      do {
        ca = i < a.length ? a[$codeUnitAt]((t14 = i, i = t14 + 1, t14)) : -1;
      } while (ca === 45 || ca === 95);
      do {
        cb = j < b.length ? b[$codeUnitAt]((t14$ = j, j = t14$ + 1, t14$)) : -1;
      } while (cb === 45 || cb === 95);
      if (ca === cb) {
        if (ca === -1) return true;
        continue;
      }
      if ((ca ^ cb) !== 32 || !permissive_compare._isAsciiLetter(ca)) {
        return false;
      }
    }
  };
  permissive_compare._isAsciiLetter = function _isAsciiLetter(char) {
    char = (char | (97 ^ 65) >>> 0) >>> 0;
    return 97 <= char && char <= 122;
  };
  var ignoreUnknownFields$ = dart.privateName(json_parsing_context, "JsonParsingContext.ignoreUnknownFields");
  var supportNamesWithUnderscores$ = dart.privateName(json_parsing_context, "JsonParsingContext.supportNamesWithUnderscores");
  var permissiveEnums$ = dart.privateName(json_parsing_context, "JsonParsingContext.permissiveEnums");
  var _path = dart.privateName(json_parsing_context, "_path");
  json_parsing_context.JsonParsingContext = class JsonParsingContext extends core.Object {
    get ignoreUnknownFields() {
      return this[ignoreUnknownFields$];
    }
    set ignoreUnknownFields(value) {
      super.ignoreUnknownFields = value;
    }
    get supportNamesWithUnderscores() {
      return this[supportNamesWithUnderscores$];
    }
    set supportNamesWithUnderscores(value) {
      super.supportNamesWithUnderscores = value;
    }
    get permissiveEnums() {
      return this[permissiveEnums$];
    }
    set permissiveEnums(value) {
      super.permissiveEnums = value;
    }
    static ['_#new#tearOff'](ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums) {
      return new json_parsing_context.JsonParsingContext.new(ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums);
    }
    addMapIndex(index) {
      this[_path][$add](index);
    }
    addListIndex(index) {
      this[_path][$add](index[$toString]());
    }
    popIndex() {
      this[_path][$removeLast]();
    }
    parseException(message, source) {
      let formattedPath = this[_path][$map](core.String, dart.fn(s => "[\"" + s + "\"]", T$.StringToString()))[$join]();
      return new core.FormatException.new("Protobuf JSON decoding failed at: root" + formattedPath + ". " + message, source);
    }
  };
  (json_parsing_context.JsonParsingContext.new = function(ignoreUnknownFields, supportNamesWithUnderscores, permissiveEnums) {
    this[_path] = T$.JSArrayOfString().of([]);
    this[ignoreUnknownFields$] = ignoreUnknownFields;
    this[supportNamesWithUnderscores$] = supportNamesWithUnderscores;
    this[permissiveEnums$] = permissiveEnums;
    ;
  }).prototype = json_parsing_context.JsonParsingContext.prototype;
  dart.addTypeTests(json_parsing_context.JsonParsingContext);
  dart.addTypeCaches(json_parsing_context.JsonParsingContext);
  dart.setMethodSignature(json_parsing_context.JsonParsingContext, () => ({
    __proto__: dart.getMethods(json_parsing_context.JsonParsingContext.__proto__),
    addMapIndex: dart.fnType(dart.void, [core.String]),
    addListIndex: dart.fnType(dart.void, [core.int]),
    popIndex: dart.fnType(dart.void, []),
    parseException: dart.fnType(core.Exception, [core.String, dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(json_parsing_context.JsonParsingContext, I[10]);
  dart.setFieldSignature(json_parsing_context.JsonParsingContext, () => ({
    __proto__: dart.getFields(json_parsing_context.JsonParsingContext.__proto__),
    [_path]: dart.finalFieldType(core.List$(core.String)),
    ignoreUnknownFields: dart.finalFieldType(core.bool),
    supportNamesWithUnderscores: dart.finalFieldType(core.bool),
    permissiveEnums: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/protobuf/protobuf", {
    "package:protobuf/protobuf.dart": protobuf,
    "package:protobuf/src/protobuf/type_registry.dart": type_registry,
    "package:protobuf/src/protobuf/permissive_compare.dart": permissive_compare,
    "package:protobuf/src/protobuf/json_parsing_context.dart": json_parsing_context
  }, {
    "package:protobuf/protobuf.dart": ["src/protobuf/coded_buffer.dart", "src/protobuf/coded_buffer_reader.dart", "src/protobuf/coded_buffer_writer.dart", "src/protobuf/builder_info.dart", "src/protobuf/event_plugin.dart", "src/protobuf/exceptions.dart", "src/protobuf/extension.dart", "src/protobuf/extension_field_set.dart", "src/protobuf/extension_registry.dart", "src/protobuf/field_error.dart", "src/protobuf/field_info.dart", "src/protobuf/field_set.dart", "src/protobuf/field_type.dart", "src/protobuf/generated_message.dart", "src/protobuf/generated_service.dart", "src/protobuf/json.dart", "src/protobuf/pb_list.dart", "src/protobuf/pb_map.dart", "src/protobuf/protobuf_enum.dart", "src/protobuf/proto3_json.dart", "src/protobuf/readonly_message.dart", "src/protobuf/rpc_client.dart", "src/protobuf/unknown_field_set.dart", "src/protobuf/utils.dart", "src/protobuf/unpack.dart", "src/protobuf/wire_format.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/protobuf/coded_buffer_reader.dart","src/protobuf/coded_buffer_writer.dart","src/protobuf/builder_info.dart","src/protobuf/event_plugin.dart","src/protobuf/exceptions.dart","src/protobuf/field_info.dart","src/protobuf/extension.dart","src/protobuf/extension_field_set.dart","src/protobuf/extension_registry.dart","src/protobuf/pb_map.dart","src/protobuf/field_set.dart","src/protobuf/field_type.dart","src/protobuf/generated_message.dart","src/protobuf/generated_service.dart","src/protobuf/pb_list.dart","src/protobuf/protobuf_enum.dart","src/protobuf/readonly_message.dart","src/protobuf/rpc_client.dart","src/protobuf/unknown_field_set.dart","src/protobuf/utils.dart","protobuf.dart","src/protobuf/coded_buffer.dart","src/protobuf/field_error.dart","src/protobuf/json.dart","src/protobuf/proto3_json.dart","src/protobuf/unpack.dart","src/protobuf/wire_format.dart","src/protobuf/type_registry.dart","src/protobuf/permissive_compare.dart","src/protobuf/json_parsing_context.dart"],"names":[],"mappings":"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","file":"protobuf.sound.ddc.js"}');
  // Exports:
  return {
    protobuf: protobuf,
    src__protobuf__type_registry: type_registry,
    src__protobuf__permissive_compare: permissive_compare,
    src__protobuf__json_parsing_context: json_parsing_context
  };
}));

//# sourceMappingURL=protobuf.sound.ddc.js.map
