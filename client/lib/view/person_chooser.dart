import 'dart:async';

import 'package:client/provider.dart';
import 'package:protos/protos.dart';

import '../svc/event_svc.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

var _searchResultProvider = FutureProvider.autoDispose
    .family<List<PersonInfo>, String>((ref, filter) async {
  var evp = ref.watch(eventServiceProvider);
  return evp.value!.getPersons();
});

class PersonChooserWidget extends ConsumerWidget {
  EventService svc;
  PersonChooserWidget(this.svc, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var presult = ref.watch(_searchResultProvider('foo'));

    // var searchProvider = StreamProvider.family<List<PersonInfo>, String>( (ref,searchString) async {
    //    return Stream<List<PersonInfo>>.fromIterable(elements)
    // });

    // See https://medium.flutterdevs.com/explore-multi-select-items-in-flutter-a90665e17be

    return Dialog(
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(20.0))),
        child: presult.when(
          loading: () => CircularProgressIndicator(),
          error: (e, s) => Text(e.toString()),
          data: (personList) {
            return Column(
              children: personList.map((person) {
                return Card(
                  child: Text('${person.email}'),
                );
              }).toList(),
            );
          },
        ));
  }
}
