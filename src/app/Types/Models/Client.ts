import { BaseModel } from '.';

export default interface IClient extends BaseModel {
  id: number;
  establishment_id: number;
  civility: string;
  name: string;
}
