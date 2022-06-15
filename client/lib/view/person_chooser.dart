import 'package:protos/protos.dart';

// import '../svc/event_svc.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

// var _searchResultProvider = FutureProvider.autoDispose
//     .family<List<PersonInfo>, String>((ref, filter) async {
//   print('provider filter = $filter');
//   var evp = ref.watch(eventServiceProvider);
//   var r = evp.value!.getPersons(filter);
//   return r;
// });
//
typedef PersonStreamFilter = Stream<PersonInfo> Function(String filter);
typedef PersonFutureFilter = Future<List<PersonInfo>> Function(String filter);
//
// var _searchTextProvider = StateProvider<String>((ref) => '');

class PersonChooserWidget extends HookConsumerWidget {
  // function that creates a stream of PersonInfo given a search filter
  // PersonStreamFilter personStreamFilter;

  // A function that when called with a string filter returns a
  // future List of PersonInfos
  PersonFutureFilter personFutureFilter;

  PersonChooserWidget(
      {Key? key,
      required this.personFutureFilter})
      : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    var searchTextController = useTextEditingController();
    // var personStream = useStream( personStreamFilter(searchTextController.text));
    // var personFuture = useFuture(personFutureFilter(searchTextController.text));
    var refresh = useState(0);
    var fm = useMemoized(() => personFutureFilter(searchTextController.text),[refresh.value]);
    var personFuture = useFuture(fm);

    // var searchState = ref.watch(_searchTextProvider);
    var selectedUsers = useState(Set<PersonInfo>());
    var toggleSelection = useState(false);

    // See https://medium.flutterdevs.com/explore-multi-select-items-in-flutter-a90665e17be


    if (!personFuture.hasData) {
      return const CircularProgressIndicator();
    }

    var personList = personFuture.data!;


    return Dialog(
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(20.0))),
        insetPadding: const EdgeInsets.all(20.0),
        child: Padding(
            padding: const EdgeInsets.all(10.0),
            child: Column(children: [
              const SizedBox(height: 5.0),
              TextField(
                onSubmitted: (value) {
                  print('search for $value');
                  refresh.value++;
                },
                controller: searchTextController,
                decoration: const InputDecoration(
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
                    return CheckboxListTile(
                      visualDensity: VisualDensity.compact,
                      value: selectedUsers.value.contains(p),
                      title: Text('${p.firstName} ${p.lastName} ${p.email}'),
                      onChanged: (value) {
                        value == true
                            ? selectedUsers.value.add(p)
                            : selectedUsers.value.remove(p);
                        // force checkbox view to reload
                        toggleSelection.value = !toggleSelection.value;
                      },
                    );
                  },
                  separatorBuilder: (BuildContext context, int index) =>
                      const Divider(),
                ),
              ),
              Row(
                children: [
                  ElevatedButton(
                      onPressed: () {
                        Navigator.pop(context, selectedUsers.value);
                      },
                      child: const Text('Register Selected')),
                  const SizedBox(
                    width: 20.0,
                  ),
                  ElevatedButton(
                      onPressed: () {
                        Navigator.pop(context, null);
                      },
                      child: const Text('Cancel')),
                ],
              )
            ])));
  }
}
