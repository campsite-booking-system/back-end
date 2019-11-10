import { AccommodationServices } from '@vulpee/js-api';

import { IAccommodationService } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class AccommodationServiceSerializer extends BaseSerializer<IAccommodationService> {
  constructor(rows: IAccommodationService | IAccommodationService[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(service => this.getRowJSON(service));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(service: IAccommodationService): AccommodationServices {
    return service.type;
  }
}

export = AccommodationServiceSerializer;
