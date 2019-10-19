import { PermissionType } from '@vulpee/js-api';

import { BaseModel } from '.';

export default interface IPermission extends BaseModel {
  id: number;
  type: PermissionType;
  name: string;
  description: string;
}
