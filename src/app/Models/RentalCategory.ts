const Model = use('Model');

class RentalCategory extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalCategorySerializer');
  }

  public establishment() {
    return this.belongsTo('App/Models/Establishment');
  }

  public rentals() {
    return this.hasMany('App/Models/Rental', 'id', 'category_id');
  }
}

export = RentalCategory;
