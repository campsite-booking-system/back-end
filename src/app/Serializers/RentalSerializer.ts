import { Rental as JsonRental } from '@vulpee/js-api';

import { IRental } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class RentalSerializer extends BaseSerializer<IRental> {
  constructor(rows: IRental | IRental[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(rental => this.getRowJSON(rental));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(rental: IRental): JsonRental {
    return {
      id: rental.id,
      name: rental.name,
      description: rental.description,
      updatedAt: rental.updated_at,
    };
  }
}

export = RentalSerializer;
