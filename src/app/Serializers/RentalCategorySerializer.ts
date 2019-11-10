import { RentalCategory as JsonRentalCategory } from '@vulpee/js-api';

import { IRentalCategory } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class RentalCategorySerializer extends BaseSerializer<IRentalCategory> {
  constructor(rows: IRentalCategory | IRentalCategory[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(rental => this.getRowJSON(rental));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(category: IRentalCategory): JsonRentalCategory {
    const relations = this.getRelations(category.$relations);

    return {
      id: category.id,
      name: category.name,
      description: category.description,
      ...relations,
    };
  }
}

export = RentalCategorySerializer;
