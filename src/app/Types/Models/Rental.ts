import { BaseModel } from '.';

export default interface IRental extends BaseModel {
  id: number;
  category_id?: number;
  name: string;
  description: string;
}
