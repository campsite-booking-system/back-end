import { AccommodationCharacteristics } from '@vulpee/js-api';

import { Lucid } from '../../../../typings/@adonisjs';

export default interface IAccommodationCharacteristic extends Lucid.BaseModel {
  type: AccommodationCharacteristics;
  description: string;
}
