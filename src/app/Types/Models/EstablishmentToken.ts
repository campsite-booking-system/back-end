import { BaseModel } from '.';

export default interface IEstablishmentToken extends BaseModel {
  id: number;
  establishment_id: number;
  name: string;
  token: string;
}
