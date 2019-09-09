import BaseSerializer from './BaseSerializer';
import { IRental } from '../Types/Models';

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

  private getRowJSON(rental: IRental) {
    const relations = this.getRelations(rental.$relations);

    return {
      id: rental.id,
      name: rental.name,
      description: rental.description,
      ...relations,
      updatedAt: rental.updated_at,
    };
  }
}

export = RentalSerializer;
