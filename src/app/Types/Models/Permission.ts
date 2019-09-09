import { BaseModel } from '.';
import { PermissionType } from '../';

export default interface IPermission extends BaseModel {
  id: number;
  type: PermissionType;
  name: string;
  description: string;
}
