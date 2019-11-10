import { AccommodationCharacteristics } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class AccommodationCharacteristicsSchema extends Schema {
  public up() {
    this.create('accommodation_characteristics', table => {
      table.string('type', 60).primary();

      table.text('description').nullable();
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: AccommodationCharacteristics.People,
          },
          {
            type: AccommodationCharacteristics.Chambers,
          },
          {
            type: AccommodationCharacteristics.SingleBeds,
          },
          {
            type: AccommodationCharacteristics.DoubleBeds,
          },
          {
            type: AccommodationCharacteristics.Bathrooms,
          },
          {
            type: AccommodationCharacteristics.SquareMeters,
          },
        ])
        .into('accommodation_characteristics');
    });
  }

  public down() {
    this.drop('accommodation_characteristics');
  }
}

export = AccommodationCharacteristicsSchema;
