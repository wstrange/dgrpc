import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:intl/intl.dart';
import 'package:protos/protos.dart';
import '../provider.dart';
import '../svc/event_svc.dart';
import 'package:go_router/go_router.dart';


// Form to create an event..
//
class CreateEventForm extends HookConsumerWidget {
  const CreateEventForm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final formKey = useMemoized(GlobalKey<FormState>.new, const []);
    final title = useTextEditingController(text: '');
    final description = useTextEditingController(text: '');
    final eventStart = useState(DateTime.now());
    final eventEnd = useState(DateTime.now());
    final regStart = useState(DateTime.now());
    final regEnd = useState(DateTime.now().add(const Duration(days: 1)));
    final isValid = useState(false);

    var evp = ref.watch(eventServiceProvider);
    var sectionId = ref.read(sectionIdProvider);

    validate() {
      if( formKey.currentState != null ) {
        isValid.value = formKey.currentState!.validate() ? true : false;
      }
    }

    // Create the event - called once the form is valid
    // If the create failed, return the error message, otherwise null
    Future<int?> _submitCreateEvent(EventService es) async {
      var event = Event(title: title.text,
        description: description.text,
        eventStartTs: Timestamp.fromDateTime(eventStart.value),
        eventEndTs: Timestamp.fromDateTime(eventEnd.value),
        registerStartTs: Timestamp.fromDateTime(regStart.value),
        registerEndTs: Timestamp.fromDateTime(regEnd.value),
        // TODO: Pull the users id from the provider...
        createdById: 1,
        sectionId: sectionId,
        minParticipants: 2,
        maxParticipants: 4,
      );

      var r = await es.createEvent(event);
      return r;

    }

    return Scaffold(
      appBar: AppBar(title: const Text('Create Event')),
      body: Form(
        key: formKey,
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          TextFormField(
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              labelText: 'Title',
            ),
            controller: title,
            validator: (value) {
              if (value == null || value.length < 4 || value.length > 128) {
                return 'Enter title - up to 128 characters';
              }
              return null;
            },
            onChanged: (v) => validate(),
          ),
          const SizedBox(height: 10),
          TextFormField(
            decoration: const InputDecoration(
                border: OutlineInputBorder(),
                labelText: 'Event Description',
                helperText:
                    'Enter a short description of the event (Max 20 lines)'),
            controller: description,
            maxLines: 10,
            validator: (value) {
              if (value == null || value.length < 10) {
                return 'Enter a description of the event';
              }
              return null;
            },
            onChanged: (v) =>  validate(),
          ),
          const SizedBox(height: 10),
          DateTimeSelector(
            eventStart.value,
            'Event Start',
            onUpdate: (d) {
              eventStart.value = d;
              if (d.isAfter(eventEnd.value)) {
                eventEnd.value = d;
              }
            },
          ),
          const SizedBox(height: 5),
          DateTimeSelector(
            eventEnd.value,
            'Event End',
            onUpdate: (d) {
              eventEnd.value = d;
            },
          ),
          const SizedBox(height: 15),
          DateTimeSelector(
            regStart.value,
            'Registration Start',
            onUpdate: (d) {
              regStart.value = d;
              if (d.isAfter(regEnd.value)) {
                regEnd.value = d;
              }
            },
          ),
          const SizedBox(height: 5),
          DateTimeSelector(
            regEnd.value,
            'Registration End',
            onUpdate: (d) {
              regEnd.value = d;
            },
          ),
          const SizedBox(height: 10),
          ElevatedButton(
            onPressed: isValid.value ? () async {
              evp.whenData((e)  async {
                var id = await _submitCreateEvent(e);
                var s = id == null ? 'Event create failed' : 'Event created';
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(s),));
                formKey.currentState!.reset();
                context.go('/events');
              });
            } : null,
            child: const Text('Submit'),
          )
        ]),
      ),
    );


  }

}

class DateTimeSelector extends HookWidget {
  DateTimeSelector(this._dateTime, this.label, {this.onUpdate, Key? key}):super(key: key);

  DateTime _dateTime;
  final String label;
  final Function(DateTime)? onUpdate;

  // DateTime get dateTime => _dateTime;
  // void set dateTime(DateTime t) {
  //   _dateTime = t;
  // }

  @override
  Widget build(BuildContext context) {
    print('build $label dateTime with $_dateTime');
    final date = useState(_dateTime);
    final time = useState(const TimeOfDay(hour: 7, minute: 0));

    return Row(children: [
      SizedBox(
        width: 120,
        child: Text(
          label,
          textAlign: TextAlign.right,
        ),
      ),
      const SizedBox(width: 10),
      ElevatedButton(
          onPressed: () async {
            var later = _dateTime.add(const Duration(days: 365));
            var sdate = await showDatePicker(
                context: context,
                initialDate: _dateTime,
                firstDate: _dateTime,
                lastDate: later);
            if (sdate != null) {
              date.value = sdate;

              _dateTime = DateTime(sdate.year, sdate.month, sdate.day,
                  time.value.hour, time.value.minute);

              if (onUpdate != null) {
                onUpdate!(_dateTime);
              }
            }
          },
          // child: Text(_value2Date(date))),
          child: SizedBox(
              width: 100,
              child: Text(DateFormat.yMEd().format(_dateTime)))),
      const SizedBox(width: 5),
      ElevatedButton(
          onPressed: () async {
            var stime =
                await showTimePicker(context: context, initialTime: time.value);
            if (stime != null) {
              time.value = stime;

              var d = date.value;
              _dateTime =
                  DateTime(d.year, d.month, d.day, stime.hour, stime.minute);

              if (onUpdate != null) {
                onUpdate!(_dateTime);
              }
            }
          },
          child: Row(
            children: [
              const Icon(Icons.access_time),
              const SizedBox(width: 5),
              Text(time.value.format(context)),
            ],
          )),
      const SizedBox(width: 10),
    ]);
  }
}
