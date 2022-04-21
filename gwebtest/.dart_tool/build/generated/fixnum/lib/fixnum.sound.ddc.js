define(['dart_sdk'], (function load__packages__fixnum__fixnum(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var fixnum = Object.create(dart.library);
  var $codeUnitAt = dartx.codeUnitAt;
  var $rightShift = dartx['>>'];
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $leftShift = dartx['<<'];
  var $compareTo = dartx.compareTo;
  var $bitLength = dartx.bitLength;
  var $toSigned = dartx.toSigned;
  var $toUnsigned = dartx.toUnsigned;
  var $_set = dartx._set;
  var $toDouble = dartx.toDouble;
  var $toString = dartx.toString;
  var $toRadixString = dartx.toRadixString;
  var $_get = dartx._get;
  var $isNegative = dartx.isNegative;
  var $substring = dartx.substring;
  var $floorToDouble = dartx.floorToDouble;
  var $toInt = dartx.toInt;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: fixnum.Int32.prototype,
        [_i]: -1
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: fixnum.Int32.prototype,
        [_i]: 2147483647
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: fixnum.Int32.prototype,
        [_i]: -2147483648
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: fixnum.Int32.prototype,
        [_i]: 0
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: fixnum.Int32.prototype,
        [_i]: 1
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: fixnum.Int32.prototype,
        [_i]: 2
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: fixnum.Int64.prototype,
        [_h$]: 1048575,
        [_m$]: 4194303,
        [_l$]: 4194303
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: core.IntegerDivisionByZeroException.prototype
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: fixnum.Int64.prototype,
        [_h$]: 524287,
        [_m$]: 4194303,
        [_l$]: 4194303
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: fixnum.Int64.prototype,
        [_h$]: 524288,
        [_m$]: 0,
        [_l$]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: fixnum.Int64.prototype,
        [_h$]: 0,
        [_m$]: 0,
        [_l$]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: fixnum.Int64.prototype,
        [_h$]: 0,
        [_m$]: 0,
        [_l$]: 1
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: fixnum.Int64.prototype,
        [_h$]: 0,
        [_m$]: 0,
        [_l$]: 2
      });
    },
    get C13() {
      return C[13] = dart.constList([0, 0, 1048576, 531441, 1048576, 390625, 279936, 823543, 262144, 531441, 1000000, 161051, 248832, 371293, 537824, 759375, 1048576, 83521, 104976, 130321, 160000, 194481, 234256, 279841, 331776, 390625, 456976, 531441, 614656, 707281, 810000, 923521, 1048576, 35937, 39304, 42875, 46656], core.int);
    }
  }, false);
  var C = Array(14).fill(void 0);
  var I = [
    "package:fixnum/fixnum.dart",
    "org-dartlang-app:///packages/fixnum/src/int64.dart"
  ];
  fixnum.IntX = class IntX extends core.Object {};
  (fixnum.IntX.new = function() {
    ;
  }).prototype = fixnum.IntX.prototype;
  dart.addTypeTests(fixnum.IntX);
  dart.addTypeCaches(fixnum.IntX);
  fixnum.IntX[dart.implements] = () => [core.Comparable$(core.Object)];
  dart.setLibraryUri(fixnum.IntX, I[0]);
  var _i = dart.privateName(fixnum, "Int32._i");
  var _i$ = dart.privateName(fixnum, "_i");
  var _toInt = dart.privateName(fixnum, "_toInt");
  fixnum.Int32 = class Int32 extends core.Object {
    get [_i$]() {
      return this[_i];
    }
    set [_i$](value) {
      super[_i$] = value;
    }
    static _decodeDigit(c) {
      if (c >= 48 && c <= 57) {
        return c - 48;
      } else if (c >= 97 && c <= 122) {
        return c - 97 + 10;
      } else if (c >= 65 && c <= 90) {
        return c - 65 + 10;
      } else {
        return -1;
      }
    }
    static _validateRadix(radix) {
      if (2 <= radix && radix <= 36) return radix;
      dart.throw(new core.RangeError.range(radix, 2, 36, "radix"));
    }
    static parseRadix(s, radix) {
      fixnum.Int32._validateRadix(radix);
      let x = fixnum.Int32.ZERO;
      for (let i = 0; i < s.length; i = i + 1) {
        let c = s[$codeUnitAt](i);
        let digit = fixnum.Int32._decodeDigit(c);
        if (digit < 0 || digit >= radix) {
          dart.throw(new core.FormatException.new("Non-radix code unit: " + dart.str(c)));
        }
        x = fixnum.Int32.as(x['*'](radix)['+'](digit));
      }
      return x;
    }
    static parseInt(s) {
      return new fixnum.Int32.new(core.int.parse(s));
    }
    static parseHex(s) {
      return fixnum.Int32.parseRadix(s, 16);
    }
    static _bitCount(i) {
      i = i - (i[$rightShift](1) & 1431655765);
      i = (i & 858993459) + (i[$rightShift](2) & 858993459);
      i = i + i[$rightShift](4) & 252645135;
      i = i + i[$rightShift](8);
      i = i + i[$rightShift](16);
      return i & 63;
    }
    static _numberOfLeadingZeros(i) {
      i = (i | i[$rightShift](1)) >>> 0;
      i = (i | i[$rightShift](2)) >>> 0;
      i = (i | i[$rightShift](4)) >>> 0;
      i = (i | i[$rightShift](8)) >>> 0;
      i = (i | i[$rightShift](16)) >>> 0;
      return fixnum.Int32._bitCount(~i >>> 0);
    }
    static _numberOfTrailingZeros(i) {
      return fixnum.Int32._bitCount(((i & -i) >>> 0) - 1);
    }
    static ['_#_internal#tearOff'](i) {
      return new fixnum.Int32._internal(i);
    }
    static ['_#new#tearOff'](i = 0) {
      return new fixnum.Int32.new(i);
    }
    [_toInt](val) {
      if (fixnum.Int32.is(val)) {
        return val[_i$];
      } else if (core.int.is(val)) {
        return val;
      }
      dart.throw(new core.ArgumentError.new(val));
    }
    ['+'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['+'](other);
      }
      return new fixnum.Int32.new(this[_i$] + this[_toInt](other));
    }
    ['-'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['-'](other);
      }
      return new fixnum.Int32.new(this[_i$] - this[_toInt](other));
    }
    _negate() {
      return new fixnum.Int32.new(-this[_i$]);
    }
    ['*'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['*'](other);
      }
      return this.toInt64()['*'](other).toInt32();
    }
    ['%'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['%'](other).toInt32();
      }
      return new fixnum.Int32.new(this[_i$][$modulo](this[_toInt](other)));
    }
    ['~/'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['~/'](other).toInt32();
      }
      return new fixnum.Int32.new((this[_i$] / this[_toInt](other))[$truncate]());
    }
    remainder(other) {
      if (fixnum.Int64.is(other)) {
        let t = this.toInt64();
        return t['-'](t['~/'](other)['*'](other)).toInt32();
      }
      return fixnum.Int32.as(this['-'](this['~/'](other)['*'](other)));
    }
    ['&'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['&'](other).toInt32();
      }
      return new fixnum.Int32.new((this[_i$] & this[_toInt](other)) >>> 0);
    }
    ['|'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['|'](other).toInt32();
      }
      return new fixnum.Int32.new((this[_i$] | this[_toInt](other)) >>> 0);
    }
    ['^'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['^'](other).toInt32();
      }
      return new fixnum.Int32.new((this[_i$] ^ this[_toInt](other)) >>> 0);
    }
    ['~']() {
      return new fixnum.Int32.new(~this[_i$] >>> 0);
    }
    ['<<'](n) {
      if (n < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (n >= 32) {
        return fixnum.Int32.ZERO;
      }
      return new fixnum.Int32.new(this[_i$][$leftShift](n));
    }
    ['>>'](n) {
      if (n < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (n >= 32) {
        return this.isNegative ? C[0] || CT.C0 : fixnum.Int32.ZERO;
      }
      let value = null;
      if (this[_i$] >= 0) {
        value = this[_i$][$rightShift](n);
      } else {
        value = (this[_i$][$rightShift](n) | (4294967295)[$leftShift](32 - n)) >>> 0;
      }
      return new fixnum.Int32.new(value);
    }
    shiftRightUnsigned(n) {
      if (n < 0) {
        dart.throw(new core.ArgumentError.new(n));
      }
      if (n >= 32) {
        return fixnum.Int32.ZERO;
      }
      let value = null;
      if (this[_i$] >= 0) {
        value = this[_i$][$rightShift](n);
      } else {
        value = (this[_i$][$rightShift](n) & (1)[$leftShift](32 - n) - 1) >>> 0;
      }
      return new fixnum.Int32.new(value);
    }
    _equals(other) {
      if (other == null) return false;
      if (fixnum.Int32.is(other)) {
        return this[_i$] === other[_i$];
      } else if (fixnum.Int64.is(other)) {
        return this.toInt64()._equals(other);
      } else if (core.int.is(other)) {
        return this[_i$] === other;
      }
      return false;
    }
    compareTo(other) {
      core.Object.as(other);
      if (fixnum.Int64.is(other)) {
        return this.toInt64().compareTo(other);
      }
      return this[_i$][$compareTo](this[_toInt](other));
    }
    ['<'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['<'](other);
      }
      return this[_i$] < this[_toInt](other);
    }
    ['<='](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['<='](other);
      }
      return this[_i$] <= this[_toInt](other);
    }
    ['>'](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['>'](other);
      }
      return this[_i$] > this[_toInt](other);
    }
    ['>='](other) {
      if (fixnum.Int64.is(other)) {
        return this.toInt64()['>='](other);
      }
      return this[_i$] >= this[_toInt](other);
    }
    get isEven() {
      return (this[_i$] & 1) === 0;
    }
    get isMaxValue() {
      return this[_i$] === 2147483647;
    }
    get isMinValue() {
      return this[_i$] === -2147483648;
    }
    get isNegative() {
      return this[_i$] < 0;
    }
    get isOdd() {
      return (this[_i$] & 1) === 1;
    }
    get isZero() {
      return this[_i$] === 0;
    }
    get bitLength() {
      return this[_i$][$bitLength];
    }
    get hashCode() {
      return this[_i$];
    }
    abs() {
      return this[_i$] < 0 ? new fixnum.Int32.new(-this[_i$]) : this;
    }
    clamp(lowerLimit, upperLimit) {
      if (this['<'](lowerLimit)) {
        if (fixnum.IntX.is(lowerLimit)) return lowerLimit.toInt32();
        if (core.int.is(lowerLimit)) return new fixnum.Int32.new(lowerLimit);
        dart.throw(new core.ArgumentError.new(lowerLimit));
      } else if (this['>'](upperLimit)) {
        if (fixnum.IntX.is(upperLimit)) return upperLimit.toInt32();
        if (core.int.is(upperLimit)) return new fixnum.Int32.new(upperLimit);
        dart.throw(new core.ArgumentError.new(upperLimit));
      }
      return this;
    }
    numberOfLeadingZeros() {
      return fixnum.Int32._numberOfLeadingZeros(this[_i$]);
    }
    numberOfTrailingZeros() {
      return fixnum.Int32._numberOfTrailingZeros(this[_i$]);
    }
    toSigned(width) {
      if (width < 1 || width > 32) dart.throw(new core.RangeError.range(width, 1, 32));
      return new fixnum.Int32.new(this[_i$][$toSigned](width));
    }
    toUnsigned(width) {
      if (width < 0 || width > 32) dart.throw(new core.RangeError.range(width, 0, 32));
      return new fixnum.Int32.new(this[_i$][$toUnsigned](width));
    }
    toBytes() {
      let result = T.ListOfint().filled(4, 0);
      result[$_set](0, this[_i$] & 255);
      result[$_set](1, this[_i$] >> 8 & 255);
      result[$_set](2, this[_i$] >> 16 & 255);
      result[$_set](3, this[_i$][$rightShift](24) & 255);
      return result;
    }
    toDouble() {
      return this[_i$][$toDouble]();
    }
    toInt() {
      return this[_i$];
    }
    toInt32() {
      return this;
    }
    toInt64() {
      return fixnum.Int64.new(this[_i$]);
    }
    toString() {
      return this[_i$][$toString]();
    }
    toHexString() {
      return this[_i$][$toRadixString](16);
    }
    toRadixString(radix) {
      return this[_i$][$toRadixString](radix);
    }
  };
  (fixnum.Int32._internal = function(i) {
    this[_i] = i;
    ;
  }).prototype = fixnum.Int32.prototype;
  (fixnum.Int32.new = function(i = 0) {
    this[_i] = (i & 2147483647) - ((i & 2147483648) >>> 0);
    ;
  }).prototype = fixnum.Int32.prototype;
  dart.addTypeTests(fixnum.Int32);
  dart.addTypeCaches(fixnum.Int32);
  fixnum.Int32[dart.implements] = () => [fixnum.IntX];
  dart.setMethodSignature(fixnum.Int32, () => ({
    __proto__: dart.getMethods(fixnum.Int32.__proto__),
    [_toInt]: dart.fnType(core.int, [core.Object]),
    '+': dart.fnType(fixnum.IntX, [core.Object]),
    '-': dart.fnType(fixnum.IntX, [core.Object]),
    _negate: dart.fnType(fixnum.Int32, []),
    '*': dart.fnType(fixnum.IntX, [core.Object]),
    '%': dart.fnType(fixnum.Int32, [core.Object]),
    '~/': dart.fnType(fixnum.Int32, [core.Object]),
    remainder: dart.fnType(fixnum.Int32, [core.Object]),
    '&': dart.fnType(fixnum.Int32, [core.Object]),
    '|': dart.fnType(fixnum.Int32, [core.Object]),
    '^': dart.fnType(fixnum.Int32, [core.Object]),
    '~': dart.fnType(fixnum.Int32, []),
    '<<': dart.fnType(fixnum.Int32, [core.int]),
    '>>': dart.fnType(fixnum.Int32, [core.int]),
    shiftRightUnsigned: dart.fnType(fixnum.Int32, [core.int]),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    '<': dart.fnType(core.bool, [core.Object]),
    '<=': dart.fnType(core.bool, [core.Object]),
    '>': dart.fnType(core.bool, [core.Object]),
    '>=': dart.fnType(core.bool, [core.Object]),
    abs: dart.fnType(fixnum.Int32, []),
    clamp: dart.fnType(fixnum.Int32, [core.Object, core.Object]),
    numberOfLeadingZeros: dart.fnType(core.int, []),
    numberOfTrailingZeros: dart.fnType(core.int, []),
    toSigned: dart.fnType(fixnum.Int32, [core.int]),
    toUnsigned: dart.fnType(fixnum.Int32, [core.int]),
    toBytes: dart.fnType(core.List$(core.int), []),
    toDouble: dart.fnType(core.double, []),
    toInt: dart.fnType(core.int, []),
    toInt32: dart.fnType(fixnum.Int32, []),
    toInt64: dart.fnType(fixnum.Int64, []),
    toHexString: dart.fnType(core.String, []),
    toRadixString: dart.fnType(core.String, [core.int])
  }));
  dart.setStaticMethodSignature(fixnum.Int32, () => ['_decodeDigit', '_validateRadix', 'parseRadix', 'parseInt', 'parseHex', '_bitCount', '_numberOfLeadingZeros', '_numberOfTrailingZeros']);
  dart.setGetterSignature(fixnum.Int32, () => ({
    __proto__: dart.getGetters(fixnum.Int32.__proto__),
    isEven: core.bool,
    isMaxValue: core.bool,
    isMinValue: core.bool,
    isNegative: core.bool,
    isOdd: core.bool,
    isZero: core.bool,
    bitLength: core.int
  }));
  dart.setLibraryUri(fixnum.Int32, I[0]);
  dart.setFieldSignature(fixnum.Int32, () => ({
    __proto__: dart.getFields(fixnum.Int32.__proto__),
    [_i$]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(fixnum.Int32, () => ['MAX_VALUE', 'MIN_VALUE', 'ZERO', 'ONE', 'TWO', '_CC_0', '_CC_9', '_CC_a', '_CC_z', '_CC_A', '_CC_Z']);
  dart.defineExtensionMethods(fixnum.Int32, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(fixnum.Int32, ['hashCode']);
  dart.defineLazy(fixnum.Int32, {
    /*fixnum.Int32.MAX_VALUE*/get MAX_VALUE() {
      return C[1] || CT.C1;
    },
    /*fixnum.Int32.MIN_VALUE*/get MIN_VALUE() {
      return C[2] || CT.C2;
    },
    /*fixnum.Int32.ZERO*/get ZERO() {
      return C[3] || CT.C3;
    },
    /*fixnum.Int32.ONE*/get ONE() {
      return C[4] || CT.C4;
    },
    /*fixnum.Int32.TWO*/get TWO() {
      return C[5] || CT.C5;
    },
    /*fixnum.Int32._CC_0*/get _CC_0() {
      return 48;
    },
    /*fixnum.Int32._CC_9*/get _CC_9() {
      return 57;
    },
    /*fixnum.Int32._CC_a*/get _CC_a() {
      return 97;
    },
    /*fixnum.Int32._CC_z*/get _CC_z() {
      return 122;
    },
    /*fixnum.Int32._CC_A*/get _CC_A() {
      return 65;
    },
    /*fixnum.Int32._CC_Z*/get _CC_Z() {
      return 90;
    }
  }, false);
  var _l$ = dart.privateName(fixnum, "Int64._l");
  var _m$ = dart.privateName(fixnum, "Int64._m");
  var _h$ = dart.privateName(fixnum, "Int64._h");
  var _l = dart.privateName(fixnum, "_l");
  var _m = dart.privateName(fixnum, "_m");
  var _h = dart.privateName(fixnum, "_h");
  var _compareTo = dart.privateName(fixnum, "_compareTo");
  var _toRadixString = dart.privateName(fixnum, "_toRadixString");
  var _hexDigit = dart.privateName(fixnum, "_hexDigit");
  fixnum.Int64 = class Int64 extends core.Object {
    get [_l]() {
      return this[_l$];
    }
    set [_l](value) {
      super[_l] = value;
    }
    get [_m]() {
      return this[_m$];
    }
    set [_m](value) {
      super[_m] = value;
    }
    get [_h]() {
      return this[_h$];
    }
    set [_h](value) {
      super[_h] = value;
    }
    static ['_#_bits#tearOff'](_l, _m, _h) {
      return new fixnum.Int64._bits(_l, _m, _h);
    }
    static parseRadix(s, radix) {
      return fixnum.Int64._parseRadix(s, fixnum.Int32._validateRadix(radix));
    }
    static _parseRadix(s, radix) {
      let i = 0;
      let negative = false;
      if (i < s.length && s[$_get](0) === "-") {
        negative = true;
        i = i + 1;
      }
      if (!(i < s.length)) {
        dart.throw(new core.FormatException.new("No digits in '" + s + "'"));
      }
      let d0 = 0;
      let d1 = 0;
      let d2 = 0;
      for (; i < s.length; i = i + 1) {
        let c = s[$codeUnitAt](i);
        let digit = fixnum.Int32._decodeDigit(c);
        if (digit < 0 || digit >= radix) {
          dart.throw(new core.FormatException.new("Non-radix char code: " + dart.str(c)));
        }
        d0 = d0 * radix + digit;
        let carry = d0[$rightShift](22);
        d0 = (4194303 & d0) >>> 0;
        d1 = d1 * radix + carry;
        carry = d1[$rightShift](22);
        d1 = (4194303 & d1) >>> 0;
        d2 = d2 * radix + carry;
        d2 = (1048575 & d2) >>> 0;
      }
      if (negative) return fixnum.Int64._negate(d0, d1, d2);
      return fixnum.Int64._masked(d0, d1, d2);
    }
    static parseInt(s) {
      return fixnum.Int64._parseRadix(s, 10);
    }
    static parseHex(s) {
      return fixnum.Int64._parseRadix(s, 16);
    }
    static ['_#new#tearOff'](value = 0) {
      return fixnum.Int64.new(value);
    }
    static new(value = 0) {
      let v0 = 0;
      let v1 = 0;
      let v2 = 0;
      let negative = false;
      if (value < 0) {
        negative = true;
        value = -value;
      }
      v2 = (value / 17592186044416)[$truncate]();
      value = value - v2 * 17592186044416;
      v1 = (value / 4194304)[$truncate]();
      value = value - v1 * 4194304;
      v0 = value;
      return negative ? fixnum.Int64._negate((4194303 & v0) >>> 0, (4194303 & v1) >>> 0, (1048575 & v2) >>> 0) : fixnum.Int64._masked(v0, v1, v2);
    }
    static ['_#fromBytes#tearOff'](bytes) {
      return fixnum.Int64.fromBytes(bytes);
    }
    static fromBytes(bytes) {
      let top = bytes[$_get](7) & 255;
      top = top << 8 >>> 0;
      top = (top | bytes[$_get](6) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | bytes[$_get](5) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | bytes[$_get](4) & 255) >>> 0;
      let bottom = bytes[$_get](3) & 255;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | bytes[$_get](2) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | bytes[$_get](1) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | bytes[$_get](0) & 255) >>> 0;
      return fixnum.Int64.fromInts(top, bottom);
    }
    static ['_#fromBytesBigEndian#tearOff'](bytes) {
      return fixnum.Int64.fromBytesBigEndian(bytes);
    }
    static fromBytesBigEndian(bytes) {
      let top = bytes[$_get](0) & 255;
      top = top << 8 >>> 0;
      top = (top | bytes[$_get](1) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | bytes[$_get](2) & 255) >>> 0;
      top = top << 8 >>> 0;
      top = (top | bytes[$_get](3) & 255) >>> 0;
      let bottom = bytes[$_get](4) & 255;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | bytes[$_get](5) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | bytes[$_get](6) & 255) >>> 0;
      bottom = bottom << 8 >>> 0;
      bottom = (bottom | bytes[$_get](7) & 255) >>> 0;
      return fixnum.Int64.fromInts(top, bottom);
    }
    static ['_#fromInts#tearOff'](top, bottom) {
      return fixnum.Int64.fromInts(top, bottom);
    }
    static fromInts(top, bottom) {
      top = (top & 4294967295) >>> 0;
      bottom = (bottom & 4294967295) >>> 0;
      let d0 = (4194303 & bottom) >>> 0;
      let d1 = (4095 & top) << 10 | 1023 & bottom[$rightShift](22);
      let d2 = (1048575 & top[$rightShift](12)) >>> 0;
      return fixnum.Int64._masked(d0, d1, d2);
    }
    static _promote(value) {
      if (fixnum.Int64.is(value)) {
        return value;
      } else if (core.int.is(value)) {
        return fixnum.Int64.new(value);
      } else if (fixnum.Int32.is(value)) {
        return value.toInt64();
      }
      dart.throw(new core.ArgumentError.value(value));
    }
    ['+'](other) {
      let o = fixnum.Int64._promote(other);
      let sum0 = this[_l] + o[_l];
      let sum1 = this[_m] + o[_m] + sum0[$rightShift](22);
      let sum2 = this[_h] + o[_h] + sum1[$rightShift](22);
      return fixnum.Int64._masked(sum0, sum1, sum2);
    }
    ['-'](other) {
      let o = fixnum.Int64._promote(other);
      return fixnum.Int64._sub(this[_l], this[_m], this[_h], o[_l], o[_m], o[_h]);
    }
    _negate() {
      return fixnum.Int64._negate(this[_l], this[_m], this[_h]);
    }
    ['*'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = this[_l] & 8191;
      let a1 = (this[_l][$rightShift](13) | (this[_m] & 15) << 9) >>> 0;
      let a2 = this[_m] >> 4 & 8191;
      let a3 = (this[_m][$rightShift](17) | (this[_h] & 255) << 5) >>> 0;
      let a4 = (this[_h] & 1048320) >> 8;
      let b0 = o[_l] & 8191;
      let b1 = (o[_l][$rightShift](13) | (o[_m] & 15) << 9) >>> 0;
      let b2 = o[_m] >> 4 & 8191;
      let b3 = (o[_m][$rightShift](17) | (o[_h] & 255) << 5) >>> 0;
      let b4 = (o[_h] & 1048320) >> 8;
      let p0 = a0 * b0;
      let p1 = a1 * b0;
      let p2 = a2 * b0;
      let p3 = a3 * b0;
      let p4 = a4 * b0;
      if (b1 !== 0) {
        p1 = p1 + a0 * b1;
        p2 = p2 + a1 * b1;
        p3 = p3 + a2 * b1;
        p4 = p4 + a3 * b1;
      }
      if (b2 !== 0) {
        p2 = p2 + a0 * b2;
        p3 = p3 + a1 * b2;
        p4 = p4 + a2 * b2;
      }
      if (b3 !== 0) {
        p3 = p3 + a0 * b3;
        p4 = p4 + a1 * b3;
      }
      if (b4 !== 0) {
        p4 = p4 + a0 * b4;
      }
      let c00 = p0 & 4194303;
      let c01 = (p1 & 511) << 13;
      let c0 = c00 + c01;
      let c10 = p0[$rightShift](22);
      let c11 = p1[$rightShift](9);
      let c12 = (p2 & 262143) << 4;
      let c13 = (p3 & 31) << 17;
      let c1 = c10 + c11 + c12 + c13;
      let c22 = p2[$rightShift](18);
      let c23 = p3[$rightShift](5);
      let c24 = (p4 & 4095) << 8;
      let c2 = c22 + c23 + c24;
      c1 = c1 + c0[$rightShift](22);
      c2 = c2 + c1[$rightShift](22);
      return fixnum.Int64._masked(c0, c1, c2);
    }
    ['%'](other) {
      return fixnum.Int64._divide(this, other, 3);
    }
    ['~/'](other) {
      return fixnum.Int64._divide(this, other, 1);
    }
    remainder(other) {
      return fixnum.Int64._divide(this, other, 2);
    }
    ['&'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (this[_l] & o[_l]) >>> 0;
      let a1 = (this[_m] & o[_m]) >>> 0;
      let a2 = (this[_h] & o[_h]) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['|'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (this[_l] | o[_l]) >>> 0;
      let a1 = (this[_m] | o[_m]) >>> 0;
      let a2 = (this[_h] | o[_h]) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['^'](other) {
      let o = fixnum.Int64._promote(other);
      let a0 = (this[_l] ^ o[_l]) >>> 0;
      let a1 = (this[_m] ^ o[_m]) >>> 0;
      let a2 = (this[_h] ^ o[_h]) >>> 0;
      return fixnum.Int64._masked(a0, a1, a2);
    }
    ['~']() {
      return fixnum.Int64._masked(~this[_l] >>> 0, ~this[_m] >>> 0, ~this[_h] >>> 0);
    }
    ['<<'](n) {
      if (n < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (n >= 64) {
        return fixnum.Int64.ZERO;
      }
      let res0 = null;
      let res1 = null;
      let res2 = null;
      if (n < 22) {
        res0 = this[_l][$leftShift](n);
        res1 = (this[_m][$leftShift](n) | this[_l][$rightShift](22 - n)) >>> 0;
        res2 = (this[_h][$leftShift](n) | this[_m][$rightShift](22 - n)) >>> 0;
      } else if (n < 44) {
        res0 = 0;
        res1 = this[_l][$leftShift](n - 22);
        res2 = (this[_m][$leftShift](n - 22) | this[_l][$rightShift](44 - n)) >>> 0;
      } else {
        res0 = 0;
        res1 = 0;
        res2 = this[_l][$leftShift](n - 44);
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    ['>>'](n) {
      if (n < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (n >= 64) {
        return this.isNegative ? C[6] || CT.C6 : fixnum.Int64.ZERO;
      }
      let res0 = null;
      let res1 = null;
      let res2 = null;
      let a2 = this[_h];
      let negative = (a2 & 524288) !== 0;
      if (negative && 4194303 > 1048575) {
        a2 = a2 + (4194303 - 1048575);
      }
      if (n < 22) {
        res2 = fixnum.Int64._shiftRight(a2, n);
        if (negative) {
          res2 = (res2 | (1048575 & ~(1048575)[$rightShift](n) >>> 0) >>> 0) >>> 0;
        }
        res1 = (fixnum.Int64._shiftRight(this[_m], n) | a2[$leftShift](22 - n)) >>> 0;
        res0 = (fixnum.Int64._shiftRight(this[_l], n) | this[_m][$leftShift](22 - n)) >>> 0;
      } else if (n < 44) {
        res2 = negative ? 1048575 : 0;
        res1 = fixnum.Int64._shiftRight(a2, n - 22);
        if (negative) {
          res1 = (res1 | (4194303 & ~(4194303)[$rightShift](n - 22) >>> 0) >>> 0) >>> 0;
        }
        res0 = (fixnum.Int64._shiftRight(this[_m], n - 22) | a2[$leftShift](44 - n)) >>> 0;
      } else {
        res2 = negative ? 1048575 : 0;
        res1 = negative ? 4194303 : 0;
        res0 = fixnum.Int64._shiftRight(a2, n - 44);
        if (negative) {
          res0 = (res0 | (4194303 & ~(4194303)[$rightShift](n - 44) >>> 0) >>> 0) >>> 0;
        }
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    shiftRightUnsigned(n) {
      if (n < 0) {
        dart.throw(new core.ArgumentError.value(n));
      }
      if (n >= 64) {
        return fixnum.Int64.ZERO;
      }
      let res0 = null;
      let res1 = null;
      let res2 = null;
      let a2 = (1048575 & this[_h]) >>> 0;
      if (n < 22) {
        res2 = a2[$rightShift](n);
        res1 = (this[_m][$rightShift](n) | a2[$leftShift](22 - n)) >>> 0;
        res0 = (this[_l][$rightShift](n) | this[_m][$leftShift](22 - n)) >>> 0;
      } else if (n < 44) {
        res2 = 0;
        res1 = a2[$rightShift](n - 22);
        res0 = (this[_m][$rightShift](n - 22) | this[_h][$leftShift](44 - n)) >>> 0;
      } else {
        res2 = 0;
        res1 = 0;
        res0 = a2[$rightShift](n - 44);
      }
      return fixnum.Int64._masked(res0, res1, res2);
    }
    _equals(other) {
      if (other == null) return false;
      let o = null;
      if (fixnum.Int64.is(other)) {
        o = other;
      } else if (core.int.is(other)) {
        if (this[_h] === 0 && this[_m] === 0) return this[_l] === other;
        if ((4194303 & other) >>> 0 === other) return false;
        o = fixnum.Int64.new(other);
      } else if (fixnum.Int32.is(other)) {
        o = other.toInt64();
      }
      if (o != null) {
        return this[_l] === o[_l] && this[_m] === o[_m] && this[_h] === o[_h];
      }
      return false;
    }
    compareTo(other) {
      core.Object.as(other);
      return this[_compareTo](other);
    }
    [_compareTo](other) {
      let o = fixnum.Int64._promote(other);
      let signa = this[_h][$rightShift](20 - 1);
      let signb = o[_h][$rightShift](20 - 1);
      if (signa !== signb) {
        return signa === 0 ? 1 : -1;
      }
      if (this[_h] > o[_h]) {
        return 1;
      } else if (this[_h] < o[_h]) {
        return -1;
      }
      if (this[_m] > o[_m]) {
        return 1;
      } else if (this[_m] < o[_m]) {
        return -1;
      }
      if (this[_l] > o[_l]) {
        return 1;
      } else if (this[_l] < o[_l]) {
        return -1;
      }
      return 0;
    }
    ['<'](other) {
      return this[_compareTo](other) < 0;
    }
    ['<='](other) {
      return this[_compareTo](other) <= 0;
    }
    ['>'](other) {
      return this[_compareTo](other) > 0;
    }
    ['>='](other) {
      return this[_compareTo](other) >= 0;
    }
    get isEven() {
      return (this[_l] & 1) === 0;
    }
    get isMaxValue() {
      return this[_h] === (1048575)[$rightShift](1) && this[_m] === 4194303 && this[_l] === 4194303;
    }
    get isMinValue() {
      return this[_h] === 524288 && this[_m] === 0 && this[_l] === 0;
    }
    get isNegative() {
      return (this[_h] & 524288) !== 0;
    }
    get isOdd() {
      return (this[_l] & 1) === 1;
    }
    get isZero() {
      return this[_h] === 0 && this[_m] === 0 && this[_l] === 0;
    }
    get bitLength() {
      if (this.isZero) return 0;
      let a0 = this[_l];
      let a1 = this[_m];
      let a2 = this[_h];
      if (this.isNegative) {
        a0 = (4194303 & ~a0 >>> 0) >>> 0;
        a1 = (4194303 & ~a1 >>> 0) >>> 0;
        a2 = (1048575 & ~a2 >>> 0) >>> 0;
      }
      if (a2 !== 0) return 44 + a2[$bitLength];
      if (a1 !== 0) return 22 + a1[$bitLength];
      return a0[$bitLength];
    }
    get hashCode() {
      let bottom = ((this[_m] & 1023)[$leftShift](22) | this[_l]) >>> 0;
      let top = (this[_h] << 12 | this[_m] >> 10 & 4095) >>> 0;
      return (bottom ^ top) >>> 0;
    }
    abs() {
      return this.isNegative ? this._negate() : this;
    }
    clamp(lowerLimit, upperLimit) {
      let lower = fixnum.Int64._promote(lowerLimit);
      let upper = fixnum.Int64._promote(upperLimit);
      if (this['<'](lower)) return lower;
      if (this['>'](upper)) return upper;
      return this;
    }
    numberOfLeadingZeros() {
      let b2 = fixnum.Int32._numberOfLeadingZeros(this[_h]);
      if (b2 === 32) {
        let b1 = fixnum.Int32._numberOfLeadingZeros(this[_m]);
        if (b1 === 32) {
          return fixnum.Int32._numberOfLeadingZeros(this[_l]) + 32;
        } else {
          return b1 + 20 - (32 - 22);
        }
      } else {
        return b2 - (32 - 20);
      }
    }
    numberOfTrailingZeros() {
      let zeros = fixnum.Int32._numberOfTrailingZeros(this[_l]);
      if (zeros < 32) {
        return zeros;
      }
      zeros = fixnum.Int32._numberOfTrailingZeros(this[_m]);
      if (zeros < 32) {
        return 22 + zeros;
      }
      zeros = fixnum.Int32._numberOfTrailingZeros(this[_h]);
      if (zeros < 32) {
        return 44 + zeros;
      }
      return 64;
    }
    toSigned(width) {
      if (width < 1 || width > 64) dart.throw(new core.RangeError.range(width, 1, 64));
      if (width > 44) {
        return fixnum.Int64._masked(this[_l], this[_m], this[_h][$toSigned](width - 44));
      } else if (width > 22) {
        let m = this[_m][$toSigned](width - 22);
        return m[$isNegative] ? fixnum.Int64._masked(this[_l], m, 1048575) : fixnum.Int64._masked(this[_l], m, 0);
      } else {
        let l = this[_l][$toSigned](width);
        return l[$isNegative] ? fixnum.Int64._masked(l, 4194303, 1048575) : fixnum.Int64._masked(l, 0, 0);
      }
    }
    toUnsigned(width) {
      if (width < 0 || width > 64) dart.throw(new core.RangeError.range(width, 0, 64));
      if (width > 44) {
        let h = this[_h][$toUnsigned](width - 44);
        return fixnum.Int64._masked(this[_l], this[_m], h);
      } else if (width > 22) {
        let m = this[_m][$toUnsigned](width - 22);
        return fixnum.Int64._masked(this[_l], m, 0);
      } else {
        let l = this[_l][$toUnsigned](width);
        return fixnum.Int64._masked(l, 0, 0);
      }
    }
    toBytes() {
      let result = T.ListOfint().filled(8, 0);
      result[$_set](0, this[_l] & 255);
      result[$_set](1, this[_l] >> 8 & 255);
      result[$_set](2, this[_m] << 6 & 252 | this[_l] >> 16 & 63);
      result[$_set](3, this[_m] >> 2 & 255);
      result[$_set](4, this[_m] >> 10 & 255);
      result[$_set](5, this[_h] << 4 & 240 | this[_m] >> 18 & 15);
      result[$_set](6, this[_h] >> 4 & 255);
      result[$_set](7, this[_h] >> 12 & 255);
      return result;
    }
    toDouble() {
      return this.toInt()[$toDouble]();
    }
    toInt() {
      let l = this[_l];
      let m = this[_m];
      let h = this[_h];
      if ((this[_h] & 524288) !== 0) {
        l = (4194303 & ~this[_l] >>> 0) >>> 0;
        m = (4194303 & ~this[_m] >>> 0) >>> 0;
        h = (1048575 & ~this[_h] >>> 0) >>> 0;
        return -(1 + l + 4194304 * m + 17592186044416 * h);
      } else {
        return l + 4194304 * m + 17592186044416 * h;
      }
    }
    toInt32() {
      return new fixnum.Int32.new(((this[_m] & 1023)[$leftShift](22) | this[_l]) >>> 0);
    }
    toInt64() {
      return this;
    }
    toString() {
      return this[_toRadixString](10);
    }
    toHexString() {
      if (this.isZero) return "0";
      let x = this;
      let hexStr = "";
      while (!x.isZero) {
        let digit = x[_l] & 15;
        hexStr = this[_hexDigit](digit) + hexStr;
        x = x.shiftRightUnsigned(4);
      }
      return hexStr;
    }
    toStringUnsigned() {
      return fixnum.Int64._toRadixStringUnsigned(10, this[_l], this[_m], this[_h], "");
    }
    toRadixStringUnsigned(radix) {
      return fixnum.Int64._toRadixStringUnsigned(fixnum.Int32._validateRadix(radix), this[_l], this[_m], this[_h], "");
    }
    toRadixString(radix) {
      return this[_toRadixString](fixnum.Int32._validateRadix(radix));
    }
    [_toRadixString](radix) {
      let d0 = this[_l];
      let d1 = this[_m];
      let d2 = this[_h];
      let sign = "";
      if ((d2 & 524288) !== 0) {
        sign = "-";
        d0 = 0 - d0;
        let borrow = d0[$rightShift](22) & 1;
        d0 = (d0 & 4194303) >>> 0;
        d1 = 0 - d1 - borrow;
        borrow = d1[$rightShift](22) & 1;
        d1 = (d1 & 4194303) >>> 0;
        d2 = 0 - d2 - borrow;
        d2 = (d2 & 1048575) >>> 0;
      }
      return fixnum.Int64._toRadixStringUnsigned(radix, d0, d1, d2, sign);
    }
    static _toRadixStringUnsigned(radix, d0, d1, d2, sign) {
      if (d0 === 0 && d1 === 0 && d2 === 0) return "0";
      let d4 = (d2 << 4 | d1[$rightShift](18)) >>> 0;
      let d3 = d1 >> 8 & 1023;
      d2 = (d1 << 2 | d0[$rightShift](20)) & 1023;
      d1 = d0 >> 10 & 1023;
      d0 = d0 & 1023;
      let fatRadix = fixnum.Int64._fatRadixTable[$_get](radix);
      let chunk1 = "";
      let chunk2 = "";
      let chunk3 = "";
      while (!(d4 === 0 && d3 === 0)) {
        let q = (d4 / fatRadix)[$truncate]();
        let r = d4 - q * fatRadix;
        d4 = q;
        d3 = d3 + (r << 10 >>> 0);
        q = (d3 / fatRadix)[$truncate]();
        r = d3 - q * fatRadix;
        d3 = q;
        d2 = d2 + (r << 10 >>> 0);
        q = (d2 / fatRadix)[$truncate]();
        r = d2 - q * fatRadix;
        d2 = q;
        d1 = d1 + (r << 10 >>> 0);
        q = (d1 / fatRadix)[$truncate]();
        r = d1 - q * fatRadix;
        d1 = q;
        d0 = d0 + (r << 10 >>> 0);
        q = (d0 / fatRadix)[$truncate]();
        r = d0 - q * fatRadix;
        d0 = q;
        if (!(chunk3 === "")) dart.assertFailed(null, I[1], 797, 14, "chunk3 == ''");
        chunk3 = chunk2;
        chunk2 = chunk1;
        chunk1 = (fatRadix + r)[$toRadixString](radix)[$substring](1);
      }
      let residue = (d2 << 20 >>> 0) + (d1 << 10 >>> 0) + d0;
      let leadingDigits = residue === 0 ? "" : residue[$toRadixString](radix);
      return sign + leadingDigits + chunk1 + chunk2 + chunk3;
    }
    toDebugString() {
      return "Int64[_l=" + dart.str(this[_l]) + ", _m=" + dart.str(this[_m]) + ", _h=" + dart.str(this[_h]) + "]";
    }
    static _masked(a0, a1, a2) {
      return new fixnum.Int64._bits((4194303 & a0) >>> 0, (4194303 & a1) >>> 0, (1048575 & a2) >>> 0);
    }
    static _sub(a0, a1, a2, b0, b1, b2) {
      let diff0 = a0 - b0;
      let diff1 = a1 - b1 - (diff0[$rightShift](22) & 1);
      let diff2 = a2 - b2 - (diff1[$rightShift](22) & 1);
      return fixnum.Int64._masked(diff0, diff1, diff2);
    }
    static _negate(b0, b1, b2) {
      return fixnum.Int64._sub(0, 0, 0, b0, b1, b2);
    }
    [_hexDigit](digit) {
      return "0123456789ABCDEF"[$_get](digit);
    }
    static _shiftRight(x, n) {
      if (x >= 0) {
        return x[$rightShift](n);
      } else {
        let shifted = x[$rightShift](n);
        if (shifted >= 2147483648) {
          shifted = shifted - 4294967296;
        }
        return shifted;
      }
    }
    static _divide(a, other, what) {
      let b = fixnum.Int64._promote(other);
      if (b.isZero) {
        dart.throw(C[7] || CT.C7);
      }
      if (a.isZero) return fixnum.Int64.ZERO;
      let aNeg = a.isNegative;
      let bNeg = b.isNegative;
      a = a.abs();
      b = b.abs();
      let a0 = a[_l];
      let a1 = a[_m];
      let a2 = a[_h];
      let b0 = b[_l];
      let b1 = b[_m];
      let b2 = b[_h];
      return fixnum.Int64._divideHelper(a0, a1, a2, aNeg, b0, b1, b2, bNeg, what);
    }
    static _divideHelper(a0, a1, a2, aNeg, b0, b1, b2, bNeg, what) {
      let q0 = 0;
      let q1 = 0;
      let q2 = 0;
      let r0 = 0;
      let r1 = 0;
      let r2 = 0;
      if (b2 === 0 && b1 === 0 && b0 < (1)[$leftShift](30 - 22)) {
        q2 = (a2 / b0)[$truncate]();
        let carry = a2 - q2 * b0;
        let d1 = a1 + carry[$leftShift](22);
        q1 = (d1 / b0)[$truncate]();
        carry = d1 - q1 * b0;
        let d0 = a0 + carry[$leftShift](22);
        q0 = (d0 / b0)[$truncate]();
        r0 = d0 - q0 * b0;
      } else {
        let ad = a0 + 4194304 * a1 + 17592186044416.0 * a2;
        let bd = b0 + 4194304 * b1 + 17592186044416.0 * b2;
        let qd = (ad / bd)[$floorToDouble]();
        let q2d = (qd / 17592186044416.0)[$floorToDouble]();
        qd = qd - 17592186044416.0 * q2d;
        let q1d = (qd / 4194304)[$floorToDouble]();
        let q0d = qd - 4194304 * q1d;
        q2 = q2d[$toInt]();
        q1 = q1d[$toInt]();
        q0 = q0d[$toInt]();
        if (!(q0 + 4194304 * q1 + 17592186044416.0 * q2 === (ad / bd)[$floorToDouble]())) dart.assertFailed(null, I[1], 991, 14, "q0 + K1 * q1 + K2 * q2 == (ad / bd).floorToDouble()");
        if (!(q2 === 0 || b2 === 0)) dart.assertFailed(null, I[1], 992, 14, "q2 == 0 || b2 == 0");
        let p0d = q0d * b0;
        let p0carry = (p0d / 4194304)[$floorToDouble]();
        p0d = p0d - p0carry * 4194304;
        let p1d = q1d * b0 + q0d * b1 + p0carry;
        let p1carry = (p1d / 4194304)[$floorToDouble]();
        p1d = p1d - p1carry * 4194304;
        let p2d = q2d * b0 + q1d * b1 + q0d * b2 + p1carry;
        if (!(p2d <= 1048575)) dart.assertFailed(null, I[1], 1003, 14, "p2d <= _MASK2");
        let diff0 = a0 - p0d[$toInt]();
        let diff1 = a1 - p1d[$toInt]() - (diff0[$rightShift](22) & 1);
        let diff2 = a2 - p2d[$toInt]() - (diff1[$rightShift](22) & 1);
        r0 = (4194303 & diff0) >>> 0;
        r1 = (4194303 & diff1) >>> 0;
        r2 = (1048575 & diff2) >>> 0;
        while (r2 >= 524288 || r2 > b2 || r2 === b2 && (r1 > b1 || r1 === b1 && r0 >= b0)) {
          let m = (r2 & 524288) === 0 ? 1 : -1;
          let d0 = r0 - m * b0;
          let d1 = r1 - m * (b1 + (d0[$rightShift](22) & 1));
          let d2 = r2 - m * (b2 + (d1[$rightShift](22) & 1));
          r0 = (4194303 & d0) >>> 0;
          r1 = (4194303 & d1) >>> 0;
          r2 = (1048575 & d2) >>> 0;
          d0 = q0 + m;
          d1 = q1 + m * (d0[$rightShift](22) & 1);
          d2 = q2 + m * (d1[$rightShift](22) & 1);
          q0 = (4194303 & d0) >>> 0;
          q1 = (4194303 & d1) >>> 0;
          q2 = (1048575 & d2) >>> 0;
        }
      }
      if (!fixnum.Int64.ZERO['<='](new fixnum.Int64._bits(r0, r1, r2))) dart.assertFailed(null, I[1], 1039, 12, "Int64.ZERO <= Int64._bits(r0, r1, r2)");
      if (!(r2 < b2 || new fixnum.Int64._bits(r0, r1, r2)['<'](new fixnum.Int64._bits(b0, b1, b2)))) dart.assertFailed(null, I[1], 1040, 12, "r2 < b2 || // Handles case where B = -(MIN_VALUE)\n        Int64._bits(r0, r1, r2) < Int64._bits(b0, b1, b2)");
      if (!(what === 1 || what === 3 || what === 2)) dart.assertFailed(null, I[1], 1043, 12, "what == _RETURN_DIV || what == _RETURN_MOD || what == _RETURN_REM");
      if (what === 1) {
        if (aNeg !== bNeg) return fixnum.Int64._negate(q0, q1, q2);
        return fixnum.Int64._masked(q0, q1, q2);
      }
      if (!aNeg) {
        return fixnum.Int64._masked(r0, r1, r2);
      }
      if (what === 3) {
        if (r0 === 0 && r1 === 0 && r2 === 0) {
          return fixnum.Int64.ZERO;
        } else {
          return fixnum.Int64._sub(b0, b1, b2, r0, r1, r2);
        }
      } else {
        return fixnum.Int64._negate(r0, r1, r2);
      }
    }
  };
  (fixnum.Int64._bits = function(_l, _m, _h) {
    this[_l$] = _l;
    this[_m$] = _m;
    this[_h$] = _h;
    ;
  }).prototype = fixnum.Int64.prototype;
  dart.addTypeTests(fixnum.Int64);
  dart.addTypeCaches(fixnum.Int64);
  fixnum.Int64[dart.implements] = () => [fixnum.IntX];
  dart.setMethodSignature(fixnum.Int64, () => ({
    __proto__: dart.getMethods(fixnum.Int64.__proto__),
    '+': dart.fnType(fixnum.Int64, [core.Object]),
    '-': dart.fnType(fixnum.Int64, [core.Object]),
    _negate: dart.fnType(fixnum.Int64, []),
    '*': dart.fnType(fixnum.Int64, [core.Object]),
    '%': dart.fnType(fixnum.Int64, [core.Object]),
    '~/': dart.fnType(fixnum.Int64, [core.Object]),
    remainder: dart.fnType(fixnum.Int64, [core.Object]),
    '&': dart.fnType(fixnum.Int64, [core.Object]),
    '|': dart.fnType(fixnum.Int64, [core.Object]),
    '^': dart.fnType(fixnum.Int64, [core.Object]),
    '~': dart.fnType(fixnum.Int64, []),
    '<<': dart.fnType(fixnum.Int64, [core.int]),
    '>>': dart.fnType(fixnum.Int64, [core.int]),
    shiftRightUnsigned: dart.fnType(fixnum.Int64, [core.int]),
    compareTo: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [$compareTo]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_compareTo]: dart.fnType(core.int, [core.Object]),
    '<': dart.fnType(core.bool, [core.Object]),
    '<=': dart.fnType(core.bool, [core.Object]),
    '>': dart.fnType(core.bool, [core.Object]),
    '>=': dart.fnType(core.bool, [core.Object]),
    abs: dart.fnType(fixnum.Int64, []),
    clamp: dart.fnType(fixnum.Int64, [core.Object, core.Object]),
    numberOfLeadingZeros: dart.fnType(core.int, []),
    numberOfTrailingZeros: dart.fnType(core.int, []),
    toSigned: dart.fnType(fixnum.Int64, [core.int]),
    toUnsigned: dart.fnType(fixnum.Int64, [core.int]),
    toBytes: dart.fnType(core.List$(core.int), []),
    toDouble: dart.fnType(core.double, []),
    toInt: dart.fnType(core.int, []),
    toInt32: dart.fnType(fixnum.Int32, []),
    toInt64: dart.fnType(fixnum.Int64, []),
    toHexString: dart.fnType(core.String, []),
    toStringUnsigned: dart.fnType(core.String, []),
    toRadixStringUnsigned: dart.fnType(core.String, [core.int]),
    toRadixString: dart.fnType(core.String, [core.int]),
    [_toRadixString]: dart.fnType(core.String, [core.int]),
    toDebugString: dart.fnType(core.String, []),
    [_hexDigit]: dart.fnType(core.String, [core.int])
  }));
  dart.setStaticMethodSignature(fixnum.Int64, () => ['parseRadix', '_parseRadix', 'parseInt', 'parseHex', 'new', 'fromBytes', 'fromBytesBigEndian', 'fromInts', '_promote', '_toRadixStringUnsigned', '_masked', '_sub', '_negate', '_shiftRight', '_divide', '_divideHelper']);
  dart.setGetterSignature(fixnum.Int64, () => ({
    __proto__: dart.getGetters(fixnum.Int64.__proto__),
    isEven: core.bool,
    isMaxValue: core.bool,
    isMinValue: core.bool,
    isNegative: core.bool,
    isOdd: core.bool,
    isZero: core.bool,
    bitLength: core.int
  }));
  dart.setLibraryUri(fixnum.Int64, I[0]);
  dart.setFieldSignature(fixnum.Int64, () => ({
    __proto__: dart.getFields(fixnum.Int64.__proto__),
    [_l]: dart.finalFieldType(core.int),
    [_m]: dart.finalFieldType(core.int),
    [_h]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(fixnum.Int64, () => ['_BITS', '_BITS01', '_BITS2', '_MASK', '_MASK2', '_SIGN_BIT', '_SIGN_BIT_MASK', 'MAX_VALUE', 'MIN_VALUE', 'ZERO', 'ONE', 'TWO', '_fatRadixTable', '_RETURN_DIV', '_RETURN_REM', '_RETURN_MOD']);
  dart.defineExtensionMethods(fixnum.Int64, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(fixnum.Int64, ['hashCode']);
  dart.defineLazy(fixnum.Int64, {
    /*fixnum.Int64._BITS*/get _BITS() {
      return 22;
    },
    /*fixnum.Int64._BITS01*/get _BITS01() {
      return 44;
    },
    /*fixnum.Int64._BITS2*/get _BITS2() {
      return 20;
    },
    /*fixnum.Int64._MASK*/get _MASK() {
      return 4194303;
    },
    /*fixnum.Int64._MASK2*/get _MASK2() {
      return 1048575;
    },
    /*fixnum.Int64._SIGN_BIT*/get _SIGN_BIT() {
      return 19;
    },
    /*fixnum.Int64._SIGN_BIT_MASK*/get _SIGN_BIT_MASK() {
      return 524288;
    },
    /*fixnum.Int64.MAX_VALUE*/get MAX_VALUE() {
      return C[8] || CT.C8;
    },
    /*fixnum.Int64.MIN_VALUE*/get MIN_VALUE() {
      return C[9] || CT.C9;
    },
    /*fixnum.Int64.ZERO*/get ZERO() {
      return C[10] || CT.C10;
    },
    /*fixnum.Int64.ONE*/get ONE() {
      return C[11] || CT.C11;
    },
    /*fixnum.Int64.TWO*/get TWO() {
      return C[12] || CT.C12;
    },
    /*fixnum.Int64._fatRadixTable*/get _fatRadixTable() {
      return C[13] || CT.C13;
    },
    /*fixnum.Int64._RETURN_DIV*/get _RETURN_DIV() {
      return 1;
    },
    /*fixnum.Int64._RETURN_REM*/get _RETURN_REM() {
      return 2;
    },
    /*fixnum.Int64._RETURN_MOD*/get _RETURN_MOD() {
      return 3;
    }
  }, false);
  dart.trackLibraries("packages/fixnum/fixnum", {
    "package:fixnum/fixnum.dart": fixnum
  }, {
    "package:fixnum/fixnum.dart": ["src/intx.dart", "src/int32.dart", "src/int64.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/intx.dart","src/int32.dart","src/int64.dart"],"names":[],"mappings":"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","file":"fixnum.sound.ddc.js"}');
  // Exports:
  return {
    fixnum: fixnum
  };
}));

//# sourceMappingURL=fixnum.sound.ddc.js.map
