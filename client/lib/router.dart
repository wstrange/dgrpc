import 'package:client/page/create_event_form.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'dart:developer' as developer;
import 'page/auth_page.dart';
import 'page/events_page.dart';
import 'page/home_page.dart';
import 'page/profile_page.dart';
import 'provider.dart';

final routerProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    // Keep this to `true` if want to know what's going on under the hood
    debugLogDiagnostics: true,
    redirect: (state) {
      // We want to READ the state, here.
      // GoRouter is already aware of state changes through `refreshListenable`
      // We don't want to trigger a rebuild of this provider.
      final user = ref.read(userProvider);

      developer.log('state ${state.location} user $user');

      // From here we can use the state and implement our custom logic
      final areWeLoggingIn = state.location == '/login';

      if (user == null) {
        // We're not logged in
        // So, IF we aren't in the login page, go there.
        return areWeLoggingIn ? null : '/login';
      }
      // We're logged in

      // // At this point, IF we're in the login page, go to the home page
      // // if (areWeLoggingIn) return '/';
      if(areWeLoggingIn) return '/';
      // if( state.location != '/profile') {
      //   return '/profile';
      // }

      // There's no need for a redirect at this point.
      return null;
    },
    // This is crucial to make the router work with Riverpod.
    refreshListenable: RouterNotifier(ref),
    routes: [
      GoRoute(
        name: "home",
        path: '/',
        builder: (context, _) => HomePage(),
      ),
      GoRoute(
        name: "login",
        path: '/login',
        builder: (context, _) => AuthPage(),
      ),
      GoRoute(
        name: 'profile',
        path: '/profile',
        builder: (context, _) => ProfilePage(),
      ),
      GoRoute(
        name: 'eventcreate',
        path: '/eventcreate',
        builder: (context, _) => CreateEventForm(),
      ),
      GoRoute(
          name: 'events',
          path: '/events',
          builder: (context, _) => EventsPage()),
    ],
  );
});

class RouterNotifier extends ChangeNotifier {
  final Ref _ref;

  /// Creates a Notifier to be used in GoRouter
  ///
  /// GoRouter's refreshListenable only accepts a `Listenable` object:
  /// therefore, `ChangeNotifier` is used here; since `StateNotifier` is not
  /// a `Listenable`, this choice is forced. While there are other options, my
  /// personal preference is to use this approach. Please check out the others/
  /// folder for more implementation options.
  ///
  /// Please recall that `ChangeNotifier` is to be avoided anywhere else.
  /// https://riverpod.dev/docs/concepts/providers/#different-types-of-providers
  ///
  /// This implementation exploits `ref.listen()` to add a callback which
  /// simply calls `notifyListeners()` whenever there's change onto a state.
  RouterNotifier(this._ref) {
    _ref.listen<User?>(
      userProvider,
      (_, __) => notifyListeners(),
    );
  }
}
