const Mail = use('Mail');

class Authentication {
  public static async forgotPassword(user, token) {
    await Mail.send('emails.forgotPassword', { user: user.toJSON(), token }, message => {
      message
        .to(user.email)
        .from('no-reply@vulpee.com')
        .subject('Recover your Vulpee password');
    });
  }
}

export = Authentication;
