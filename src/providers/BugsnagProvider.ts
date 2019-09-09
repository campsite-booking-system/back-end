const { ServiceProvider } = require('@adonisjs/fold');

import bugsnag from '@bugsnag/js';

class BugsnagProvider extends ServiceProvider {
  public register() {
    const Config = this.app.use('Adonis/Src/Config');

    this.app.singleton('Bugsnag', () => {
      const apiKey = Config.get('bugsnag.apiKey');

      if (apiKey) {
        const bugsnagClient = bugsnag(apiKey);

        return bugsnagClient;
      }

      return null;
    });
  }

  public boot() {}
}

export = BugsnagProvider;
