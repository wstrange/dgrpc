import 'package:grpc/grpc.dart';
import 'package:protos/protos.dart';

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

    var options = CallOptions(
        compression: const GzipCodec(),
        metadata: {'authorization': response.sessionId});

    var eventReq = EventLookupRequest(sectionId: 1);
    var eventResp = await eventSvc.getEvents(eventReq, options: options);
    print('got event resp = $eventResp');

    var evCreateReq = EventCreateRequest(
        event: Event(
            minParticipants: 1,
            maxParticipants: 4,
            title: 'test',
            description: 'test description',
            sectionId: 1));

    var createResp = await eventSvc.createEvent(evCreateReq, options: options);

    print('resp = $createResp');
  } catch (e) {
    print('Caught error: $e');
  }
  await channel.shutdown();
}
