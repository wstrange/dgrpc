import 'package:grpc/grpc_web.dart';
// Grpc channel for web clients. This is conditionally imported
final channel = GrpcWebClientChannel.xhr(Uri.parse('http://localhost:8080'));
