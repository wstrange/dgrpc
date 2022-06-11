import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:intl/intl.dart';
import 'package:protos/protos.dart';

import '../provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../util.dart';

import '../svc/event_svc.dart';

var eventProvider = FutureProvider.autoDispose
    .family<EventDetailsResponse, int>((ref, eventId) async {
  // ref.onDispose(() { print('dispose provider of eventId $eventId');});
  var evp = ref.watch(eventServiceProvider);
  return evp.value!.getFullEventDetails(eventId);
});

class EventsDetailsPage extends ConsumerWidget {
  final int eventId;

  EventsDetailsPage({Key? key, required this.eventId}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var fe = ref.watch(eventProvider(eventId));

    return Scaffold(
        appBar: AppBar(title: Text('Event $eventId')),
        body: fe.when(
            data: (ev) => _EventView(ev),
            error: (e, s) => Text(e.toString()),
            loading: () => CircularProgressIndicator()));
  }

  String _trimString(String s, int len) =>
      s.length > len ? s.substring(0, len) : s;
}

class _EventView extends ConsumerWidget {
  EventDetailsResponse eventDetails;
  Event event;
  _EventView(this.eventDetails) : event = eventDetails.event;

  Widget build(BuildContext context, WidgetRef ref) {
    var svc = ref.watch(eventServiceProvider).value!;

    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(
          '${event.title}',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        SizedBox(
          height: 10,
        ),
        Text(event.description),
        SizedBox(
          height: 10,
        ),
        Text("Starts on ${event.eventStartTs.yMMMd()}"),
        Text("Ends on ${event.eventEndTs.yMMMd()}"),
        if (event.registerStartTs.isAfterNow())
          Text("Registration Starts ${event.registerStartTs.yMMMd()}"),
        SizedBox(
          height: 10,
        ),
        Text('Event Users'),
        SizedBox(
          height: 10,
        ),
        Wrap(
            spacing: 8.0,
            runSpacing: 4.0,
            children: eventDetails.eventPersonInfos.map((p) {
              return InputChip(
                label: Text(
                  p.personInfo.email,
                ),
                avatar: CircleAvatar(
                  backgroundColor: Colors.brown.shade800,
                  child: const Text('A'),
                ),

              );
            }).toList()),
        SizedBox(
          height: 10,
        ),
        Row(
          children: [
            ElevatedButton(
                onPressed: () async {
                  var result = await svc.addPerson2Event(
                      eventId: event.eventId,
                      personId: svc.personId,
                      role: EventPersonInfo_EventRole.ADMIN);
                  print('add person  ${svc.personId} to event ${event.eventId} result=$result');
                },
                child: Text('Register'))
          ],
        ),
      ]),
    );
  }
}
