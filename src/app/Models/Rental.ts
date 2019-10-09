const Model = use('Model');

const RentalsCharacteristics = use('App/Models/RentalsCharacteristics');

class Rental extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalSerializer');
  }

  public establishment() {
    return this.belongsTo('App/Models/Establishment');
  }

  public characteristics() {
    return this.belongsToMany('App/Models/RentalCharacteristic', 'rental_id', 'characteristic_id')
      .withPivot(['value'])
      .withTimestamps()
      .pivotModel(RentalsCharacteristics);
  }

  public services() {
    return this.belongsToMany('App/Models/RentalService', 'rental_id', 'service_id')
      .withTimestamps()
      .pivotTable('rentals_services');
  }
}

export = Rental;
