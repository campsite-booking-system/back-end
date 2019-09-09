import { Lucid } from '../../../../typings/@adonisjs';

export default interface BaseModel extends Lucid.BaseModel {
  created_at: string;
  updated_at: string;
}
