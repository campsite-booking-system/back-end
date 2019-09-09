const Schema = use('Schema');

class EstablishmentsUsersSchema extends Schema {
  public up() {
    this.create('establishments_users', table => {
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

      table
        .integer('user_id')
        .unsigned()
        .index();

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');

      table.timestamps();
    });
  }

  public down() {
    this.drop('establishments_users');
  }
}

export = EstablishmentsUsersSchema;
