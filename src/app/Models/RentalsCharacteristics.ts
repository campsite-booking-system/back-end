const Model = use('Model');

class RentalsCharacteristics extends Model {
  public rental() {
    return this.belongsTo('App/Models/Rental');
  }

  public characteristic() {
    return this.belongsTo('App/Models/RentalCharacteristic');
  }
}

export = RentalsCharacteristics;
