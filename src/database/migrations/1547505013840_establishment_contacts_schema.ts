const Schema = use('Schema');

class EstablishmentContactsSchema extends Schema {
  public up() {
    this.create('establishment_contacts', table => {
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

      table.string('name');

      table.string('email');

      table.string('phone_number');

      table.string('mobile_number');

      table.timestamps();
    });
  }

  public down() {
    this.drop('establishment_contacts');
  }
}

export = EstablishmentContactsSchema;
