class Acl {
  public async handle({ auth, view }, next) {
    if (auth && auth.user && view && typeof view.share === 'function') {
      const { user } = auth;
      let roles = [];

      if (typeof user.getRoles === 'function') {
        roles = await user.getRoles();
      }

      view.share({
        acl: {
          roles,
        },
      });
    }

    await next();
  }
}

export = Acl;
