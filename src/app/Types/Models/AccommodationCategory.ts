import { BaseModel } from '.';

export default interface IAccommodationCategory extends BaseModel {
  id: number;
  establishment_id: number;
  name: string;
  description: string;
}
