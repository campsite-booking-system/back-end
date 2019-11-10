const Schema = use('Schema');

class AccommodationsServicesSchema extends Schema {
  public up() {
    this.create('accommodations_services', table => {
      table
        .integer('accommodation_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .string('service_type')
        .notNullable()
        .index();

      table
        .foreign('accommodation_id')
        .references('id')
        .inTable('accommodations')
        .onDelete('cascade');

      table
        .foreign('service_type')
        .references('type')
        .inTable('accommodation_services')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('accommodations_services');
  }
}

export = AccommodationsServicesSchema;
