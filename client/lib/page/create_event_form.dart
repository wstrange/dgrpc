import 'package:client/main.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:intl/intl.dart';

// Form to create an event..
//
class CreateEventForm extends HookConsumerWidget {
  CreateEventForm({Key? key}) : super(key: key);
  final _now = DateTime.now();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _formKey = useMemoized(GlobalKey<FormState>.new, const []);
    final title = useTextEditingController(text: '');
    final description = useTextEditingController(text: '');
    final eventStart = useState(DateTime.now());
    final eventEnd = useState(DateTime.now());
    final regStart = useState(DateTime.now());
    final regEnd = useState(DateTime.now().add(Duration(days: 1)));
    final isValid = useState(false);

    validate() {
      if( _formKey.currentState != null ) {
        isValid.value = _formKey.currentState!.validate() ? true : false;
      }
    }

    return Scaffold(
      appBar: AppBar(title: const Text('Create Event')),
      body: Form(
        key: _formKey,
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
          SizedBox(height: 10),
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
          SizedBox(height: 10),
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
          SizedBox(height: 5),
          DateTimeSelector(
            eventEnd.value,
            'Event End',
            onUpdate: (d) {
              eventEnd.value = d;
            },
          ),
          SizedBox(height: 15),
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
          SizedBox(height: 5),
          DateTimeSelector(
            regEnd.value,
            'Registration End',
            onUpdate: (d) {
              regEnd.value = d;
            },
          ),
          SizedBox(height: 10),
          ElevatedButton(
            onPressed: isValid.value ? () => print('submit') : null,
            child: const Text('Submit'),
          )
        ]),
      ),
    );
  }
}

class DateTimeSelector extends HookWidget {
  DateTimeSelector(this._dateTime, this.label, {this.onUpdate});

  DateTime _dateTime;
  String label;
  Function(DateTime)? onUpdate;

  DateTime get dateTime => _dateTime;
  void set dateTime(DateTime t) {
    _dateTime = t;
  }

  @override
  Widget build(BuildContext context) {
    print('build $label dateTime with $_dateTime');
    final date = useState(_dateTime);
    final time = useState(TimeOfDay(hour: 7, minute: 0));

    return Row(children: [
      SizedBox(
        child: Text(
          label,
          textAlign: TextAlign.right,
        ),
        width: 120,
      ),
      SizedBox(width: 10),
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
              child: Text(DateFormat.yMEd().format(_dateTime)), width: 100)),
      SizedBox(width: 5),
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
              Icon(Icons.access_time),
              SizedBox(width: 5),
              Text(time.value.format(context)),
            ],
          )),
      SizedBox(width: 10),
    ]);
  }
}
