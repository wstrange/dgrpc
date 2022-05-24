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

/// Dart implementation of the gRPC helloworld.Greeter server.
import 'package:grpc/grpc.dart';
import 'package:serv/serv.dart';
import 'package:logging/logging.dart';


Future<void> main(List<String> args) async {

  Logger.root.level = Level.ALL; // defaults to Level.INFO
  Logger.root.onRecord.listen((record) {
    print('${record.level.name}: ${record.loggerName} ${record.time}: ${record.message}');
  });

  final server = Server(
    // [GreeterService(),EchoService()],
    [AuthService(db),EventService(db)],
    // chained interceptor does not appear to work... See
    // https://github.com/grpc/grpc-dart/issues/424
    const <Interceptor>[authInterceptor, /* dbInterceptor */],
    CodecRegistry(codecs: const [
      GzipCodec(),
      // IdentityCodec(),  // Breaks grpc web. See https://github.com/grpc/grpc-dart/issues/506
    ]),
  );
  await server.serve(port: 9090);
  print('Server listening on port ${server.port}...');
}
