import { PaymentMethods } from '@vulpee/js-api';

import { BaseModel } from '.';

export default interface IPayment extends BaseModel {
  id: number;
  booking_id: number;
  payment_method: PaymentMethods;
  amount: number;
}
