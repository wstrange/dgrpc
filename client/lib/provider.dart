import 'dart:async';
import 'package:client/svc/event_svc.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:protos/protos.dart';
import 'dart:developer' as developer;
import 'package:grpc/grpc.dart';
import 'channel_io.dart' if (dart.library.js) "channel_web.dart";

final firebaseAuthProvider =
    Provider<FirebaseAuth>((ref) => FirebaseAuth.instance);

final authStateChangesProvider = StreamProvider<User?>((ref) {
  developer.log('create authStateChange provider');
  return ref.watch(firebaseAuthProvider).authStateChanges();
});

// works...
final userProvider = Provider<User?>((ref) {
  final a = ref.watch(authStateChangesProvider);
  var u = a.asData?.value;
  if (u?.uid != null) {
    return u!;
  }
  return null;
});
final sessionChangeProvider = StreamProvider<String>((ref) {
  var controller = StreamController<String>();

  ref.watch(firebaseAuthProvider).authStateChanges().listen((u) async {
    var s = "anonymous";
    if (u != null) {
      var response = await _authenticateServer(u);
      s = response.sessionId;
    }
    controller.add(s);
  });
  return controller.stream;
});
//
// final sessionProvider = FutureProvider<String>((ref) async {
//   var s = "";
//   var t = await ref.watch(authStateChangesProvider).whenData((u) async {
//     developer.log('u data = $u');
//     if( u != null ) {
//       var t = await u.getIdToken(false);
//       // user is not null - try to get a session id;
//       final response = await _service.authenticate(AuthRequest()..idToken = t);
//       developer.log(
//           'Response from svc = id= ${response.sessionId} ${response.error} ${response.messages}');
//       s = response.sessionId;
//     }
//   });
//   developer.log('got t $t  s=$s');
//   var foo = await t.whenData((value) => print(value));
//   developer.log('foo = $foo');
//   return s;
// });

// // print('validate token $t');
// AuthServiceClient _service;

Future<AuthResponse> _authenticateServer(User u) async {
  var t = await u.getIdToken(false);
  // user is not null - try to get a session id;
  final response =
      await authServiceClient.authenticate(AuthRequest()..idToken = t);
  developer.log(
      'Response from svc = id= ${response.sessionId} ${response.error} ${response.messages}');

  return response;
}


// todo: do we need a session cookie service???
// get the session cookie, or 'anonymous' if not present?

final eventServiceProvider = StreamProvider<EventService>((ref) {
  final _eventScvStream = StreamController<EventService>();
  ref.onDispose(() => 'dispose called');
  var s = ref.watch(authStateChangesProvider);
  var section = ref.watch(sectionIdProvider);
  s.when(
    data: (user) async {
      if ( user == null )
        throw Exception('User object is null. Fixme');
      var r =  await _authenticateServer(user);
      var sessionCookie = r.sessionId;
      developer.log('Auth response = $r');

      // todo - make an auth call to get the session cookie
      var options = CallOptions(metadata: {'authorization': sessionCookie});
      _eventScvStream.add(
          EventService(EventServiceClient(channel, options: options,
          ), section, r));
    },
    loading: () => AsyncValue.loading(),
    error: (e, s) => throw Exception(e),
  );
  return _eventScvStream.stream;
});

// final sectionIdProvider = StateProvider<int>((ref) => 1);
final sectionIdProvider =
    StateNotifierProvider<SelectedSection, int>((ref) => SelectedSection(ref));

class SelectedSection extends StateNotifier<int> {
  SelectedSection(this.ref) : super(1);
  final Ref ref;
  void setSectionId(int id) {
    state = id;
  }
}

final currentEventStream = StreamProvider.autoDispose((ref) async* {
  var evp = await ref.watch(eventServiceProvider.future);
  ref.onDispose(() {
    print('dispose called on stream provider');
  });
  yield* evp.getEventStream();
});

// a list of the current events for section
// todo: Make this a stream??
final currentEventsProvider = FutureProvider<List<Event>>((ref) async {
  var evp = await ref.watch(eventServiceProvider.future);
  var events = evp.getEvents();
  return events;
});

// final _channelx = GrpcWebClientChannel.xhr(Uri.parse('http://localhost:8080'));
// final channel = ClientChannel(
//   // 'localhost',
//   'warrens-air',
//   port: 9090,
//   options: ChannelOptions(
//     credentials: ChannelCredentials.insecure(),
//     codecRegistry: CodecRegistry(codecs: const [GzipCodec(), IdentityCodec()]),
//   ),
// );
//

final authServiceClient = AuthServiceClient(channel);
final eventServiceClient = EventServiceClient(channel);
