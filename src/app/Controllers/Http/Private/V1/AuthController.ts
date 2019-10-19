import { Http } from '../../../../../../typings/@adonisjs';

import { AuthenticationService } from '../../../../Services';

class AuthController {
  public async signIn(context: Http.Context) {
    const authenticationService = new AuthenticationService(context);

    const { request } = context;
    const { uid, password } = request.only(['uid', 'password']);

    return authenticationService.login(uid, password);
  }

  public async logout(context: Http.Context) {
    const authenticationService = new AuthenticationService(context);

    return authenticationService.logout();
  }

  public async verify(context: Http.Context) {
    const authenticationService = new AuthenticationService(context);

    return authenticationService.verify();
  }

  public async forgotPassword({ request }: Http.Context) {
    const uid = request.input('uid');

    return AuthenticationService.forgotPassword(uid);
  }

  public async resetPassword({ request }: Http.Context) {
    const { token, password, passwordConfirmation } = request.only(['token', 'password', 'passwordConfirmation']);

    return AuthenticationService.resetPassword(token, password, passwordConfirmation);
  }
}

export = AuthController;
