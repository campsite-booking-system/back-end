import { Http } from '../../../../../../typings/@adonisjs';

import { Exception } from '../../../../Exceptions';

class UserController {
  public async get({ response, auth }: Http.Context) {
    try {
      const user = await auth.getUser();

      const { email, firstName, lastName } = user;
      const roles = await user.getRoles();

      return response.send({ email, firstName, lastName, roles });
    } catch (error) {
      throw new Exception(error);
    }
  }
}

export = UserController;
