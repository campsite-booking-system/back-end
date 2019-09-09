import { BaseModel } from '.';

export default interface IUserToken extends BaseModel {
  id: number;
  user_id: number;
  token: string;
  type: string;
  is_revoked: boolean;
}
