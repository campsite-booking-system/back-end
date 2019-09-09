import { BaseModel } from '.';

export default interface IRental extends BaseModel {
  id: number;
  establishment_id: number;
  name: string;
  description: string;
}
