const Schema = use('Schema');

class RentalsCharacteristicsSchema extends Schema {
  public up() {
    this.create('rentals_characteristics', table => {
      table.increments();

      table
        .integer('rental_id')
        .unsigned()
        .index();

      table
        .foreign('rental_id')
        .references('id')
        .inTable('rentals')
        .onDelete('cascade');

      table
        .integer('characteristic_id')
        .unsigned()
        .index();

      table
        .foreign('characteristic_id')
        .references('id')
        .inTable('rental_characteristics')
        .onDelete('cascade');

      table.string('value').notNullable();

      table.timestamps();
    });
  }

  public down() {
    this.drop('rentals_characteristics');
  }
}

export = RentalsCharacteristicsSchema;
