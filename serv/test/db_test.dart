import 'dart:ffi';

import 'package:postgres/postgres.dart';
import 'package:test/test.dart';
import 'package:protos/protos.dart';
import 'package:serv/serv.dart';
import 'package:fixnum/fixnum.dart';

main() {

  test('DB connect test', () async {
    var connection = PostgreSQLConnection("localhost", 5432, "alpine",
        username: "alpine", password: "password");
    await connection.open();
    expect(connection.isClosed, isFalse);

    var emgr = EventManager(connection);

    var t = Int64(DateTime.now().millisecondsSinceEpoch);

    // Insert
    var event = Event(
        description: 'Fun Event',
        title: 'test title',
        eventStartTs: t,
        eventEndTs: t,
        createdByUid: 'admin');

    var r = await emgr.createEvent(event);
    expect(r,isTrue);

    var results = await connection.query('SELECT * FROM events');
    print('Results $results');

    for (final row in results) {
      print('row = $row');
    }

    var e = await emgr.getEvent(0);
    expect(e, isNull);

    e = await emgr.getEvent(1);
    expect( e?.eventId, equals(1));

  });

}
