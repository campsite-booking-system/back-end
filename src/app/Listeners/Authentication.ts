import { Mail as MailInterface } from '../../../typings/@adonisjs';

import User from '../Models/User';

const Mail: MailInterface = use('Mail');

class Authentication {
  public static async forgotPassword(user: User, token: string) {
    await Mail.send('emails.forgotPassword', { user: user.toJSON(), token }, message => {
      message
        .to(user.email)
        .from('no-reply@vulpee.com')
        .subject('Recover your Vulpee password');
    });
  }
}

export = Authentication;
