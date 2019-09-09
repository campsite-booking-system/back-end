import { BaseModel } from '.';

export default interface IEstablishmentToken extends BaseModel {
  id: number;
  name: string;
  establishment_id: number;
  token: string;
}
