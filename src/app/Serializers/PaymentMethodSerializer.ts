import { PaymentMethods } from '@vulpee/js-api';

import { IPaymentMethod } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class PaymentMethodSerializer extends BaseSerializer<IPaymentMethod> {
  constructor(rows: IPaymentMethod | IPaymentMethod[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(establishment => this.getRowJSON(establishment));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(paymentMethod: IPaymentMethod): PaymentMethods {
    return paymentMethod.type;
  }
}

export = PaymentMethodSerializer;
