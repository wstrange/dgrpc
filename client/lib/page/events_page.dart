import 'package:flutter_hooks/flutter_hooks.dart';
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
          title: const Text('Events'),
          leading: Icon(Icons.home),
        ),
        body: events.when(
          data: (el) => ListView.builder(
              padding: const EdgeInsets.all(8),
              itemCount: el.length,
              itemBuilder: (BuildContext context, int index) {
                return EventSummaryItem(el[index]);
              }),
          error: (e, st) => Center(child: Text('Application error: $e')),
          loading: () => const Center(child: CircularProgressIndicator()),
        ));
  }
}

final _dateFormatter = DateFormat.yMMMd();

class EventSummaryItem extends ConsumerWidget {
  final Event event;

  EventSummaryItem(this.event);

  @override
  Widget build(BuildContext context,WidgetRef ref) {
    final st = _dateFormatter.format(event.eventStartTs.toDateTime());
    final end = _dateFormatter.format(event.eventEndTs.toDateTime());

    var esp = ref.watch(eventServiceProvider);

    return Card(
      child: ListTile(
        title: Text('${event.title}  ${st} -> ${end}'),
        trailing: PopupMenuButton<String>(
          padding: EdgeInsets.zero,
          onSelected: (value) => print('selected ${event.eventId}'),
          itemBuilder: (context) => <PopupMenuItem<String>>[
            PopupMenuItem<String>(
              value: 'delete',
              child: Text('delete event'),
              onTap: () {
                print('Delete event ${event.eventId}');
                esp.whenData((e) async {
                  var req = EventDeleteRequest(eventId: event.eventId);
                  var res = await e.deleteEvent(req);
                  // todo: show delete event..
                  var sid = ref.watch(sectionIdProvider);

                  // TODO hack to trigger update of events
                  // doesnt work if the state does not change....
                  ref.read(sectionIdProvider.notifier).state = 1;
                });
              },
            ),
            PopupMenuItem<String>(
              value: 'register',
              child: Text('Register for Event'),
              onTap: () => print('Register event ${event.eventId}'),
            ),
          ],
        ),
        onTap: () {
          print('tapped on event id ${event.eventId}');
        },
      ),
    );
  }
}
