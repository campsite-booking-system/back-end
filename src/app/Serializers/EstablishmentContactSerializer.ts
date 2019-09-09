import BaseSerializer from './BaseSerializer';
import { IEstablishmentContact } from '../Types/Models';

class RentalSerializer extends BaseSerializer<IEstablishmentContact> {
  constructor(rows: IEstablishmentContact | IEstablishmentContact[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(rental => this.getRowJSON(rental));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(contact: IEstablishmentContact) {
    const relations = this.getRelations(contact.$relations);

    return {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phone_number,
      mobileNumber: contact.mobile_number,
      ...relations,
    };
  }
}

export = RentalSerializer;
