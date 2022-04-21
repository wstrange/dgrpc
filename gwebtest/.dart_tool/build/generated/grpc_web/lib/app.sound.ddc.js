define(['dart_sdk', 'packages/protos/src/generated/echo.pb', 'packages/protos/src/generated/echo.pbgrpc'], (function load__packages__grpc_web__app(dart_sdk, packages__protos__src__generated__echo$46pb, packages__protos__src__generated__echo$46pbgrpc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const echo$46pb = packages__protos__src__generated__echo$46pb.src__generated__echo$46pb;
  const echo$46pbgrpc = packages__protos__src__generated__echo$46pbgrpc.src__generated__echo$46pbgrpc;
  var app = Object.create(dart.library);
  var $toString = dartx.toString;
  var $split = dartx.split;
  var $classes = dartx.classes;
  var $text = dartx.text;
  var $append = dartx.append;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ServerStreamingEchoResponseTovoid: () => (T.ServerStreamingEchoResponseTovoid = dart.constFn(dart.fnType(dart.void, [echo$46pb.ServerStreamingEchoResponse])))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = ["package:grpc_web/app.dart"];
  var _service$ = dart.privateName(app, "_service");
  var _addLeftMessage = dart.privateName(app, "_addLeftMessage");
  var _addRightMessage = dart.privateName(app, "_addRightMessage");
  var _addMessage = dart.privateName(app, "_addMessage");
  app.EchoApp = class EchoApp extends core.Object {
    static ['_#new#tearOff'](_service) {
      return new app.EchoApp.new(_service);
    }
    echo(message) {
      return async.async(dart.void, (function* echo() {
        let t0;
        this[_addLeftMessage](message);
        try {
          let response = (yield this[_service$].echo((t0 = echo$46pb.EchoRequest.new(), (() => {
            t0.message = message;
            return t0;
          })())));
          this[_addRightMessage](response.message);
        } catch (e) {
          let error = dart.getThrown(e);
          if (core.Object.is(error)) {
            this[_addRightMessage](error[$toString]());
          } else
            throw e;
        }
      }).bind(this));
    }
    repeatEcho(message, count) {
      let t1;
      this[_addLeftMessage](message);
      let request = (t1 = echo$46pb.ServerStreamingEchoRequest.new(), (() => {
        t1.message = message;
        t1.messageCount = count;
        t1.messageInterval = 500;
        return t1;
      })());
      this[_service$].serverStreamingEcho(request).listen(dart.fn(response => {
        this[_addRightMessage](response.message);
      }, T.ServerStreamingEchoResponseTovoid()), {onError: dart.fn(error => {
          this[_addRightMessage](dart.toString(error));
        }, T.dynamicToNull()), onDone: dart.fn(() => core.print("Closed connection to server."), T.VoidTovoid())});
    }
    [_addLeftMessage](message) {
      this[_addMessage](message, "label-primary pull-left");
    }
    [_addRightMessage](message) {
      this[_addMessage](message, "label-default pull-right");
    }
    [_addMessage](message, cssClass) {
      let t3, t2, t1;
      let classes = cssClass[$split](" ");
      dart.nullCheck(html.querySelector("#first")).after((t1 = html.DivElement.new(), (() => {
        t1[$classes].add("row");
        t1[$append]((t2 = html.Element.tag("h2"), (() => {
          t2[$append]((t3 = html.SpanElement.new(), (() => {
            t3[$classes].add("label");
            t3[$classes].addAll(classes);
            t3[$text] = message;
            return t3;
          })()));
          return t2;
        })()));
        return t1;
      })()));
    }
  };
  (app.EchoApp.new = function(_service) {
    this[_service$] = _service;
    ;
  }).prototype = app.EchoApp.prototype;
  dart.addTypeTests(app.EchoApp);
  dart.addTypeCaches(app.EchoApp);
  dart.setMethodSignature(app.EchoApp, () => ({
    __proto__: dart.getMethods(app.EchoApp.__proto__),
    echo: dart.fnType(async.Future$(dart.void), [core.String]),
    repeatEcho: dart.fnType(dart.void, [core.String, core.int]),
    [_addLeftMessage]: dart.fnType(dart.void, [core.String]),
    [_addRightMessage]: dart.fnType(dart.void, [core.String]),
    [_addMessage]: dart.fnType(dart.void, [core.String, core.String])
  }));
  dart.setLibraryUri(app.EchoApp, I[0]);
  dart.setFieldSignature(app.EchoApp, () => ({
    __proto__: dart.getFields(app.EchoApp.__proto__),
    [_service$]: dart.finalFieldType(echo$46pbgrpc.EchoServiceClient)
  }));
  dart.trackLibraries("packages/grpc_web/app", {
    "package:grpc_web/app.dart": app
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SAU2B;AAAR;;AACS,QAAxB,sBAAgB,OAAO;AAEvB;AACQ,0BAAW,MAAM,AAAS,wDAAK;AAAe,yBAAU,OAAO;;;AACnC,UAAlC,uBAAiB,AAAS,QAAD;;cAClB;AAAP;AACkC,YAAlC,uBAAiB,AAAM,KAAD;;;;MAE1B;;eAEuB,SAAa;;AACV,MAAxB,sBAAgB,OAAO;AACjB,sEAAU;AACZ,qBAAU,OAAO;AACjB,0BAAe,KAAK;AACpB,6BAAkB;;;AAKiC,MAJvD,AAAS,AAA6B,oCAAT,OAAO,SAAS,QAAC;AACV,QAAlC,uBAAiB,AAAS,QAAD;2DACf,QAAC;AACuB,UAAlC,uBAAuB,cAAN,KAAK;uCACb,cAAM,WAAM;IACzB;sBAE4B;AACqB,MAA/C,kBAAY,OAAO,EAAE;IACvB;uBAE6B;AACqB,MAAhD,kBAAY,OAAO,EAAE;IACvB;kBAEwB,SAAgB;;AAChC,oBAAU,AAAS,QAAD,SAAO;AAON,MANF,AAAE,eAAzB,mBAAc,8CAAiB;AACnB,QAAR,iBAAY;AACZ,0BAAe,iBAAI,OAAJ;AACb,oDAAO;AACG,YAAR,iBAAY;AACJ,YAAR,oBAAe,OAAO;AACtB,wBAAO,OAAO;;;;;;;IACxB;;;IA3Ca;;EAAS","file":"app.sound.ddc.js"}');
  // Exports:
  return {
    app: app
  };
}));

//# sourceMappingURL=app.sound.ddc.js.map
