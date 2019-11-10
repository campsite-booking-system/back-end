import { Booking as JsonBooking } from '@vulpee/js-api';

import { IBooking } from '../Types/Models';
import BaseSerializer from './BaseSerializer';

class BookingSerializer extends BaseSerializer<IBooking> {
  constructor(rows: IBooking | IBooking[], pages = null, isOne = false) {
    super(rows, pages, isOne);
  }

  public toJSON() {
    if (Array.isArray(this.rows)) {
      return this.rows.map(establishment => this.getRowJSON(establishment));
    }

    return this.getRowJSON(this.rows);
  }

  private getRowJSON(booking: IBooking): JsonBooking {
    const relations = this.getRelations(booking.$relations);

    return {
      id: booking.id,
      startDate: booking.start_date,
      endDate: booking.end_date,
      ...relations,
      updatedAt: booking.updated_at,
    };
  }
}

export = BookingSerializer;
