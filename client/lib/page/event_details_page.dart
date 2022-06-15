import 'package:client/view/person_chooser.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:protos/protos.dart';

import '../provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../util.dart';

import '../svc/event_svc.dart';

var eventStreamProvider = StreamProvider.family<EventDetailsResponse, int>((ref, eventId)  {
  var evp = ref.watch(eventServiceProvider);
  return evp.value!.getEventDetailsStream(eventId);
});


class EventsDetailsPage extends ConsumerWidget {
  final int eventId;

  const EventsDetailsPage({Key? key, required this.eventId}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var fe = ref.watch(eventStreamProvider(eventId));

    return Scaffold(
        appBar: AppBar(title: Text('Event $eventId')),
        body: fe.when(
            data: (ev) => _EventView(ev),
            error: (e, s) => Text(e.toString()),
            loading: () => const CircularProgressIndicator()));
  }

  String _trimString(String s, int len) =>
      s.length > len ? s.substring(0, len) : s;
}

class _EventView extends ConsumerWidget {
  EventDetailsResponse eventDetails;
  Event event;
  Set<PersonInfo> currentlySelectedPersons = {};
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
          event.title,
          style: const TextStyle(fontWeight: FontWeight.bold),
        ),
        const SizedBox(
          height: 10,
        ),
        Text(event.description),
        const SizedBox(
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
        const SizedBox(
          height: 10,
        ),
        Row(
          children: [
            ElevatedButton(
                onPressed: () async {
                  var result = await svc.associatePersonToEvent(
                      eventId: event.eventId,
                      personId: svc.personId,
                      role: EventPersonInfo_EventRole.WAITLISTED);
                  print(
                      'add person  ${svc.personId} to event ${event.eventId} result=$result');
                },
                child: const Text('Register')),
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
                      var result = await svc.associatePersonToEvent(
                          eventId: event.eventId,
                          personId: p.id,
                          role: EventPersonInfo_EventRole.REGISTERED);
                      currentlySelectedPersons.add(p);
                    }
                  }
                },
                child: const Text('Add Person'))
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

    if (users.isEmpty) {
      return const SizedBox(
        height: 5.0,
      );
    }

    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(
          height: 20.0,
        ),
        Text(title,
            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18.0)),
        const SizedBox(
          height: 10.0,
        ),
        ListView.builder(
          shrinkWrap: true,
          itemCount: users.length,
          itemBuilder: (context, i) {
            return Card(
              child: ListTile(
                dense: true,
                title: Text(users[i].email),
                trailing: PopupMenuButton<String>(
                  padding: EdgeInsets.zero,
                  // onSelected: (value) => print('selected'),
                  itemBuilder: (context) => <PopupMenuItem<String>>[
                    PopupMenuItem<String>(
                      value: 'Remove',
                      child: const Text('Remove from event'),
                      onTap: () async {
                        await eventService.deletePersonFromEvent(eventId: eventDetails.event.eventId,
                          personId: users[i].id);
                      },
                    ),
                    if( eventRole == EventPersonInfo_EventRole.REGISTERED) PopupMenuItem<String>(
                      child: const Text('Move to wait list'),
                      onTap: () => eventService.associatePersonToEvent(eventId: eventDetails.event.eventId,
                          personId: users[i].id, role: EventPersonInfo_EventRole.WAITLISTED),
                    ),
                    if( eventRole == EventPersonInfo_EventRole.WAITLISTED) PopupMenuItem<String>(
                      // value: 'MoveToEvent',
                      child: const Text('Move to Event'),
                      onTap: () => eventService.associatePersonToEvent(eventId: eventDetails.event.eventId,
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
