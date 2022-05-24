import 'package:grpc/grpc.dart';
import 'package:protos/protos.dart';
import 'package:test/test.dart';


/// exercise the grpc api for events
/// Assumes the database has been seeded with test data. See [../db/test/seed.dart]

Future<void> main() async {
  late ClientChannel channel;
  late AuthServiceClient authSvc = AuthServiceClient(channel);
  late EventServiceClient eventSvc = EventServiceClient(channel);
  late CallOptions options;


  // Authenticate as the local admin for testing
  setUp(() async {
    channel = ClientChannel(
      'localhost',
      port: 9090,
      options: ChannelOptions(
        credentials: ChannelCredentials.insecure(),
        codecRegistry:
        CodecRegistry(codecs: const [GzipCodec(), IdentityCodec()]),
      ),
    );

    authSvc = AuthServiceClient(channel);

    var ec = AuthRequest(idToken: 'admin');
    var response = await authSvc.authenticateLocal(ec);
    // print('Got session = ${response.sessionId} personId = ${response.personId}');
    options = CallOptions(
        compression: const GzipCodec(),
        metadata: {'authorization': response.sessionId});

    eventSvc = EventServiceClient(channel, options: options);


  });

  tearDown(() async {
    await channel.shutdown();
    // print('channel shutdown');
  });

  test('Event Lookup', () async {
    // Lookup section 1 events..
    var eventReq = EventLookupRequest(sectionId: 1);
    var eventResp = await eventSvc.getEvents(eventReq);
    // print('got event resp = $eventResp');
    expect(eventResp.status.code, equals(0));

    // Lookup a bad section
    eventReq = EventLookupRequest(sectionId: 999999);
    eventResp= await eventSvc.getEvents(eventReq);
    expect(eventResp.status.code != 0, isTrue);

    // find all events created by the admin
    eventReq = EventLookupRequest(createdByPersonId: 1, sectionId: 1);
    eventResp =  await eventSvc.getEvents(eventReq);
    expect(eventResp.status.code, equals(0));
    // todo: how many test events do we assume...
    expect(eventResp.events.length, greaterThanOrEqualTo(10));

  });

  test('Event Create', () async {
    var evCreateReq = EventCreateRequest(
        event: Event(
            minParticipants: 1,
            maxParticipants: 4,
            title: 'test',
            description: 'test description',
            sectionId: 1));

    var createResp = await eventSvc.createEvent(evCreateReq);
    expect(createResp.status.code, equals(0));

    print('resp = $createResp');
    // try to create a bad section id
    evCreateReq.event.sectionId = 99999;
    createResp = await eventSvc.createEvent(evCreateReq);
    print('resp = $createResp');

    expect(createResp.status.code != 0, isTrue);

  });


}
