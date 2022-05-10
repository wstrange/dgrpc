import 'package:test/test.dart';
import 'package:db/db.dart';

void main() {
  test('seed', () async {
    var db = Database();
    await SeedData(db).seedAll();
  });
}
