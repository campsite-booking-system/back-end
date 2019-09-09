import { Exception, NotFoundException } from '../../../../Exceptions';

const Establishment = use('App/Models/Establishment');

class EstablishmentController {
  /**
   * Fetch the current establishment.
   */
  public async index({ subdomains }) {
    try {
      const establishment = await Establishment.query()
        .where('slug', subdomains.establishment)
        .with('rentals')
        .with('rentals.characteristics')
        .with('rentals.services')
        .with('contacts')
        .first();

      if (establishment) {
        return establishment;
      }

      throw new NotFoundException('The requested establishment could not be found');
    } catch (error) {
      throw error;
    }
  }
}

export = EstablishmentController;
