import { AccommodationCategory as JsonAccommodationCategory } from '@vulpee/js-api';

import { IAccommodationCategory } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class AccommodationCategorySerializer extends BaseSerializer<IAccommodationCategory> {
  constructor(rows: IAccommodationCategory | IAccommodationCategory[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(rental => this.getRowJSON(rental));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(category: IAccommodationCategory): JsonAccommodationCategory {
    const relations = this.getRelations(category.$relations);

    return {
      id: category.id,
      name: category.name,
      description: category.description,
      ...relations,
    };
  }
}

export = AccommodationCategorySerializer;
