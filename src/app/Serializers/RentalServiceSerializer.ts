import BaseSerializer from './BaseSerializer';
import { IRentalService } from '../Types/Models';

class RentalServiceSerializer extends BaseSerializer<IRentalService> {
  constructor(rows: IRentalService | IRentalService[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(service => this.getRowJSON(service));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(service: IRentalService) {
    return {
      id: service.id,
      label: service.label,
    };
  }
}

export = RentalServiceSerializer;
