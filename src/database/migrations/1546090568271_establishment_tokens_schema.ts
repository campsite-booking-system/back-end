const Schema = use('Schema');

class EstablishmentTokensSchema extends Schema {
  public up() {
    this.create('establishment_tokens', table => {
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

      table.string('name', 255).notNullable();

      table
        .string('token', 255)
        .notNullable()
        .unique()
        .index();

      table.timestamps();
    });
  }

  public down() {
    this.drop('establishment_tokens');
  }
}

export = EstablishmentTokensSchema;
