const Model = use('Model');

class AccommodationService extends Model {
  static get Serializer() {
    return use('App/Serializers/AccommodationServiceSerializer');
  }

  public accommodations() {
    return this.belongsToMany('App/Models/Accommodation', 'service_type', 'accommodation_id', 'type', 'id')
      .pivotTable('accommodations_services')
      .pivotPrimaryKey(null);
  }
}

export = AccommodationService;
