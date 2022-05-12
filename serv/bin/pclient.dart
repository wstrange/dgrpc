// Copyright (c) 2018, the gRPC project authors. Please see the AUTHORS file
// for details. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// Dart implementation of the gRPC helloworld.Greeter client.
import 'package:grpc/grpc.dart';
import 'package:protos/protos.dart';
import 'package:protos/src/generated/echo.pbgrpc.dart';

import 'pserver.dart';

var idtoken = '''
eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhZmE4MTJiMTY5NzkxODBmYzc4MjA5ZWE3Y2NhYjkxZTY4NDM2NTkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiV2FycmVuIFN0cmFuZ2UiLCJwa
WN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pXNU9SellzYTdqS21SMHpqcDRQNE1ydDdtY2lwWlVGNXJJaTctc2ZFPXM5Ni1jIiwiaXNzIjoiaHR0cH
M6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2RncnBjLTg3NDYzIiwiYXVkIjoiZGdycGMtODc0NjMiLCJhdXRoX3RpbWUiOjE2NDg1MjM5ODYsInVzZXJfaWQiOiJiMEVHYVFGYjVXYnExbGhnZTRy
b2x3NHhSUUQzIiwic3ViIjoiYjBFR2FRRmI1V2JxMWxoZ2U0cm9sdzR4UlFEMyIsImlhdCI6MTY1MDA2Nzg2NSwiZXhwIjoxNjUwMDcxNDY1LCJlbWFpbCI6IndhcnJlbi5zdHJhbmdlQGdtYWlsLmN
vbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7
Imdvb2dsZS5jb20iOlsiMTEwMzkxNTk3NDAwOTk1MjQ5OTQ0Il0sImVtYWlsIjpbIndhcnJlbi5zdHJhbmdlQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb
20ifX0.SnP5A30R2bsVyit9klEjRkEaI6F8XyNca8ht4BVmrN-dmZhbPJs0rsDsH78sNkC6NE1jn025_YRGJxGpnQHQIVRtMHA0Egs-bh3rzEuvMvvgJBxFZYHuLtZ_pvrQViU2MT9RYcek
LTGCVTkb01SddnDI3qxL68ooOqWFDQehuwWbG4IrQvIQ_XMNUSONowwTokFWzh0I3oXv5dBStKCZeDITr17AJdCBsEhXjfqZdQf0DrbM0Pzq8Ggb2tw9Z_10_Z0uZMkdwGfBhWc0rT
bd35GeKc541pkFWdhc2IXsWs6VkB6zZfkdlRK5N47od3k-eAjHpokircBtUxs7GAWsBg'''.replaceAll('\n', '');

Future<void> main(List<String> args) async {
  final channel = ClientChannel(
    'localhost',
    port: 9090,
    options: ChannelOptions(
      credentials: ChannelCredentials.insecure(),
      codecRegistry:
          CodecRegistry(codecs: const [GzipCodec(), IdentityCodec()]),
    ),
  );
  final authSvc = AuthServiceClient(channel);
  final eventSvc = EventServiceClient(channel);

  final name = args.isNotEmpty ? args[0] : 'world foo';

  try {
    // var ec = AuthRequest(idToken: idtoken);
    // var json = ec.toProto3Json();
    //
    // print('json proto = $json');
    //
    // var response = await stub.authenticate(
    //   ec,
    //   options: CallOptions(
    //       compression: const GzipCodec(),
    //       metadata: {'authorization': 'Bearer foobar'}),
    // );
    // print(' client received: ${response.messages}');

    // try as admin
    var ec = AuthRequest(idToken: 'admin');
    var response = await authSvc.authenticateLocal(ec);
    print('local auth = $response');

    // get some events

    var options = CallOptions(compression: const GzipCodec(),
         metadata: {'authorization': response.sessionId });

    var eventReq = EventLookupRequest(sectionId: 1);
    var eventResp = await eventSvc.getEvents(eventReq, options: options);
    print('got event resp = $eventResp');

  } catch (e) {
    print('Caught error: $e');
  }
  await channel.shutdown();
}
