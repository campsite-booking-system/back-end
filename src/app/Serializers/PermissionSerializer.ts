import { Permissions } from '@vulpee/js-api';

import { IPermission } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class PermissionSerializer extends BaseSerializer<IPermission> {
  constructor(rows: IPermission | IPermission[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(permission => this.getRowJSON(permission));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(permission: IPermission): Permissions {
    return permission.type;
  }
}

export = PermissionSerializer;
