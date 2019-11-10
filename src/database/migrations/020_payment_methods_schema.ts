import { PaymentMethods } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class PaymentMethodsSchema extends Schema {
  public up() {
    this.create('payment_methods', table => {
      table.string('type', 60).primary();

      table.text('description').nullable();
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: PaymentMethods.Cash,
          },
          {
            type: PaymentMethods.Check,
          },
          {
            type: PaymentMethods.BankTransfer,
          },
        ])
        .into('payment_methods');
    });
  }

  public down() {
    this.drop('payment_methods');
  }
}

export = PaymentMethodsSchema;
