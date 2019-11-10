const Schema = use('Schema');

class AccommodationsCharacteristicsSchema extends Schema {
  public up() {
    this.create('accommodations_characteristics', table => {
      table
        .integer('accommodation_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .string('characteristic_type')
        .notNullable()
        .index();

      table.string('value', 60).notNullable();

      table
        .foreign('accommodation_id')
        .references('id')
        .inTable('accommodations')
        .onDelete('cascade');

      table
        .foreign('characteristic_type')
        .references('type')
        .inTable('accommodation_characteristics')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('accommodations_characteristics');
  }
}

export = AccommodationsCharacteristicsSchema;
