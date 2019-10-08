import * as AuthenticationService from '../../../../Services/Authentication';

class AuthController {
  public async signIn({ request, auth }) {
    const { uid, password } = request.only(['uid', 'password']);

    return AuthenticationService.login(auth, uid, password);
  }
}

export = AuthController;
