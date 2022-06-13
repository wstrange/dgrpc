import 'dart:async';

import 'package:client/provider.dart';
import 'package:protos/protos.dart';

import '../svc/event_svc.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

var _searchResultProvider = FutureProvider.autoDispose
    .family<List<PersonInfo>, String>((ref, filter) async {
      print('provider filter = $filter');
  var evp = ref.watch(eventServiceProvider);
  var r = evp.value!.getPersons(filter);
  return r;
});

var _searchTextProvider = StateProvider<String>((ref) => '');

class PersonChooserWidget extends HookConsumerWidget {
  EventService svc;
  PersonChooserWidget(this.svc, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var searchTextController = useTextEditingController();
    var presult = ref.watch(_searchResultProvider(searchTextController.text));
    var searchState = ref.watch(_searchTextProvider);


    // See https://medium.flutterdevs.com/explore-multi-select-items-in-flutter-a90665e17be

    return Dialog(
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(20.0))),
        insetPadding: EdgeInsets.all(20.0),
        child: presult.when(
          loading: () => CircularProgressIndicator(),
          error: (e, s) => Text(e.toString()),
          data: (personList) {
            return Column(children: [
              SizedBox(height: 5.0),
              TextField(
                onSubmitted: (value) {
                  print('search for $value');
                  ref.read(_searchTextProvider.notifier).state = value;
                },
                controller: searchTextController,
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Search: enter member email or name',
                ),
              ),
              Expanded(
                child: ListView.separated(
                  scrollDirection: Axis.vertical,
                  shrinkWrap: true,
                  padding: const EdgeInsets.all(8),
                  itemCount: personList.length,
                  itemBuilder: (BuildContext context, int index) {
                    var p = personList[index];
                    return ListTile(
                      visualDensity: VisualDensity.compact,
                      title: Text('${p.email}'),
                    );
                  },
                  separatorBuilder: (BuildContext context, int index) =>
                      const Divider(),
                ),
              ),
            ]);
          },
        ));
  }
}
