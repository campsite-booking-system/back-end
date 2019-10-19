import { RoleType } from '@vulpee/js-api';

import { BaseModel } from '.';

export default interface IRole extends BaseModel {
  id: number;
  type: RoleType;
  name: string;
}
