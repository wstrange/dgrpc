import 'dart:async';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:protos/protos.dart';
import 'package:grpc/grpc_web.dart';
import 'dart:developer' as developer;

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
      s = await _authenticateServer(u);
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

Future<String> _authenticateServer(User u) async {
  var t = await u.getIdToken(false);
  // user is not null - try to get a session id;
  final response = await _authService.authenticate(AuthRequest()..idToken = t);
  developer.log(
      'Response from svc = id= ${response.sessionId} ${response.error} ${response.messages}');
  return response.sessionId;
}

final eventServiceProvider =
    FutureProvider<EventServiceClient>((ref)  async {
      // todo: this should watch registered users...
      // var u = ref.watch(userProvider);

      // HACK HACK...
      var ec = AuthRequest(idToken: 'admin');
      var response = await _authService.authenticateLocal(ec);
      // print('Got session = ${response.sessionId} personId = ${response.personId}');
      var options = CallOptions(
          // compression: const GzipCodec(),
          metadata: {'authorization': response.sessionId});

      return EventServiceClient(_channel, options: options);
    });

final sectionIdProvider = StateProvider<int>((ref) => 1);

final currentEventsProvider = FutureProvider<List<Event>>((ref) async {
  var sectionId = ref.watch(sectionIdProvider);
  var evp = await ref.watch(eventServiceProvider.future);
  var req = EventLookupRequest(sectionId: sectionId);

  var resp = await evp.getEvents(req);

  return resp.events;
  });

final _channel = GrpcWebClientChannel.xhr(Uri.parse('http://localhost:8080'));
final _authService = AuthServiceClient(_channel);
final _eventService = EventServiceClient(_channel);
