import { PermissionType } from '@vulpee/js-api';

import BaseSerializer from './BaseSerializer';
import { IPermission } from '../Types/Models';

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

  private getRowJSON(permission: IPermission): PermissionType {
    return permission.type;
  }
}

export = PermissionSerializer;
