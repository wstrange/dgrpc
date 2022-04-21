import 'dart:io';

import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart';
import 'package:shelf_router/shelf_router.dart';
import 'package:shelf_static/shelf_static.dart';

// Configure routes.
final _router = Router()
  ..get('/', indexHandler)
  ..get('/echo/<message>', _echoHandler)
  ..get('/<file|.*>', staticHandler);

Response _rootHandler(Request req) {
  return Response.ok('Hello, World!\n');
}

final indexHandler = createFileHandler('web/index.html', url: '');

final staticHandler = createStaticHandler('web');

Response _echoHandler(Request request) {
  final message = request.params['message'];
  return Response.ok('$message\n');
}

void main(List<String> args) async {
  // Use any available host or container IP (usually `0.0.0.0`).
  final ip = InternetAddress.anyIPv4;
  // Configure a pipeline that logs requests.
  final _handler = Pipeline().addMiddleware(logRequests()).addHandler(_router);
  // final _handler = Pipeline().addMiddleware(logRequests()).addHandler(staticHandler);

  // For running in containers, we respect the PORT environment variable.
  final port = int.parse(Platform.environment['PORT'] ?? '5000');
  final server = await serve(_handler, ip, port);
  print('Server listening on port ${server.port}');
}
