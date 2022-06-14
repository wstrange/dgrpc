import 'package:client/view/person_chooser.dart';
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

// Fetches event details from the server.
var eventProvider = FutureProvider.autoDispose
    .family<EventDetailsResponse, int>((ref, eventId) async {
  // if the counter update, refetch...
  ref.watch(_eventRefreshCounter);
  // ref.onDispose(() { print('dispose provider of eventId $eventId');});
  var evp = ref.watch(eventServiceProvider);
  return evp.value!.getFullEventDetails(eventId);
});

// increment to force a refecth of the event from the server.
// todo: Alternative is to use a stream instead of the future provider
// and have the service refresh the stream...
var _eventRefreshCounter = StateProvider((ref) => 0);

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
  Set<PersonInfo> currentlySelectedPersons = Set();
  _EventView(this.eventDetails) : event = eventDetails.event;

  Widget build(BuildContext context, WidgetRef ref) {
    // todo: is this legit..
    var svc = ref.watch(eventServiceProvider).value!;
    var registeredUsers = eventDetails.registeredUsers();
    var waitlistedUsers = eventDetails.waitlistedUsers();

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
        _EventUserView(
            eventService: svc,
            title: 'Registered for Event',
            eventDetails: eventDetails,
            eventRole: EventPersonInfo_EventRole.REGISTERED),
        _EventUserView(
            eventService: svc,
            title: 'Waitlisted for Event',
            eventDetails: eventDetails,
            eventRole: EventPersonInfo_EventRole.WAITLISTED),
        _EventUserView(
            eventService: svc,
            eventDetails: eventDetails,
            title: 'Coordinators',
            eventRole: EventPersonInfo_EventRole.COORDINATOR),
        SizedBox(
          height: 10,
        ),
        Row(
          children: [
            ElevatedButton(
                onPressed: () async {
                  var result = await svc.associatePerson2Event(
                      eventId: event.eventId,
                      personId: svc.personId,
                      role: EventPersonInfo_EventRole.WAITLISTED);
                  print(
                      'add person  ${svc.personId} to event ${event.eventId} result=$result');
                },
                child: Text('Register')),
            ElevatedButton(
                onPressed: () async {
                  var selected = await showDialog<Set<PersonInfo>?>(
                      context: context,
                      barrierDismissible: true,
                      builder: (BuildContext context) {
                        return PersonChooserWidget(
                            personFutureFilter: (String filter) async {
                          var persons = await svc.getPersons(filter);
                          return persons
                              .where((p) => !registeredUsers.contains(p))
                              .toList();
                        });
                      });
                  print('selected = $selected');
                  if (selected != null) {
                    for (var p in selected) {
                      var result = await svc.associatePerson2Event(
                          eventId: event.eventId,
                          personId: p.id,
                          role: EventPersonInfo_EventRole.REGISTERED);
                      currentlySelectedPersons.add(p);
                    }
                    ref.read(_eventRefreshCounter.notifier).state++;
                  }
                },
                child: Text('Add Person'))
          ],
        ),
      ]),
    );
  }
}

class _EventUserView extends StatelessWidget {
  final EventDetailsResponse eventDetails;
  final String title;
  final EventPersonInfo_EventRole eventRole;
  final EventService eventService;

  const _EventUserView({
    Key? key,
    required this.eventService,
    required this.eventDetails,
    required this.title,
    required this.eventRole,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var users = eventDetails.usersInEventRole(eventRole);

    if (users.isEmpty)
      return SizedBox(
        height: 5.0,
      );

    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          height: 20.0,
        ),
        Text(title,
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18.0)),
        SizedBox(
          height: 10.0,
        ),
        ListView.builder(
          shrinkWrap: true,
          itemCount: users.length,
          itemBuilder: (context, i) {
            return Card(
              child: ListTile(
                dense: true,
                title: Text('${users[i].email}'),
                trailing: PopupMenuButton<String>(
                  padding: EdgeInsets.zero,
                  // onSelected: (value) => print('selected'),
                  itemBuilder: (context) => <PopupMenuItem<String>>[
                    PopupMenuItem<String>(
                      value: 'Remove',
                      child: Text('Remove from event'),
                      onTap: () async {
                        // await svc.deleteEvent(event.eventId);
                        // print('Delete event ${event.eventId}');
                        // await svc.refreshEventStream();
                      },
                    ),
                    if( eventRole == EventPersonInfo_EventRole.REGISTERED) PopupMenuItem<String>(
                      child: Text('Move to wait list'),
                      onTap: () => eventService.associatePerson2Event(eventId: eventDetails.event.eventId,
                          personId: users[i].id, role: EventPersonInfo_EventRole.WAITLISTED),
                    ),
                    if( eventRole == EventPersonInfo_EventRole.WAITLISTED) PopupMenuItem<String>(
                      // value: 'MoveToEvent',
                      child: Text('Move to Event'),
                      onTap: () => eventService.associatePerson2Event(eventId: eventDetails.event.eventId,
                          personId: users[i].id, role: EventPersonInfo_EventRole.REGISTERED),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ],
    );
  }
}
