const Schema = use('Schema');

class RentalsSchema extends Schema {
  public up() {
    this.create('rentals', table => {
      table.increments();

      table
        .integer('establishment_id')
        .unsigned()
        .index();

      table
        .foreign('establishment_id')
        .references('id')
        .inTable('establishments')
        .onDelete('cascade');

      table.string('name').notNullable();

      table.text('description');

      table.timestamps();
    });
  }

  public down() {
    this.drop('rentals');
  }
}

export = RentalsSchema;
