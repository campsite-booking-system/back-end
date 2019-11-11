import { Auth } from '../../../typings/@adonisjs';

import * as service from './Authentication';

class AuthenticationService {
  public static forgotPassword = service.forgotPassword;
  public static resetPassword = service.resetPassword;

  public login = service.login;
  public logout = service.logout;
  public verify = service.verify;

  protected auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }
}

export default AuthenticationService;
