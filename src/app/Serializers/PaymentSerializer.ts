import { Payment as JsonPayment } from '@vulpee/js-api';

import { IPayment } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class PaymentSerializer extends BaseSerializer<IPayment> {
  constructor(rows: IPayment | IPayment[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(establishment => this.getRowJSON(establishment));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(payment: IPayment): JsonPayment {
    return {
      id: payment.id,
      paymentMethod: payment.payment_method,
      amount: payment.amount,
      updatedAt: payment.updated_at,
    };
  }
}

export = PaymentSerializer;
