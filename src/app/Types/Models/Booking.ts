import { BaseModel } from '.';

export default interface IBooking extends BaseModel {
  id: number;
  client_id: number;
  accommodation_id?: number;
  start_date: string;
  end_date: string;
}
