import { GeocodeService } from '../Services';

const Model = use('Model');
const Logger = use('Logger');

class Establishment extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeSave', async establishment => {
      const fullAddress = `${establishment.address} ${establishment.complementary_address}, ${establishment.zip_code} ${establishment.city}, ${establishment.country}`;

      const response = await GeocodeService.getAddressCoordinates(fullAddress);

      if (response) {
        establishment.latitude = response.latitude;
        establishment.longitude = response.longitude;
      } else {
        Logger.info('The establishment address could not be geocoded: %s', fullAddress);
      }
    });

    this.addTrait('@provider:Lucid/Slugify', {
      fields: { slug: 'name' },
      strategy: 'dbIncrement',
      disableUpdates: true,
    });
  }

  static get rules() {
    return {
      name: 'required|min:1|max:255|unique:establishments,name',
    };
  }

  static get Serializer() {
    return use('App/Serializers/EstablishmentSerializer');
  }

  public users() {
    return this.belongsToMany('App/Models/User')
      .pivotTable('roles_establishments_users')
      .pivotPrimaryKey(null);
  }

  public accommodationCategories() {
    return this.hasMany('App/Models/AccommodationCategory');
  }

  public accommodations() {
    return this.manyThrough('App/Models/AccommodationCategory', 'accommodations');
  }

  public rentalCategories() {
    return this.hasMany('App/Models/RentalCategory');
  }

  public rentals() {
    return this.manyThrough('App/Models/RentalCategory', 'rentals');
  }

  public clients() {
    return this.hasMany('App/Models/Client');
  }

  public bookings() {
    return this.manyThrough('App/Models/Client', 'bookings');
  }

  public tokens() {
    return this.hasMany('App/Models/EstablishmentToken');
  }

  public paymentMethods() {
    return this.belongsToMany('App/Models/PaymentMethod').pivotTable('establishments_payment_methods');
  }
}

export = Establishment;
