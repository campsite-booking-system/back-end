import { BaseModel } from '.';

export default interface IRentalsCharacteristics extends BaseModel {
  id: number;
  rental_id: number;
  characteristic_id: number;
  value: string;
}
