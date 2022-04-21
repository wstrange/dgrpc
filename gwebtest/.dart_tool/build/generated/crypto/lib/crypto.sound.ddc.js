define(['dart_sdk', 'packages/collection/src/comparators', 'packages/typed_data/src/typed_buffer'], (function load__packages__crypto__crypto(dart_sdk, packages__collection__src__comparators, packages__typed_data__src__typed_buffer) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = packages__collection__src__comparators.src__equality;
  const typed_buffer = packages__typed_data__src__typed_buffer.src__typed_buffer;
  var crypto = Object.create(dart.library);
  var sha512 = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var sha512_slowsinks = Object.create(dart.library);
  var hash_sink = Object.create(dart.library);
  var digest = Object.create(dart.library);
  var hash = Object.create(dart.library);
  var digest_sink = Object.create(dart.library);
  var sha256 = Object.create(dart.library);
  var sha1 = Object.create(dart.library);
  var md5 = Object.create(dart.library);
  var hmac = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $leftShift = dartx['<<'];
  var $rightShift = dartx['>>'];
  var $buffer = dartx.buffer;
  var $_set = dartx._set;
  var $setRange = dartx.setRange;
  var $isEmpty = dartx.isEmpty;
  var $_equals = dartx._equals;
  var $asUint8List = dartx.asUint8List;
  var $lengthInBytes = dartx.lengthInBytes;
  var $asByteData = dartx.asByteData;
  var $setUint32 = dartx.setUint32;
  var $truncate = dartx.truncate;
  var $getUint32 = dartx.getUint32;
  var $removeRange = dartx.removeRange;
  var $codeUnitAt = dartx.codeUnitAt;
  var $asUint32List = dartx.asUint32List;
  var $modulo = dartx['%'];
  dart._checkModuleNullSafetyMode(true);
  var T = {
    SinkOfDigest: () => (T.SinkOfDigest = dart.constFn(core.Sink$(digest.Digest)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    DefaultEqualityOfNever: () => (T.DefaultEqualityOfNever = dart.constFn(equality.DefaultEquality$(dart.Never)))(),
    JSArrayOfint: () => (T.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: T.DefaultEqualityOfNever().prototype
      });
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C[1] || CT.C1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: sha512._Sha384.prototype,
        [blockSize]: 128
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: sha512._Sha512.prototype,
        [blockSize$]: 128
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: sha512._Sha512224.prototype,
        [blockSize$0]: 128
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: sha512._Sha512256.prototype,
        [blockSize$1]: 128
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: typed_data.Endian.prototype,
        [Endian__littleEndian]: false
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: sha256._Sha256.prototype,
        [blockSize$2]: 64
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: sha256._Sha224.prototype,
        [blockSize$3]: 64
      });
    },
    get C9() {
      return C[9] = dart.constList([1116352408, 1899447441, 3049323471.0, 3921009573.0, 961987163, 1508970993, 2453635748.0, 2870763221.0, 3624381080.0, 310598401, 607225278, 1426881987, 1925078388, 2162078206.0, 2614888103.0, 3248222580.0, 3835390401.0, 4022224774.0, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882.0, 2821834349.0, 2952996808.0, 3210313671.0, 3336571891.0, 3584528711.0, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350.0, 2456956037.0, 2730485921.0, 2820302411.0, 3259730800.0, 3345764771.0, 3516065817.0, 3600352804.0, 4094571909.0, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452.0, 2361852424.0, 2428436474.0, 2756734187.0, 3204031479.0, 3329325298.0], core.int);
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: sha1._Sha1.prototype,
        [blockSize$4]: 64
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: md5._MD5.prototype,
        [blockSize$5]: 64
      });
    },
    get C12() {
      return C[12] = dart.constList([3614090360.0, 3905402710.0, 606105819, 3250441966.0, 4118548399.0, 1200080426, 2821735955.0, 4249261313.0, 1770035416, 2336552879.0, 4294925233.0, 2304563134.0, 1804603682, 4254626195.0, 2792965006.0, 1236535329, 4129170786.0, 3225465664.0, 643717713, 3921069994.0, 3593408605.0, 38016083, 3634488961.0, 3889429448.0, 568446438, 3275163606.0, 4107603335.0, 1163531501, 2850285829.0, 4243563512.0, 1735328473, 2368359562.0, 4294588738.0, 2272392833.0, 1839030562, 4259657740.0, 2763975236.0, 1272893353, 4139469664.0, 3200236656.0, 681279174, 3936430074.0, 3572445317.0, 76029189, 3654602809.0, 3873151461.0, 530742520, 3299628645.0, 4096336452.0, 1126891415, 2878612391.0, 4237533241.0, 1700485571, 2399980690.0, 4293915773.0, 2240044497.0, 1873313359, 4264355552.0, 2734768916.0, 1309151649, 4149444226.0, 3174756917.0, 718787259, 3951481745.0], core.int);
    },
    get C13() {
      return C[13] = dart.constList([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21], core.int);
    }
  }, false);
  var C = Array(14).fill(void 0);
  var I = [
    "package:crypto/src/digest.dart",
    "package:crypto/src/hash.dart",
    "package:crypto/src/sha512.dart",
    "org-dartlang-app:///packages/crypto/src/sha512_slowsinks.dart",
    "org-dartlang-app:///packages/crypto/src/hash_sink.dart",
    "package:crypto/src/hash_sink.dart",
    "package:crypto/src/sha512_slowsinks.dart",
    "package:crypto/src/digest_sink.dart",
    "package:crypto/src/sha256.dart",
    "org-dartlang-app:///packages/crypto/src/sha256.dart",
    "package:crypto/src/sha1.dart",
    "org-dartlang-app:///packages/crypto/src/sha1.dart",
    "package:crypto/src/md5.dart",
    "org-dartlang-app:///packages/crypto/src/md5.dart",
    "package:crypto/src/hmac.dart"
  ];
  var blockSize = dart.privateName(sha512, "_Sha384.blockSize");
  var bytes$ = dart.privateName(digest, "Digest.bytes");
  var ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  digest.Digest = class Digest extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new digest.Digest.new(bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (digest.Digest.is(other)) {
        let a = this.bytes;
        let b = other.bytes;
        let n = a[$length];
        if (n !== b[$length]) {
          return false;
        }
        let mismatch = 0;
        for (let i = 0; i < n; i = i + 1) {
          mismatch = (mismatch | (a[$_get](i) ^ b[$_get](i)) >>> 0) >>> 0;
        }
        return mismatch === 0;
      }
      return false;
    }
    get hashCode() {
      return (C[0] || CT.C0).hash(this.bytes);
    }
    toString() {
      return digest._hexEncode(this.bytes);
    }
  };
  (digest.Digest.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = digest.Digest.prototype;
  dart.addTypeTests(digest.Digest);
  dart.addTypeCaches(digest.Digest);
  dart.setLibraryUri(digest.Digest, I[0]);
  dart.setFieldSignature(digest.Digest, () => ({
    __proto__: dart.getFields(digest.Digest.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineExtensionMethods(digest.Digest, ['_equals', 'toString']);
  dart.defineExtensionAccessors(digest.Digest, ['hashCode']);
  hash.Hash = class Hash extends convert.Converter$(core.List$(core.int), digest.Digest) {
    convert(data) {
      T.ListOfint().as(data);
      let innerSink = new digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
  };
  (hash.Hash.new = function() {
    hash.Hash.__proto__.new.call(this);
    ;
  }).prototype = hash.Hash.prototype;
  dart.addTypeTests(hash.Hash);
  dart.addTypeCaches(hash.Hash);
  dart.setMethodSignature(hash.Hash, () => ({
    __proto__: dart.getMethods(hash.Hash.__proto__),
    convert: dart.fnType(digest.Digest, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(hash.Hash, I[1]);
  sha512._Sha384 = class _Sha384 extends hash.Hash {
    get blockSize() {
      return this[blockSize];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha512._Sha384.__();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha384Sink.new(sink));
    }
  };
  (sha512._Sha384.__ = function() {
    this[blockSize] = 32 * 4;
    sha512._Sha384.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha384.prototype;
  dart.addTypeTests(sha512._Sha384);
  dart.addTypeCaches(sha512._Sha384);
  dart.setMethodSignature(sha512._Sha384, () => ({
    __proto__: dart.getMethods(sha512._Sha384.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha384, I[2]);
  dart.setFieldSignature(sha512._Sha384, () => ({
    __proto__: dart.getFields(sha512._Sha384.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$ = dart.privateName(sha512, "_Sha512.blockSize");
  sha512._Sha512 = class _Sha512 extends hash.Hash {
    get blockSize() {
      return this[blockSize$];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha512._Sha512.__();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha512Sink.new(sink));
    }
  };
  (sha512._Sha512.__ = function() {
    this[blockSize$] = 32 * 4;
    sha512._Sha512.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha512.prototype;
  dart.addTypeTests(sha512._Sha512);
  dart.addTypeCaches(sha512._Sha512);
  dart.setMethodSignature(sha512._Sha512, () => ({
    __proto__: dart.getMethods(sha512._Sha512.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha512, I[2]);
  dart.setFieldSignature(sha512._Sha512, () => ({
    __proto__: dart.getFields(sha512._Sha512.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$0 = dart.privateName(sha512, "_Sha512224.blockSize");
  sha512._Sha512224 = class _Sha512224 extends hash.Hash {
    get blockSize() {
      return this[blockSize$0];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#new#tearOff']() {
      return new sha512._Sha512224.new();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha512224Sink.new(sink));
    }
  };
  (sha512._Sha512224.new = function() {
    this[blockSize$0] = 32 * 4;
    sha512._Sha512224.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha512224.prototype;
  dart.addTypeTests(sha512._Sha512224);
  dart.addTypeCaches(sha512._Sha512224);
  dart.setMethodSignature(sha512._Sha512224, () => ({
    __proto__: dart.getMethods(sha512._Sha512224.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha512224, I[2]);
  dart.setFieldSignature(sha512._Sha512224, () => ({
    __proto__: dart.getFields(sha512._Sha512224.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$1 = dart.privateName(sha512, "_Sha512256.blockSize");
  sha512._Sha512256 = class _Sha512256 extends hash.Hash {
    get blockSize() {
      return this[blockSize$1];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#new#tearOff']() {
      return new sha512._Sha512256.new();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha512_slowsinks.Sha512256Sink.new(sink));
    }
  };
  (sha512._Sha512256.new = function() {
    this[blockSize$1] = 32 * 4;
    sha512._Sha512256.__proto__.new.call(this);
    ;
  }).prototype = sha512._Sha512256.prototype;
  dart.addTypeTests(sha512._Sha512256);
  dart.addTypeCaches(sha512._Sha512256);
  dart.setMethodSignature(sha512._Sha512256, () => ({
    __proto__: dart.getMethods(sha512._Sha512256.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha512._Sha512256, I[2]);
  dart.setFieldSignature(sha512._Sha512256, () => ({
    __proto__: dart.getFields(sha512._Sha512256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha512, {
    /*sha512.sha384*/get sha384() {
      return C[2] || CT.C2;
    },
    /*sha512.sha512*/get sha512() {
      return C[3] || CT.C3;
    },
    /*sha512.sha512224*/get sha512224() {
      return C[4] || CT.C4;
    },
    /*sha512.sha512256*/get sha512256() {
      return C[5] || CT.C5;
    }
  }, false);
  utils.add32 = function add32(x, y) {
    return (x + y & 4294967295.0) >>> 0;
  };
  utils.rotl32 = function rotl32(val, shift) {
    let modShift = shift & 31;
    return (val[$leftShift](modShift) & 4294967295.0 | ((val & 4294967295.0) >>> 0)[$rightShift](32 - modShift)) >>> 0;
  };
  dart.defineLazy(utils, {
    /*utils.mask32*/get mask32() {
      return 4294967295.0;
    },
    /*utils.bitsPerByte*/get bitsPerByte() {
      return 8;
    },
    /*utils.bytesPerWord*/get bytesPerWord() {
      return 4;
    }
  }, false);
  var _extended = dart.privateName(sha512_slowsinks, "_extended");
  var _nums = dart.privateName(sha512_slowsinks, "_nums");
  var _digest$ = dart.privateName(sha512_slowsinks, "_digest");
  var _shr = dart.privateName(sha512_slowsinks, "_shr");
  var _shl = dart.privateName(sha512_slowsinks, "_shl");
  var _or = dart.privateName(sha512_slowsinks, "_or");
  var _xor = dart.privateName(sha512_slowsinks, "_xor");
  var _add = dart.privateName(sha512_slowsinks, "_add");
  var _addTo2 = dart.privateName(sha512_slowsinks, "_addTo2");
  var _rotr = dart.privateName(sha512_slowsinks, "_rotr");
  var _bsig0 = dart.privateName(sha512_slowsinks, "_bsig0");
  var _bsig1 = dart.privateName(sha512_slowsinks, "_bsig1");
  var _ssig0 = dart.privateName(sha512_slowsinks, "_ssig0");
  var _ssig1 = dart.privateName(sha512_slowsinks, "_ssig1");
  var _ch = dart.privateName(sha512_slowsinks, "_ch");
  var _maj = dart.privateName(sha512_slowsinks, "_maj");
  var Endian__littleEndian = dart.privateName(typed_data, "Endian._littleEndian");
  var _lengthInBytes = dart.privateName(hash_sink, "_lengthInBytes");
  var _pendingData = dart.privateName(hash_sink, "_pendingData");
  var _isClosed = dart.privateName(hash_sink, "_isClosed");
  var _sink$ = dart.privateName(hash_sink, "_sink");
  var _endian = dart.privateName(hash_sink, "_endian");
  var _signatureBytes = dart.privateName(hash_sink, "_signatureBytes");
  var _currentChunk = dart.privateName(hash_sink, "_currentChunk");
  var _iterate = dart.privateName(hash_sink, "_iterate");
  var _finalizeData = dart.privateName(hash_sink, "_finalizeData");
  var _byteDigest = dart.privateName(hash_sink, "_byteDigest");
  var _roundUp = dart.privateName(hash_sink, "_roundUp");
  hash_sink.HashSink = class HashSink extends core.Object {
    add(data) {
      T.ListOfint().as(data);
      if (this[_isClosed]) dart.throw(new core.StateError.new("Hash.add() called after close()."));
      this[_lengthInBytes] = this[_lengthInBytes] + data[$length];
      this[_pendingData].addAll(data);
      this[_iterate]();
    }
    close() {
      if (this[_isClosed]) return;
      this[_isClosed] = true;
      this[_finalizeData]();
      this[_iterate]();
      if (!this[_pendingData][$isEmpty]) dart.assertFailed(null, I[4], 90, 12, "_pendingData.isEmpty");
      this[_sink$].add(new digest.Digest.new(this[_byteDigest]()));
      this[_sink$].close();
    }
    [_byteDigest]() {
      if (this[_endian][$_equals](typed_data.Endian.host)) return this.digest[$buffer][$asUint8List]();
      let cachedDigest = this.digest;
      let byteDigest = _native_typed_data.NativeUint8List.new(cachedDigest[$lengthInBytes]);
      let byteData = byteDigest[$buffer][$asByteData]();
      for (let i = 0; i < cachedDigest[$length]; i = i + 1) {
        byteData[$setUint32](i * 4, cachedDigest[$_get](i));
      }
      return byteDigest;
    }
    [_iterate]() {
      let pendingDataBytes = this[_pendingData].buffer[$asByteData]();
      let pendingDataChunks = (this[_pendingData].length / this[_currentChunk][$lengthInBytes])[$truncate]();
      for (let i = 0; i < pendingDataChunks; i = i + 1) {
        for (let j = 0; j < this[_currentChunk][$length]; j = j + 1) {
          this[_currentChunk][$_set](j, pendingDataBytes[$getUint32](i * this[_currentChunk][$lengthInBytes] + j * 4, this[_endian]));
        }
        this.updateHash(this[_currentChunk]);
      }
      this[_pendingData][$removeRange](0, pendingDataChunks * this[_currentChunk][$lengthInBytes]);
    }
    [_finalizeData]() {
      this[_pendingData].add(128);
      let contentsLength = this[_lengthInBytes] + 1 + this[_signatureBytes];
      let finalizedLength = this[_roundUp](contentsLength, this[_currentChunk][$lengthInBytes]);
      for (let i = 0; i < finalizedLength - contentsLength; i = i + 1) {
        this[_pendingData].add(0);
      }
      if (this[_lengthInBytes] > 1125899906842623.0) {
        dart.throw(new core.UnsupportedError.new("Hashing is unsupported for messages with more than 2^53 bits."));
      }
      let lengthInBits = this[_lengthInBytes] * 8;
      let offset = this[_pendingData].length + (this[_signatureBytes] - 8);
      this[_pendingData].addAll(_native_typed_data.NativeUint8List.new(this[_signatureBytes]));
      let byteData = this[_pendingData].buffer[$asByteData]();
      let highBits = lengthInBits[$rightShift](32);
      let lowBits = (lengthInBits & 4294967295.0) >>> 0;
      if (this[_endian][$_equals](typed_data.Endian.big)) {
        byteData[$setUint32](offset, highBits, this[_endian]);
        byteData[$setUint32](offset + 4, lowBits, this[_endian]);
      } else {
        byteData[$setUint32](offset, lowBits, this[_endian]);
        byteData[$setUint32](offset + 4, highBits, this[_endian]);
      }
    }
    [_roundUp](val, n) {
      return (val + n - 1 & -n) >>> 0;
    }
  };
  (hash_sink.HashSink.new = function(_sink, chunkSizeInWords, opts) {
    let endian = opts && 'endian' in opts ? opts.endian : C[6] || CT.C6;
    let signatureBytes = opts && 'signatureBytes' in opts ? opts.signatureBytes : 8;
    this[_lengthInBytes] = 0;
    this[_pendingData] = new typed_buffer.Uint8Buffer.new();
    this[_isClosed] = false;
    this[_sink$] = _sink;
    this[_endian] = endian;
    if (!(signatureBytes >= 8)) dart.assertFailed(null, I[4], 64, 16, "signatureBytes >= 8");
    this[_signatureBytes] = signatureBytes;
    this[_currentChunk] = _native_typed_data.NativeUint32List.new(chunkSizeInWords);
    ;
  }).prototype = hash_sink.HashSink.prototype;
  dart.addTypeTests(hash_sink.HashSink);
  dart.addTypeCaches(hash_sink.HashSink);
  hash_sink.HashSink[dart.implements] = () => [core.Sink$(core.List$(core.int))];
  dart.setMethodSignature(hash_sink.HashSink, () => ({
    __proto__: dart.getMethods(hash_sink.HashSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, []),
    [_byteDigest]: dart.fnType(typed_data.Uint8List, []),
    [_iterate]: dart.fnType(dart.void, []),
    [_finalizeData]: dart.fnType(dart.void, []),
    [_roundUp]: dart.fnType(core.int, [core.int, core.int])
  }));
  dart.setLibraryUri(hash_sink.HashSink, I[5]);
  dart.setFieldSignature(hash_sink.HashSink, () => ({
    __proto__: dart.getFields(hash_sink.HashSink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(digest.Digest)),
    [_endian]: dart.finalFieldType(typed_data.Endian),
    [_currentChunk]: dart.finalFieldType(typed_data.Uint32List),
    [_lengthInBytes]: dart.fieldType(core.int),
    [_pendingData]: dart.finalFieldType(typed_buffer.Uint8Buffer),
    [_isClosed]: dart.fieldType(core.bool),
    [_signatureBytes]: dart.finalFieldType(core.int)
  }));
  dart.setStaticFieldSignature(hash_sink.HashSink, () => ['_maxMessageLengthInBytes']);
  dart.defineLazy(hash_sink.HashSink, {
    /*hash_sink.HashSink._maxMessageLengthInBytes*/get _maxMessageLengthInBytes() {
      return 1125899906842623.0;
    }
  }, false);
  sha512_slowsinks._Sha64BitSink = class _Sha64BitSink extends hash_sink.HashSink {
    get digest() {
      return typed_data.Uint32List.view(this[_digest$][$buffer], 0, this.digestBytes);
    }
    [_shr](bits, word, offset, ret, offsetR) {
      ret[$_set](0 + offsetR, bits < 32 && bits >= 0 ? word[$_get](0 + offset)[$rightShift](bits) : 0);
      ret[$_set](1 + offsetR, bits > 32 ? word[$_get](0 + offset)[$rightShift](bits - 32) : bits === 32 ? word[$_get](0 + offset) : bits >= 0 ? (word[$_get](0 + offset)[$leftShift](32 - bits) | word[$_get](1 + offset)[$rightShift](bits)) >>> 0 : 0);
    }
    [_shl](bits, word, offset, ret, offsetR) {
      ret[$_set](0 + offsetR, bits > 32 ? word[$_get](1 + offset)[$leftShift](bits - 32) : bits === 32 ? word[$_get](1 + offset) : bits >= 0 ? (word[$_get](0 + offset)[$leftShift](bits) | word[$_get](1 + offset)[$rightShift](32 - bits)) >>> 0 : 0);
      ret[$_set](1 + offsetR, bits < 32 && bits >= 0 ? word[$_get](1 + offset)[$leftShift](bits) : 0);
    }
    [_or](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](0 + offsetR, (word1[$_get](0 + offset1) | word2[$_get](0 + offset2)) >>> 0);
      ret[$_set](1 + offsetR, (word1[$_get](1 + offset1) | word2[$_get](1 + offset2)) >>> 0);
    }
    [_xor](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](0 + offsetR, (word1[$_get](0 + offset1) ^ word2[$_get](0 + offset2)) >>> 0);
      ret[$_set](1 + offsetR, (word1[$_get](1 + offset1) ^ word2[$_get](1 + offset2)) >>> 0);
    }
    [_add](word1, offset1, word2, offset2, ret, offsetR) {
      ret[$_set](1 + offsetR, word1[$_get](1 + offset1) + word2[$_get](1 + offset2));
      ret[$_set](0 + offsetR, word1[$_get](0 + offset1) + word2[$_get](0 + offset2) + (ret[$_get](1 + offsetR) < word1[$_get](1 + offset1) ? 1 : 0));
    }
    [_addTo2](word1, offset1, word2, offset2) {
      let t1, t0, t1$, t0$;
      let _addTemp = null;
      _addTemp = word1[$_get](1 + offset1);
      t0 = word1;
      t1 = 1 + offset1;
      t0[$_set](t1, t0[$_get](t1) + word2[$_get](1 + offset2));
      t0$ = word1;
      t1$ = 0 + offset1;
      t0$[$_set](t1$, t0$[$_get](t1$) + (word2[$_get](0 + offset2) + (word1[$_get](1 + offset1) < _addTemp ? 1 : 0)));
    }
    [_rotr](bits, word, offset, ret, offsetR) {
      this[_shr](bits, word, offset, this[_nums], 0);
      this[_shl](64 - bits, word, offset, this[_nums], 2);
      this[_or](this[_nums], 0, this[_nums], 2, ret, offsetR);
    }
    [_bsig0](word, offset, ret, offsetR) {
      this[_rotr](28, word, offset, this[_nums], 4);
      this[_rotr](34, word, offset, this[_nums], 6);
      this[_rotr](39, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_bsig1](word, offset, ret, offsetR) {
      this[_rotr](14, word, offset, this[_nums], 4);
      this[_rotr](18, word, offset, this[_nums], 6);
      this[_rotr](41, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_ssig0](word, offset, ret, offsetR) {
      this[_rotr](1, word, offset, this[_nums], 4);
      this[_rotr](8, word, offset, this[_nums], 6);
      this[_shr](7, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_ssig1](word, offset, ret, offsetR) {
      this[_rotr](19, word, offset, this[_nums], 4);
      this[_rotr](61, word, offset, this[_nums], 6);
      this[_shr](6, word, offset, this[_nums], 8);
      this[_xor](this[_nums], 6, this[_nums], 8, this[_nums], 10);
      this[_xor](this[_nums], 4, this[_nums], 10, ret, offsetR);
    }
    [_ch](x, offsetX, y, offsetY, z, offsetZ, ret, offsetR) {
      ret[$_set](0 + offsetR, (x[$_get](0 + offsetX) & (y[$_get](0 + offsetY) ^ z[$_get](0 + offsetZ)) >>> 0 ^ z[$_get](0 + offsetZ)) >>> 0);
      ret[$_set](1 + offsetR, (x[$_get](1 + offsetX) & (y[$_get](1 + offsetY) ^ z[$_get](1 + offsetZ)) >>> 0 ^ z[$_get](1 + offsetZ)) >>> 0);
    }
    [_maj](x, offsetX, y, offsetY, z, offsetZ, ret, offsetR) {
      ret[$_set](0 + offsetR, (x[$_get](0 + offsetX) & (y[$_get](0 + offsetY) | z[$_get](0 + offsetZ)) >>> 0 | (y[$_get](0 + offsetY) & z[$_get](0 + offsetZ)) >>> 0) >>> 0);
      ret[$_set](1 + offsetR, (x[$_get](1 + offsetX) & (y[$_get](1 + offsetY) | z[$_get](1 + offsetZ)) >>> 0 | (y[$_get](1 + offsetY) & z[$_get](1 + offsetZ)) >>> 0) >>> 0);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 32)) dart.assertFailed(null, I[3], 214, 12, "chunk.length == 32");
      for (let i = 0; i < 32; i = i + 1) {
        this[_extended][$_set](i, chunk[$_get](i));
      }
      for (let i = 32; i < 160; i = i + 2) {
        this[_ssig1](this[_extended], i - 2 * 2, this[_nums], 28);
        this[_add](this[_nums], 28, this[_extended], i - 7 * 2, this[_nums], 30);
        this[_ssig0](this[_extended], i - 15 * 2, this[_nums], 28);
        this[_add](this[_nums], 28, this[_extended], i - 16 * 2, this[_nums], 32);
        this[_add](this[_nums], 30, this[_nums], 32, this[_extended], i);
      }
      this[_nums][$setRange](12, 26 + 2, this[_digest$]);
      for (let i = 0; i < 160; i = i + 2) {
        this[_bsig1](this[_nums], 20, this[_nums], 28);
        this[_add](this[_nums], 26, this[_nums], 28, this[_nums], 30);
        this[_ch](this[_nums], 20, this[_nums], 22, this[_nums], 24, this[_nums], 32);
        this[_add](this[_nums], 30, this[_nums], 32, this[_nums], 34);
        this[_add](sha512_slowsinks._noise32, i, this[_extended], i, this[_nums], 36);
        this[_add](this[_nums], 34, this[_nums], 36, this[_nums], 28);
        this[_bsig0](this[_nums], 12, this[_nums], 32);
        this[_maj](this[_nums], 12, this[_nums], 14, this[_nums], 16, this[_nums], 34);
        this[_add](this[_nums], 32, this[_nums], 34, this[_nums], 30);
        this[_nums][$_set](26, this[_nums][$_get](24));
        this[_nums][$_set](26 + 1, this[_nums][$_get](24 + 1));
        this[_nums][$_set](24, this[_nums][$_get](22));
        this[_nums][$_set](24 + 1, this[_nums][$_get](22 + 1));
        this[_nums][$_set](22, this[_nums][$_get](20));
        this[_nums][$_set](22 + 1, this[_nums][$_get](20 + 1));
        this[_add](this[_nums], 18, this[_nums], 28, this[_nums], 20);
        this[_nums][$_set](18, this[_nums][$_get](16));
        this[_nums][$_set](18 + 1, this[_nums][$_get](16 + 1));
        this[_nums][$_set](16, this[_nums][$_get](14));
        this[_nums][$_set](16 + 1, this[_nums][$_get](14 + 1));
        this[_nums][$_set](14, this[_nums][$_get](12));
        this[_nums][$_set](14 + 1, this[_nums][$_get](12 + 1));
        this[_add](this[_nums], 28, this[_nums], 30, this[_nums], 12);
      }
      this[_addTo2](this[_digest$], 0, this[_nums], 12);
      this[_addTo2](this[_digest$], 2, this[_nums], 14);
      this[_addTo2](this[_digest$], 4, this[_nums], 16);
      this[_addTo2](this[_digest$], 6, this[_nums], 18);
      this[_addTo2](this[_digest$], 8, this[_nums], 20);
      this[_addTo2](this[_digest$], 10, this[_nums], 22);
      this[_addTo2](this[_digest$], 12, this[_nums], 24);
      this[_addTo2](this[_digest$], 14, this[_nums], 26);
    }
  };
  (sha512_slowsinks._Sha64BitSink.new = function(sink, _digest) {
    this[_extended] = _native_typed_data.NativeUint32List.new(160);
    this[_nums] = _native_typed_data.NativeUint32List.new(12 + 16 + 10);
    this[_digest$] = _digest;
    sha512_slowsinks._Sha64BitSink.__proto__.new.call(this, sink, 32, {signatureBytes: 16});
    ;
  }).prototype = sha512_slowsinks._Sha64BitSink.prototype;
  dart.addTypeTests(sha512_slowsinks._Sha64BitSink);
  dart.addTypeCaches(sha512_slowsinks._Sha64BitSink);
  dart.setMethodSignature(sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getMethods(sha512_slowsinks._Sha64BitSink.__proto__),
    [_shr]: dart.fnType(dart.void, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_shl]: dart.fnType(dart.void, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_or]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_xor]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_add]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_addTo2]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_rotr]: dart.fnType(dart.void, [core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_bsig0]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_bsig1]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ssig0]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ssig1]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_ch]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    [_maj]: dart.fnType(dart.void, [typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int, typed_data.Uint32List, core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setGetterSignature(sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getGetters(sha512_slowsinks._Sha64BitSink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(sha512_slowsinks._Sha64BitSink, I[6]);
  dart.setFieldSignature(sha512_slowsinks._Sha64BitSink, () => ({
    __proto__: dart.getFields(sha512_slowsinks._Sha64BitSink.__proto__),
    [_digest$]: dart.finalFieldType(typed_data.Uint32List),
    [_extended]: dart.finalFieldType(typed_data.Uint32List),
    [_nums]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.setStaticFieldSignature(sha512_slowsinks._Sha64BitSink, () => ['_rotrIndex1', '_rotrIndex2', '_sigIndex1', '_sigIndex2', '_sigIndex3', '_sigIndex4', '_aIndex', '_bIndex', '_cIndex', '_dIndex', '_eIndex', '_fIndex', '_gIndex', '_hIndex', '_tmp1', '_tmp2', '_tmp3', '_tmp4', '_tmp5']);
  dart.defineLazy(sha512_slowsinks._Sha64BitSink, {
    /*sha512_slowsinks._Sha64BitSink._rotrIndex1*/get _rotrIndex1() {
      return 0;
    },
    /*sha512_slowsinks._Sha64BitSink._rotrIndex2*/get _rotrIndex2() {
      return 2;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex1*/get _sigIndex1() {
      return 4;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex2*/get _sigIndex2() {
      return 6;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex3*/get _sigIndex3() {
      return 8;
    },
    /*sha512_slowsinks._Sha64BitSink._sigIndex4*/get _sigIndex4() {
      return 10;
    },
    /*sha512_slowsinks._Sha64BitSink._aIndex*/get _aIndex() {
      return 12;
    },
    /*sha512_slowsinks._Sha64BitSink._bIndex*/get _bIndex() {
      return 14;
    },
    /*sha512_slowsinks._Sha64BitSink._cIndex*/get _cIndex() {
      return 16;
    },
    /*sha512_slowsinks._Sha64BitSink._dIndex*/get _dIndex() {
      return 18;
    },
    /*sha512_slowsinks._Sha64BitSink._eIndex*/get _eIndex() {
      return 20;
    },
    /*sha512_slowsinks._Sha64BitSink._fIndex*/get _fIndex() {
      return 22;
    },
    /*sha512_slowsinks._Sha64BitSink._gIndex*/get _gIndex() {
      return 24;
    },
    /*sha512_slowsinks._Sha64BitSink._hIndex*/get _hIndex() {
      return 26;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp1*/get _tmp1() {
      return 28;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp2*/get _tmp2() {
      return 30;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp3*/get _tmp3() {
      return 32;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp4*/get _tmp4() {
      return 34;
    },
    /*sha512_slowsinks._Sha64BitSink._tmp5*/get _tmp5() {
      return 36;
    }
  }, false);
  var digestBytes = dart.privateName(sha512_slowsinks, "Sha384Sink.digestBytes");
  sha512_slowsinks.Sha384Sink = class Sha384Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha384Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha384Sink.new = function(sink) {
    this[digestBytes] = 12;
    sha512_slowsinks.Sha384Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])));
    ;
  }).prototype = sha512_slowsinks.Sha384Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha384Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha384Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha384Sink, I[6]);
  dart.setFieldSignature(sha512_slowsinks.Sha384Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha384Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  var digestBytes$ = dart.privateName(sha512_slowsinks, "Sha512Sink.digestBytes");
  sha512_slowsinks.Sha512Sink = class Sha512Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha512Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha512Sink.new = function(sink) {
    this[digestBytes$] = 16;
    sha512_slowsinks.Sha512Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209])));
    ;
  }).prototype = sha512_slowsinks.Sha512Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha512Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha512Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha512Sink, I[6]);
  dart.setFieldSignature(sha512_slowsinks.Sha512Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha512Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  var digestBytes$0 = dart.privateName(sha512_slowsinks, "Sha512224Sink.digestBytes");
  sha512_slowsinks.Sha512224Sink = class Sha512224Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$0];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha512224Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha512224Sink.new = function(sink) {
    this[digestBytes$0] = 7;
    sha512_slowsinks.Sha512224Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546, 1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058, 1067287976, 1780299464, 286451373, 2446758561])));
    ;
  }).prototype = sha512_slowsinks.Sha512224Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha512224Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha512224Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha512224Sink, I[6]);
  dart.setFieldSignature(sha512_slowsinks.Sha512224Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha512224Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  var digestBytes$1 = dart.privateName(sha512_slowsinks, "Sha512256Sink.digestBytes");
  sha512_slowsinks.Sha512256Sink = class Sha512256Sink extends sha512_slowsinks._Sha64BitSink {
    get digestBytes() {
      return this[digestBytes$1];
    }
    set digestBytes(value) {
      super.digestBytes = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha512_slowsinks.Sha512256Sink.new(sink);
    }
  };
  (sha512_slowsinks.Sha512256Sink.new = function(sink) {
    this[digestBytes$1] = 8;
    sha512_slowsinks.Sha512256Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882])));
    ;
  }).prototype = sha512_slowsinks.Sha512256Sink.prototype;
  dart.addTypeTests(sha512_slowsinks.Sha512256Sink);
  dart.addTypeCaches(sha512_slowsinks.Sha512256Sink);
  dart.setLibraryUri(sha512_slowsinks.Sha512256Sink, I[6]);
  dart.setFieldSignature(sha512_slowsinks.Sha512256Sink, () => ({
    __proto__: dart.getFields(sha512_slowsinks.Sha512256Sink.__proto__),
    digestBytes: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(sha512_slowsinks, {
    /*sha512_slowsinks._noise32*/get _noise32() {
      return _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]));
    }
  }, false);
  digest._hexEncode = function _hexEncode(bytes) {
    let t0, t0$;
    let charCodes = _native_typed_data.NativeUint8List.new(bytes[$length] * 2);
    for (let i = 0, j = 0; i < bytes[$length]; i = i + 1) {
      let byte = bytes[$_get](i);
      charCodes[$_set]((t0 = j, j = t0 + 1, t0), "0123456789abcdef"[$codeUnitAt](byte >> 4 & 15));
      charCodes[$_set]((t0$ = j, j = t0$ + 1, t0$), "0123456789abcdef"[$codeUnitAt](byte & 15));
    }
    return core.String.fromCharCodes(charCodes);
  };
  var _value = dart.privateName(digest_sink, "_value");
  digest_sink.DigestSink = class DigestSink extends core.Sink$(digest.Digest) {
    get value() {
      return dart.nullCheck(this[_value]);
    }
    add(value) {
      digest.Digest.as(value);
      if (this[_value] != null) dart.throw(new core.StateError.new("add may only be called once."));
      this[_value] = value;
    }
    close() {
      if (this[_value] == null) dart.throw(new core.StateError.new("add must be called once."));
    }
    static ['_#new#tearOff']() {
      return new digest_sink.DigestSink.new();
    }
  };
  (digest_sink.DigestSink.new = function() {
    this[_value] = null;
    ;
  }).prototype = digest_sink.DigestSink.prototype;
  dart.addTypeTests(digest_sink.DigestSink);
  dart.addTypeCaches(digest_sink.DigestSink);
  dart.setMethodSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getMethods(digest_sink.DigestSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getGetters(digest_sink.DigestSink.__proto__),
    value: digest.Digest
  }));
  dart.setLibraryUri(digest_sink.DigestSink, I[7]);
  dart.setFieldSignature(digest_sink.DigestSink, () => ({
    __proto__: dart.getFields(digest_sink.DigestSink.__proto__),
    [_value]: dart.fieldType(dart.nullable(digest.Digest))
  }));
  var blockSize$2 = dart.privateName(sha256, "_Sha256.blockSize");
  sha256._Sha256 = class _Sha256 extends hash.Hash {
    get blockSize() {
      return this[blockSize$2];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha256._Sha256.__();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha256._Sha256Sink.new(sink));
    }
  };
  (sha256._Sha256.__ = function() {
    this[blockSize$2] = 16 * 4;
    sha256._Sha256.__proto__.new.call(this);
    ;
  }).prototype = sha256._Sha256.prototype;
  dart.addTypeTests(sha256._Sha256);
  dart.addTypeCaches(sha256._Sha256);
  dart.setMethodSignature(sha256._Sha256, () => ({
    __proto__: dart.getMethods(sha256._Sha256.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha256._Sha256, I[8]);
  dart.setFieldSignature(sha256._Sha256, () => ({
    __proto__: dart.getFields(sha256._Sha256.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var blockSize$3 = dart.privateName(sha256, "_Sha224.blockSize");
  sha256._Sha224 = class _Sha224 extends hash.Hash {
    get blockSize() {
      return this[blockSize$3];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha256._Sha224.__();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha256._Sha224Sink.new(sink));
    }
  };
  (sha256._Sha224.__ = function() {
    this[blockSize$3] = 16 * 4;
    sha256._Sha224.__proto__.new.call(this);
    ;
  }).prototype = sha256._Sha224.prototype;
  dart.addTypeTests(sha256._Sha224);
  dart.addTypeCaches(sha256._Sha224);
  dart.setMethodSignature(sha256._Sha224, () => ({
    __proto__: dart.getMethods(sha256._Sha224.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha256._Sha224, I[8]);
  dart.setFieldSignature(sha256._Sha224, () => ({
    __proto__: dart.getFields(sha256._Sha224.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var _extended$ = dart.privateName(sha256, "_extended");
  var _digest$0 = dart.privateName(sha256, "_digest");
  var _rotr32 = dart.privateName(sha256, "_rotr32");
  var _ch$ = dart.privateName(sha256, "_ch");
  var _maj$ = dart.privateName(sha256, "_maj");
  var _bsig0$ = dart.privateName(sha256, "_bsig0");
  var _bsig1$ = dart.privateName(sha256, "_bsig1");
  var _ssig0$ = dart.privateName(sha256, "_ssig0");
  var _ssig1$ = dart.privateName(sha256, "_ssig1");
  sha256._Sha32BitSink = class _Sha32BitSink extends hash_sink.HashSink {
    [_rotr32](n, x) {
      return (x[$rightShift](n) | (x[$leftShift](32 - n) & 4294967295.0) >>> 0) >>> 0;
    }
    [_ch$](x, y, z) {
      return (x & y ^ (~x & 4294967295.0 & z) >>> 0) >>> 0;
    }
    [_maj$](x, y, z) {
      return (x & y ^ (x & z) >>> 0 ^ (y & z) >>> 0) >>> 0;
    }
    [_bsig0$](x) {
      return (this[_rotr32](2, x) ^ this[_rotr32](13, x) ^ this[_rotr32](22, x)) >>> 0;
    }
    [_bsig1$](x) {
      return (this[_rotr32](6, x) ^ this[_rotr32](11, x) ^ this[_rotr32](25, x)) >>> 0;
    }
    [_ssig0$](x) {
      return (this[_rotr32](7, x) ^ this[_rotr32](18, x) ^ x[$rightShift](3)) >>> 0;
    }
    [_ssig1$](x) {
      return (this[_rotr32](17, x) ^ this[_rotr32](19, x) ^ x[$rightShift](10)) >>> 0;
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, I[9], 95, 12, "chunk.length == 16");
      for (let i = 0; i < 16; i = i + 1) {
        this[_extended$][$_set](i, chunk[$_get](i));
      }
      for (let i = 16; i < 64; i = i + 1) {
        this[_extended$][$_set](i, utils.add32(utils.add32(this[_ssig1$](this[_extended$][$_get](i - 2)), this[_extended$][$_get](i - 7)), utils.add32(this[_ssig0$](this[_extended$][$_get](i - 15)), this[_extended$][$_get](i - 16))));
      }
      let a = this[_digest$0][$_get](0);
      let b = this[_digest$0][$_get](1);
      let c = this[_digest$0][$_get](2);
      let d = this[_digest$0][$_get](3);
      let e = this[_digest$0][$_get](4);
      let f = this[_digest$0][$_get](5);
      let g = this[_digest$0][$_get](6);
      let h = this[_digest$0][$_get](7);
      for (let i = 0; i < 64; i = i + 1) {
        let temp1 = utils.add32(utils.add32(h, this[_bsig1$](e)), utils.add32(this[_ch$](e, f, g), utils.add32(sha256._noise[$_get](i), this[_extended$][$_get](i))));
        let temp2 = utils.add32(this[_bsig0$](a), this[_maj$](a, b, c));
        h = g;
        g = f;
        f = e;
        e = utils.add32(d, temp1);
        d = c;
        c = b;
        b = a;
        a = utils.add32(temp1, temp2);
      }
      this[_digest$0][$_set](0, utils.add32(a, this[_digest$0][$_get](0)));
      this[_digest$0][$_set](1, utils.add32(b, this[_digest$0][$_get](1)));
      this[_digest$0][$_set](2, utils.add32(c, this[_digest$0][$_get](2)));
      this[_digest$0][$_set](3, utils.add32(d, this[_digest$0][$_get](3)));
      this[_digest$0][$_set](4, utils.add32(e, this[_digest$0][$_get](4)));
      this[_digest$0][$_set](5, utils.add32(f, this[_digest$0][$_get](5)));
      this[_digest$0][$_set](6, utils.add32(g, this[_digest$0][$_get](6)));
      this[_digest$0][$_set](7, utils.add32(h, this[_digest$0][$_get](7)));
    }
  };
  (sha256._Sha32BitSink.new = function(sink, _digest) {
    this[_extended$] = _native_typed_data.NativeUint32List.new(64);
    this[_digest$0] = _digest;
    sha256._Sha32BitSink.__proto__.new.call(this, sink, 16);
    ;
  }).prototype = sha256._Sha32BitSink.prototype;
  dart.addTypeTests(sha256._Sha32BitSink);
  dart.addTypeCaches(sha256._Sha32BitSink);
  dart.setMethodSignature(sha256._Sha32BitSink, () => ({
    __proto__: dart.getMethods(sha256._Sha32BitSink.__proto__),
    [_rotr32]: dart.fnType(core.int, [core.int, core.int]),
    [_ch$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_maj$]: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_bsig0$]: dart.fnType(core.int, [core.int]),
    [_bsig1$]: dart.fnType(core.int, [core.int]),
    [_ssig0$]: dart.fnType(core.int, [core.int]),
    [_ssig1$]: dart.fnType(core.int, [core.int]),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(sha256._Sha32BitSink, I[8]);
  dart.setFieldSignature(sha256._Sha32BitSink, () => ({
    __proto__: dart.getFields(sha256._Sha32BitSink.__proto__),
    [_digest$0]: dart.finalFieldType(typed_data.Uint32List),
    [_extended$]: dart.finalFieldType(typed_data.Uint32List)
  }));
  sha256._Sha256Sink = class _Sha256Sink extends sha256._Sha32BitSink {
    get digest() {
      return this[_digest$0];
    }
    static ['_#new#tearOff'](sink) {
      return new sha256._Sha256Sink.new(sink);
    }
  };
  (sha256._Sha256Sink.new = function(sink) {
    sha256._Sha256Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])));
    ;
  }).prototype = sha256._Sha256Sink.prototype;
  dart.addTypeTests(sha256._Sha256Sink);
  dart.addTypeCaches(sha256._Sha256Sink);
  dart.setGetterSignature(sha256._Sha256Sink, () => ({
    __proto__: dart.getGetters(sha256._Sha256Sink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(sha256._Sha256Sink, I[8]);
  sha256._Sha224Sink = class _Sha224Sink extends sha256._Sha32BitSink {
    get digest() {
      return this[_digest$0][$buffer][$asUint32List](0, 7);
    }
    static ['_#new#tearOff'](sink) {
      return new sha256._Sha224Sink.new(sink);
    }
  };
  (sha256._Sha224Sink.new = function(sink) {
    sha256._Sha224Sink.__proto__.new.call(this, sink, _native_typed_data.NativeUint32List.fromList(T.JSArrayOfint().of([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])));
    ;
  }).prototype = sha256._Sha224Sink.prototype;
  dart.addTypeTests(sha256._Sha224Sink);
  dart.addTypeCaches(sha256._Sha224Sink);
  dart.setGetterSignature(sha256._Sha224Sink, () => ({
    __proto__: dart.getGetters(sha256._Sha224Sink.__proto__),
    digest: typed_data.Uint32List
  }));
  dart.setLibraryUri(sha256._Sha224Sink, I[8]);
  dart.defineLazy(sha256, {
    /*sha256.sha256*/get sha256() {
      return C[7] || CT.C7;
    },
    /*sha256.sha224*/get sha224() {
      return C[8] || CT.C8;
    },
    /*sha256._noise*/get _noise() {
      return C[9] || CT.C9;
    }
  }, false);
  var blockSize$4 = dart.privateName(sha1, "_Sha1.blockSize");
  sha1._Sha1 = class _Sha1 extends hash.Hash {
    get blockSize() {
      return this[blockSize$4];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new sha1._Sha1.__();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new sha1._Sha1Sink.new(sink));
    }
  };
  (sha1._Sha1.__ = function() {
    this[blockSize$4] = 16 * 4;
    sha1._Sha1.__proto__.new.call(this);
    ;
  }).prototype = sha1._Sha1.prototype;
  dart.addTypeTests(sha1._Sha1);
  dart.addTypeCaches(sha1._Sha1);
  dart.setMethodSignature(sha1._Sha1, () => ({
    __proto__: dart.getMethods(sha1._Sha1.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(sha1._Sha1, I[10]);
  dart.setFieldSignature(sha1._Sha1, () => ({
    __proto__: dart.getFields(sha1._Sha1.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var digest$ = dart.privateName(sha1, "_Sha1Sink.digest");
  var _extended$0 = dart.privateName(sha1, "_extended");
  sha1._Sha1Sink = class _Sha1Sink extends hash_sink.HashSink {
    get digest() {
      return this[digest$];
    }
    set digest(value) {
      super.digest = value;
    }
    static ['_#new#tearOff'](sink) {
      return new sha1._Sha1Sink.new(sink);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, I[11], 58, 12, "chunk.length == 16");
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = this.digest[$_get](4);
      for (let i = 0; i < 80; i = i + 1) {
        if (i < 16) {
          this[_extended$0][$_set](i, chunk[$_get](i));
        } else {
          this[_extended$0][$_set](i, utils.rotl32((this[_extended$0][$_get](i - 3) ^ this[_extended$0][$_get](i - 8) ^ this[_extended$0][$_get](i - 14) ^ this[_extended$0][$_get](i - 16)) >>> 0, 1));
        }
        let newA = utils.add32(utils.add32(utils.rotl32(a, 5), e), this[_extended$0][$_get](i));
        if (i < 20) {
          newA = utils.add32(utils.add32(newA, (b & c | (~b & d) >>> 0) >>> 0), 1518500249);
        } else if (i < 40) {
          newA = utils.add32(utils.add32(newA, (b ^ c ^ d) >>> 0), 1859775393);
        } else if (i < 60) {
          newA = utils.add32(utils.add32(newA, (b & c | (b & d) >>> 0 | (c & d) >>> 0) >>> 0), 2400959708);
        } else {
          newA = utils.add32(utils.add32(newA, (b ^ c ^ d) >>> 0), 3395469782);
        }
        e = d;
        d = c;
        c = utils.rotl32(b, 30);
        b = a;
        a = (newA & 4294967295.0) >>> 0;
      }
      this.digest[$_set](0, utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, utils.add32(d, this.digest[$_get](3)));
      this.digest[$_set](4, utils.add32(e, this.digest[$_get](4)));
    }
  };
  (sha1._Sha1Sink.new = function(sink) {
    this[digest$] = _native_typed_data.NativeUint32List.new(5);
    this[_extended$0] = _native_typed_data.NativeUint32List.new(80);
    sha1._Sha1Sink.__proto__.new.call(this, sink, 16);
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
    this.digest[$_set](4, 3285377520);
  }).prototype = sha1._Sha1Sink.prototype;
  dart.addTypeTests(sha1._Sha1Sink);
  dart.addTypeCaches(sha1._Sha1Sink);
  dart.setMethodSignature(sha1._Sha1Sink, () => ({
    __proto__: dart.getMethods(sha1._Sha1Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(sha1._Sha1Sink, I[10]);
  dart.setFieldSignature(sha1._Sha1Sink, () => ({
    __proto__: dart.getFields(sha1._Sha1Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List),
    [_extended$0]: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(sha1, {
    /*sha1.sha1*/get sha1() {
      return C[10] || CT.C10;
    }
  }, false);
  var blockSize$5 = dart.privateName(md5, "_MD5.blockSize");
  md5._MD5 = class _MD5 extends hash.Hash {
    get blockSize() {
      return this[blockSize$5];
    }
    set blockSize(value) {
      super.blockSize = value;
    }
    static ['_#_#tearOff']() {
      return new md5._MD5.__();
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new convert._ByteAdapterSink.new(new md5._MD5Sink.new(sink));
    }
  };
  (md5._MD5.__ = function() {
    this[blockSize$5] = 16 * 4;
    md5._MD5.__proto__.new.call(this);
    ;
  }).prototype = md5._MD5.prototype;
  dart.addTypeTests(md5._MD5);
  dart.addTypeCaches(md5._MD5);
  dart.setMethodSignature(md5._MD5, () => ({
    __proto__: dart.getMethods(md5._MD5.__proto__),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(md5._MD5, I[12]);
  dart.setFieldSignature(md5._MD5, () => ({
    __proto__: dart.getFields(md5._MD5.__proto__),
    blockSize: dart.finalFieldType(core.int)
  }));
  var digest$0 = dart.privateName(md5, "_MD5Sink.digest");
  md5._MD5Sink = class _MD5Sink extends hash_sink.HashSink {
    get digest() {
      return this[digest$0];
    }
    set digest(value) {
      super.digest = value;
    }
    static ['_#new#tearOff'](sink) {
      return new md5._MD5Sink.new(sink);
    }
    updateHash(chunk) {
      if (!(chunk[$length] === 16)) dart.assertFailed(null, I[13], 81, 12, "chunk.length == 16");
      let a = this.digest[$_get](0);
      let b = this.digest[$_get](1);
      let c = this.digest[$_get](2);
      let d = this.digest[$_get](3);
      let e = null;
      let f = null;
      for (let i = 0; i < 64; i = i + 1) {
        if (i < 16) {
          e = (b & c | (~b & 4294967295.0 & d) >>> 0) >>> 0;
          f = i;
        } else if (i < 32) {
          e = (d & b | (~d & 4294967295.0 & c) >>> 0) >>> 0;
          f = (5 * i + 1)[$modulo](16);
        } else if (i < 48) {
          e = (b ^ c ^ d) >>> 0;
          f = (3 * i + 5)[$modulo](16);
        } else {
          e = (c ^ (b | (~d & 4294967295.0) >>> 0) >>> 0) >>> 0;
          f = (7 * i)[$modulo](16);
        }
        let temp = d;
        d = c;
        c = b;
        b = utils.add32(b, utils.rotl32(utils.add32(utils.add32(a, e), utils.add32(md5._noise[$_get](i), chunk[$_get](f))), md5._shiftAmounts[$_get](i)));
        a = temp;
      }
      this.digest[$_set](0, utils.add32(a, this.digest[$_get](0)));
      this.digest[$_set](1, utils.add32(b, this.digest[$_get](1)));
      this.digest[$_set](2, utils.add32(c, this.digest[$_get](2)));
      this.digest[$_set](3, utils.add32(d, this.digest[$_get](3)));
    }
  };
  (md5._MD5Sink.new = function(sink) {
    this[digest$0] = _native_typed_data.NativeUint32List.new(4);
    md5._MD5Sink.__proto__.new.call(this, sink, 16, {endian: typed_data.Endian.little});
    this.digest[$_set](0, 1732584193);
    this.digest[$_set](1, 4023233417);
    this.digest[$_set](2, 2562383102);
    this.digest[$_set](3, 271733878);
  }).prototype = md5._MD5Sink.prototype;
  dart.addTypeTests(md5._MD5Sink);
  dart.addTypeCaches(md5._MD5Sink);
  dart.setMethodSignature(md5._MD5Sink, () => ({
    __proto__: dart.getMethods(md5._MD5Sink.__proto__),
    updateHash: dart.fnType(dart.void, [typed_data.Uint32List])
  }));
  dart.setLibraryUri(md5._MD5Sink, I[12]);
  dart.setFieldSignature(md5._MD5Sink, () => ({
    __proto__: dart.getFields(md5._MD5Sink.__proto__),
    digest: dart.finalFieldType(typed_data.Uint32List)
  }));
  dart.defineLazy(md5, {
    /*md5.md5*/get md5() {
      return C[11] || CT.C11;
    },
    /*md5._noise*/get _noise() {
      return C[12] || CT.C12;
    },
    /*md5._shiftAmounts*/get _shiftAmounts() {
      return C[13] || CT.C13;
    }
  }, false);
  var _hash = dart.privateName(hmac, "_hash");
  var _key = dart.privateName(hmac, "_key");
  hmac.Hmac = class Hmac extends convert.Converter$(core.List$(core.int), digest.Digest) {
    static ['_#new#tearOff'](hash, key) {
      return new hmac.Hmac.new(hash, key);
    }
    convert(data) {
      T.ListOfint().as(data);
      let innerSink = new digest_sink.DigestSink.new();
      let outerSink = this.startChunkedConversion(innerSink);
      outerSink.add(data);
      outerSink.close();
      return innerSink.value;
    }
    startChunkedConversion(sink) {
      T.SinkOfDigest().as(sink);
      return new hmac._HmacSink.new(sink, this[_hash], this[_key]);
    }
  };
  (hmac.Hmac.new = function(hash, key) {
    this[_hash] = hash;
    this[_key] = _native_typed_data.NativeUint8List.new(hash.blockSize);
    hmac.Hmac.__proto__.new.call(this);
    if (key[$length] > this[_hash].blockSize) key = this[_hash].convert(key).bytes;
    this[_key][$setRange](0, key[$length], key);
  }).prototype = hmac.Hmac.prototype;
  dart.addTypeTests(hmac.Hmac);
  dart.addTypeCaches(hmac.Hmac);
  dart.setMethodSignature(hmac.Hmac, () => ({
    __proto__: dart.getMethods(hmac.Hmac.__proto__),
    convert: dart.fnType(digest.Digest, [dart.nullable(core.Object)]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(hmac.Hmac, I[14]);
  dart.setFieldSignature(hmac.Hmac, () => ({
    __proto__: dart.getFields(hmac.Hmac.__proto__),
    [_hash]: dart.finalFieldType(hash.Hash),
    [_key]: dart.finalFieldType(typed_data.Uint8List)
  }));
  var _innerResultSink = dart.privateName(hmac, "_innerResultSink");
  var ___HmacSink__innerSink = dart.privateName(hmac, "_#_HmacSink#_innerSink");
  var _isClosed$ = dart.privateName(hmac, "_isClosed");
  var _outerSink = dart.privateName(hmac, "_outerSink");
  var _innerSink = dart.privateName(hmac, "_innerSink");
  hmac._HmacSink = class _HmacSink extends convert.ByteConversionSink {
    get [_innerSink]() {
      let t0;
      t0 = this[___HmacSink__innerSink];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_innerSink")) : t0;
    }
    set [_innerSink](t0) {
      if (this[___HmacSink__innerSink] == null)
        this[___HmacSink__innerSink] = t0;
      else
        dart.throw(new _internal.LateError.fieldAI("_innerSink"));
    }
    static ['_#new#tearOff'](sink, hash, key) {
      return new hmac._HmacSink.new(sink, hash, key);
    }
    add(data) {
      T.ListOfint().as(data);
      if (this[_isClosed$]) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].add(data);
    }
    addSlice(data, start, end, isLast) {
      if (this[_isClosed$]) dart.throw(new core.StateError.new("HMAC is closed"));
      this[_innerSink].addSlice(data, start, end, isLast);
    }
    close() {
      if (this[_isClosed$]) return;
      this[_isClosed$] = true;
      this[_innerSink].close();
      this[_outerSink].add(this[_innerResultSink].value.bytes);
      this[_outerSink].close();
    }
  };
  (hmac._HmacSink.new = function(sink, hash, key) {
    this[_innerResultSink] = new digest_sink.DigestSink.new();
    this[___HmacSink__innerSink] = null;
    this[_isClosed$] = false;
    this[_outerSink] = hash.startChunkedConversion(sink);
    hmac._HmacSink.__proto__.new.call(this);
    this[_innerSink] = hash.startChunkedConversion(this[_innerResultSink]);
    let padding = _native_typed_data.NativeUint8List.new(key[$length]);
    for (let i = 0; i < padding[$length]; i = i + 1) {
      padding[$_set](i, (92 ^ key[$_get](i)) >>> 0);
    }
    this[_outerSink].add(padding);
    for (let i = 0; i < padding[$length]; i = i + 1) {
      padding[$_set](i, (54 ^ key[$_get](i)) >>> 0);
    }
    this[_innerSink].add(padding);
  }).prototype = hmac._HmacSink.prototype;
  dart.addTypeTests(hmac._HmacSink);
  dart.addTypeCaches(hmac._HmacSink);
  dart.setMethodSignature(hmac._HmacSink, () => ({
    __proto__: dart.getMethods(hmac._HmacSink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    addSlice: dart.fnType(dart.void, [core.List$(core.int), core.int, core.int, core.bool]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(hmac._HmacSink, () => ({
    __proto__: dart.getGetters(hmac._HmacSink.__proto__),
    [_innerSink]: convert.ByteConversionSink
  }));
  dart.setSetterSignature(hmac._HmacSink, () => ({
    __proto__: dart.getSetters(hmac._HmacSink.__proto__),
    [_innerSink]: convert.ByteConversionSink
  }));
  dart.setLibraryUri(hmac._HmacSink, I[14]);
  dart.setFieldSignature(hmac._HmacSink, () => ({
    __proto__: dart.getFields(hmac._HmacSink.__proto__),
    [_outerSink]: dart.finalFieldType(convert.ByteConversionSink),
    [_innerResultSink]: dart.finalFieldType(digest_sink.DigestSink),
    [___HmacSink__innerSink]: dart.fieldType(dart.nullable(convert.ByteConversionSink)),
    [_isClosed$]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/crypto/crypto", {
    "package:crypto/crypto.dart": crypto,
    "package:crypto/src/sha512.dart": sha512,
    "package:crypto/src/utils.dart": utils,
    "package:crypto/src/sha512_slowsinks.dart": sha512_slowsinks,
    "package:crypto/src/hash_sink.dart": hash_sink,
    "package:crypto/src/digest.dart": digest,
    "package:crypto/src/hash.dart": hash,
    "package:crypto/src/digest_sink.dart": digest_sink,
    "package:crypto/src/sha256.dart": sha256,
    "package:crypto/src/sha1.dart": sha1,
    "package:crypto/src/md5.dart": md5,
    "package:crypto/src/hmac.dart": hmac
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/digest.dart","src/hash.dart","src/sha512.dart","src/utils.dart","src/hash_sink.dart","src/sha512_slowsinks.dart","src/digest_sink.dart","src/sha256.dart","src/sha1.dart","src/md5.dart","src/hmac.dart"],"names":[],"mappings":"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","file":"crypto.sound.ddc.js"}');
  // Exports:
  return {
    crypto: crypto,
    src__sha512: sha512,
    src__utils: utils,
    src__sha512_slowsinks: sha512_slowsinks,
    src__hash_sink: hash_sink,
    src__digest: digest,
    src__hash: hash,
    src__digest_sink: digest_sink,
    src__sha256: sha256,
    src__sha1: sha1,
    src__md5: md5,
    src__hmac: hmac
  };
}));

//# sourceMappingURL=crypto.sound.ddc.js.map
