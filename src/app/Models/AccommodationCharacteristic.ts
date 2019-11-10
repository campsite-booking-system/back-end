const Model = use('Model');

class AccommodationCharacteristic extends Model {
  static get Serializer() {
    return use('App/Serializers/AccommodationCharacteristicSerializer');
  }

  public accommodations() {
    return this.belongsToMany('App/Models/Accommodation', 'characteristic_type', 'accommodation_id', 'type', 'id')
      .pivotTable('accommodations_characteristics')
      .withPivot(['value'])
      .pivotPrimaryKey(null);
  }
}

export = AccommodationCharacteristic;
