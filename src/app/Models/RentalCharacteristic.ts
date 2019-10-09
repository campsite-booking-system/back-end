const Model = use('Model');

const RentalsCharacteristics = use('App/Models/RentalsCharacteristics');

class RentalCharacteristic extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalCharacteristicSerializer');
  }

  public rentals() {
    return this.belongsToMany('App/Models/Rental', 'characteristic_id', 'rental_id')
      .withTimestamps()
      .pivotModel(RentalsCharacteristics);
  }
}

export = RentalCharacteristic;
