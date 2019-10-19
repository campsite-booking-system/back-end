import { User as JsonUser } from '@vulpee/js-api';

import BaseSerializer from './BaseSerializer';
import { IUser } from '../Types/Models';

class UserSerializer extends BaseSerializer<IUser> {
  constructor(rows: IUser | IUser[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(user => this.getRowJSON(user));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(user: IUser): JsonUser {
    const relations = this.getRelations(user.$relations);

    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      ...relations,
    };
  }
}

export = UserSerializer;
