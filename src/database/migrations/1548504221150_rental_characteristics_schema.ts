const Schema = use('Schema');

class RentalCharacteristicsSchema extends Schema {
  public up() {
    this.create('rental_characteristics', table => {
      table.increments();

      table.string('label', 80).notNullable();

      table.timestamps();
    });
  }

  public down() {
    this.drop('rental_characteristics');
  }
}

export = RentalCharacteristicsSchema;
