import { BaseModel } from '.';

export default interface IEstablishmentContact extends BaseModel {
  id: number;
  establishment_id: number;
  name: string;
  email: string;
  phone_number: string;
  mobile_number: string;
}
