import { Client as JsonClient } from '@vulpee/js-api';

import { IClient } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class ClientSerializer extends BaseSerializer<IClient> {
  constructor(rows: IClient | IClient[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(establishment => this.getRowJSON(establishment));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(client: IClient): JsonClient {
    const relations = this.getRelations(client.$relations);

    return {
      id: client.id,
      civility: client.civility,
      name: client.name,
      ...relations,
      updatedAt: client.updated_at,
    };
  }
}

export = ClientSerializer;
