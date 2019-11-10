import { AccommodationServices } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class AccommodationServicesSchema extends Schema {
  public up() {
    this.create('accommodation_services', table => {
      table.string('type', 60).primary();

      table.text('description').nullable();
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: AccommodationServices.WiFi,
          },
          {
            type: AccommodationServices.WashingMachine,
          },
          {
            type: AccommodationServices.Dryer,
          },
          {
            type: AccommodationServices.CoffeeMachine,
          },
          {
            type: AccommodationServices.SwimmingPool,
          },
          {
            type: AccommodationServices.Elevator,
          },
          {
            type: AccommodationServices.Television,
          },
          {
            type: AccommodationServices.Bath,
          },
          {
            type: AccommodationServices.Parking,
          },
          {
            type: AccommodationServices.Microwave,
          },
        ])
        .into('accommodation_services');
    });
  }

  public down() {
    this.drop('accommodation_services');
  }
}

export = AccommodationServicesSchema;
