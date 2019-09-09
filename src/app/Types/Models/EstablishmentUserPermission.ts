import { BaseModel } from '.';

export default interface IEstablishmentUserPermission extends BaseModel {
  user_id: number;
  establishment_id: number;
  permission_id: number;
}
