import { Http } from '../../../../../../typings/@adonisjs';

import { Exception } from '../../../../Exceptions';

class UserController {
  public async me({ auth }: Http.Context) {
    try {
      return auth.getUser();
    } catch (error) {
      throw new Exception(error);
    }
  }
}

export = UserController;
