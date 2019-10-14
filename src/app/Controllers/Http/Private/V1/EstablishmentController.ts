import { Http } from '../../../../../../typings/@adonisjs';

import { Exception } from '../../../../Exceptions';

const Establishment = use('App/Models/Establishment');

class EstablishmentController {
  public async index({ response, auth }: Http.Context) {
    try {
      const user = await auth.getUser();

      const establishments = await user.establishments().fetch();

      return response.status(200).send(establishments);
    } catch (error) {
      throw new Exception(error);
    }
  }

  public async get({ request, response }: Http.Context) {
    try {
      const establishment = await Establishment.find(request.params.establishment);

      return response.send(establishment);
    } catch (error) {
      throw new Exception(error);
    }
  }
}

export = EstablishmentController;
