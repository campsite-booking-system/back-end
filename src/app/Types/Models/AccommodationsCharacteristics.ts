import { AccommodationCharacteristics } from '@vulpee/js-api';

import { Lucid } from '../../../../typings/@adonisjs';

export default interface IAccommodationsCharacteristics extends Lucid.BaseModel {
  accommodation_id: number;
  characteristic_type: AccommodationCharacteristics;
  value: string;
}
