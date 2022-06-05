import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:intl/intl.dart';
import 'package:protos/protos.dart';

import '../provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../svc/event_svc.dart';

var eventProvider = FutureProvider.autoDispose.family<Event,int>((ref,eventId){
  var evp = ref.watch(eventServiceProvider);
  return evp.value!.getEvent(eventId);
});

class EventsDetailsPage extends HookConsumerWidget {
  final int eventId;

  EventsDetailsPage({Key? key, required this.eventId}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var fe = ref.watch(eventProvider(eventId));

    return Scaffold(
      appBar: AppBar(title: Text('Event $eventId')),
      body: fe.when(
          data: (ev) {
            return Text('Event details for ${ev.title}'
            );
          },
          error: (e,s) => Text(e.toString()),
          loading: () => CircularProgressIndicator())
    );
  }

  String _trimString(String s, int len) =>
      s.length > len ? s.substring(0, len) : s;
}
