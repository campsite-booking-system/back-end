const Schema = use('Schema');

class RentalsServicesSchema extends Schema {
  public up() {
    this.create('rentals_services', table => {
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
        .integer('service_id')
        .unsigned()
        .index();

      table
        .foreign('service_id')
        .references('id')
        .inTable('rental_services')
        .onDelete('cascade');

      table.timestamps();
    });
  }

  public down() {
    this.drop('rentals_services');
  }
}

export = RentalsServicesSchema;
