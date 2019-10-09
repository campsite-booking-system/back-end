const Model = use('Model');

class RentalService extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalServiceSerializer');
  }

  public rentals() {
    return this.belongsToMany('App/Models/Rental', 'service_id', 'rental_id')
      .withTimestamps()
      .pivotTable('rentals_services');
  }
}

export = RentalService;
