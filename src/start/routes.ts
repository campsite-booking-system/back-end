const Route = use('Route');
const Env = use('Env');

/*
|--------------------------------------------------------------------------
| PUBLIC API [1.0]
|--------------------------------------------------------------------------
*/

/**
 * Routes for the publicly available APIs for an establishment.
 * The slug of the establishment comes from the subdomain.
 * The request must be authenticated with a token generated in the admin panel.
 */
Route.group(() => {
  // Entrypoint for the Public API of an establishment
  Route.get(
    '/',
    ({ subdomains }) => `Welcome to the Camping Booking System API of: ${subdomains.establishment}`,
  );

  // Gets the information of the establishment
  Route.get('1.0/establishment', 'Public/V1/EstablishmentController.index');
})
  .domain(`:establishment.${Env.get('APP_HOST')}`)
  .middleware('publicApi');

/*
|--------------------------------------------------------------------------
| PRIVATE API [1.0]
|--------------------------------------------------------------------------
*/

/**
 * Routes for the privately available APIs for the front-end applications
 */
Route.group(() => {
  Route.post('/sign-in', 'Api/Private/1.0/AuthController.signIn');

  Route.post('/register', 'Api/Private/1.0/AuthController.register');
}).prefix('1.0/auth');
