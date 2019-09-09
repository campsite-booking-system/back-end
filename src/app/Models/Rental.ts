const Model = use('Model');

const Establishment = use('App/Models/Establishment');
const RentalCharacteristic = use('App/Models/RentalCharacteristic');
const RentalsCharacteristics = use('App/Models/RentalsCharacteristics');
const RentalService = use('App/Models/RentalService');

class Rental extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalSerializer');
  }

  public establishment() {
    return this.belongsTo(Establishment);
  }

  public characteristics() {
    return this.belongsToMany(RentalCharacteristic, 'rental_id', 'characteristic_id')
      .withPivot(['value'])
      .withTimestamps()
      .pivotModel(RentalsCharacteristics);
  }

  public services() {
    return this.belongsToMany(RentalService, 'rental_id', 'service_id')
      .withTimestamps()
      .pivotTable('rentals_services');
  }
}

export = Rental;
