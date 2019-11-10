const Schema = use('Schema');

class EstablishmentsPaymentMethodsSchema extends Schema {
  public up() {
    this.create('establishments_payment_methods', table => {
      table
        .integer('establishment_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .string('payment_method')
        .notNullable()
        .index();

      table
        .foreign('establishment_id')
        .references('id')
        .inTable('establishments')
        .onDelete('cascade');

      table
        .foreign('payment_method')
        .references('type')
        .inTable('payment_methods')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('establishments_payment_methods');
  }
}

export = EstablishmentsPaymentMethodsSchema;
