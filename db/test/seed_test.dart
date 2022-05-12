import 'package:test/test.dart';
import 'package:db/db.dart';

void main() {
  late Database db;

  setUp( () async {

    nukeDB();
    db = Database();
    await SeedData(db).seedAll();
  });

  tearDown( () async {
    db.close();
  });

  test('create db', () async {

  });

}
