const Schema = use('Schema');

class AccommodationCategoriesSchema extends Schema {
  public up() {
    this.create('accommodation_categories', table => {
      table.increments();

      table
        .integer('establishment_id')
        .unsigned()
        .notNullable()
        .index();

      table.string('name').notNullable();

      table.text('description');

      table.timestamps();

      table
        .foreign('establishment_id')
        .references('id')
        .inTable('establishments')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('accommodation_categories');
  }
}

export = AccommodationCategoriesSchema;
