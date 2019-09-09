import { BaseModel } from '.';
import { RoleType } from '../';

export default interface IRole extends BaseModel {
  id: number;
  type: RoleType;
  name: string;
  description: string;
}
