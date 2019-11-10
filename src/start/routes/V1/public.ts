const Route = use('Route');
const Env = use('Env');

/*
|--------------------------------------------------------------------------
| PUBLIC API [1.0]
|
| Routes for the publicly available APIs for an establishment.
| The slug of the establishment comes from the subdomain.
| The request must be authenticated with a token generated in the admin panel.
|--------------------------------------------------------------------------
*/

Route.group(() => {
  /**
   * Entrypoint for the Public API of an establishment
   */
  Route.get('/', ({ subdomains }) => `Welcome to the Vulpee API of: ${subdomains.establishment}`);
})
  .domain(`:establishment.${Env.get('APP_HOST')}`)
  .middleware('publicApi');
