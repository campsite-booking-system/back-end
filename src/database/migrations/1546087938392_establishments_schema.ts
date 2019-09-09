const Schema = use('Schema');

class EstablishmentsSchema extends Schema {
  public up() {
    this.create('establishments', table => {
      table.increments();

      table.string('name').notNullable();

      table.string('slug');

      table.string('address');

      table.string('complementary_address');

      table.string('zip_code');

      table.string('city');

      table.string('country');

      table.decimal('longitude', 8, 4);

      table.decimal('latitude', 8, 4);

      table.timestamps();
    });
  }

  public down() {
    this.drop('establishments');
  }
}

export = EstablishmentsSchema;
