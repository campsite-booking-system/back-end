const Model = use('Model');

const Rental = use('App/Models/Rental');

class RentalService extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalServiceSerializer');
  }

  public rentals() {
    return this.belongsToMany(Rental, 'service_id', 'rental_id')
      .withTimestamps()
      .pivotTable('rentals_services');
  }
}

export = RentalService;
