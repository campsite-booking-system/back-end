import { Http } from '../../../../../../typings/@adonisjs';

import { Exception } from '../../../../Exceptions';

const Establishment = use('App/Models/Establishment');

class EstablishmentController {
  /**
   * Fetch all the establishments.
   *
   * If the user is admin, show all the establishments.
   * If the user is not admin, show only the permitted ones
   */
  public async index({ response, auth }: Http.Context) {
    try {
      const user = await auth.getUser();
      const userIsAdministrator = await user.is('administrator');

      let establishments;

      if (userIsAdministrator) {
        establishments = await Establishment.query()
          .select('id', 'name')
          .fetch();
      } else {
        establishments = await user.getViewableEstablishments();
      }

      return response.status(200).send(establishments);
    } catch (error) {
      throw new Exception(error);
    }
  }

  /**
   * Get a single establishment
   */
  public async get({ request, response, auth }: Http.Context) {
    try {
      const user = await auth.getUser();
      const establishment = await Establishment.find(request.params.establishment);

      const permissions = await user.getPermissions(establishment.id);

      return response.send({ ...establishment.toJSON(), permissions });
    } catch (error) {
      throw new Exception(error);
    }
  }
}

export = EstablishmentController;
