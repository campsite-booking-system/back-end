import { Accommodation as JsonAccommodation } from '@vulpee/js-api';

import { IAccommodation } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class AccommodationSerializer extends BaseSerializer<IAccommodation> {
  constructor(rows: IAccommodation | IAccommodation[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(rental => this.getRowJSON(rental));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(accommodation: IAccommodation): JsonAccommodation {
    const relations = this.getRelations(accommodation.$relations);

    return {
      id: accommodation.id,
      name: accommodation.name,
      description: accommodation.description,
      ...relations,
      updatedAt: accommodation.updated_at,
    };
  }
}

export = AccommodationSerializer;
