import 'package:go_router/go_router.dart';
import 'package:intl/intl.dart';
import 'package:protos/protos.dart';

import '../provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../svc/event_svc.dart';

class EventsPage extends ConsumerWidget {
  const EventsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final events = ref.watch(currentEventStream);
    final esp = ref.watch(eventServiceProvider);


    return Scaffold(
        appBar: AppBar(
          title: const Text('Events Listing'),
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
              title: const Text('Create New Event'),
              onTap: () {
                Navigator.pop(context); // close drawer
                context.push('/events/create');
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
        body: events.when(
          data: (el) => ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: el.length,
              itemBuilder: (BuildContext context, int index) {
                return EventSummaryItem(el[index],esp.asData!.value);
              }),
          error: (e, st) => Center(child: Text('Application error: $e')),
          loading: () => const Center(child: CircularProgressIndicator()),
        ),
      );
  }
}

final _dateFormatter = DateFormat.yMMMd();

class EventSummaryItem extends ConsumerWidget {
  final Event event;
  final EventService svc;

  const EventSummaryItem(this.event, this.svc);

  @override
  Widget build(BuildContext context,WidgetRef ref) {
    final st = _dateFormatter.format(event.eventStartTs.toDateTime());
    final end = _dateFormatter.format(event.eventEndTs.toDateTime());


    return Card(
      child: ListTile(
        title: Text('${event.title}  $st -> $end'),
        trailing: PopupMenuButton<String>(
          padding: EdgeInsets.zero,
          onSelected: (value) => print('selected ${event.eventId}'),
          itemBuilder: (context) => <PopupMenuItem<String>>[
            PopupMenuItem<String>(
              value: 'delete',
              child: const Text('delete event'),
              onTap: () async {
                await svc.deleteEvent(event.eventId);
                print('Delete event ${event.eventId}');
                await svc.refreshEventStream();
              },
            ),
            PopupMenuItem<String>(
              value: 'register',
              child: const Text('Register for Event'),
              onTap: () => print('Register event ${event.eventId}'),
            ),
          ],
        ),
        onTap: () async {
          print('tapped on event id ${event.eventId}');
          context.push('/events/${event.eventId}');
        },
      ),
    );
  }
}
