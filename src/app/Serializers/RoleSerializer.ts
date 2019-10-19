import { Role as JsonRole } from '@vulpee/js-api';

import BaseSerializer from './BaseSerializer';
import { IRole } from '../Types/Models';

class RoleSerializer extends BaseSerializer<IRole> {
  constructor(rows: IRole | IRole[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(role => this.getRowJSON(role));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(role: IRole): JsonRole {
    const relations = this.getRelations(role.$relations);

    return {
      type: role.type,
      ...relations,
    };
  }
}

export = RoleSerializer;
