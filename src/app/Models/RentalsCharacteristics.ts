const Model = use('Model');

const Rental = use('App/Models/Rental');
const RentalCharacteristic = use('App/Models/RentalCharacteristic');

class RentalsCharacteristics extends Model {
  public rental() {
    return this.belongsTo(Rental);
  }

  public characteristic() {
    return this.belongsTo(RentalCharacteristic);
  }
}

export = RentalsCharacteristics;
