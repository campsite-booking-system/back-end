import BaseSerializer from './BaseSerializer';
import { IRentalCharacteristic, IRentalsCharacteristics } from '../Types/Models';

class RentalCharacteristicSerializer extends BaseSerializer<IRentalCharacteristic> {
  constructor(rows: IRentalCharacteristic | IRentalCharacteristic[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(characteristic => this.getRowJSON(characteristic));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(characteristic: IRentalCharacteristic) {
    if (characteristic.$relations) {
      const relations = characteristic.$relations as { pivot: IRentalsCharacteristics };

      return {
        id: characteristic.id,
        label: characteristic.label,
        value: relations.pivot.value,
      };
    }

    return null;
  }
}

export = RentalCharacteristicSerializer;
