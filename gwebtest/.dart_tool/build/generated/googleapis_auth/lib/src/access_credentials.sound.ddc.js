define(['dart_sdk', 'packages/http/http', 'packages/http/src/boundary_characters', 'packages/http_parser/http_parser'], (function load__packages__googleapis_auth__src__access_credentials(dart_sdk, packages__http__http, packages__http__src__boundary_characters, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _internal = dart_sdk._internal;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const base_client = packages__http__http.src__base_client;
  const client = packages__http__http.src__client;
  const streamed_response = packages__http__http.src__streamed_response;
  const base_request = packages__http__http.src__base_request;
  const byte_stream = packages__http__src__boundary_characters.src__byte_stream;
  const media_type = packages__http_parser__http_parser.src__media_type;
  var http_client_base = Object.create(dart.library);
  var client_id = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var known_uris = Object.create(dart.library);
  var exceptions = Object.create(dart.library);
  var access_token = Object.create(dart.library);
  var asn1 = Object.create(dart.library);
  var rsa = Object.create(dart.library);
  var auth_http_utils = Object.create(dart.library);
  var auth_functions = Object.create(dart.library);
  var auth_client = Object.create(dart.library);
  var access_credentials = Object.create(dart.library);
  var pem = Object.create(dart.library);
  var service_account_credentials = Object.create(dart.library);
  var response_type = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $join = dartx.join;
  var $entries = dartx.entries;
  var $map = dartx.map;
  var $where = dartx.where;
  var $isEmpty = dartx.isEmpty;
  var $endsWith = dartx.endsWith;
  var $buffer = dartx.buffer;
  var $length = dartx.length;
  var $sublist = dartx.sublist;
  var $getUint8 = dartx.getUint8;
  var $add = dartx.add;
  var $addAll = dartx.addAll;
  var $containsKey = dartx.containsKey;
  var $toList = dartx.toList;
  var $trim = dartx.trim;
  var $isNotEmpty = dartx.isNotEmpty;
  var $first = dartx.first;
  var $startsWith = dartx.startsWith;
  var $last = dartx.last;
  var $take = dartx.take;
  var $_equals = dartx._equals;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    _EmptyStreamOfListOfint: () => (T._EmptyStreamOfListOfint = dart.constFn(async._EmptyStream$(T.ListOfint())))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    VoidToString: () => (T.VoidToString = dart.constFn(dart.fnType(core.String, [])))(),
    StringTodynamic: () => (T.StringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String])))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    FutureOfMapOfString$dynamic: () => (T.FutureOfMapOfString$dynamic = dart.constFn(async.Future$(T.MapOfString$dynamic())))(),
    BaseRequestAndStringToFutureOfMapOfString$dynamic: () => (T.BaseRequestAndStringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(T.FutureOfMapOfString$dynamic(), [base_request.BaseRequest, core.String])))(),
    StreamOfListOfint: () => (T.StreamOfListOfint = dart.constFn(async.Stream$(T.ListOfint())))(),
    MapEntryOfString$String: () => (T.MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))(),
    MapEntryOfString$StringToString: () => (T.MapEntryOfString$StringToString = dart.constFn(dart.fnType(core.String, [T.MapEntryOfString$String()])))(),
    MapOfString$String: () => (T.MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))(),
    MapOfString$StringToFutureOfMapOfString$dynamic: () => (T.MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(T.FutureOfMapOfString$dynamic(), [T.MapOfString$String()])))(),
    dynamicTobool: () => (T.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    JSArrayOfStringN: () => (T.JSArrayOfStringN = dart.constFn(_interceptors.JSArray$(T.StringN())))(),
    StringToNever: () => (T.StringToNever = dart.constFn(dart.fnType(dart.Never, [core.String])))(),
    intTovoid: () => (T.intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))(),
    intToListOfint: () => (T.intToListOfint = dart.constFn(dart.fnType(T.ListOfint(), [core.int])))(),
    VoidToint: () => (T.VoidToint = dart.constFn(dart.fnType(core.int, [])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfASN1Object: () => (T.JSArrayOfASN1Object = dart.constFn(_interceptors.JSArray$(asn1.ASN1Object)))(),
    VoidToASN1Object: () => (T.VoidToASN1Object = dart.constFn(dart.fnType(asn1.ASN1Object, [])))(),
    StreamControllerOfAccessCredentials: () => (T.StreamControllerOfAccessCredentials = dart.constFn(async.StreamController$(access_credentials.AccessCredentials)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    dynamicToString: () => (T.dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))(),
    StringToString: () => (T.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    StringTobool: () => (T.StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))(),
    ASN1ObjectToASN1Integer: () => (T.ASN1ObjectToASN1Integer = dart.constFn(dart.fnType(asn1.ASN1Integer, [asn1.ASN1Object])))(),
    ASN1SequenceToRSAPrivateKey: () => (T.ASN1SequenceToRSAPrivateKey = dart.constFn(dart.fnType(rsa.RSAPrivateKey, [asn1.ASN1Sequence])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: T._EmptyStreamOfListOfint().prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: response_type.ResponseType.prototype,
        [_Enum__name]: "code",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: response_type.ResponseType.prototype,
        [_Enum__name]: "idToken",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: response_type.ResponseType.prototype,
        [_Enum__name]: "permission",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: response_type.ResponseType.prototype,
        [_Enum__name]: "token",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], response_type.ResponseType);
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "package:googleapis_auth/src/http_client_base.dart",
    "package:googleapis_auth/src/client_id.dart",
    "package:googleapis_auth/src/exceptions.dart",
    "package:googleapis_auth/src/access_token.dart",
    "package:googleapis_auth/src/crypto/asn1.dart",
    "package:googleapis_auth/src/crypto/rsa.dart",
    "package:googleapis_auth/src/auth_http_utils.dart",
    "org-dartlang-app:///packages/googleapis_auth/src/auth_http_utils.dart",
    "package:googleapis_auth/src/auth_client.dart",
    "package:googleapis_auth/src/access_credentials.dart",
    "package:googleapis_auth/src/service_account_credentials.dart",
    "package:googleapis_auth/src/response_type.dart"
  ];
  var baseClient$ = dart.privateName(http_client_base, "DelegatingClient.baseClient");
  var closeUnderlyingClient$ = dart.privateName(http_client_base, "DelegatingClient.closeUnderlyingClient");
  var _isClosed = dart.privateName(http_client_base, "_isClosed");
  http_client_base.DelegatingClient = class DelegatingClient extends base_client.BaseClient {
    get baseClient() {
      return this[baseClient$];
    }
    set baseClient(value) {
      super.baseClient = value;
    }
    get closeUnderlyingClient() {
      return this[closeUnderlyingClient$];
    }
    set closeUnderlyingClient(value) {
      super.closeUnderlyingClient = value;
    }
    close() {
      if (this[_isClosed]) {
        dart.throw(new core.StateError.new("Cannot close a HTTP client more than once."));
      }
      this[_isClosed] = true;
      super.close();
      if (this.closeUnderlyingClient) {
        this.baseClient.close();
      }
    }
  };
  (http_client_base.DelegatingClient.new = function(baseClient, opts) {
    let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : true;
    this[_isClosed] = false;
    this[baseClient$] = baseClient;
    this[closeUnderlyingClient$] = closeUnderlyingClient;
    ;
  }).prototype = http_client_base.DelegatingClient.prototype;
  dart.addTypeTests(http_client_base.DelegatingClient);
  dart.addTypeCaches(http_client_base.DelegatingClient);
  dart.setLibraryUri(http_client_base.DelegatingClient, I[0]);
  dart.setFieldSignature(http_client_base.DelegatingClient, () => ({
    __proto__: dart.getFields(http_client_base.DelegatingClient.__proto__),
    baseClient: dart.finalFieldType(client.Client),
    closeUnderlyingClient: dart.finalFieldType(core.bool),
    [_isClosed]: dart.fieldType(core.bool)
  }));
  var _refCount = dart.privateName(http_client_base, "_refCount");
  var _ensureClientIsOpen = dart.privateName(http_client_base, "_ensureClientIsOpen");
  http_client_base.RefCountedClient = class RefCountedClient extends http_client_base.DelegatingClient {
    static ['_#new#tearOff'](baseClient, opts) {
      let initialRefCount = opts && 'initialRefCount' in opts ? opts.initialRefCount : 1;
      return new http_client_base.RefCountedClient.new(baseClient, {initialRefCount: initialRefCount});
    }
    send(request) {
      this[_ensureClientIsOpen]();
      return this.baseClient.send(request);
    }
    acquire() {
      this[_ensureClientIsOpen]();
      this[_refCount] = this[_refCount] + 1;
    }
    release() {
      this[_ensureClientIsOpen]();
      this[_refCount] = this[_refCount] - 1;
      if (this[_refCount] === 0) {
        super.close();
      }
    }
    close() {
      this.release();
    }
    [_ensureClientIsOpen]() {
      if (this[_refCount] <= 0) {
        dart.throw(new core.StateError.new("This reference counted HTTP client has reached a count of zero and " + "can no longer be used for making HTTP requests."));
      }
    }
  };
  (http_client_base.RefCountedClient.new = function(baseClient, opts) {
    let initialRefCount = opts && 'initialRefCount' in opts ? opts.initialRefCount : 1;
    this[_refCount] = initialRefCount;
    http_client_base.RefCountedClient.__proto__.new.call(this, baseClient, {closeUnderlyingClient: true});
    ;
  }).prototype = http_client_base.RefCountedClient.prototype;
  dart.addTypeTests(http_client_base.RefCountedClient);
  dart.addTypeCaches(http_client_base.RefCountedClient);
  dart.setMethodSignature(http_client_base.RefCountedClient, () => ({
    __proto__: dart.getMethods(http_client_base.RefCountedClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest]),
    acquire: dart.fnType(dart.void, []),
    release: dart.fnType(dart.void, []),
    [_ensureClientIsOpen]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(http_client_base.RefCountedClient, I[0]);
  dart.setFieldSignature(http_client_base.RefCountedClient, () => ({
    __proto__: dart.getFields(http_client_base.RefCountedClient.__proto__),
    [_refCount]: dart.fieldType(core.int)
  }));
  var _stream = dart.privateName(http_client_base, "_stream");
  http_client_base.RequestImpl = class RequestImpl extends base_request.BaseRequest {
    static ['_#new#tearOff'](method, url, stream = null) {
      return new http_client_base.RequestImpl.new(method, url, stream);
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_stream]);
    }
  };
  (http_client_base.RequestImpl.new = function(method, url, stream = null) {
    let t0;
    this[_stream] = (t0 = stream, t0 == null ? C[0] || CT.C0 : t0);
    http_client_base.RequestImpl.__proto__.new.call(this, method, url);
    ;
  }).prototype = http_client_base.RequestImpl.prototype;
  dart.addTypeTests(http_client_base.RequestImpl);
  dart.addTypeCaches(http_client_base.RequestImpl);
  dart.setLibraryUri(http_client_base.RequestImpl, I[0]);
  dart.setFieldSignature(http_client_base.RequestImpl, () => ({
    __proto__: dart.getFields(http_client_base.RequestImpl.__proto__),
    [_stream]: dart.finalFieldType(async.Stream$(core.List$(core.int)))
  }));
  http_client_base.nonClosingClient = function nonClosingClient(baseClient) {
    return new http_client_base.RefCountedClient.new(baseClient, {initialRefCount: 2});
  };
  var identifier$ = dart.privateName(client_id, "ClientId.identifier");
  var secret$ = dart.privateName(client_id, "ClientId.secret");
  client_id.ClientId = class ClientId extends core.Object {
    get identifier() {
      return this[identifier$];
    }
    set identifier(value) {
      super.identifier = value;
    }
    get secret() {
      return this[secret$];
    }
    set secret(value) {
      super.secret = value;
    }
    static ['_#new#tearOff'](identifier, secret = null) {
      return new client_id.ClientId.new(identifier, secret);
    }
    static ['_#serviceAccount#tearOff'](identifier) {
      return new client_id.ClientId.serviceAccount(identifier);
    }
    static fromJson(json) {
      return new client_id.ClientId.new(core.String.as(json[$_get]("identifier")), T.StringN().as(json[$_get]("secret")));
    }
    static ['_#fromJson#tearOff'](json) {
      return client_id.ClientId.fromJson(json);
    }
    toJson() {
      return (() => {
        let t0 = new (T.IdentityMapOfString$dynamic()).new();
        t0[$_set]("identifier", this.identifier);
        if (this.secret != null) t0[$_set]("secret", this.secret);
        return t0;
      })();
    }
  };
  (client_id.ClientId.new = function(identifier, secret = null) {
    this[identifier$] = identifier;
    this[secret$] = secret;
    ;
  }).prototype = client_id.ClientId.prototype;
  (client_id.ClientId.serviceAccount = function(identifier) {
    this[identifier$] = identifier;
    this[secret$] = null;
    ;
  }).prototype = client_id.ClientId.prototype;
  dart.addTypeTests(client_id.ClientId);
  dart.addTypeCaches(client_id.ClientId);
  dart.setMethodSignature(client_id.ClientId, () => ({
    __proto__: dart.getMethods(client_id.ClientId.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(client_id.ClientId, () => ['fromJson']);
  dart.setLibraryUri(client_id.ClientId, I[1]);
  dart.setFieldSignature(client_id.ClientId, () => ({
    __proto__: dart.getFields(client_id.ClientId.__proto__),
    identifier: dart.finalFieldType(core.String),
    secret: dart.finalFieldType(dart.nullable(core.String))
  }));
  utils.parseAccessToken = function parseAccessToken(jsonMap) {
    let tokenType = jsonMap[$_get]("token_type");
    let accessToken = jsonMap[$_get]("access_token");
    let expiresIn = jsonMap[$_get]("expires_in");
    if (!(typeof accessToken == 'string') || !core.int.is(expiresIn) || !dart.equals(tokenType, "Bearer")) {
      dart.throw(new exceptions.ServerRequestFailedException.new("Failed to exchange authorization code. Invalid server response.", {responseContent: jsonMap}));
    }
    return new access_token.AccessToken.new("Bearer", accessToken, utils.expiryDate(expiresIn));
  };
  utils.expiryDate = function expiryDate(seconds) {
    return new core.DateTime.now().toUtc().add(new core.Duration.new({seconds: seconds - 20}));
  };
  utils._readJsonMapFromResponse = function _readJsonMapFromResponse(response) {
    return async.async(T.MapOfString$dynamic(), function* _readJsonMapFromResponse() {
      yield utils._expectJsonResponse(response);
      let jsonValue = null;
      let bytes = (yield response.stream.toBytes());
      let string = null;
      function string$35get() {
        let t2;
        t2 = string;
        return t2 == null ? dart.throw(new _internal.LateError.localNI("string")) : t2;
      }
      dart.fn(string$35get, T.VoidToString());
      function string$35set(t3) {
        return string = t3;
      }
      dart.fn(string$35set, T.StringTodynamic());
      try {
        string$35set(convert.utf8.decode(bytes));
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.FormatException.is(e)) {
          dart.throw(new exceptions.ServerRequestFailedException.new("The response was not valid UTF-8. " + dart.str(e), {statusCode: response.statusCode, responseContent: bytes}));
        } else
          throw e$;
      }
      try {
        jsonValue = convert.jsonDecode(string$35get());
      } catch (e$0) {
        let e = dart.getThrown(e$0);
        if (core.FormatException.is(e)) {
          dart.throw(new exceptions.ServerRequestFailedException.new("Could not decode the response as JSON. " + dart.str(e), {statusCode: response.statusCode, responseContent: string$35get()}));
        } else
          throw e$0;
      }
      if (!T.MapOfString$dynamic().is(jsonValue)) {
        dart.throw(new exceptions.ServerRequestFailedException.new("The returned JSON response was not a Map.", {statusCode: response.statusCode, responseContent: jsonValue}));
      }
      return jsonValue;
    });
  };
  utils['ClientExtensions|requestJson'] = function ClientExtensions$124requestJson($this, request, errorHeader) {
    return async.async(T.MapOfString$dynamic(), function* ClientExtensions$124requestJson() {
      let response = (yield $this.send(request));
      let jsonMap = (yield utils._readJsonMapFromResponse(response));
      if (response.statusCode !== 200) {
        let error = utils._errorStringFromJsonResponse(jsonMap);
        let message = (() => {
          let t8 = T.JSArrayOfString().of([errorHeader]);
          if (error != null) t8.push(error);
          return t8;
        })()[$join](" ");
        dart.throw(new exceptions.ServerRequestFailedException.new(message, {statusCode: response.statusCode, responseContent: jsonMap}));
      }
      return jsonMap;
    });
  };
  utils['ClientExtensions|get#requestJson'] = function ClientExtensions$124get$35requestJson($this) {
    return dart.fn((request, errorHeader) => utils['ClientExtensions|requestJson']($this, request, errorHeader), T.BaseRequestAndStringToFutureOfMapOfString$dynamic());
  };
  utils['ClientExtensions|oauthTokenRequest'] = function ClientExtensions$124oauthTokenRequest($this, postValues) {
    return async.async(T.MapOfString$dynamic(), function* ClientExtensions$124oauthTokenRequest() {
      let t11;
      let body = T.StreamOfListOfint().value(convert.ascii.encode(postValues[$entries][$map](core.String, dart.fn(e => e.key + "=" + core.Uri.encodeComponent(e.value), T.MapEntryOfString$StringToString()))[$join]("&")));
      let request = (t11 = new http_client_base.RequestImpl.new("POST", known_uris.googleOauth2TokenEndpoint, body), (() => {
        t11.headers[$_set]("content-type", utils._contentTypeUrlEncoded);
        return t11;
      })());
      return utils['ClientExtensions|requestJson']($this, request, "Failed to obtain access credentials.");
    });
  };
  utils['ClientExtensions|get#oauthTokenRequest'] = function ClientExtensions$124get$35oauthTokenRequest($this) {
    return dart.fn(postValues => utils['ClientExtensions|oauthTokenRequest']($this, postValues), T.MapOfString$StringToFutureOfMapOfString$dynamic());
  };
  utils._errorStringFromJsonResponse = function _errorStringFromJsonResponse(json) {
    let error = json[$_get]("error");
    let values = (() => {
      let t12 = [];
      if (error != null) t12.push("Error: " + dart.str(error));
      t12.push(json[$_get]("error_description"));
      return t12;
    })()[$where](dart.fn(element => element != null, T.dynamicTobool()))[$join](" ");
    if (values[$isEmpty]) return null;
    return values;
  };
  utils._expectJsonResponse = function _expectJsonResponse(response) {
    return async.async(dart.void, function* _expectJsonResponse() {
      let contentType = response.headers[$_get]("content-type");
      if (!utils._isJson(contentType)) {
        let body = null;
        try {
          body = (yield response.stream.bytesToString());
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        let message = contentType == null ? "Server responded without a content type header." : "Server responded with invalid content type: " + dart.str(contentType) + ". ";
        dart.throw(new exceptions.ServerRequestFailedException.new(message + " Expected a JSON response.", {statusCode: response.statusCode, responseContent: body}));
      }
    });
  };
  utils._isJson = function _isJson(contentType) {
    if (contentType == null) return false;
    let mediaType = media_type.MediaType.parse(contentType);
    if (mediaType.mimeType === "application/json") return true;
    if (mediaType.mimeType === "text/json") return true;
    return mediaType.subtype[$endsWith]("+json");
  };
  dart.defineLazy(utils, {
    /*utils.maxExpectedTimeDiffInSeconds*/get maxExpectedTimeDiffInSeconds() {
      return 20;
    },
    /*utils._contentTypeUrlEncoded*/get _contentTypeUrlEncoded() {
      return "application/x-www-form-urlencoded; charset=utf-8";
    }
  }, false);
  dart.defineLazy(known_uris, {
    /*known_uris.googleOauth2TokenEndpoint*/get googleOauth2TokenEndpoint() {
      return core._Uri.https("oauth2.googleapis.com", "token");
    },
    /*known_uris.googleOauth2AuthorizationEndpoint*/get googleOauth2AuthorizationEndpoint() {
      return core._Uri.https("accounts.google.com", "o/oauth2/v2/auth");
    }
  }, false);
  var message$ = dart.privateName(exceptions, "AccessDeniedException.message");
  exceptions.AccessDeniedException = class AccessDeniedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    static ['_#new#tearOff'](message) {
      return new exceptions.AccessDeniedException.new(message);
    }
    toString() {
      return this.message;
    }
  };
  (exceptions.AccessDeniedException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = exceptions.AccessDeniedException.prototype;
  dart.addTypeTests(exceptions.AccessDeniedException);
  dart.addTypeCaches(exceptions.AccessDeniedException);
  exceptions.AccessDeniedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exceptions.AccessDeniedException, I[2]);
  dart.setFieldSignature(exceptions.AccessDeniedException, () => ({
    __proto__: dart.getFields(exceptions.AccessDeniedException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(exceptions.AccessDeniedException, ['toString']);
  var message$0 = dart.privateName(exceptions, "UserConsentException.message");
  var details$ = dart.privateName(exceptions, "UserConsentException.details");
  exceptions.UserConsentException = class UserConsentException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    static ['_#new#tearOff'](message, opts) {
      let details = opts && 'details' in opts ? opts.details : null;
      return new exceptions.UserConsentException.new(message, {details: details});
    }
    toString() {
      return (() => {
        let t14 = T.JSArrayOfStringN().of([this.message]);
        if (this.details != null) t14.push(this.details);
        return t14;
      })()[$join](" ");
    }
  };
  (exceptions.UserConsentException.new = function(message, opts) {
    let details = opts && 'details' in opts ? opts.details : null;
    this[message$0] = message;
    this[details$] = details;
    ;
  }).prototype = exceptions.UserConsentException.prototype;
  dart.addTypeTests(exceptions.UserConsentException);
  dart.addTypeCaches(exceptions.UserConsentException);
  exceptions.UserConsentException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exceptions.UserConsentException, I[2]);
  dart.setFieldSignature(exceptions.UserConsentException, () => ({
    __proto__: dart.getFields(exceptions.UserConsentException.__proto__),
    message: dart.finalFieldType(core.String),
    details: dart.finalFieldType(dart.nullable(core.String))
  }));
  dart.defineExtensionMethods(exceptions.UserConsentException, ['toString']);
  var message$1 = dart.privateName(exceptions, "ServerRequestFailedException.message");
  var statusCode$ = dart.privateName(exceptions, "ServerRequestFailedException.statusCode");
  var responseContent$ = dart.privateName(exceptions, "ServerRequestFailedException.responseContent");
  exceptions.ServerRequestFailedException = class ServerRequestFailedException extends core.Object {
    get message() {
      return this[message$1];
    }
    set message(value) {
      super.message = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get responseContent() {
      return this[responseContent$];
    }
    set responseContent(value) {
      super.responseContent = value;
    }
    static ['_#new#tearOff'](message, opts) {
      let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
      let responseContent = opts && 'responseContent' in opts ? opts.responseContent : null;
      return new exceptions.ServerRequestFailedException.new(message, {statusCode: statusCode, responseContent: responseContent});
    }
    toString() {
      return (() => {
        let t15 = T.JSArrayOfString().of([this.message]);
        if (this.statusCode != null) t15.push("Status code: " + dart.str(this.statusCode));
        return t15;
      })()[$join](" ");
    }
  };
  (exceptions.ServerRequestFailedException.new = function(message, opts) {
    let statusCode = opts && 'statusCode' in opts ? opts.statusCode : null;
    let responseContent = opts && 'responseContent' in opts ? opts.responseContent : null;
    this[message$1] = message;
    this[statusCode$] = statusCode;
    this[responseContent$] = responseContent;
    ;
  }).prototype = exceptions.ServerRequestFailedException.prototype;
  dart.addTypeTests(exceptions.ServerRequestFailedException);
  dart.addTypeCaches(exceptions.ServerRequestFailedException);
  exceptions.ServerRequestFailedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exceptions.ServerRequestFailedException, I[2]);
  dart.setFieldSignature(exceptions.ServerRequestFailedException, () => ({
    __proto__: dart.getFields(exceptions.ServerRequestFailedException.__proto__),
    message: dart.finalFieldType(core.String),
    statusCode: dart.finalFieldType(dart.nullable(core.int)),
    responseContent: dart.finalFieldType(dart.nullable(core.Object))
  }));
  dart.defineExtensionMethods(exceptions.ServerRequestFailedException, ['toString']);
  var type$ = dart.privateName(access_token, "AccessToken.type");
  var data$ = dart.privateName(access_token, "AccessToken.data");
  var expiry$ = dart.privateName(access_token, "AccessToken.expiry");
  access_token.AccessToken = class AccessToken extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get expiry() {
      return this[expiry$];
    }
    set expiry(value) {
      super.expiry = value;
    }
    static ['_#new#tearOff'](type, data, expiry) {
      return new access_token.AccessToken.new(type, data, expiry);
    }
    static fromJson(json) {
      return new access_token.AccessToken.new(core.String.as(json[$_get]("type")), core.String.as(json[$_get]("data")), core.DateTime.parse(core.String.as(json[$_get]("expiry"))));
    }
    static ['_#fromJson#tearOff'](json) {
      return access_token.AccessToken.fromJson(json);
    }
    get hasExpired() {
      return new core.DateTime.now().toUtc().isAfter(this.expiry);
    }
    toString() {
      return "AccessToken(type=" + this.type + ", data=" + this.data + ", expiry=" + dart.str(this.expiry) + ")";
    }
    toJson() {
      return new (T.IdentityMapOfString$dynamic()).from(["type", this.type, "data", this.data, "expiry", this.expiry.toIso8601String()]);
    }
  };
  (access_token.AccessToken.new = function(type, data, expiry) {
    this[type$] = type;
    this[data$] = data;
    this[expiry$] = expiry;
    if (!this.expiry.isUtc) {
      dart.throw(new core.ArgumentError.value(this.expiry, "expiry", "The expiry date must be a Utc DateTime."));
    }
  }).prototype = access_token.AccessToken.prototype;
  dart.addTypeTests(access_token.AccessToken);
  dart.addTypeCaches(access_token.AccessToken);
  dart.setMethodSignature(access_token.AccessToken, () => ({
    __proto__: dart.getMethods(access_token.AccessToken.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(access_token.AccessToken, () => ['fromJson']);
  dart.setGetterSignature(access_token.AccessToken, () => ({
    __proto__: dart.getGetters(access_token.AccessToken.__proto__),
    hasExpired: core.bool
  }));
  dart.setLibraryUri(access_token.AccessToken, I[3]);
  dart.setFieldSignature(access_token.AccessToken, () => ({
    __proto__: dart.getFields(access_token.AccessToken.__proto__),
    type: dart.finalFieldType(core.String),
    data: dart.finalFieldType(core.String),
    expiry: dart.finalFieldType(core.DateTime)
  }));
  dart.defineExtensionMethods(access_token.AccessToken, ['toString']);
  asn1.ASN1Parser = class ASN1Parser extends core.Object {
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
        let t16, t16$;
        checkNBytesAvailable(1);
        let lengthByte = data[$getUint8]((t16 = offset, offset = t16 + 1, t16));
        if (lengthByte < 128) {
          return lengthByte;
        }
        let countLengthBytes = lengthByte & 127;
        checkNBytesAvailable(countLengthBytes);
        let length = 0;
        while (countLengthBytes > 0) {
          length = (length << 8 | data[$getUint8]((t16$ = offset, offset = t16$ + 1, t16$))) >>> 0;
          countLengthBytes = countLengthBytes - 1;
        }
        return length;
      }
      dart.fn(readEncodedLength, T.VoidToint());
      function readNullBytes() {
        let t16;
        checkNBytesAvailable(1);
        let nullByte = data[$getUint8]((t16 = offset, offset = t16 + 1, t16));
        if (nullByte !== 0) {
          invalidFormat("Null byte expect, but was: " + dart.str(nullByte) + ".");
        }
      }
      dart.fn(readNullBytes, T.VoidTovoid());
      function decodeObject() {
        let t16;
        checkNBytesAvailable(1);
        let tag = bytes[$_get]((t16 = offset, offset = t16 + 1, t16));
        switch (tag) {
          case 2:
          {
            let size = readEncodedLength();
            return new asn1.ASN1Integer.new(rsa.RSAAlgorithm.bytes2BigInt(readBytes(size)));
          }
          case 4:
          {
            let size = readEncodedLength();
            return new asn1.ASN1OctetString.new(readBytes(size));
          }
          case 5:
          {
            readNullBytes();
            return new asn1.ASN1Null.new();
          }
          case 6:
          {
            let size = readEncodedLength();
            return new asn1.ASN1ObjectIdentifier.new(readBytes(size));
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
            return new asn1.ASN1Sequence.new(objects);
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
      return new asn1.ASN1Parser.new();
    }
  };
  (asn1.ASN1Parser.new = function() {
    ;
  }).prototype = asn1.ASN1Parser.prototype;
  dart.addTypeTests(asn1.ASN1Parser);
  dart.addTypeCaches(asn1.ASN1Parser);
  dart.setStaticMethodSignature(asn1.ASN1Parser, () => ['parse']);
  dart.setLibraryUri(asn1.ASN1Parser, I[4]);
  dart.setStaticFieldSignature(asn1.ASN1Parser, () => ['integerTag', 'octetStringTag', 'nullTag', 'objectIdTag', 'sequenceTag']);
  dart.defineLazy(asn1.ASN1Parser, {
    /*asn1.ASN1Parser.integerTag*/get integerTag() {
      return 2;
    },
    /*asn1.ASN1Parser.octetStringTag*/get octetStringTag() {
      return 4;
    },
    /*asn1.ASN1Parser.nullTag*/get nullTag() {
      return 5;
    },
    /*asn1.ASN1Parser.objectIdTag*/get objectIdTag() {
      return 6;
    },
    /*asn1.ASN1Parser.sequenceTag*/get sequenceTag() {
      return 48;
    }
  }, false);
  asn1.ASN1Object = class ASN1Object extends core.Object {};
  (asn1.ASN1Object.new = function() {
    ;
  }).prototype = asn1.ASN1Object.prototype;
  dart.addTypeTests(asn1.ASN1Object);
  dart.addTypeCaches(asn1.ASN1Object);
  dart.setLibraryUri(asn1.ASN1Object, I[4]);
  var objects$ = dart.privateName(asn1, "ASN1Sequence.objects");
  asn1.ASN1Sequence = class ASN1Sequence extends asn1.ASN1Object {
    get objects() {
      return this[objects$];
    }
    set objects(value) {
      super.objects = value;
    }
    static ['_#new#tearOff'](objects) {
      return new asn1.ASN1Sequence.new(objects);
    }
  };
  (asn1.ASN1Sequence.new = function(objects) {
    this[objects$] = objects;
    ;
  }).prototype = asn1.ASN1Sequence.prototype;
  dart.addTypeTests(asn1.ASN1Sequence);
  dart.addTypeCaches(asn1.ASN1Sequence);
  dart.setLibraryUri(asn1.ASN1Sequence, I[4]);
  dart.setFieldSignature(asn1.ASN1Sequence, () => ({
    __proto__: dart.getFields(asn1.ASN1Sequence.__proto__),
    objects: dart.finalFieldType(core.List$(asn1.ASN1Object))
  }));
  var integer$ = dart.privateName(asn1, "ASN1Integer.integer");
  asn1.ASN1Integer = class ASN1Integer extends asn1.ASN1Object {
    get integer() {
      return this[integer$];
    }
    set integer(value) {
      super.integer = value;
    }
    static ['_#new#tearOff'](integer) {
      return new asn1.ASN1Integer.new(integer);
    }
  };
  (asn1.ASN1Integer.new = function(integer) {
    this[integer$] = integer;
    ;
  }).prototype = asn1.ASN1Integer.prototype;
  dart.addTypeTests(asn1.ASN1Integer);
  dart.addTypeCaches(asn1.ASN1Integer);
  dart.setLibraryUri(asn1.ASN1Integer, I[4]);
  dart.setFieldSignature(asn1.ASN1Integer, () => ({
    __proto__: dart.getFields(asn1.ASN1Integer.__proto__),
    integer: dart.finalFieldType(core.BigInt)
  }));
  var bytes$ = dart.privateName(asn1, "ASN1OctetString.bytes");
  asn1.ASN1OctetString = class ASN1OctetString extends asn1.ASN1Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new asn1.ASN1OctetString.new(bytes);
    }
  };
  (asn1.ASN1OctetString.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = asn1.ASN1OctetString.prototype;
  dart.addTypeTests(asn1.ASN1OctetString);
  dart.addTypeCaches(asn1.ASN1OctetString);
  dart.setLibraryUri(asn1.ASN1OctetString, I[4]);
  dart.setFieldSignature(asn1.ASN1OctetString, () => ({
    __proto__: dart.getFields(asn1.ASN1OctetString.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  var bytes$0 = dart.privateName(asn1, "ASN1ObjectIdentifier.bytes");
  asn1.ASN1ObjectIdentifier = class ASN1ObjectIdentifier extends asn1.ASN1Object {
    get bytes() {
      return this[bytes$0];
    }
    set bytes(value) {
      super.bytes = value;
    }
    static ['_#new#tearOff'](bytes) {
      return new asn1.ASN1ObjectIdentifier.new(bytes);
    }
  };
  (asn1.ASN1ObjectIdentifier.new = function(bytes) {
    this[bytes$0] = bytes;
    ;
  }).prototype = asn1.ASN1ObjectIdentifier.prototype;
  dart.addTypeTests(asn1.ASN1ObjectIdentifier);
  dart.addTypeCaches(asn1.ASN1ObjectIdentifier);
  dart.setLibraryUri(asn1.ASN1ObjectIdentifier, I[4]);
  dart.setFieldSignature(asn1.ASN1ObjectIdentifier, () => ({
    __proto__: dart.getFields(asn1.ASN1ObjectIdentifier.__proto__),
    bytes: dart.finalFieldType(core.List$(core.int))
  }));
  asn1.ASN1Null = class ASN1Null extends asn1.ASN1Object {
    static ['_#new#tearOff']() {
      return new asn1.ASN1Null.new();
    }
  };
  (asn1.ASN1Null.new = function() {
    ;
  }).prototype = asn1.ASN1Null.prototype;
  dart.addTypeTests(asn1.ASN1Null);
  dart.addTypeCaches(asn1.ASN1Null);
  dart.setLibraryUri(asn1.ASN1Null, I[4]);
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
  dart.setLibraryUri(rsa.RSAPrivateKey, I[5]);
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
  dart.setLibraryUri(rsa.RSAAlgorithm, I[5]);
  dart.defineLazy(rsa, {
    /*rsa._bigIntFF*/get _bigIntFF() {
      return core._BigIntImpl.from(255);
    }
  }, false);
  var credentials$ = dart.privateName(auth_http_utils, "AuthenticatedClient.credentials");
  var quotaProject$ = dart.privateName(auth_http_utils, "AuthenticatedClient.quotaProject");
  auth_http_utils.AuthenticatedClient = class AuthenticatedClient extends http_client_base.DelegatingClient {
    get credentials() {
      return this[credentials$];
    }
    set credentials(value) {
      super.credentials = value;
    }
    get quotaProject() {
      return this[quotaProject$];
    }
    set quotaProject(value) {
      super.quotaProject = value;
    }
    static ['_#new#tearOff'](client, credentials, opts) {
      let quotaProject = opts && 'quotaProject' in opts ? opts.quotaProject : null;
      return new auth_http_utils.AuthenticatedClient.new(client, credentials, {quotaProject: quotaProject});
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let modifiedRequest = new http_client_base.RequestImpl.new(request.method, request.url, request.finalize());
        modifiedRequest.headers[$addAll](request.headers);
        modifiedRequest.headers[$_set]("Authorization", "Bearer " + this.credentials.accessToken.data);
        if (this.quotaProject != null) {
          modifiedRequest.headers[$_set]("X-Goog-User-Project", dart.nullCheck(this.quotaProject));
        }
        let response = (yield this.baseClient.send(modifiedRequest));
        let wwwAuthenticate = response.headers[$_get]("www-authenticate");
        if (wwwAuthenticate != null) {
          yield response.stream.drain(dart.dynamic);
          dart.throw(new exceptions.AccessDeniedException.new("Access was denied " + "(www-authenticate header was: " + dart.str(wwwAuthenticate) + ")."));
        }
        return response;
      }).bind(this));
    }
  };
  (auth_http_utils.AuthenticatedClient.new = function(client, credentials, opts) {
    let quotaProject = opts && 'quotaProject' in opts ? opts.quotaProject : null;
    this[credentials$] = credentials;
    this[quotaProject$] = quotaProject;
    auth_http_utils.AuthenticatedClient.__proto__.new.call(this, client, {closeUnderlyingClient: false});
    ;
  }).prototype = auth_http_utils.AuthenticatedClient.prototype;
  dart.addTypeTests(auth_http_utils.AuthenticatedClient);
  dart.addTypeCaches(auth_http_utils.AuthenticatedClient);
  auth_http_utils.AuthenticatedClient[dart.implements] = () => [auth_client.AuthClient];
  dart.setMethodSignature(auth_http_utils.AuthenticatedClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.AuthenticatedClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(auth_http_utils.AuthenticatedClient, I[6]);
  dart.setFieldSignature(auth_http_utils.AuthenticatedClient, () => ({
    __proto__: dart.getFields(auth_http_utils.AuthenticatedClient.__proto__),
    credentials: dart.finalFieldType(access_credentials.AccessCredentials),
    quotaProject: dart.finalFieldType(dart.nullable(core.String))
  }));
  var _encodedApiKey = dart.privateName(auth_http_utils, "_encodedApiKey");
  auth_http_utils.ApiKeyClient = class ApiKeyClient extends http_client_base.DelegatingClient {
    static ['_#new#tearOff'](client, apiKey) {
      return new auth_http_utils.ApiKeyClient.new(client, apiKey);
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t16;
        let url = request.url;
        if (url.queryParameters[$containsKey]("key")) {
          dart.throw(new core.ArgumentError.new("Tried to make a HTTP request which has already a \"key\" query " + "parameter. Adding the API key would override that existing value."));
        }
        if (url.query === "") {
          url = url.replace({query: "key=" + this[_encodedApiKey]});
        } else {
          url = url.replace({query: url.query + "&key=" + this[_encodedApiKey]});
        }
        let modifiedRequest = (t16 = new http_client_base.RequestImpl.new(request.method, url, request.finalize()), (() => {
          t16.headers[$addAll](request.headers);
          return t16;
        })());
        return this.baseClient.send(modifiedRequest);
      }).bind(this));
    }
  };
  (auth_http_utils.ApiKeyClient.new = function(client, apiKey) {
    this[_encodedApiKey] = core.Uri.encodeQueryComponent(apiKey);
    auth_http_utils.ApiKeyClient.__proto__.new.call(this, client, {closeUnderlyingClient: true});
    ;
  }).prototype = auth_http_utils.ApiKeyClient.prototype;
  dart.addTypeTests(auth_http_utils.ApiKeyClient);
  dart.addTypeCaches(auth_http_utils.ApiKeyClient);
  dart.setMethodSignature(auth_http_utils.ApiKeyClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.ApiKeyClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(auth_http_utils.ApiKeyClient, I[6]);
  dart.setFieldSignature(auth_http_utils.ApiKeyClient, () => ({
    __proto__: dart.getFields(auth_http_utils.ApiKeyClient.__proto__),
    [_encodedApiKey]: dart.finalFieldType(core.String)
  }));
  var clientId$ = dart.privateName(auth_http_utils, "AutoRefreshingClient.clientId");
  var quotaProject$0 = dart.privateName(auth_http_utils, "AutoRefreshingClient.quotaProject");
  var credentials$0 = dart.privateName(auth_http_utils, "AutoRefreshingClient.credentials");
  var __AutoRefreshingClient_authClient = dart.privateName(auth_http_utils, "_#AutoRefreshingClient#authClient");
  var _credentialStreamController = dart.privateName(auth_http_utils, "_credentialStreamController");
  auth_http_utils.AutoRefreshDelegatingClient = class AutoRefreshDelegatingClient extends http_client_base.DelegatingClient {
    get credentialUpdates() {
      return this[_credentialStreamController].stream;
    }
    notifyAboutNewCredentials(credentials) {
      this[_credentialStreamController].add(credentials);
    }
    close() {
      this[_credentialStreamController].close();
      super.close();
    }
  };
  (auth_http_utils.AutoRefreshDelegatingClient.new = function(client, opts) {
    let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : true;
    this[_credentialStreamController] = T.StreamControllerOfAccessCredentials().broadcast({sync: true});
    auth_http_utils.AutoRefreshDelegatingClient.__proto__.new.call(this, client, {closeUnderlyingClient: closeUnderlyingClient});
    ;
  }).prototype = auth_http_utils.AutoRefreshDelegatingClient.prototype;
  dart.addTypeTests(auth_http_utils.AutoRefreshDelegatingClient);
  dart.addTypeCaches(auth_http_utils.AutoRefreshDelegatingClient);
  auth_http_utils.AutoRefreshDelegatingClient[dart.implements] = () => [auth_client.AutoRefreshingAuthClient];
  dart.setMethodSignature(auth_http_utils.AutoRefreshDelegatingClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.AutoRefreshDelegatingClient.__proto__),
    notifyAboutNewCredentials: dart.fnType(dart.void, [access_credentials.AccessCredentials])
  }));
  dart.setGetterSignature(auth_http_utils.AutoRefreshDelegatingClient, () => ({
    __proto__: dart.getGetters(auth_http_utils.AutoRefreshDelegatingClient.__proto__),
    credentialUpdates: async.Stream$(access_credentials.AccessCredentials)
  }));
  dart.setLibraryUri(auth_http_utils.AutoRefreshDelegatingClient, I[6]);
  dart.setFieldSignature(auth_http_utils.AutoRefreshDelegatingClient, () => ({
    __proto__: dart.getFields(auth_http_utils.AutoRefreshDelegatingClient.__proto__),
    [_credentialStreamController]: dart.finalFieldType(async.StreamController$(access_credentials.AccessCredentials))
  }));
  auth_http_utils.AutoRefreshingClient = class AutoRefreshingClient extends auth_http_utils.AutoRefreshDelegatingClient {
    get clientId() {
      return this[clientId$];
    }
    set clientId(value) {
      super.clientId = value;
    }
    get quotaProject() {
      return this[quotaProject$0];
    }
    set quotaProject(value) {
      super.quotaProject = value;
    }
    get credentials() {
      return this[credentials$0];
    }
    set credentials(value) {
      this[credentials$0] = value;
    }
    get authClient() {
      let t16;
      t16 = this[__AutoRefreshingClient_authClient];
      return t16 == null ? dart.throw(new _internal.LateError.fieldNI("authClient")) : t16;
    }
    set authClient(t16) {
      this[__AutoRefreshingClient_authClient] = t16;
    }
    static ['_#new#tearOff'](client, clientId, credentials, opts) {
      let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : true;
      let quotaProject = opts && 'quotaProject' in opts ? opts.quotaProject : null;
      return new auth_http_utils.AutoRefreshingClient.new(client, clientId, credentials, {closeUnderlyingClient: closeUnderlyingClient, quotaProject: quotaProject});
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        if (!this.credentials.accessToken.hasExpired) {
          return this.authClient.send(request);
        } else {
          let cred = (yield auth_functions.refreshCredentials(this.clientId, this.credentials, this.baseClient));
          this.notifyAboutNewCredentials(cred);
          this.credentials = cred;
          this.authClient = new auth_http_utils.AuthenticatedClient.new(this.baseClient, cred, {quotaProject: this.quotaProject});
          return this.authClient.send(request);
        }
      }).bind(this));
    }
  };
  (auth_http_utils.AutoRefreshingClient.new = function(client, clientId, credentials, opts) {
    let closeUnderlyingClient = opts && 'closeUnderlyingClient' in opts ? opts.closeUnderlyingClient : true;
    let quotaProject = opts && 'quotaProject' in opts ? opts.quotaProject : null;
    this[__AutoRefreshingClient_authClient] = null;
    this[clientId$] = clientId;
    this[credentials$0] = credentials;
    this[quotaProject$0] = quotaProject;
    if (!(credentials.accessToken.type === "Bearer")) dart.assertFailed(null, I[7], 97, 16, "credentials.accessToken.type == 'Bearer'");
    if (!(credentials.refreshToken != null)) dart.assertFailed(null, I[7], 98, 16, "credentials.refreshToken != null");
    auth_http_utils.AutoRefreshingClient.__proto__.new.call(this, client, {closeUnderlyingClient: closeUnderlyingClient});
    this.authClient = new auth_http_utils.AuthenticatedClient.new(this.baseClient, this.credentials, {quotaProject: this.quotaProject});
  }).prototype = auth_http_utils.AutoRefreshingClient.prototype;
  dart.addTypeTests(auth_http_utils.AutoRefreshingClient);
  dart.addTypeCaches(auth_http_utils.AutoRefreshingClient);
  dart.setMethodSignature(auth_http_utils.AutoRefreshingClient, () => ({
    __proto__: dart.getMethods(auth_http_utils.AutoRefreshingClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setGetterSignature(auth_http_utils.AutoRefreshingClient, () => ({
    __proto__: dart.getGetters(auth_http_utils.AutoRefreshingClient.__proto__),
    authClient: client.Client
  }));
  dart.setSetterSignature(auth_http_utils.AutoRefreshingClient, () => ({
    __proto__: dart.getSetters(auth_http_utils.AutoRefreshingClient.__proto__),
    authClient: client.Client
  }));
  dart.setLibraryUri(auth_http_utils.AutoRefreshingClient, I[6]);
  dart.setFieldSignature(auth_http_utils.AutoRefreshingClient, () => ({
    __proto__: dart.getFields(auth_http_utils.AutoRefreshingClient.__proto__),
    clientId: dart.finalFieldType(client_id.ClientId),
    quotaProject: dart.finalFieldType(dart.nullable(core.String)),
    credentials: dart.fieldType(access_credentials.AccessCredentials),
    [__AutoRefreshingClient_authClient]: dart.fieldType(dart.nullable(client.Client))
  }));
  auth_functions.clientViaApiKey = function clientViaApiKey(apiKey, opts) {
    let baseClient = opts && 'baseClient' in opts ? opts.baseClient : null;
    if (baseClient == null) {
      baseClient = client.Client.new();
    } else {
      baseClient = http_client_base.nonClosingClient(baseClient);
    }
    return new auth_http_utils.ApiKeyClient.new(baseClient, apiKey);
  };
  auth_functions.authenticatedClient = function authenticatedClient(baseClient, credentials) {
    if (credentials.accessToken.type !== "Bearer") {
      dart.throw(new core.ArgumentError.new("Only Bearer access tokens are accepted."));
    }
    return new auth_http_utils.AuthenticatedClient.new(baseClient, credentials);
  };
  auth_functions.autoRefreshingClient = function autoRefreshingClient(clientId, credentials, baseClient) {
    if (credentials.accessToken.type !== "Bearer") {
      dart.throw(new core.ArgumentError.new("Only Bearer access tokens are accepted."));
    }
    if (credentials.refreshToken == null) {
      dart.throw(new core.ArgumentError.new("Refresh token in AccessCredentials was `null`."));
    }
    return new auth_http_utils.AutoRefreshingClient.new(baseClient, clientId, credentials);
  };
  auth_functions.refreshCredentials = function refreshCredentials(clientId, credentials, client) {
    return async.async(access_credentials.AccessCredentials, function* refreshCredentials() {
      let secret = clientId.secret;
      if (secret == null) {
        dart.throw(new core.ArgumentError.new("clientId.secret cannot be null."));
      }
      let refreshToken = credentials.refreshToken;
      if (refreshToken == null) {
        dart.throw(new core.ArgumentError.new("clientId.refreshToken cannot be null."));
      }
      let jsonMap = (yield utils['ClientExtensions|oauthTokenRequest'](client, new (T.IdentityMapOfString$String()).from(["client_id", clientId.identifier, "client_secret", secret, "refresh_token", refreshToken, "grant_type", "refresh_token"])));
      let accessToken = utils.parseAccessToken(jsonMap);
      let idToken = T.StringN().as(jsonMap[$_get]("id_token"));
      return new access_credentials.AccessCredentials.new(accessToken, credentials.refreshToken, credentials.scopes, {idToken: idToken});
    });
  };
  auth_client.AuthClient = class AuthClient extends core.Object {};
  (auth_client.AuthClient.new = function() {
    ;
  }).prototype = auth_client.AuthClient.prototype;
  dart.addTypeTests(auth_client.AuthClient);
  dart.addTypeCaches(auth_client.AuthClient);
  auth_client.AuthClient[dart.implements] = () => [client.Client];
  dart.setLibraryUri(auth_client.AuthClient, I[8]);
  auth_client.AutoRefreshingAuthClient = class AutoRefreshingAuthClient extends core.Object {};
  (auth_client.AutoRefreshingAuthClient.new = function() {
    ;
  }).prototype = auth_client.AutoRefreshingAuthClient.prototype;
  dart.addTypeTests(auth_client.AutoRefreshingAuthClient);
  dart.addTypeCaches(auth_client.AutoRefreshingAuthClient);
  auth_client.AutoRefreshingAuthClient[dart.implements] = () => [auth_client.AuthClient];
  dart.setLibraryUri(auth_client.AutoRefreshingAuthClient, I[8]);
  var accessToken$ = dart.privateName(access_credentials, "AccessCredentials.accessToken");
  var refreshToken$ = dart.privateName(access_credentials, "AccessCredentials.refreshToken");
  var idToken$ = dart.privateName(access_credentials, "AccessCredentials.idToken");
  var scopes$ = dart.privateName(access_credentials, "AccessCredentials.scopes");
  access_credentials.AccessCredentials = class AccessCredentials extends core.Object {
    get accessToken() {
      return this[accessToken$];
    }
    set accessToken(value) {
      super.accessToken = value;
    }
    get refreshToken() {
      return this[refreshToken$];
    }
    set refreshToken(value) {
      super.refreshToken = value;
    }
    get idToken() {
      return this[idToken$];
    }
    set idToken(value) {
      super.idToken = value;
    }
    get scopes() {
      return this[scopes$];
    }
    set scopes(value) {
      super.scopes = value;
    }
    static ['_#new#tearOff'](accessToken, refreshToken, scopes, opts) {
      let idToken = opts && 'idToken' in opts ? opts.idToken : null;
      return new access_credentials.AccessCredentials.new(accessToken, refreshToken, scopes, {idToken: idToken});
    }
    static fromJson(json) {
      return new access_credentials.AccessCredentials.new(access_token.AccessToken.fromJson(T.MapOfString$dynamic().as(json[$_get]("accessToken"))), T.StringN().as(json[$_get]("refreshToken")), core.List.as(json[$_get]("scopes"))[$map](core.String, dart.fn(e => core.String.as(e), T.dynamicToString()))[$toList](), {idToken: T.StringN().as(json[$_get]("idToken"))});
    }
    static ['_#fromJson#tearOff'](json) {
      return access_credentials.AccessCredentials.fromJson(json);
    }
    toJson() {
      return (() => {
        let t17 = new (T.IdentityMapOfString$dynamic()).new();
        t17[$_set]("accessToken", this.accessToken);
        if (this.refreshToken != null) t17[$_set]("refreshToken", this.refreshToken);
        t17[$_set]("idToken", this.idToken);
        t17[$_set]("scopes", this.scopes);
        return t17;
      })();
    }
  };
  (access_credentials.AccessCredentials.new = function(accessToken, refreshToken, scopes, opts) {
    let idToken = opts && 'idToken' in opts ? opts.idToken : null;
    this[accessToken$] = accessToken;
    this[refreshToken$] = refreshToken;
    this[scopes$] = scopes;
    this[idToken$] = idToken;
    ;
  }).prototype = access_credentials.AccessCredentials.prototype;
  dart.addTypeTests(access_credentials.AccessCredentials);
  dart.addTypeCaches(access_credentials.AccessCredentials);
  dart.setMethodSignature(access_credentials.AccessCredentials, () => ({
    __proto__: dart.getMethods(access_credentials.AccessCredentials.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(access_credentials.AccessCredentials, () => ['fromJson']);
  dart.setLibraryUri(access_credentials.AccessCredentials, I[9]);
  dart.setFieldSignature(access_credentials.AccessCredentials, () => ({
    __proto__: dart.getFields(access_credentials.AccessCredentials.__proto__),
    accessToken: dart.finalFieldType(access_token.AccessToken),
    refreshToken: dart.finalFieldType(dart.nullable(core.String)),
    idToken: dart.finalFieldType(dart.nullable(core.String)),
    scopes: dart.finalFieldType(core.List$(core.String))
  }));
  pem.keyFromString = function keyFromString(pemFileString) {
    let bytes = pem._getBytesFromPEMString(pemFileString);
    return pem._extractRSAKeyFromDERBytes(bytes);
  };
  pem._getBytesFromPEMString = function _getBytesFromPEMString(pemString) {
    let lines = convert.LineSplitter.split(pemString)[$map](core.String, dart.fn(line => line[$trim](), T.StringToString()))[$where](dart.fn(line => line[$isNotEmpty], T.StringTobool()))[$toList]();
    if (lines[$length] < 2 || !lines[$first][$startsWith]("-----BEGIN") || !lines[$last][$startsWith]("-----END")) {
      dart.throw(new core.ArgumentError.new("The given string does not have the correct " + "begin/end markers expected in a PEM file."));
    }
    let base64 = lines[$sublist](1, lines[$length] - 1)[$join]();
    return _native_typed_data.NativeUint8List.fromList(convert.base64Decode(base64));
  };
  pem._extractRSAKeyFromDERBytes = function _extractRSAKeyFromDERBytes(bytes) {
    function privateKeyFromSequence(asnSequence) {
      let objects = asnSequence.objects;
      let asnIntegers = objects[$take](9)[$map](asn1.ASN1Integer, dart.fn(o => asn1.ASN1Integer.as(o), T.ASN1ObjectToASN1Integer()))[$toList]();
      let version = asnIntegers[$first];
      if (!version.integer[$_equals](core.BigInt.zero)) {
        dart.throw(new core.ArgumentError.new("Expected version 0, got: " + dart.str(version.integer) + "."));
      }
      let key = new rsa.RSAPrivateKey.new(asnIntegers[$_get](1).integer, asnIntegers[$_get](2).integer, asnIntegers[$_get](3).integer, asnIntegers[$_get](4).integer, asnIntegers[$_get](5).integer, asnIntegers[$_get](6).integer, asnIntegers[$_get](7).integer, asnIntegers[$_get](8).integer);
      let bitLength = key.bitLength;
      if (bitLength !== 1024 && bitLength !== 2048 && bitLength !== 4096) {
        dart.throw(new core.ArgumentError.new("The RSA modulus has a bit length of " + dart.str(bitLength) + ". " + "Only 1024, 2048 and 4096 are supported."));
      }
      return key;
    }
    dart.fn(privateKeyFromSequence, T.ASN1SequenceToRSAPrivateKey());
    try {
      let asn = asn1.ASN1Parser.parse(bytes);
      if (asn1.ASN1Sequence.is(asn)) {
        let objects = asn.objects;
        if (objects[$length] === 3 && asn1.ASN1OctetString.is(objects[$_get](2))) {
          let string = asn1.ASN1OctetString.as(objects[$_get](2));
          return privateKeyFromSequence(asn1.ASN1Sequence.as(asn1.ASN1Parser.parse(typed_data.Uint8List.as(string.bytes))));
        }
      }
      return privateKeyFromSequence(asn1.ASN1Sequence.as(asn));
    } catch (e) {
      let error = dart.getThrown(e);
      if (core.Object.is(error)) {
        dart.throw(new core.ArgumentError.new("Error while extracting private key from DER bytes: " + dart.str(error)));
      } else
        throw e;
    }
  };
  var email$ = dart.privateName(service_account_credentials, "ServiceAccountCredentials.email");
  var clientId$0 = dart.privateName(service_account_credentials, "ServiceAccountCredentials.clientId");
  var privateKey$ = dart.privateName(service_account_credentials, "ServiceAccountCredentials.privateKey");
  var impersonatedUser$ = dart.privateName(service_account_credentials, "ServiceAccountCredentials.impersonatedUser");
  var privateRSAKey = dart.privateName(service_account_credentials, "ServiceAccountCredentials.privateRSAKey");
  service_account_credentials.ServiceAccountCredentials = class ServiceAccountCredentials extends core.Object {
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get clientId() {
      return this[clientId$0];
    }
    set clientId(value) {
      super.clientId = value;
    }
    get privateKey() {
      return this[privateKey$];
    }
    set privateKey(value) {
      super.privateKey = value;
    }
    get impersonatedUser() {
      return this[impersonatedUser$];
    }
    set impersonatedUser(value) {
      super.impersonatedUser = value;
    }
    get privateRSAKey() {
      return this[privateRSAKey];
    }
    set privateRSAKey(value) {
      super.privateRSAKey = value;
    }
    static fromJson(json, opts) {
      let impersonatedUser = opts && 'impersonatedUser' in opts ? opts.impersonatedUser : null;
      if (typeof json == 'string') {
        json = convert.jsonDecode(json);
      }
      if (!core.Map.is(json)) {
        dart.throw(new core.ArgumentError.new("json must be a Map or a String encoding a Map."));
      }
      let identifier = T.StringN().as(json[$_get]("client_id"));
      let privateKey = T.StringN().as(json[$_get]("private_key"));
      let email = T.StringN().as(json[$_get]("client_email"));
      let type = json[$_get]("type");
      if (!dart.equals(type, "service_account")) {
        dart.throw(new core.ArgumentError.new("The given credentials are not of type " + "service_account (was: " + dart.str(type) + ")."));
      }
      if (identifier == null || privateKey == null || email == null) {
        dart.throw(new core.ArgumentError.new("The given credentials do not contain all the " + "fields: client_id, private_key and client_email."));
      }
      let clientId = new client_id.ClientId.new(identifier);
      return new service_account_credentials.ServiceAccountCredentials.new(email, clientId, privateKey, {impersonatedUser: impersonatedUser});
    }
    static ['_#fromJson#tearOff'](json, opts) {
      let impersonatedUser = opts && 'impersonatedUser' in opts ? opts.impersonatedUser : null;
      return service_account_credentials.ServiceAccountCredentials.fromJson(json, {impersonatedUser: impersonatedUser});
    }
    static ['_#new#tearOff'](email, clientId, privateKey, opts) {
      let impersonatedUser = opts && 'impersonatedUser' in opts ? opts.impersonatedUser : null;
      return new service_account_credentials.ServiceAccountCredentials.new(email, clientId, privateKey, {impersonatedUser: impersonatedUser});
    }
  };
  (service_account_credentials.ServiceAccountCredentials.new = function(email, clientId, privateKey, opts) {
    let impersonatedUser = opts && 'impersonatedUser' in opts ? opts.impersonatedUser : null;
    this[email$] = email;
    this[clientId$0] = clientId;
    this[privateKey$] = privateKey;
    this[impersonatedUser$] = impersonatedUser;
    this[privateRSAKey] = pem.keyFromString(privateKey);
    ;
  }).prototype = service_account_credentials.ServiceAccountCredentials.prototype;
  dart.addTypeTests(service_account_credentials.ServiceAccountCredentials);
  dart.addTypeCaches(service_account_credentials.ServiceAccountCredentials);
  dart.setStaticMethodSignature(service_account_credentials.ServiceAccountCredentials, () => ['fromJson']);
  dart.setLibraryUri(service_account_credentials.ServiceAccountCredentials, I[10]);
  dart.setFieldSignature(service_account_credentials.ServiceAccountCredentials, () => ({
    __proto__: dart.getFields(service_account_credentials.ServiceAccountCredentials.__proto__),
    email: dart.finalFieldType(core.String),
    clientId: dart.finalFieldType(client_id.ClientId),
    privateKey: dart.finalFieldType(core.String),
    impersonatedUser: dart.finalFieldType(dart.nullable(core.String)),
    privateRSAKey: dart.finalFieldType(rsa.RSAPrivateKey)
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  response_type.ResponseType = class ResponseType extends core._Enum {
    toString() {
      return "ResponseType." + this[_name];
    }
  };
  (response_type.ResponseType.new = function(index, name) {
    response_type.ResponseType.__proto__.new.call(this, index, name);
    ;
  }).prototype = response_type.ResponseType.prototype;
  dart.addTypeTests(response_type.ResponseType);
  dart.addTypeCaches(response_type.ResponseType);
  dart.setLibraryUri(response_type.ResponseType, I[11]);
  dart.setStaticFieldSignature(response_type.ResponseType, () => ['values', 'code', 'idToken', 'permission', 'token']);
  dart.defineExtensionMethods(response_type.ResponseType, ['toString']);
  response_type.ResponseType.code = C[1] || CT.C1;
  response_type.ResponseType.idToken = C[2] || CT.C2;
  response_type.ResponseType.permission = C[3] || CT.C3;
  response_type.ResponseType.token = C[4] || CT.C4;
  response_type.ResponseType.values = C[5] || CT.C5;
  dart.trackLibraries("packages/googleapis_auth/src/access_credentials", {
    "package:googleapis_auth/src/http_client_base.dart": http_client_base,
    "package:googleapis_auth/src/client_id.dart": client_id,
    "package:googleapis_auth/src/utils.dart": utils,
    "package:googleapis_auth/src/known_uris.dart": known_uris,
    "package:googleapis_auth/src/exceptions.dart": exceptions,
    "package:googleapis_auth/src/access_token.dart": access_token,
    "package:googleapis_auth/src/crypto/asn1.dart": asn1,
    "package:googleapis_auth/src/crypto/rsa.dart": rsa,
    "package:googleapis_auth/src/auth_http_utils.dart": auth_http_utils,
    "package:googleapis_auth/src/auth_functions.dart": auth_functions,
    "package:googleapis_auth/src/auth_client.dart": auth_client,
    "package:googleapis_auth/src/access_credentials.dart": access_credentials,
    "package:googleapis_auth/src/crypto/pem.dart": pem,
    "package:googleapis_auth/src/service_account_credentials.dart": service_account_credentials,
    "package:googleapis_auth/src/response_type.dart": response_type
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["http_client_base.dart","client_id.dart","utils.dart","known_uris.dart","exceptions.dart","access_token.dart","crypto/asn1.dart","crypto/rsa.dart","auth_http_utils.dart","auth_functions.dart","auth_client.dart","access_credentials.dart","crypto/pem.dart","service_account_credentials.dart","response_type.dart"],"names":[],"mappings":"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","file":"access_credentials.sound.ddc.js"}');
  // Exports:
  return {
    src__http_client_base: http_client_base,
    src__client_id: client_id,
    src__utils: utils,
    src__known_uris: known_uris,
    src__exceptions: exceptions,
    src__access_token: access_token,
    src__crypto__asn1: asn1,
    src__crypto__rsa: rsa,
    src__auth_http_utils: auth_http_utils,
    src__auth_functions: auth_functions,
    src__auth_client: auth_client,
    src__access_credentials: access_credentials,
    src__crypto__pem: pem,
    src__service_account_credentials: service_account_credentials,
    src__response_type: response_type
  };
}));

//# sourceMappingURL=access_credentials.sound.ddc.js.map
