import { AccommodationCharacteristics } from '@vulpee/js-api';

import { IAccommodationCharacteristic, IAccommodationsCharacteristics } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class AccommodationCharacteristicSerializer extends BaseSerializer<IAccommodationCharacteristic> {
  constructor(rows: IAccommodationCharacteristic | IAccommodationCharacteristic[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(characteristic => this.getRowJSON(characteristic));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(
    characteristic: IAccommodationCharacteristic,
  ): { type: AccommodationCharacteristics; value: string } | null {
    if (characteristic.$relations) {
      const relations = characteristic.$relations as { pivot: IAccommodationsCharacteristics };

      return {
        type: characteristic.type,
        value: relations.pivot.value,
      };
    }

    return null;
  }
}

export = AccommodationCharacteristicSerializer;
