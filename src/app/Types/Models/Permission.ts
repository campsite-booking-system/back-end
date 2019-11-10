import { Permissions } from '@vulpee/js-api';

import { Lucid } from '../../../../typings/@adonisjs';

export default interface IPermission extends Lucid.BaseModel {
  type: Permissions;
  description: string;
}
