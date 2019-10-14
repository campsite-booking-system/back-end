import opencage from 'opencage-api-client';

const Model = use('Model');
const Logger = use('Logger');

class Establishment extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeSave', async establishmentInstance => {
      const fullAddress = `${establishmentInstance.address} ${establishmentInstance.complementary_address}, ${establishmentInstance.zip_code} ${establishmentInstance.city}, ${establishmentInstance.country}`;

      try {
        const data = await opencage.geocode({
          q: fullAddress,
        });

        if (data.status.code === 200 && data.results.length > 0) {
          const coordinates = data.results[0];

          establishmentInstance.latitude = coordinates.geometry.lat;
          establishmentInstance.longitude = coordinates.geometry.lng;
        }
      } catch (exception) {
        Logger.info('The following address could not be geocoded: %s', fullAddress);
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
    return this.belongsToMany('App/Models/User').pivotTable('roles_establishments_users');
  }

  public tokens() {
    return this.hasMany('App/Models/EstablishmentToken');
  }

  public rentals() {
    return this.hasMany('App/Models/Rental');
  }
}

export = Establishment;
