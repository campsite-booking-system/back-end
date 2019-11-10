import { BaseModel } from '.';

export default interface IRentalCategory extends BaseModel {
  id: number;
  establishment_id: number;
  name: string;
  description: string;
}
