const Schema = use('Schema');

class RentalServicesSchema extends Schema {
  public up() {
    this.create('rental_services', table => {
      table.increments();

      table.string('label', 80).notNullable();

      table.timestamps();
    });
  }

  public down() {
    this.drop('rental_services');
  }
}

export = RentalServicesSchema;
