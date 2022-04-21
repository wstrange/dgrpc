define(['dart_sdk', 'packages/grpc/src/client/call', 'packages/googleapis_auth/src/access_credentials', 'packages/http/http', 'packages/crypto/crypto'], (function load__packages__grpc__src__auth__auth(dart_sdk, packages__grpc__src__client__call, packages__googleapis_auth__src__access_credentials, packages__http__http, packages__crypto__crypto) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const call = packages__grpc__src__client__call.src__client__call;
  const access_token = packages__googleapis_auth__src__access_credentials.src__access_token;
  const access_credentials = packages__googleapis_auth__src__access_credentials.src__access_credentials;
  const service_account_credentials = packages__googleapis_auth__src__access_credentials.src__service_account_credentials;
  const client = packages__http__http.src__client;
  const sha256 = packages__crypto__crypto.src__sha256;
  var auth = Object.create(dart.library);
  var rsa = Object.create(dart.library);
  var api = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $truncate = dartx.truncate;
  var $join = dartx.join;
  var $replaceAll = dartx.replaceAll;
  var $length = dartx.length;
  var $fillRange = dartx.fillRange;
  var $setRange = dartx.setRange;
  var $setAll = dartx.setAll;
  var $buffer = dartx.buffer;
  var $sublist = dartx.sublist;
  var $getUint8 = dartx.getUint8;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringAndStringToFutureOrOfvoid: () => (T.MapOfString$StringAndStringToFutureOrOfvoid = dart.constFn(dart.fnType(dart.void, [T.MapOfString$String(), core.String])))(),
    JSArrayOfMapOfString$StringAndStringToFutureOrOfvoid: () => (T.JSArrayOfMapOfString$StringAndStringToFutureOrOfvoid = dart.constFn(_interceptors.JSArray$(T.MapOfString$StringAndStringToFutureOrOfvoid())))(),
    AccessCredentialsToNull: () => (T.AccessCredentialsToNull = dart.constFn(dart.fnType(core.Null, [access_credentials.AccessCredentials])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    StringToNever: () => (T.StringToNever = dart.constFn(dart.fnType(dart.Never, [core.String])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    intToListOfint: () => (T.intToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [core.int])))(),
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfASN1Object: () => (T.JSArrayOfASN1Object = dart.constFn(_interceptors.JSArray$(rsa.ASN1Object)))(),
    VoidToASN1Object: () => (T.VoidToASN1Object = dart.constFn(dart.fnType(rsa.ASN1Object, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 30000000
      });
    },
    get C1() {
      return C[1] = dart.constList([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1], core.int);
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = [
    "package:grpc/src/auth/auth.dart",
    "package:grpc/src/auth/rsa.dart"
  ];
  var _accessToken = dart.privateName(auth, "_accessToken");
  var __BaseAuthenticator__lastUri = dart.privateName(auth, "_#BaseAuthenticator#_lastUri");
  var _lastUriSet = dart.privateName(auth, "_lastUriSet");
  var _lastUri = dart.privateName(auth, "_lastUri");
  var _tokenExpiresSoon = dart.privateName(auth, "_tokenExpiresSoon");
  auth.BaseAuthenticator = class BaseAuthenticator extends core.Object {
    get [_lastUri]() {
      let t0;
      t0 = this[__BaseAuthenticator__lastUri];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_lastUri")) : t0;
    }
    set [_lastUri](t0) {
      this[__BaseAuthenticator__lastUri] = t0;
    }
    authenticate(metadata, uri) {
      return async.async(dart.void, (function* authenticate() {
        if (this[_accessToken] == null || dart.nullCheck(this[_accessToken]).hasExpired || !this[_lastUriSet] || uri !== this[_lastUri]) {
          yield this.obtainAccessCredentials(uri);
          this[_lastUri] = uri;
          this[_lastUriSet] = true;
        }
        let auth = dart.nullCheck(this[_accessToken]).type + " " + dart.nullCheck(this[_accessToken]).data;
        metadata[$_set]("authorization", auth);
        if (this[_tokenExpiresSoon]) {
          this.obtainAccessCredentials(this[_lastUri]).catchError(dart.fn(_ => {
          }, T.dynamicToNull()));
        }
      }).bind(this));
    }
    get [_tokenExpiresSoon]() {
      return dart.nullCheck(this[_accessToken]).expiry.subtract(auth._tokenExpirationThreshold).isBefore(new core.DateTime.now().toUtc());
    }
    get toCallOptions() {
      return call.CallOptions.new({providers: T.JSArrayOfMapOfString$StringAndStringToFutureOrOfvoid().of([dart.bind(this, 'authenticate')])});
    }
  };
  (auth.BaseAuthenticator.new = function() {
    this[_accessToken] = null;
    this[__BaseAuthenticator__lastUri] = null;
    this[_lastUriSet] = false;
    ;
  }).prototype = auth.BaseAuthenticator.prototype;
  dart.addTypeTests(auth.BaseAuthenticator);
  dart.addTypeCaches(auth.BaseAuthenticator);
  dart.setMethodSignature(auth.BaseAuthenticator, () => ({
    __proto__: dart.getMethods(auth.BaseAuthenticator.__proto__),
    authenticate: dart.fnType(async.Future$(dart.void), [core.Map$(core.String, core.String), core.String])
  }));
  dart.setGetterSignature(auth.BaseAuthenticator, () => ({
    __proto__: dart.getGetters(auth.BaseAuthenticator.__proto__),
    [_lastUri]: core.String,
    [_tokenExpiresSoon]: core.bool,
    toCallOptions: call.CallOptions
  }));
  dart.setSetterSignature(auth.BaseAuthenticator, () => ({
    __proto__: dart.getSetters(auth.BaseAuthenticator.__proto__),
    [_lastUri]: core.String
  }));
  dart.setLibraryUri(auth.BaseAuthenticator, I[0]);
  dart.setFieldSignature(auth.BaseAuthenticator, () => ({
    __proto__: dart.getFields(auth.BaseAuthenticator.__proto__),
    [_accessToken]: dart.fieldType(dart.nullable(access_token.AccessToken)),
    [__BaseAuthenticator__lastUri]: dart.fieldType(dart.nullable(core.String)),
    [_lastUriSet]: dart.fieldType(core.bool)
  }));
  var _call = dart.privateName(auth, "_call");
  auth.HttpBasedAuthenticator = class HttpBasedAuthenticator extends auth.BaseAuthenticator {
    obtainAccessCredentials(uri) {
      if (this[_call] == null) {
        let authClient = client.Client.new();
        this[_call] = this.obtainCredentialsWithClient(authClient, uri).then(dart.void, dart.fn(credentials => {
          this[_accessToken] = credentials.accessToken;
          this[_call] = null;
          authClient.close();
        }, T.AccessCredentialsToNull()));
      }
      return dart.nullCheck(this[_call]);
    }
  };
  (auth.HttpBasedAuthenticator.new = function() {
    this[_call] = null;
    auth.HttpBasedAuthenticator.__proto__.new.call(this);
    ;
  }).prototype = auth.HttpBasedAuthenticator.prototype;
  dart.addTypeTests(auth.HttpBasedAuthenticator);
  dart.addTypeCaches(auth.HttpBasedAuthenticator);
  dart.setMethodSignature(auth.HttpBasedAuthenticator, () => ({
    __proto__: dart.getMethods(auth.HttpBasedAuthenticator.__proto__),
    obtainAccessCredentials: dart.fnType(async.Future$(dart.void), [core.String])
  }));
  dart.setLibraryUri(auth.HttpBasedAuthenticator, I[0]);
  dart.setFieldSignature(auth.HttpBasedAuthenticator, () => ({
    __proto__: dart.getFields(auth.HttpBasedAuthenticator.__proto__),
    [_call]: dart.fieldType(dart.nullable(async.Future$(dart.void)))
  }));
  var _serviceAccountCredentials = dart.privateName(auth, "_serviceAccountCredentials");
  var _projectId = dart.privateName(auth, "_projectId");
  var _keyId = dart.privateName(auth, "_keyId");
  auth.JwtServiceAccountAuthenticator = class JwtServiceAccountAuthenticator extends auth.BaseAuthenticator {
    static ['_#fromJson#tearOff'](serviceAccountJson) {
      return new auth.JwtServiceAccountAuthenticator.fromJson(serviceAccountJson);
    }
    static new(serviceAccountJsonString) {
      return new auth.JwtServiceAccountAuthenticator.fromJson(T.MapOfString$dynamic().as(convert.jsonDecode(serviceAccountJsonString)));
    }
    static ['_#new#tearOff'](serviceAccountJsonString) {
      return auth.JwtServiceAccountAuthenticator.new(serviceAccountJsonString);
    }
    get projectId() {
      return this[_projectId];
    }
    obtainAccessCredentials(uri) {
      return async.async(dart.void, (function* obtainAccessCredentials() {
        this[_accessToken] = auth._jwtTokenFor(this[_serviceAccountCredentials], this[_keyId], uri);
      }).bind(this));
    }
  };
  (auth.JwtServiceAccountAuthenticator.fromJson = function(serviceAccountJson) {
    this[_serviceAccountCredentials] = service_account_credentials.ServiceAccountCredentials.fromJson(serviceAccountJson);
    this[_projectId] = T.StringN().as(serviceAccountJson[$_get]("project_id"));
    this[_keyId] = T.StringN().as(serviceAccountJson[$_get]("private_key_id"));
    auth.JwtServiceAccountAuthenticator.__proto__.new.call(this);
    ;
  }).prototype = auth.JwtServiceAccountAuthenticator.prototype;
  dart.addTypeTests(auth.JwtServiceAccountAuthenticator);
  dart.addTypeCaches(auth.JwtServiceAccountAuthenticator);
  dart.setMethodSignature(auth.JwtServiceAccountAuthenticator, () => ({
    __proto__: dart.getMethods(auth.JwtServiceAccountAuthenticator.__proto__),
    obtainAccessCredentials: dart.fnType(async.Future$(dart.void), [core.String])
  }));
  dart.setStaticMethodSignature(auth.JwtServiceAccountAuthenticator, () => ['new']);
  dart.setGetterSignature(auth.JwtServiceAccountAuthenticator, () => ({
    __proto__: dart.getGetters(auth.JwtServiceAccountAuthenticator.__proto__),
    projectId: dart.nullable(core.String)
  }));
  dart.setLibraryUri(auth.JwtServiceAccountAuthenticator, I[0]);
  dart.setFieldSignature(auth.JwtServiceAccountAuthenticator, () => ({
    __proto__: dart.getFields(auth.JwtServiceAccountAuthenticator.__proto__),
    [_serviceAccountCredentials]: dart.fieldType(service_account_credentials.ServiceAccountCredentials),
    [_projectId]: dart.fieldType(dart.nullable(core.String)),
    [_keyId]: dart.fieldType(dart.nullable(core.String))
  }));
  auth._jwtTokenFor = function _jwtTokenFor(credentials, keyId, uri, opts) {
    let t1;
    let user = opts && 'user' in opts ? opts.user : null;
    let scopes = opts && 'scopes' in opts ? opts.scopes : null;
    let timestamp = (new core.DateTime.now().toUtc().millisecondsSinceEpoch / 1000)[$truncate]() - 20;
    let expiry = timestamp + 3600;
    let header = new (T.IdentityMapOfString$String()).from(["alg", "RS256", "typ", "JWT"]);
    if (keyId != null) {
      header[$_set]("kid", keyId);
    }
    let claims = new (T.IdentityMapOfString$dynamic()).from(["iss", credentials.email, "aud", uri, "exp", expiry, "iat", timestamp, "sub", (t1 = user, t1 == null ? credentials.email : t1)]);
    if (scopes != null) {
      claims[$_set]("scope", scopes[$join](" "));
    }
    let headerBase64 = auth._base64url(convert.ascii.encode(convert.jsonEncode(header)));
    let claimsBase64 = auth._base64url(convert.utf8.encode(convert.jsonEncode(claims)));
    let data = headerBase64 + "." + claimsBase64;
    let key = credentials.privateRSAKey;
    let signer = new rsa.RS256Signer.new(new rsa.RSAPrivateKey.new(key.n, key.e, key.d, key.p, key.q, key.dmp1, key.dmq1, key.coeff));
    let signature = signer.sign(convert.ascii.encode(data));
    let jwt = data + "." + auth._base64url(signature);
    return new access_token.AccessToken.new("Bearer", jwt, new core.DateTime.fromMillisecondsSinceEpoch(expiry * 1000, {isUtc: true}));
  };
  auth._base64url = function _base64url(bytes) {
    return convert.base64Url.encode(bytes)[$replaceAll]("=", "");
  };
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(auth, {
    /*auth._tokenExpirationThreshold*/get _tokenExpirationThreshold() {
      return C[0] || CT.C0;
    }
  }, false);
  var _rsaKey$ = dart.privateName(rsa, "_rsaKey");
  rsa.RS256Signer = class RS256Signer extends core.Object {
    static ['_#new#tearOff'](_rsaKey) {
      return new rsa.RS256Signer.new(_rsaKey);
    }
    sign(bytes) {
      let digest = rsa.RS256Signer._digestInfo(sha256.sha256.convert(bytes).bytes);
      let modulusLen = ((this[_rsaKey$].bitLength + 7) / 8)[$truncate]();
      let block = _native_typed_data.NativeUint8List.new(modulusLen);
      let padLength = block[$length] - digest[$length] - 3;
      block[$_set](0, 0);
      block[$_set](1, 1);
      block[$fillRange](2, 2 + padLength, 255);
      block[$_set](2 + padLength, 0);
      block[$setRange](2 + padLength + 1, block[$length], digest);
      return rsa.RSAAlgorithm.encrypt(this[_rsaKey$], block, modulusLen);
    }
    static _digestInfo(hash) {
      let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5;
      let offset = 0;
      let digestInfo = _native_typed_data.NativeUint8List.new(2 + 2 + rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER[$length] + 2 + 2 + hash[$length]);
      {
        digestInfo[$_set]((t1 = offset, offset = t1 + 1, t1), 48);
        digestInfo[$_set]((t1$ = offset, offset = t1$ + 1, t1$), digestInfo[$length] - 2);
        {
          digestInfo[$_set]((t1$0 = offset, offset = t1$0 + 1, t1$0), 48);
          digestInfo[$_set]((t1$1 = offset, offset = t1$1 + 1, t1$1), rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER[$length] + 2);
          digestInfo[$setAll](offset, rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER);
          offset = offset + rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER[$length];
          digestInfo[$_set]((t1$2 = offset, offset = t1$2 + 1, t1$2), 5);
          digestInfo[$_set]((t1$3 = offset, offset = t1$3 + 1, t1$3), 0);
        }
        digestInfo[$_set]((t1$4 = offset, offset = t1$4 + 1, t1$4), 4);
        digestInfo[$_set]((t1$5 = offset, offset = t1$5 + 1, t1$5), hash[$length]);
        digestInfo[$setAll](offset, hash);
      }
      return digestInfo;
    }
  };
  (rsa.RS256Signer.new = function(_rsaKey) {
    this[_rsaKey$] = _rsaKey;
    ;
  }).prototype = rsa.RS256Signer.prototype;
  dart.addTypeTests(rsa.RS256Signer);
  dart.addTypeCaches(rsa.RS256Signer);
  dart.setMethodSignature(rsa.RS256Signer, () => ({
    __proto__: dart.getMethods(rsa.RS256Signer.__proto__),
    sign: dart.fnType(core.List$(core.int), [core.List$(core.int)])
  }));
  dart.setStaticMethodSignature(rsa.RS256Signer, () => ['_digestInfo']);
  dart.setLibraryUri(rsa.RS256Signer, I[1]);
  dart.setFieldSignature(rsa.RS256Signer, () => ({
    __proto__: dart.getFields(rsa.RS256Signer.__proto__),
    [_rsaKey$]: dart.finalFieldType(rsa.RSAPrivateKey)
  }));
  dart.setStaticFieldSignature(rsa.RS256Signer, () => ['_RSA_SHA256_ALGORITHM_IDENTIFIER']);
  dart.defineLazy(rsa.RS256Signer, {
    /*rsa.RS256Signer._RSA_SHA256_ALGORITHM_IDENTIFIER*/get _RSA_SHA256_ALGORITHM_IDENTIFIER() {
      return C[1] || CT.C1;
    }
  }, false);
  rsa.ASN1Parser = class ASN1Parser extends core.Object {
    static parse(bytes) {
      function invalidFormat(msg) {
        dart.throw(new core.ArgumentError.new("Invalid DER encoding: " + msg));
      }
      dart.fn(invalidFormat, T.StringToNever());
      let data = typed_data.ByteData.view(bytes[$buffer]);
      let offset = 0;
      let end = bytes[$length];
      function checkNBytesAvailable(n) {
        if (offset + n > end) {
          invalidFormat("Tried to read more bytes than available.");
        }
      }
      dart.fn(checkNBytesAvailable, T.intTovoid());
      function readBytes(n) {
        checkNBytesAvailable(n);
        let integerBytes = bytes[$sublist](offset, offset + n);
        offset = offset + n;
        return integerBytes;
      }
      dart.fn(readBytes, T.intToListOfint());
      function readEncodedLength() {
        let t1, t1$;
        checkNBytesAvailable(1);
        let lengthByte = data[$getUint8]((t1 = offset, offset = t1 + 1, t1));
        if (lengthByte < 128) {
          return lengthByte;
        }
        let countLengthBytes = lengthByte & 127;
        checkNBytesAvailable(countLengthBytes);
        let length = 0;
        while (countLengthBytes > 0) {
          length = (length << 8 | data[$getUint8]((t1$ = offset, offset = t1$ + 1, t1$))) >>> 0;
          countLengthBytes = countLengthBytes - 1;
        }
        return length;
      }
      dart.fn(readEncodedLength, T.VoidToint());
      function readNullBytes() {
        let t1;
        checkNBytesAvailable(1);
        let nullByte = data[$getUint8]((t1 = offset, offset = t1 + 1, t1));
        if (nullByte !== 0) {
          invalidFormat("Null byte expect, but was: " + dart.str(nullByte) + ".");
        }
      }
      dart.fn(readNullBytes, T.VoidTovoid());
      function decodeObject() {
        let t1;
        checkNBytesAvailable(1);
        let tag = bytes[$_get]((t1 = offset, offset = t1 + 1, t1));
        switch (tag) {
          case 2:
          {
            let size = readEncodedLength();
            return new rsa.ASN1Integer.new(rsa.RSAAlgorithm.bytes2BigInt(readBytes(size)));
          }
          case 4:
          {
            let size = readEncodedLength();
            return new rsa.ASN1OctetString.new(readBytes(size));
          }
          case 5:
          {
            readNullBytes();
            return new rsa.ASN1Null.new();
          }
          case 6:
          {
            let size = readEncodedLength();
            return new rsa.ASN1ObjectIdentifier.new(readBytes(size));
          }
          case 48:
          {
            let lengthInBytes = readEncodedLength();
            if (offset + lengthInBytes > end) {
              invalidFormat("Tried to read more bytes than available.");
            }
            let endOfSequence = offset + lengthInBytes;
            let objects = T.JSArrayOfASN1Object().of([]);
            while (offset < endOfSequence) {
              objects[$add](decodeObject());
            }
            return new rsa.ASN1Sequence.new(objects);
          }
          default:
          {
            invalidFormat("Unexpected tag " + dart.str(tag) + " at offset " + dart.str(offset - 1) + " (end: " + dart.str(end) + ").");
          }
        }
      }
      dart.fn(decodeObject, T.VoidToASN1Object());
      let obj = decodeObject();
      if (offset !== bytes[$length]) {
        dart.throw(new core.ArgumentError.new("More bytes than expected in ASN1 encoding."));
      }
      return obj;
    }
    static ['_#new#tearOff']() {
      return new rsa.ASN1Parser.new();
    }
  };
  (rsa.ASN1Parser.new = function() {
    ;
  }).prototype = rsa.ASN1Parser.prototype;
  dart.addTypeTests(rsa.ASN1Parser);
  dart.addTypeCaches(rsa.ASN1Parser);
  dart.setStaticMethodSignature(rsa.ASN1Parser, () => ['parse']);
  dart.setLibraryUri(rsa.ASN1Parser, I[1]);
  dart.setStaticFieldSignature(rsa.ASN1Parser, () => ['INTEGER_TAG', 'OCTET_STRING_TAG', 'NULL_TAG', 'OBJECT_ID_TAG', 'SEQUENCE_TAG']);
  dart.defineLazy(rsa.ASN1Parser, {
    /*rsa.ASN1Parser.INTEGER_TAG*/get INTEGER_TAG() {
      return 2;
    },
    /*rsa.ASN1Parser.OCTET_STRING_TAG*/get OCTET_STRING_TAG() {
      return 4;
    },
    /*rsa.ASN1Parser.NULL_TAG*/get NULL_TAG() {
      return 5;
    },
    /*rsa.ASN1Parser.OBJECT_ID_TAG*/get OBJECT_ID_TAG() {
      return 6;
    },
    /*rsa.ASN1Parser.SEQUENCE_TAG*/get SEQUENCE_TAG() {
      return 48;
    }
  }, false);
  rsa.ASN1Object = class ASN1Object extends core.Object {};
  (rsa.ASN1Object.new = function() {
    ;
  }).prototype = rsa.ASN1Object.prototype;
  dart.addTypeTests(rsa.ASN1Object);
  dart.addTypeCaches(rsa.ASN1Object);
  dart.setLibraryUri(rsa.ASN1Object, I[1]);
  var objects$ = dart.privateName(rsa, "ASN1Sequence.objects");
  rsa.ASN1Sequence = class ASN1Sequence extends rsa.ASN1Object {
    get objects() {
      return this[objects$];
    }
    set objects(value) {
      super.objects = value;
    }
    static ['_#new#tearOff'](objects) {
      return new rsa.ASN1Sequence.new(objects);
    }
  };
  (rsa.ASN1Sequence.new = function(objects) {
    this[objects$] = objects;
    ;
  }).prototype = rsa.ASN1Sequence.prototype;
  dart.addTypeTests(rsa.ASN1Sequence);
  dart.addTypeCaches(rsa.ASN1Sequence);
  dart.setLibraryUri(rsa.ASN1Sequence, I[1]);
  dart.setFieldSignature(rsa.ASN1Sequence, () => ({
    __proto__: dart.getFields(rsa.ASN1Sequence.__proto__),
    objects: dart.finalFieldType(core.List$(rsa.ASN1Object))
  }));
  var integer$ = dart.privateName(rsa, "ASN1Integer.integer");
  rsa.ASN1Integer = class ASN1Integer extends rsa.ASN1Object {
    get integer() {
      return this[integer$];
    }
    set integer(value) {
      super.integer = value;
    }
    static ['_#new#tearOff'](integer) {
      return new rsa.ASN1Integer.new(integer);
    }
  };
  (rsa.ASN1Integer.new = function(integer) {
    this[integer$] = integer;
    ;
  }).prototype = rsa.ASN1Integer.prototype;
  dart.addTypeTests(rsa.ASN1Integer);
  dart.addTypeCaches(rsa.ASN1Integer);
  dart.setLibraryUri(rsa.ASN1Integer, I[1]);
  dart.setFieldSignature(rsa.ASN1Integer, () => ({
    __proto__: dart.getFields(rsa.ASN1Integer.__proto__),
    integer: dart.finalFieldType(core.BigInt)
  }));
  var bytes$ = dart.privateName(rsa, "ASN1OctetString.bytes");
  rsa.ASN1OctetString = class ASN1OctetString extends rsa.ASN1Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new rsa.ASN1OctetString.new(bytes);
    }
  };
  (rsa.ASN1OctetString.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = rsa.ASN1OctetString.prototype;
  dart.addTypeTests(rsa.ASN1OctetString);
  dart.addTypeCaches(rsa.ASN1OctetString);
  dart.setLibraryUri(rsa.ASN1OctetString, I[1]);
  dart.setFieldSignature(rsa.ASN1OctetString, () => ({
    __proto__: dart.getFields(rsa.ASN1OctetString.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  var bytes$0 = dart.privateName(rsa, "ASN1ObjectIdentifier.bytes");
  rsa.ASN1ObjectIdentifier = class ASN1ObjectIdentifier extends rsa.ASN1Object {
    get bytes() {
      return this[bytes$0];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new rsa.ASN1ObjectIdentifier.new(bytes);
    }
  };
  (rsa.ASN1ObjectIdentifier.new = function(bytes) {
    this[bytes$0] = bytes;
    ;
  }).prototype = rsa.ASN1ObjectIdentifier.prototype;
  dart.addTypeTests(rsa.ASN1ObjectIdentifier);
  dart.addTypeCaches(rsa.ASN1ObjectIdentifier);
  dart.setLibraryUri(rsa.ASN1ObjectIdentifier, I[1]);
  dart.setFieldSignature(rsa.ASN1ObjectIdentifier, () => ({
    __proto__: dart.getFields(rsa.ASN1ObjectIdentifier.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  rsa.ASN1Null = class ASN1Null extends rsa.ASN1Object {
    static ['_#new#tearOff']() {
      return new rsa.ASN1Null.new();
    }
  };
  (rsa.ASN1Null.new = function() {
    ;
  }).prototype = rsa.ASN1Null.prototype;
  dart.addTypeTests(rsa.ASN1Null);
  dart.addTypeCaches(rsa.ASN1Null);
  dart.setLibraryUri(rsa.ASN1Null, I[1]);
  var p$ = dart.privateName(rsa, "RSAPrivateKey.p");
  var q$ = dart.privateName(rsa, "RSAPrivateKey.q");
  var n$ = dart.privateName(rsa, "RSAPrivateKey.n");
  var e$ = dart.privateName(rsa, "RSAPrivateKey.e");
  var d$ = dart.privateName(rsa, "RSAPrivateKey.d");
  var dmp1$ = dart.privateName(rsa, "RSAPrivateKey.dmp1");
  var dmq1$ = dart.privateName(rsa, "RSAPrivateKey.dmq1");
  var coeff$ = dart.privateName(rsa, "RSAPrivateKey.coeff");
  rsa.RSAPrivateKey = class RSAPrivateKey extends core.Object {
    get p() {
      return this[p$];
    }
    set p(value) {
      super.p = value;
    }
    get q() {
      return this[q$];
    }
    set q(value) {
      super.q = value;
    }
    get n() {
      return this[n$];
    }
    set n(value) {
      super.n = value;
    }
    get e() {
      return this[e$];
    }
    set e(value) {
      super.e = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    get dmp1() {
      return this[dmp1$];
    }
    set dmp1(value) {
      super.dmp1 = value;
    }
    get dmq1() {
      return this[dmq1$];
    }
    set dmq1(value) {
      super.dmq1 = value;
    }
    get coeff() {
      return this[coeff$];
    }
    set coeff(value) {
      super.coeff = value;
    }
    get bitLength() {
      return this.n.bitLength;
    }
    static ['_#new#tearOff'](n, e, d, p, q, dmp1, dmq1, coeff) {
      return new rsa.RSAPrivateKey.new(n, e, d, p, q, dmp1, dmq1, coeff);
    }
  };
  (rsa.RSAPrivateKey.new = function(n, e, d, p, q, dmp1, dmq1, coeff) {
    this[n$] = n;
    this[e$] = e;
    this[d$] = d;
    this[p$] = p;
    this[q$] = q;
    this[dmp1$] = dmp1;
    this[dmq1$] = dmq1;
    this[coeff$] = coeff;
    ;
  }).prototype = rsa.RSAPrivateKey.prototype;
  dart.addTypeTests(rsa.RSAPrivateKey);
  dart.addTypeCaches(rsa.RSAPrivateKey);
  dart.setGetterSignature(rsa.RSAPrivateKey, () => ({
    __proto__: dart.getGetters(rsa.RSAPrivateKey.__proto__),
    bitLength: core.int
  }));
  dart.setLibraryUri(rsa.RSAPrivateKey, I[1]);
  dart.setFieldSignature(rsa.RSAPrivateKey, () => ({
    __proto__: dart.getFields(rsa.RSAPrivateKey.__proto__),
    p: dart.finalFieldType(core.BigInt),
    q: dart.finalFieldType(core.BigInt),
    n: dart.finalFieldType(core.BigInt),
    e: dart.finalFieldType(core.BigInt),
    d: dart.finalFieldType(core.BigInt),
    dmp1: dart.finalFieldType(core.BigInt),
    dmq1: dart.finalFieldType(core.BigInt),
    coeff: dart.finalFieldType(core.BigInt)
  }));
  rsa.RSAAlgorithm = class RSAAlgorithm extends core.Object {
    static encrypt(key, bytes, intendedLength) {
      let message = rsa.RSAAlgorithm.bytes2BigInt(bytes);
      let encryptedMessage = rsa.RSAAlgorithm._encryptInteger(key, message);
      return rsa.RSAAlgorithm.integer2Bytes(encryptedMessage, intendedLength);
    }
    static _encryptInteger(key, x) {
      let xp = rsa.RSAAlgorithm._modPow(x['%'](key.p), key.dmp1, key.p);
      let xq = rsa.RSAAlgorithm._modPow(x['%'](key.q), key.dmq1, key.q);
      while (xp['<'](xq)) {
        xp = xp['+'](key.p);
      }
      return xp['-'](xq)['*'](key.coeff)['%'](key.p)['*'](key.q)['+'](xq);
    }
    static _modPow(b, e, m) {
      if (e['<'](core.BigInt.one)) {
        return core.BigInt.one;
      }
      if (b['<'](core.BigInt.zero) || b['>'](m)) {
        b = b['%'](m);
      }
      let r = core.BigInt.one;
      while (e['>'](core.BigInt.zero)) {
        if (e['&'](core.BigInt.one)['>'](core.BigInt.zero)) {
          r = r['*'](b)['%'](m);
        }
        e = e['>>'](1);
        b = b['*'](b)['%'](m);
      }
      return r;
    }
    static bytes2BigInt(bytes) {
      let number = core.BigInt.zero;
      for (let i = 0; i < bytes[$length]; i = i + 1) {
        number = number['<<'](8)['|'](core._BigIntImpl.from(bytes[$_get](i)));
      }
      return number;
    }
    static integer2Bytes(integer, intendedLength) {
      if (integer['<'](core.BigInt.one)) {
        dart.throw(new core.ArgumentError.new("Only positive integers are supported."));
      }
      let bytes = _native_typed_data.NativeUint8List.new(intendedLength);
      for (let i = bytes[$length] - 1; i >= 0; i = i - 1) {
        bytes[$_set](i, integer['&'](rsa._bigIntFF).toInt());
        integer = integer['>>'](8);
      }
      return bytes;
    }
  };
  (rsa.RSAAlgorithm.new = function() {
    ;
  }).prototype = rsa.RSAAlgorithm.prototype;
  dart.addTypeTests(rsa.RSAAlgorithm);
  dart.addTypeCaches(rsa.RSAAlgorithm);
  dart.setStaticMethodSignature(rsa.RSAAlgorithm, () => ['encrypt', '_encryptInteger', '_modPow', 'bytes2BigInt', 'integer2Bytes']);
  dart.setLibraryUri(rsa.RSAAlgorithm, I[1]);
  dart.defineLazy(rsa, {
    /*rsa._bigIntFF*/get _bigIntFF() {
      return core._BigIntImpl.from(255);
    }
  }, false);
  dart.trackLibraries("packages/grpc/src/auth/auth", {
    "package:grpc/src/auth/auth.dart": auth,
    "package:grpc/src/auth/rsa.dart": rsa,
    "package:grpc/src/shared/api.dart": api
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart","rsa.dart"],"names":[],"mappings":"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","file":"auth.sound.ddc.js"}');
  // Exports:
  return {
    src__auth__auth: auth,
    src__auth__rsa: rsa,
    src__shared__api: api
  };
}));

//# sourceMappingURL=auth.sound.ddc.js.map
