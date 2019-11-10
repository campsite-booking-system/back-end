import { Roles } from '@vulpee/js-api';

import { Lucid } from '../../../../typings/@adonisjs';

export default interface IRole extends Lucid.BaseModel {
  type: Roles;
  description: string;
}
