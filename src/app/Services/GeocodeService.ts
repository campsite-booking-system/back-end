import opencage from 'opencage-api-client';

const Logger = use('Logger');

class GeocodeService {
  public static async getAddressCoordinates(address: string): Promise<{ latitude: number; longitude: number } | void> {
    try {
      const data = await opencage.geocode({
        q: address,
      });

      if (data.status.code === 200 && data.results.length > 0) {
        const coordinates = data.results[0];

        return {
          latitude: coordinates.geometry.lat,
          longitude: coordinates.geometry.lng,
        };
      }
    } catch (exception) {
      Logger.error(
        'The following address could not be geocoded: %s because of the following error: %s',
        address,
        exception.message,
      );
    }
  }
}

export default GeocodeService;
