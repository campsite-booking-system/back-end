import { Auth } from '../../../typings/@adonisjs';

import * as authentication from './Authentication';

class AuthenticationService {
  public static forgotPassword = authentication.forgotPassword;
  public static resetPassword = authentication.resetPassword;

  public login = authentication.login;
  public logout = authentication.logout;
  public verify = authentication.verify;

  protected auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }
}

export default AuthenticationService;
