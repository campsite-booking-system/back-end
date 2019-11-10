const Model = use('Model');

class Accommodation extends Model {
  static get Serializer() {
    return use('App/Serializers/AccommodationSerializer');
  }

  public category() {
    return this.belongsTo('App/Models/AccommodationCategory', 'category_id');
  }

  public bookings() {
    return this.hasMany('App/Models/Booking');
  }

  public characteristics() {
    return this.belongsToMany(
      'App/Models/AccommodationCharacteristic',
      'accommodation_id',
      'characteristic_type',
      'id',
      'type',
    )
      .pivotTable('accommodations_characteristics')
      .withPivot(['value'])
      .pivotPrimaryKey(null);
  }

  public services() {
    return this.belongsToMany('App/Models/AccommodationService', 'accommodation_id', 'service_type', 'id', 'type')
      .pivotTable('accommodations_services')
      .pivotPrimaryKey(null);
  }
}

export = Accommodation;
