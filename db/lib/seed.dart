import 'event.dart';

// Create some sample data...
class SeedData {
  Database db;

  SeedData(this.db);

  Future<void> createSections() async {
    for (int i = 0; i < 5; ++i) {
      await db.into(db.sections).insert(SectionsCompanion.insert(
          name: "Section $i",
          description: "This is the description for section $i"));
    }
  }

  createUsers() {}

  Future<void> seedAll() async {
    await createSections();

  }
}
