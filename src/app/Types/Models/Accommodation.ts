import { BaseModel } from '.';

export default interface IAccommodation extends BaseModel {
  id: number;
  category_id?: number;
  name: string;
  description: string;
}
