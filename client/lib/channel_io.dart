import 'package:grpc/grpc.dart';

// Grpc channel for non web clients. This is conditionally imported
final channel = ClientChannel(
  // 'localhost',
  'warrens-air',
  port: 9090,
  options: ChannelOptions(
    credentials: ChannelCredentials.insecure(),
    codecRegistry: CodecRegistry(codecs: const [GzipCodec(), IdentityCodec()]),
  ),
);
