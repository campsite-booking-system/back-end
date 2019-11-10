import { BaseModel } from '.';

export default interface IBookingsRentals extends BaseModel {
  booking_id: number;
  rental_id: number;
  start_date: string;
  end_date: string;
}
