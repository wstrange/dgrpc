import 'package:intl/intl.dart';
import 'package:protos/protos.dart';

import '../provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class EventsPage extends ConsumerWidget {
  EventsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final events = ref.watch(currentEventsProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Events List'),
        leading: Icon(Icons.home),),
      body: events.when(
          data: (el) => ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: el.length,
              itemBuilder: (BuildContext context, int index) {
                return EventSummaryItem(el[index]);
              }
          ),
          error: (e,st) => Center(child: Text('Application error: $e')),
          loading: () => const Center(child: CircularProgressIndicator()),)
    );
  }
}

class EventSummaryItem extends StatelessWidget {
  final Event event;

  EventSummaryItem(this.event);

  @override
  Widget build(BuildContext context) {
    final st = DateFormat.yMMMd().format(event.eventStartTs.toDateTime());

    return Card(
      child: ListTile(
          title: Text('Event id: ${event.eventId} ${event.title} starts ${st}'),
        trailing: Icon(Icons.more_vert),
        onTap: () => print('tapped on event id ${event.eventId}'),
      ),
    );
  }

}



