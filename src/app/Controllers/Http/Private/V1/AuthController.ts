import { AuthenticationService } from '../../../../Services';

class AuthController {
  public async signIn(context) {
    const authenticationService = new AuthenticationService(context);

    const { request } = context;
    const { uid, password } = request.only(['uid', 'password']);

    return authenticationService.login(uid, password);
  }

  public async forgotPassword({ request }) {
    const uid = request.input('uid');

    return AuthenticationService.forgotPassword(uid);
  }

  public async resetPassword({ request }) {
    const { token, password, passwordConfirmation } = request.only(['token', 'password', 'passwordConfirmation']);

    return AuthenticationService.resetPassword(token, password, passwordConfirmation);
  }
}

export = AuthController;
