import { PaymentMethods } from '@vulpee/js-api';

import { BaseModel } from '.';

export default interface IPaymentMethod extends BaseModel {
  type: PaymentMethods;
  description: string;
}
