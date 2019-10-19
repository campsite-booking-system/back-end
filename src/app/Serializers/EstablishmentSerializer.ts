import { Establishment as JsonEstablishment } from '@vulpee/js-api';

import BaseSerializer from './BaseSerializer';
import { IEstablishment } from '../Types/Models';

class EstablishmentSerializer extends BaseSerializer<IEstablishment> {
  constructor(rows: IEstablishment | IEstablishment[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(establishment => this.getRowJSON(establishment));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(establishment: IEstablishment): JsonEstablishment {
    const relations = this.getRelations(establishment.$relations);

    return {
      id: establishment.id,
      name: establishment.name,
      slug: establishment.slug,
      address: establishment.address,
      complementaryAddress: establishment.complementary_address,
      zipCode: establishment.zip_code,
      city: establishment.city,
      country: establishment.country,
      ...relations,
      updatedAt: establishment.updated_at,
    };
  }
}

export = EstablishmentSerializer;
