define(['dart_sdk', 'packages/grpc/src/client/transport/cors', 'packages/protos/src/generated/echo.pbgrpc', 'packages/grpc_web/app'], (function load__web__main(dart_sdk, packages__grpc__src__client__transport__cors, packages__protos__src__generated__echo$46pbgrpc, packages__grpc_web__app) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const web_channel = packages__grpc__src__client__transport__cors.src__client__web_channel;
  const echo$46pbgrpc = packages__protos__src__generated__echo$46pbgrpc.src__generated__echo$46pbgrpc;
  const app$ = packages__grpc_web__app.app;
  var main = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $value = dartx.value;
  var $trim = dartx.trim;
  var $isEmpty = dartx.isEmpty;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    MouseEventToFutureOfvoid: () => (T.MouseEventToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [html.MouseEvent])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    let channel = new web_channel.GrpcWebClientChannel.xhr(core.Uri.parse("http://localhost:8080"));
    let service = new echo$46pbgrpc.EchoServiceClient.new(channel);
    let app = new app$.EchoApp.new(service);
    let button = html.ButtonElement.as(html.querySelector("#send"));
    button[$onClick].listen(dart.fn(e => async.async(dart.void, function*() {
      let msg = html.TextInputElement.as(html.querySelector("#msg"));
      let value = dart.nullCheck(msg[$value])[$trim]();
      msg[$value] = "";
      if (value[$isEmpty]) return;
      if (value[$indexOf](" ") > 0) {
        let countStr = value[$substring](0, value[$indexOf](" "));
        let count = core.int.tryParse(countStr);
        if (count != null) {
          app.repeatEcho(value[$substring](value[$indexOf](" ") + 1), count);
        } else {
          app.echo(value);
        }
      } else {
        app.echo(value);
      }
    }), T.MouseEventToFutureOfvoid()));
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAqBQ,kBAA+B,yCAAQ,eAAM;AAC7C,kBAAU,wCAAkB,OAAO;AACnC,cAAM,qBAAQ,OAAO;AAErB,iBAAgC,sBAAvB,mBAAc;AAoB3B,IAnBF,AAAO,AAAQ,MAAT,kBAAgB,QAAC;AACf,gBAA4B,yBAAtB,mBAAc;AACpB,kBAAiB,AAAE,eAAX,AAAI,GAAD;AACH,MAAd,AAAI,GAAD,WAAS;AAEZ,UAAI,AAAM,KAAD,YAAU;AAEnB,UAAI,AAAM,AAAa,KAAd,WAAS,OAAO;AACjB,uBAAW,AAAM,KAAD,aAAW,GAAG,AAAM,KAAD,WAAS;AAC5C,oBAAY,kBAAS,QAAQ;AAEnC,YAAI,KAAK;AACuD,UAA9D,AAAI,GAAD,YAAY,AAAM,KAAD,aAAW,AAAM,AAAa,KAAd,WAAS,OAAO,IAAI,KAAK;;AAE9C,UAAf,AAAI,GAAD,MAAM,KAAK;;;AAGD,QAAf,AAAI,GAAD,MAAM,KAAK;;IAEjB;EACH","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
