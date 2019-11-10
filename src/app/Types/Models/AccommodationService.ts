import { AccommodationServices } from '@vulpee/js-api';

import { Lucid } from '../../../../typings/@adonisjs';

export default interface IAccommodationService extends Lucid.BaseModel {
  type: AccommodationServices;
  description: string;
}
