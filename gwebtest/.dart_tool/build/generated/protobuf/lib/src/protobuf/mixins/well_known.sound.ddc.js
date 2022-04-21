define(['dart_sdk', 'packages/protobuf/protobuf', 'packages/fixnum/fixnum'], (function load__packages__protobuf__src__protobuf__mixins__well_known(dart_sdk, packages__protobuf__protobuf, packages__fixnum__fixnum) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const protobuf = packages__protobuf__protobuf.protobuf;
  const type_registry = packages__protobuf__protobuf.src__protobuf__type_registry;
  const json_parsing_context = packages__protobuf__protobuf.src__protobuf__json_parsing_context;
  const fixnum = packages__fixnum__fixnum.fixnum;
  var well_known = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $remove = dartx.remove;
  var $truncate = dartx.truncate;
  var $modulo = dartx['%'];
  var $toInt = dartx.toInt;
  var $padLeft = dartx.padLeft;
  var $toString = dartx.toString;
  var $replaceFirst = dartx.replaceFirst;
  var $padRight = dartx.padRight;
  var $replaceRange = dartx.replaceRange;
  var $abs = dartx.abs;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $map = dartx.map;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  var $toDouble = dartx.toDouble;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $add = dartx.add;
  var $contains = dartx.contains;
  var $join = dartx.join;
  var $split = dartx.split;
  var $addAll = dartx.addAll;
  var $toUpperCase = dartx.toUpperCase;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $toLowerCase = dartx.toLowerCase;
  var $lastIndexOf = dartx.lastIndexOf;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    IdentityMapOfString$ObjectN: () => (T.IdentityMapOfString$ObjectN = dart.constFn(_js_helper.IdentityMap$(core.String, T.ObjectN())))(),
    LinkedHashMapOfString$dynamic: () => (T.LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))(),
    MapEntryOfString$ObjectN: () => (T.MapEntryOfString$ObjectN = dart.constFn(core.MapEntry$(core.String, T.ObjectN())))(),
    StringAndValueMixinToMapEntryOfString$ObjectN: () => (T.StringAndValueMixinToMapEntryOfString$ObjectN = dart.constFn(dart.fnType(T.MapEntryOfString$ObjectN(), [core.String, well_known.ValueMixin])))(),
    dynamicAnddynamicTovoid: () => (T.dynamicAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, dart.dynamic])))(),
    ValueMixinToObjectN: () => (T.ValueMixinToObjectN = dart.constFn(dart.fnType(T.ObjectN(), [well_known.ValueMixin])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    MatchToString: () => (T.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))()
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
      return C[1] = dart.fn(well_known.FieldMaskMixin._toCamelCase, T.StringToString());
    },
    get C2() {
      return C[2] = dart.fn(well_known.FieldMaskMixin._fromCamelCase, T.StringToString());
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = ["package:protobuf/src/protobuf/mixins/well_known.dart"];
  well_known.AnyMixin = class AnyMixin extends core.Object {
    canUnpackInto(instance) {
      return protobuf.canUnpackIntoHelper(instance, this.typeUrl);
    }
    unpackInto(T, instance, opts) {
      let extensionRegistry = opts && 'extensionRegistry' in opts ? opts.extensionRegistry : C[0] || CT.C0;
      protobuf.unpackIntoHelper(T, this.value, instance, this.typeUrl, {extensionRegistry: extensionRegistry});
      return instance;
    }
    static packIntoAny(target, message, opts) {
      let typeUrlPrefix = opts && 'typeUrlPrefix' in opts ? opts.typeUrlPrefix : "type.googleapis.com";
      target.value = message.writeToBuffer();
      target.typeUrl = typeUrlPrefix + "/" + message.info_.qualifiedMessageName;
    }
    static toProto3JsonHelper(message, typeRegistry) {
      let t0;
      let any = well_known.AnyMixin.as(message);
      let info = typeRegistry.lookup(well_known._typeNameFromUrl(any.typeUrl));
      if (info == null) {
        dart.throw(new core.ArgumentError.new("The type of the Any message (" + any.typeUrl + ") is not in the given typeRegistry."));
      }
      let unpacked = (t0 = dart.nullCheck(info.createEmptyInstance)(), (() => {
        t0.mergeFromBuffer(any.value);
        return t0;
      })());
      let proto3Json = unpacked.toProto3Json();
      if (info.toProto3Json == null) {
        let map = T.MapOfString$dynamic().as(proto3Json);
        map[$_set]("@type", any.typeUrl);
        return map;
      } else {
        return new (T.IdentityMapOfString$ObjectN()).from(["@type", any.typeUrl, "value", proto3Json]);
      }
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0, t0$;
      if (!T.MapOfString$dynamic().is(json)) {
        dart.throw(context.parseException("Expected Any message encoded as {@type,...},", json));
      }
      let object = json;
      let typeUrl = object[$_get]("@type");
      if (typeof typeUrl == 'string') {
        let any = well_known.AnyMixin.as(message);
        let info = typeRegistry.lookup(well_known._typeNameFromUrl(typeUrl));
        if (info == null) {
          dart.throw(context.parseException("Decoding Any of type " + dart.str(typeUrl) + " not in TypeRegistry " + dart.str(typeRegistry), json));
        }
        let subJson = info.fromProto3Json == null ? (t0 = T.LinkedHashMapOfString$dynamic().from(object), (() => {
          t0[$remove]("@type");
          return t0;
        })()) : object[$_get]("value");
        let packedMessage = (t0$ = dart.nullCheck(info.createEmptyInstance)(), (() => {
          t0$.mergeFromProto3Json(subJson, {typeRegistry: typeRegistry, supportNamesWithUnderscores: context.supportNamesWithUnderscores, ignoreUnknownFields: context.ignoreUnknownFields, permissiveEnums: context.permissiveEnums});
          return t0$;
        })());
        any.value = packedMessage.writeToBuffer();
        any.typeUrl = typeUrl;
      } else {
        dart.throw(context.parseException("Expected a string", json));
      }
    }
  };
  (well_known.AnyMixin.new = function() {
    ;
  }).prototype = well_known.AnyMixin.prototype;
  dart.addTypeTests(well_known.AnyMixin);
  dart.addTypeCaches(well_known.AnyMixin);
  well_known.AnyMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setMethodSignature(well_known.AnyMixin, () => ({
    __proto__: dart.getMethods(well_known.AnyMixin.__proto__),
    canUnpackInto: dart.fnType(core.bool, [protobuf.GeneratedMessage]),
    unpackInto: dart.gFnType(T => [T, [T], {extensionRegistry: protobuf.ExtensionRegistry}, {}], T => [protobuf.GeneratedMessage])
  }));
  dart.setStaticMethodSignature(well_known.AnyMixin, () => ['packIntoAny', 'toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.AnyMixin, I[0]);
  well_known.TimestampMixin = class TimestampMixin extends core.Object {
    toDateTime() {
      return new core.DateTime.fromMicrosecondsSinceEpoch(this.seconds.toInt() * 1000000 + (this.nanos / 1000)[$truncate](), {isUtc: true});
    }
    static setFromDateTime(target, dateTime) {
      let micros = dateTime.microsecondsSinceEpoch;
      target.seconds = fixnum.Int64.new((micros / 1000000)[$truncate]());
      target.nanos = micros[$modulo](1000000)[$toInt]() * 1000;
    }
    static _twoDigits(n) {
      if (n >= 10) return dart.str(n);
      return "0" + dart.str(n);
    }
    static toProto3JsonHelper(message, typeRegistry) {
      let timestamp = well_known.TimestampMixin.as(message);
      let dateTime = timestamp.toDateTime();
      if (timestamp.nanos < 0) {
        dart.throw(new core.ArgumentError.new("Timestamp with negative `nanos`: " + dart.str(timestamp.nanos)));
      }
      if (timestamp.nanos > 999999999) {
        dart.throw(new core.ArgumentError.new("Timestamp with `nanos` out of range: " + dart.str(timestamp.nanos)));
      }
      if (dateTime.isBefore(well_known.TimestampMixin._minTimestamp) || dateTime.isAfter(well_known.TimestampMixin._maxTimestamp)) {
        dart.throw(new core.ArgumentError.new("Timestamp Must be from 0001-01-01T00:00:00Z to " + "9999-12-31T23:59:59Z inclusive. Was: " + dateTime.toIso8601String()));
      }
      let y = dart.str(dateTime.year)[$padLeft](4, "0");
      let m = well_known.TimestampMixin._twoDigits(dateTime.month);
      let d = well_known.TimestampMixin._twoDigits(dateTime.day);
      let h = well_known.TimestampMixin._twoDigits(dateTime.hour);
      let min = well_known.TimestampMixin._twoDigits(dateTime.minute);
      let sec = well_known.TimestampMixin._twoDigits(dateTime.second);
      let secFrac = "";
      if (timestamp.nanos > 0) {
        secFrac = "." + timestamp.nanos[$toString]()[$padLeft](9, "0")[$replaceFirst](well_known.TimestampMixin.finalGroupsOfThreeZeroes, "");
      }
      return y + "-" + m + "-" + d + "T" + h + ":" + min + ":" + sec + secFrac + "Z";
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (typeof json == 'string') {
        let jsonWithoutFracSec = json;
        let nanos = 0;
        let fracSecsMatch = core.RegExp.new("\\.(\\d+)").firstMatch(json);
        if (fracSecsMatch != null) {
          let fracSecs = dart.nullCheck(fracSecsMatch._get(1));
          if (fracSecs.length > 9) {
            dart.throw(context.parseException("Timestamp can have at most than 9 decimal digits", json));
          }
          nanos = core.int.parse(fracSecs[$padRight](9, "0"));
          jsonWithoutFracSec = json[$replaceRange](fracSecsMatch.start, fracSecsMatch.end, "");
        }
        let dateTimeWithoutFractionalSeconds = (t0 = core.DateTime.tryParse(jsonWithoutFracSec), t0 == null ? dart.throw(context.parseException("Timestamp not well formatted. ", json)) : t0);
        let timestamp = well_known.TimestampMixin.as(message);
        well_known.TimestampMixin.setFromDateTime(timestamp, dateTimeWithoutFractionalSeconds);
        timestamp.nanos = nanos;
      } else {
        dart.throw(context.parseException("Expected timestamp represented as String", json));
      }
    }
  };
  (well_known.TimestampMixin.new = function() {
    ;
  }).prototype = well_known.TimestampMixin.prototype;
  dart.addTypeTests(well_known.TimestampMixin);
  dart.addTypeCaches(well_known.TimestampMixin);
  dart.setMethodSignature(well_known.TimestampMixin, () => ({
    __proto__: dart.getMethods(well_known.TimestampMixin.__proto__),
    toDateTime: dart.fnType(core.DateTime, [])
  }));
  dart.setStaticMethodSignature(well_known.TimestampMixin, () => ['setFromDateTime', '_twoDigits', 'toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.TimestampMixin, I[0]);
  dart.setStaticFieldSignature(well_known.TimestampMixin, () => ['finalGroupsOfThreeZeroes', '_minTimestamp', '_maxTimestamp']);
  dart.defineLazy(well_known.TimestampMixin, {
    /*well_known.TimestampMixin.finalGroupsOfThreeZeroes*/get finalGroupsOfThreeZeroes() {
      return core.RegExp.new("(?:000)*$");
    },
    /*well_known.TimestampMixin._minTimestamp*/get _minTimestamp() {
      return new core.DateTime.utc(1);
    },
    /*well_known.TimestampMixin._maxTimestamp*/get _maxTimestamp() {
      return new core.DateTime.utc(9999, 13, 31, 23, 59, 59);
    }
  }, false);
  well_known.DurationMixin = class DurationMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let duration = well_known.DurationMixin.as(message);
      let secFrac = duration.nanos[$abs]()[$toString]()[$padLeft](9, "0")[$replaceFirst](well_known.DurationMixin.finalZeroes, "");
      let secPart = secFrac === "" ? "" : "." + secFrac;
      return dart.str(duration.seconds) + secPart + "s";
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      let duration = well_known.DurationMixin.as(message);
      if (typeof json == 'string') {
        let match = well_known.DurationMixin.durationPattern[$matchAsPrefix](json);
        if (match == null) {
          dart.throw(context.parseException("Expected a String of the form `<seconds>.<nanos>s`", json));
        } else {
          let secondsString = dart.nullCheck(match._get(1));
          let seconds = secondsString === "" ? fixnum.Int64.ZERO : fixnum.Int64.parseInt(secondsString);
          duration.seconds = seconds;
          let nanos = core.int.parse((t0 = match._get(2), t0 == null ? "" : t0)[$padRight](9, "0"));
          duration.nanos = seconds['<'](0) ? -nanos : nanos;
        }
      } else {
        dart.throw(context.parseException("Expected a String of the form `<seconds>.<nanos>s`", json));
      }
    }
  };
  (well_known.DurationMixin.new = function() {
    ;
  }).prototype = well_known.DurationMixin.prototype;
  dart.addTypeTests(well_known.DurationMixin);
  dart.addTypeCaches(well_known.DurationMixin);
  dart.setStaticMethodSignature(well_known.DurationMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.DurationMixin, I[0]);
  dart.setStaticFieldSignature(well_known.DurationMixin, () => ['finalZeroes', 'durationPattern']);
  dart.defineLazy(well_known.DurationMixin, {
    /*well_known.DurationMixin.finalZeroes*/get finalZeroes() {
      return core.RegExp.new("0+$");
    },
    /*well_known.DurationMixin.durationPattern*/get durationPattern() {
      return core.RegExp.new("(-?\\d*)(?:\\.(\\d*))?s$");
    }
  }, false);
  well_known.StructMixin = class StructMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let struct = well_known.StructMixin.as(message);
      return struct.fields[$map](core.String, T.ObjectN(), dart.fn((key, value) => new (T.MapEntryOfString$ObjectN()).__(key, well_known.ValueMixin.toProto3JsonHelper(value, typeRegistry)), T.StringAndValueMixinToMapEntryOfString$ObjectN()));
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (core.Map.is(json)) {
        if (json[$isNotEmpty]) {
          let fields = well_known.StructMixin.as(message).fields;
          let valueCreator = dart.nullCheck(protobuf.MapFieldInfo.as(message.info_.fieldInfo[$_get](1)).valueCreator);
          json[$forEach](dart.fn((key, value) => {
            if (!(typeof key == 'string')) {
              dart.throw(context.parseException("Expected String key", json));
            }
            let v = well_known.ValueMixin.as(valueCreator());
            context.addMapIndex(key);
            well_known.ValueMixin.fromProto3JsonHelper(v, value, typeRegistry, context);
            context.popIndex();
            fields[$_set](key, v);
          }, T.dynamicAnddynamicTovoid()));
        }
      } else {
        dart.throw(context.parseException("Expected a JSON object literal (map)", json));
      }
    }
  };
  (well_known.StructMixin.new = function() {
    ;
  }).prototype = well_known.StructMixin.prototype;
  dart.addTypeTests(well_known.StructMixin);
  dart.addTypeCaches(well_known.StructMixin);
  well_known.StructMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setStaticMethodSignature(well_known.StructMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.StructMixin, I[0]);
  dart.setStaticFieldSignature(well_known.StructMixin, () => ['_fieldsFieldTagNumber']);
  dart.defineLazy(well_known.StructMixin, {
    /*well_known.StructMixin._fieldsFieldTagNumber*/get _fieldsFieldTagNumber() {
      return 1;
    }
  }, false);
  well_known.ValueMixin = class ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let value = well_known.ValueMixin.as(message);
      if (value.hasNullValue()) {
        return null;
      } else if (value.hasNumberValue()) {
        return value.numberValue;
      } else if (value.hasStringValue()) {
        return value.stringValue;
      } else if (value.hasBoolValue()) {
        return value.boolValue;
      } else if (value.hasStructValue()) {
        return well_known.StructMixin.toProto3JsonHelper(value.structValue, typeRegistry);
      } else if (value.hasListValue()) {
        return well_known.ListValueMixin.toProto3JsonHelper(value.listValue, typeRegistry);
      } else {
        dart.throw(new core.ArgumentError.new("Serializing google.protobuf.Value with no value"));
      }
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let value = well_known.ValueMixin.as(message);
      if (json == null) {
        value.nullValue = value.nullValue;
      } else if (typeof json == 'number') {
        value.numberValue = json[$toDouble]();
      } else if (typeof json == 'string') {
        value.stringValue = json;
      } else if (typeof json == 'boolean') {
        value.boolValue = json;
      } else if (core.Map.is(json)) {
        let structValue = protobuf['GeneratedMessageGenericExtensions|deepCopy'](well_known.StructMixin, value.structValue);
        well_known.StructMixin.fromProto3JsonHelper(structValue, json, typeRegistry, context);
        value.structValue = structValue;
      } else if (core.List.is(json)) {
        let listValue = protobuf['GeneratedMessageGenericExtensions|deepCopy'](well_known.ListValueMixin, value.listValue);
        well_known.ListValueMixin.fromProto3JsonHelper(listValue, json, typeRegistry, context);
        value.listValue = listValue;
      } else {
        dart.throw(context.parseException("Expected a json-value (Map, List, String, number, bool or null)", json));
      }
    }
  };
  (well_known.ValueMixin.new = function() {
    ;
  }).prototype = well_known.ValueMixin.prototype;
  dart.addTypeTests(well_known.ValueMixin);
  dart.addTypeCaches(well_known.ValueMixin);
  well_known.ValueMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setStaticMethodSignature(well_known.ValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.ValueMixin, I[0]);
  well_known.ListValueMixin = class ListValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let list = well_known.ListValueMixin.as(message);
      return list.values[$map](T.ObjectN(), dart.fn(value => well_known.ValueMixin.toProto3JsonHelper(value, typeRegistry), T.ValueMixinToObjectN()))[$toList]();
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let list = well_known.ListValueMixin.as(message);
      if (core.List.is(json)) {
        let subBuilder = dart.nullCheck(message.info_.subBuilder(1));
        for (let i = 0; i < json[$length]; i = i + 1) {
          let element = core.Object.as(json[$_get](i));
          let v = well_known.ValueMixin.as(subBuilder());
          context.addListIndex(i);
          well_known.ValueMixin.fromProto3JsonHelper(v, element, typeRegistry, context);
          context.popIndex();
          list.values[$add](v);
        }
      } else {
        dart.throw(context.parseException("Expected a json-List", json));
      }
    }
  };
  (well_known.ListValueMixin.new = function() {
    ;
  }).prototype = well_known.ListValueMixin.prototype;
  dart.addTypeTests(well_known.ListValueMixin);
  dart.addTypeCaches(well_known.ListValueMixin);
  well_known.ListValueMixin[dart.implements] = () => [protobuf.GeneratedMessage];
  dart.setStaticMethodSignature(well_known.ListValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.ListValueMixin, I[0]);
  dart.setStaticFieldSignature(well_known.ListValueMixin, () => ['_valueFieldTagNumber']);
  dart.defineLazy(well_known.ListValueMixin, {
    /*well_known.ListValueMixin._valueFieldTagNumber*/get _valueFieldTagNumber() {
      return 1;
    }
  }, false);
  well_known.FieldMaskMixin = class FieldMaskMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      let fieldMask = well_known.FieldMaskMixin.as(message);
      for (let path of fieldMask.paths) {
        if (path[$contains](core.RegExp.new("[A-Z]|_[^a-z]"))) {
          dart.throw(new core.ArgumentError.new("Bad fieldmask " + path + ". Does not round-trip to json."));
        }
      }
      return fieldMask.paths[$map](core.String, C[1] || CT.C1)[$join](",");
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (typeof json == 'string') {
        if (json[$contains]("_")) {
          dart.throw(context.parseException("Invalid Character `_` in FieldMask", json));
        }
        if (json === "") {
          return;
        }
        well_known.FieldMaskMixin.as(message).paths[$addAll](json[$split](",")[$map](core.String, C[2] || CT.C2));
      } else {
        dart.throw(context.parseException("Expected String formatted as FieldMask", json));
      }
    }
    static _toCamelCase(name) {
      return name[$replaceAllMapped](core.RegExp.new("_([a-z])"), dart.fn(m => dart.nullCheck(m.group(1))[$toUpperCase](), T.MatchToString()));
    }
    static _fromCamelCase(name) {
      return name[$replaceAllMapped](core.RegExp.new("[A-Z]"), dart.fn(m => "_" + dart.nullCheck(m.group(0))[$toLowerCase](), T.MatchToString()));
    }
  };
  (well_known.FieldMaskMixin.new = function() {
    ;
  }).prototype = well_known.FieldMaskMixin.prototype;
  dart.addTypeTests(well_known.FieldMaskMixin);
  dart.addTypeCaches(well_known.FieldMaskMixin);
  dart.setStaticMethodSignature(well_known.FieldMaskMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper', '_toCamelCase', '_fromCamelCase']);
  dart.setLibraryUri(well_known.FieldMaskMixin, I[0]);
  well_known.DoubleValueMixin = class DoubleValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.DoubleValueMixin.as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (typeof json == 'number') {
        well_known.DoubleValueMixin.as(message).value = json[$toDouble]();
      } else if (typeof json == 'string') {
        well_known.DoubleValueMixin.as(message).value = (t0 = core.double.tryParse(json), t0 == null ? dart.throw(context.parseException("Expected string to encode a double", json)) : t0);
      } else {
        dart.throw(context.parseException("Expected a double as a String or number", json));
      }
    }
  };
  (well_known.DoubleValueMixin.new = function() {
    ;
  }).prototype = well_known.DoubleValueMixin.prototype;
  dart.addTypeTests(well_known.DoubleValueMixin);
  dart.addTypeCaches(well_known.DoubleValueMixin);
  dart.setStaticMethodSignature(well_known.DoubleValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.DoubleValueMixin, I[0]);
  well_known.FloatValueMixin = class FloatValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.FloatValueMixin.as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t0;
      if (typeof json == 'number') {
        well_known.FloatValueMixin.as(message).value = json[$toDouble]();
      } else if (typeof json == 'string') {
        well_known.FloatValueMixin.as(message).value = (t0 = core.double.tryParse(json), t0 == null ? dart.throw(context.parseException("Expected a float as a String or number", json)) : t0);
      } else {
        dart.throw(context.parseException("Expected a float as a String or number", json));
      }
    }
  };
  (well_known.FloatValueMixin.new = function() {
    ;
  }).prototype = well_known.FloatValueMixin.prototype;
  dart.addTypeTests(well_known.FloatValueMixin);
  dart.addTypeCaches(well_known.FloatValueMixin);
  dart.setStaticMethodSignature(well_known.FloatValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.FloatValueMixin, I[0]);
  well_known.Int64ValueMixin = class Int64ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.Int64ValueMixin.as(message).value.toString();
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (core.int.is(json)) {
        well_known.Int64ValueMixin.as(message).value = fixnum.Int64.new(json);
      } else if (typeof json == 'string') {
        try {
          well_known.Int64ValueMixin.as(message).value = fixnum.Int64.parseInt(json);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.FormatException.is(ex)) {
            dart.throw(context.parseException("Expected string to encode integer", json));
          } else
            throw e;
        }
      } else {
        dart.throw(context.parseException("Expected an integer encoded as a String or number", json));
      }
    }
  };
  (well_known.Int64ValueMixin.new = function() {
    ;
  }).prototype = well_known.Int64ValueMixin.prototype;
  dart.addTypeTests(well_known.Int64ValueMixin);
  dart.addTypeCaches(well_known.Int64ValueMixin);
  dart.setStaticMethodSignature(well_known.Int64ValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.Int64ValueMixin, I[0]);
  well_known.UInt64ValueMixin = class UInt64ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.UInt64ValueMixin.as(message).value.toStringUnsigned();
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (core.int.is(json)) {
        well_known.UInt64ValueMixin.as(message).value = fixnum.Int64.new(json);
      } else if (typeof json == 'string') {
        try {
          well_known.UInt64ValueMixin.as(message).value = fixnum.Int64.parseInt(json);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.FormatException.is(ex)) {
            dart.throw(context.parseException("Expected string to encode unsigned integer", json));
          } else
            throw e;
        }
      } else {
        dart.throw(context.parseException("Expected an unsigned integer as a String or integer", json));
      }
    }
  };
  (well_known.UInt64ValueMixin.new = function() {
    ;
  }).prototype = well_known.UInt64ValueMixin.prototype;
  dart.addTypeTests(well_known.UInt64ValueMixin);
  dart.addTypeCaches(well_known.UInt64ValueMixin);
  dart.setStaticMethodSignature(well_known.UInt64ValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.UInt64ValueMixin, I[0]);
  well_known.Int32ValueMixin = class Int32ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.Int32ValueMixin.as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t4;
      if (core.int.is(json)) {
        well_known.Int32ValueMixin.as(message).value = json;
      } else if (typeof json == 'string') {
        well_known.Int32ValueMixin.as(message).value = (t4 = core.int.tryParse(json), t4 == null ? dart.throw(context.parseException("Expected string to encode integer", json)) : t4);
      } else {
        dart.throw(context.parseException("Expected an integer encoded as a String or number", json));
      }
    }
  };
  (well_known.Int32ValueMixin.new = function() {
    ;
  }).prototype = well_known.Int32ValueMixin.prototype;
  dart.addTypeTests(well_known.Int32ValueMixin);
  dart.addTypeCaches(well_known.Int32ValueMixin);
  dart.setStaticMethodSignature(well_known.Int32ValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.Int32ValueMixin, I[0]);
  well_known.UInt32ValueMixin = class UInt32ValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.UInt32ValueMixin.as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      let t4;
      if (core.int.is(json)) {
        well_known.UInt32ValueMixin.as(message).value = json;
      } else if (typeof json == 'string') {
        well_known.UInt32ValueMixin.as(message).value = (t4 = core.int.tryParse(json), t4 == null ? dart.throw(context.parseException("Expected String to encode an integer", json)) : t4);
      } else {
        dart.throw(context.parseException("Expected an unsigned integer as a String or integer", json));
      }
    }
  };
  (well_known.UInt32ValueMixin.new = function() {
    ;
  }).prototype = well_known.UInt32ValueMixin.prototype;
  dart.addTypeTests(well_known.UInt32ValueMixin);
  dart.addTypeCaches(well_known.UInt32ValueMixin);
  dart.setStaticMethodSignature(well_known.UInt32ValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.UInt32ValueMixin, I[0]);
  well_known.BoolValueMixin = class BoolValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.BoolValueMixin.as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (typeof json == 'boolean') {
        well_known.BoolValueMixin.as(message).value = json;
      } else {
        dart.throw(context.parseException("Expected a bool", json));
      }
    }
  };
  (well_known.BoolValueMixin.new = function() {
    ;
  }).prototype = well_known.BoolValueMixin.prototype;
  dart.addTypeTests(well_known.BoolValueMixin);
  dart.addTypeCaches(well_known.BoolValueMixin);
  dart.setStaticMethodSignature(well_known.BoolValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.BoolValueMixin, I[0]);
  well_known.StringValueMixin = class StringValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return well_known.StringValueMixin.as(message).value;
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (typeof json == 'string') {
        well_known.StringValueMixin.as(message).value = json;
      } else {
        dart.throw(context.parseException("Expected a String", json));
      }
    }
  };
  (well_known.StringValueMixin.new = function() {
    ;
  }).prototype = well_known.StringValueMixin.prototype;
  dart.addTypeTests(well_known.StringValueMixin);
  dart.addTypeCaches(well_known.StringValueMixin);
  dart.setStaticMethodSignature(well_known.StringValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.StringValueMixin, I[0]);
  well_known.BytesValueMixin = class BytesValueMixin extends core.Object {
    static toProto3JsonHelper(message, typeRegistry) {
      return convert.base64.encode(well_known.BytesValueMixin.as(message).value);
    }
    static fromProto3JsonHelper(message, json, typeRegistry, context) {
      if (typeof json == 'string') {
        try {
          well_known.BytesValueMixin.as(message).value = convert.base64.decode(json);
        } catch (e) {
          let ex = dart.getThrown(e);
          if (core.FormatException.is(ex)) {
            dart.throw(context.parseException("Expected bytes encoded as base64 String", json));
          } else
            throw e;
        }
      } else {
        dart.throw(context.parseException("Expected bytes encoded as base64 String", json));
      }
    }
  };
  (well_known.BytesValueMixin.new = function() {
    ;
  }).prototype = well_known.BytesValueMixin.prototype;
  dart.addTypeTests(well_known.BytesValueMixin);
  dart.addTypeCaches(well_known.BytesValueMixin);
  dart.setStaticMethodSignature(well_known.BytesValueMixin, () => ['toProto3JsonHelper', 'fromProto3JsonHelper']);
  dart.setLibraryUri(well_known.BytesValueMixin, I[0]);
  well_known._typeNameFromUrl = function _typeNameFromUrl(typeUrl) {
    let index = typeUrl[$lastIndexOf]("/");
    return index < 0 ? "" : typeUrl[$substring](index + 1);
  };
  dart.trackLibraries("packages/protobuf/src/protobuf/mixins/well_known", {
    "package:protobuf/src/protobuf/mixins/well_known.dart": well_known
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["well_known.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;kBAqBsC;AAClC,YAAO,8BAAoB,QAAQ,EAAE;IACvC;kBAU2C;UACpB;AAEoB,MADzC,6BAAiB,YAAO,QAAQ,EAAE,kCACX,iBAAiB;AACxC,YAAO,SAAQ;IACjB;uBAMiC,QAAyB;UAC9C;AAC4B,MAAtC,AAAO,MAAD,SAAS,AAAQ,OAAD;AACiD,MAAvE,AAAO,MAAD,WAAa,AAAoD,aAAvC,SAAG,AAAQ,AAAM,OAAP;IAC5C;8BA+BqB,SAAsB;;AACrC,gBAAc,uBAAR,OAAO;AACb,iBAAO,AAAa,YAAD,QAAQ,4BAAiB,AAAI,GAAD;AACnD,UAAI,AAAK,IAAD;AAE+E,QADrF,WAAM,2BACF,AAAgF,kCAAhD,AAAI,GAAD,WAAS;;AAE9C,2BAAmC,AAAC,eAAzB,AAAK,IAAD,yBAAqB;AAAI,2BAAgB,AAAI,GAAD;;;AAC3D,uBAAa,AAAS,QAAD;AACzB,UAAI,AAAK,AAAa,IAAd;AACF,kBAAiB,2BAAX,UAAU;AACM,QAA1B,AAAG,GAAA,QAAC,SAAW,AAAI,GAAD;AAClB,cAAO,IAAG;;AAEV,cAAO,6CAAC,SAAS,AAAI,GAAD,UAAU,SAAS,UAAU;;IAErD;gCAEkD,SAAgB,MACjD,cAAiC;;AAChD,WAAS,2BAAL,IAAI;AAEmD,QADzD,WAAM,AAAQ,OAAD,gBACT,gDAAgD,IAAI;;AAEpD,mBAAS,IAAI;AACb,oBAAU,AAAM,MAAA,QAAC;AAEvB,UAAY,OAAR,OAAO;AACL,kBAAc,uBAAR,OAAO;AACb,mBAAO,AAAa,YAAD,QAAQ,4BAAiB,OAAO;AACvD,YAAI,AAAK,IAAD;AAGG,UAFT,WAAM,AAAQ,OAAD,gBACT,AAAiE,mCAA1C,OAAO,uCAAsB,YAAY,GAChE,IAAI;;AAGF,sBAAU,AAAK,AAAe,IAAhB,gCAEf,uCAA0B,MAAM,GAAhC;AAAmC,sBAAO;;gBAC3C,AAAM,MAAA,QAAC;AAET,mCAAwC,AAAC,eAAzB,AAAK,IAAD,yBAAqB;AACzC,kCAAoB,OAAO,iBACX,YAAY,+BACG,AAAQ,OAAD,mDACf,AAAQ,OAAD,uCACX,AAAQ,OAAD;;;AAEW,QAAzC,AAAI,GAAD,SAAS,AAAc,aAAD;AACJ,QAArB,AAAI,GAAD,WAAW,OAAO;;AAEkC,QAAvD,WAAM,AAAQ,OAAD,gBAAgB,qBAAqB,IAAI;;IAE1D;;;;EACF;;;;;;;;;;;;;AAoB2B,YAAS,8CAC9B,AAAQ,AAAQ,AAAiC,iCAAQ,CAAN,aAAS,4BACrD;IAAK;2BAK2B,QAAiB;AACtD,mBAAS,AAAS,QAAD;AAC2C,MAAhE,AAAO,MAAD,WAAW,iBAAa,CAAP,MAAM;AAC0C,MAAvE,AAAO,MAAD,SAAU,AAAO,AAAkC,AAAQ,MAA3C,+BAA6C;IACrE;sBAE6B;AAC3B,UAAI,AAAE,CAAD,IAAI,IAAI,MAAW,UAAF,CAAC;AACvB,YAAO,AAAK,gBAAF,CAAC;IACb;8BAsBqB,SAAsB;AACrC,sBAAoB,6BAAR,OAAO;AACnB,qBAAW,AAAU,SAAD;AAExB,UAAI,AAAU,AAAM,SAAP,SAAS;AAEsC,QAD1D,WAAM,2BACF,AAAqD,+CAAjB,AAAU,SAAD;;AAEnD,UAAI,AAAU,AAAM,SAAP,SAAS;AAE0C,QAD9D,WAAM,2BACF,AAAyD,mDAAjB,AAAU,SAAD;;AAEvD,UAAI,AAAS,QAAD,UAAU,4CAAkB,AAAS,QAAD,SAAS;AAEkB,QADzE,WAAM,2BAAa,AAAC,oDAChB,0CAAwC,AAAS,QAAD;;AAKlD,cAAsB,AAAC,SAAhB,AAAS,QAAD,iBAAgB,GAAG;AAClC,cAAI,qCAAW,AAAS,QAAD;AACvB,cAAI,qCAAW,AAAS,QAAD;AACvB,cAAI,qCAAW,AAAS,QAAD;AACvB,gBAAM,qCAAW,AAAS,QAAD;AACzB,gBAAM,qCAAW,AAAS,QAAD;AACzB,oBAAU;AACd,UAAI,AAAU,AAAM,SAAP,SAAS;AAK+B,QAJnD,UAAU,AAAI,MACV,AAAU,AACL,AACA,AACA,SAHI,8BAEI,GAAG,oBACE,oDAA0B;;AAElD,YAAS,AAAkC,EAAjC,SAAE,CAAC,SAAG,CAAC,GAAC,MAAE,CAAC,SAAE,GAAG,SAAE,GAAG,GAAE,OAAO,GAAC;IAC3C;gCAEkD,SAAgB,MACjD,cAAiC;;AAChD,UAAS,OAAL,IAAI;AACF,iCAAqB,IAAI;AACzB,oBAAQ;AACL,4BAAgB,AAAmB,gBAAZ,wBAAuB,IAAI;AACzD,YAAI,aAAa;AACX,yBAA2B,eAAhB,AAAa,aAAA,MAAC;AAC7B,cAAI,AAAS,AAAO,QAAR,UAAU;AAEyC,YAD7D,WAAM,AAAQ,OAAD,gBACT,oDAAoD,IAAI;;AAElB,UAA5C,QAAY,eAAM,AAAS,QAAD,YAAU,GAAG;AAE0B,UADjE,qBACI,AAAK,IAAD,gBAAc,AAAc,aAAD,QAAQ,AAAc,aAAD,MAAM;;AAE5D,gDACsC,KAA7B,uBAAS,kBAAkB,GAA3B,aACJ,WAAM,AAAQ,OAAD,gBACV,kCAAkC,IAAI;AAE9C,wBAAoB,6BAAR,OAAO;AACqC,QAA5D,0CAAgB,SAAS,EAAE,gCAAgC;AACpC,QAAvB,AAAU,SAAD,SAAS,KAAK;;AAG8B,QADrD,WAAM,AAAQ,OAAD,gBACT,4CAA4C,IAAI;;IAExD;;;;EACF;;;;;;;;;;;MAnHsB,kDAAwB;YAAG,iBAAO;;MA8BhC,uCAAa;YAAY,uBAAI;;MAC7B,uCAAa;YAAY,uBAAI,MAAM,IAAI,IAAI,IAAI,IAAI;;;;8BAgGpD,SAAsB;AACrC,qBAAmB,4BAAR,OAAO;AAClB,oBAAU,AAAS,AAElB,AACA,AACA,AACA,QALiB,sCAIT,GAAG,oBACE,sCAAa;AAC3B,oBAAU,AAAQ,OAAD,KAAI,KAAK,KAAK,AAAW,MAAR,OAAO;AAC7C,YAAuC,UAA7B,AAAS,QAAD,YAAW,OAAO,GAAC;IACvC;gCAIkD,SAAgB,MACjD,cAAiC;;AAC5C,qBAAmB,4BAAR,OAAO;AACtB,UAAS,OAAL,IAAI;AACF,oBAAQ,AAAgB,yDAAc,IAAI;AAC9C,YAAI,AAAM,KAAD;AAEwD,UAD/D,WAAM,AAAQ,OAAD,gBACT,sDAAsD,IAAI;;AAE1D,8BAAwB,eAAR,AAAK,KAAA,MAAC;AACtB,wBACA,AAAc,aAAD,KAAI,KAAW,oBAAa,sBAAS,aAAa;AACzC,UAA1B,AAAS,QAAD,WAAW,OAAO;AACtB,sBAAY,eAAuB,CAAP,KAAT,AAAK,KAAA,MAAC,IAAD,aAAO,oBAAa,GAAG;AACN,UAA7C,AAAS,QAAD,SAAS,AAAQ,OAAD,MAAG,KAAI,CAAC,KAAK,GAAG,KAAK;;;AAIgB,QAD/D,WAAM,AAAQ,OAAD,gBACT,sDAAsD,IAAI;;IAElE;;;;EACF;;;;;;;MAtCsB,oCAAW;YAAG,iBAAO;;MAerB,wCAAe;YAAG,iBAAO;;;;8BAgCxB,SAAsB;AACrC,mBAAiB,0BAAR,OAAO;AACpB,YAAO,AAAO,AAAO,OAAR,wCAAY,SAAC,KAAK,UAC3B,sCAAS,GAAG,EAAa,yCAAmB,KAAK,EAAE,YAAY;IACrE;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,YAAL,IAAI;AAGN,YAAI,AAAK,IAAD;AACF,uBAAkB,AAAgB,0BAAxB,OAAO;AACjB,6BAEiB,eAD+B,AAC3C,yBADJ,AAAQ,AAAM,AAAS,OAAhB;AAYV,UATF,AAAK,IAAD,WAAS,SAAC,KAAK;AACjB,kBAAQ,OAAJ,GAAG;AACoD,cAAzD,WAAM,AAAQ,OAAD,gBAAgB,uBAAuB,IAAI;;AAEtD,oBAAmB,yBAAf,AAAY,YAAA;AACI,YAAxB,AAAQ,OAAD,aAAa,GAAG;AACyC,YAArD,2CAAqB,CAAC,EAAE,KAAK,EAAE,YAAY,EAAE,OAAO;AAC7C,YAAlB,AAAQ,OAAD;AACQ,YAAf,AAAM,MAAA,QAAC,GAAG,EAAI,CAAC;;;;AAK8B,QADjD,WAAM,AAAQ,OAAD,gBACT,wCAAwC,IAAI;;IAEpD;;;;EACF;;;;;;;;MAtCe,4CAAqB;;;;;8BA+Db,SAAsB;AACrC,kBAAgB,yBAAR,OAAO;AAGnB,UAAI,AAAM,KAAD;AACP,cAAO;YACF,KAAI,AAAM,KAAD;AACd,cAAO,AAAM,MAAD;YACP,KAAI,AAAM,KAAD;AACd,cAAO,AAAM,MAAD;YACP,KAAI,AAAM,KAAD;AACd,cAAO,AAAM,MAAD;YACP,KAAI,AAAM,KAAD;AACd,cAAmB,2CAAmB,AAAM,KAAD,cAAc,YAAY;YAChE,KAAI,AAAM,KAAD;AACd,cAAsB,8CAAmB,AAAM,KAAD,YAAY,YAAY;;AAEA,QAAtE,WAAM,2BAAc;;IAExB;gCAEkD,SAAiB,MAClD,cAAiC;AAC5C,kBAAgB,yBAAR,OAAO;AACnB,UAAI,AAAK,IAAD;AAE2B,QAAjC,AAAM,KAAD,aAAa,AAAM,KAAD;YAClB,KAAS,OAAL,IAAI;AACsB,QAAnC,AAAM,KAAD,eAAe,AAAK,IAAD;YACnB,KAAS,OAAL,IAAI;AACW,QAAxB,AAAM,KAAD,eAAe,IAAI;YACnB,KAAS,OAAL,IAAI;AACS,QAAtB,AAAM,KAAD,aAAa,IAAI;YACjB,KAAS,YAAL,IAAI;AAET,0BAAgC,+EAAlB,AAAM,KAAD;AAEsB,QADjC,4CACR,WAAW,EAAE,IAAI,EAAE,YAAY,EAAE,OAAO;AACb,QAA/B,AAAM,KAAD,eAAe,WAAW;YAC1B,KAAS,aAAL,IAAI;AAET,wBAA4B,kFAAhB,AAAM,KAAD;AAEsB,QAD5B,+CACX,SAAS,EAAE,IAAI,EAAE,YAAY,EAAE,OAAO;AACf,QAA3B,AAAM,KAAD,aAAa,SAAS;;AAIlB,QAFT,WAAM,AAAQ,OAAD,gBACT,mEACA,IAAI;;IAEZ;;;;EACF;;;;;;;8BAQuB,SAAsB;AACrC,iBAAe,6BAAR,OAAO;AAClB,YAAO,AAAK,AACP,AACA,KAFM,2BACF,QAAC,SAAqB,yCAAmB,KAAK,EAAE,YAAY;IAEvE;gCAIkD,SAAgB,MACjD,cAAiC;AAC5C,iBAAe,6BAAR,OAAO;AAClB,UAAS,aAAL,IAAI;AACF,yBAA2D,eAA9C,AAAQ,AAAM,OAAP;AACxB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAK,IAAD,WAAS,IAAA,AAAC,CAAA;AACzB,uCAAU,AAAI,IAAA,QAAC,CAAC;AACnB,kBAAiB,yBAAb,AAAU,UAAA;AACK,UAAvB,AAAQ,OAAD,cAAc,CAAC;AAC4C,UAAvD,2CAAqB,CAAC,EAAE,OAAO,EAAE,YAAY,EAAE,OAAO;AAC/C,UAAlB,AAAQ,OAAD;AACW,UAAlB,AAAK,AAAO,IAAR,cAAY,CAAC;;;AAGuC,QAA1D,WAAM,AAAQ,OAAD,gBAAgB,wBAAwB,IAAI;;IAE7D;;;;EACF;;;;;;;;MAnBe,8CAAoB;;;;;8BA+BZ,SAAsB;AACrC,sBAAoB,6BAAR,OAAO;AACvB,eAAS,OAAQ,AAAU,UAAD;AACxB,YAAI,AAAK,IAAD,YAAU,gBAAO;AAEiC,UADxD,WAAM,2BACF,AAAmD,mBAAnC,IAAI;;;AAG5B,YAAO,AAAU,AAAM,AAAkB,UAAzB,gDAA8B;IAChD;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,OAAL,IAAI;AACN,YAAI,AAAK,IAAD,YAAU;AAE+B,UAD/C,WAAM,AAAQ,OAAD,gBACT,sCAAsC,IAAI;;AAEhD,YAAI,AAAK,IAAD,KAAI;AAEV;;AAI8C,QAFvC,AACJ,AACA,6BAFJ,OAAO,iBAEI,AAAK,AAAW,IAAZ,SAAO;;AAG4B,QADnD,WAAM,AAAQ,OAAD,gBACT,0CAA0C,IAAI;;IAEtD;wBAEkC;AAChC,YAAO,AAAK,KAAD,oBACP,gBAAO,aAAa,QAAO,KAAgB,AAAE,eAAZ,AAAE,CAAD,OAAO;IAC/C;0BAEoC;AAClC,YAAO,AAAK,KAAD,oBACP,gBAAO,UAAU,QAAO,KAAM,AAA+B,MAAjB,AAAE,eAAZ,AAAE,CAAD,OAAO;IAChD;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAqB,gCAA7B,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;;AAChD,UAAS,OAAL,IAAI;AAC+C,QAA5C,AAAqB,+BAA7B,OAAO,UAA8B,AAAK,IAAD;YACrC,KAAS,OAAL,IAAI;AAGuC,QAF3C,AAAqB,+BAA7B,OAAO,WAAoD,KAAf,qBAAS,IAAI,GAAb,aACxC,WAAM,AAAQ,OAAD,gBACV,sCAAsC,IAAI;;AAGE,QADpD,WAAM,AAAQ,OAAD,gBACT,2CAA2C,IAAI;;IAEvD;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAoB,+BAA5B,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;;AAChD,UAAS,OAAL,IAAI;AAC8C,QAA3C,AAAoB,8BAA5B,OAAO,UAA6B,AAAK,IAAD;YACpC,KAAS,OAAL,IAAI;AAG2C,QAF/C,AAAoB,8BAA5B,OAAO,WAAmD,KAAf,qBAAS,IAAI,GAAb,aACvC,WAAM,AAAQ,OAAD,gBACV,0CAA0C,IAAI;;AAGH,QADnD,WAAM,AAAQ,OAAD,gBACT,0CAA0C,IAAI;;IAEtD;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAoB,AAAM,+BAAlC,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,YAAL,IAAI;AAC0C,QAAvC,AAAoB,8BAA5B,OAAO,UAA6B,iBAAM,IAAI;YAC1C,KAAS,OAAL,IAAI;AACb;AAC2D,UAAhD,AAAoB,8BAA5B,OAAO,UAAmC,sBAAS,IAAI;;;AACxD;AACuE,YAAvE,WAAM,AAAQ,OAAD,gBAAgB,qCAAqC,IAAI;;;;;AAIV,QAD9D,WAAM,AAAQ,OAAD,gBACT,qDAAqD,IAAI;;IAEjE;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAqB,AAAM,gCAAnC,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,YAAL,IAAI;AAC2C,QAAxC,AAAqB,+BAA7B,OAAO,UAA8B,iBAAM,IAAI;YAC3C,KAAS,OAAL,IAAI;AACb;AAC4D,UAAjD,AAAqB,+BAA7B,OAAO,UAAoC,sBAAS,IAAI;;;AACzD;AAEuD,YADvD,WAAM,AAAQ,OAAD,gBACT,8CAA8C,IAAI;;;;;AAIQ,QADhE,WAAM,AAAQ,OAAD,gBACT,uDAAuD,IAAI;;IAEnE;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAoB,+BAA5B,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;;AAChD,UAAS,YAAL,IAAI;AACmC,QAAhC,AAAoB,8BAA5B,OAAO,UAA6B,IAAI;YACpC,KAAS,OAAL,IAAI;AAGsC,QAF1C,AAAoB,8BAA5B,OAAO,WAAgD,KAAf,kBAAS,IAAI,GAAb,aACpC,WAAM,AAAQ,OAAD,gBACV,qCAAqC,IAAI;;AAGa,QAD9D,WAAM,AAAQ,OAAD,gBACT,qDAAqD,IAAI;;IAEjE;;;;EACF;;;;;;8BAMuB,SAAsB;AACzC,YAAgB,AAAqB,gCAA7B,OAAO;IACjB;gCAIkD,SAAgB,MACjD,cAAiC;;AAChD,UAAS,YAAL,IAAI;AACoC,QAAjC,AAAqB,+BAA7B,OAAO,UAA8B,IAAI;YACrC,KAAS,OAAL,IAAI;AAGyC,QAF7C,AAAqB,+BAA7B,OAAO,WAAiD,KAAf,kBAAS,IAAI,GAAb,aACrC,WAAM,AAAQ,OAAD,gBACV,wCAAwC,IAAI;;AAGY,QADhE,WAAM,AAAQ,OAAD,gBACT,uDAAuD,IAAI;;IAEnE;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAmB,8BAA3B,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,OAAL,IAAI;AACkC,QAA/B,AAAmB,6BAA3B,OAAO,UAA4B,IAAI;;AAEa,QAArD,WAAM,AAAQ,OAAD,gBAAgB,mBAAmB,IAAI;;IAExD;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAgB,AAAqB,gCAA7B,OAAO;IACjB;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,OAAL,IAAI;AACoC,QAAjC,AAAqB,+BAA7B,OAAO,UAA8B,IAAI;;AAEa,QAAvD,WAAM,AAAQ,OAAD,gBAAgB,qBAAqB,IAAI;;IAE1D;;;;EACF;;;;;;8BASuB,SAAsB;AACzC,YAAO,AAAO,uBAAgB,AAAoB,8BAA5B,OAAO;IAC/B;gCAEkD,SAAgB,MACjD,cAAiC;AAChD,UAAS,OAAL,IAAI;AACN;AAC0D,UAA/C,AAAoB,8BAA5B,OAAO,UAA6B,AAAO,sBAAO,IAAI;;;AACvD;AAEoD,YADpD,WAAM,AAAQ,OAAD,gBACT,2CAA2C,IAAI;;;;;AAID,QADpD,WAAM,AAAQ,OAAD,gBACT,2CAA2C,IAAI;;IAEvD;;;;EACF;;;;;0DAzlB+B;AACzB,gBAAQ,AAAQ,OAAD,eAAa;AAChC,UAAO,AAAM,MAAD,GAAG,IAAI,KAAK,AAAQ,OAAD,aAAW,AAAM,KAAD,GAAG;EACpD","file":"well_known.sound.ddc.js"}');
  // Exports:
  return {
    src__protobuf__mixins__well_known: well_known
  };
}));

//# sourceMappingURL=well_known.sound.ddc.js.map
