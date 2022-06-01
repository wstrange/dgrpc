import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';


class HomePage extends ConsumerWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: Row(children: [
        const Text('Home Page'),
        TextButton(child: const Text('Logout'), onPressed: () => print('press')),
        TextButton(child: const Text('Events'), onPressed: () => context.go('/events')),
        TextButton(child: const Text('Create Event'), onPressed: () => context.go('/eventcreate')),

      ],)
    );
  }
}