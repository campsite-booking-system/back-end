import { BaseModel } from '.';
import { AccountStatus } from '../AccountStatus';

export default interface IUser extends BaseModel {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  account_status: AccountStatus;
}
