import { EstablishmentToken as JsonEstablishmentToken } from '@vulpee/js-api';

import { IEstablishmentToken } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class EstablishmentTokenSerializer extends BaseSerializer<IEstablishmentToken> {
  constructor(rows: IEstablishmentToken | IEstablishmentToken[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(establishment => this.getRowJSON(establishment));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(establishmentToken: IEstablishmentToken): JsonEstablishmentToken {
    return {
      id: establishmentToken.id,
      name: establishmentToken.name,
      token: establishmentToken.token,
      updatedAt: establishmentToken.updated_at,
    };
  }
}

export = EstablishmentTokenSerializer;
