const Model = use('Model');

class AccommodationCategory extends Model {
  static get Serializer() {
    return use('App/Serializers/AccommodationCategorySerializer');
  }

  public establishment() {
    return this.belongsTo('App/Models/Establishment');
  }

  public accommodations() {
    return this.hasMany('App/Models/Accommodation', 'id', 'category_id');
  }
}

export = AccommodationCategory;
