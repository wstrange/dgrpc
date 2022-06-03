import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import '../provider.dart';
import '../view/events_view.dart';

class HomePage extends ConsumerWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final sectionId = ref.watch(sectionIdProvider);
    final eventService = ref.watch(eventServiceProvider);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Event Manager'),
      ),
      drawer: Drawer(
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text('Events'),
            ),
            ListTile(
              title: const Text('Events'),
              onTap: () {
                context.go('/events');
              },
            ),
            ListTile(
              title: const Text('Item 2'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
      body: eventService.when(
          data: (evp) => EventView(eventService: evp,),
          loading: () => Center(child: CircularProgressIndicator()),
          error: (err, stackTrace) => Column(
                children: [
                  Text(err.toString()),
                  SizedBox(height: 20),
                ],
              )),
    );
  }
}
