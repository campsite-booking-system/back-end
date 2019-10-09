const Route = use('Route');
const Env = use('Env');

Route.get('/', () => 'Welcome to the Vulpee API');

/*
|--------------------------------------------------------------------------
| PUBLIC API [1.0]
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

/*
|--------------------------------------------------------------------------
| PRIVATE API [1.0]
| Routes for the privately available APIs for the front-end applications
|--------------------------------------------------------------------------
*/
Route.group(() => {
  Route.post('/sign-in', 'Private/V1/AuthController.signIn').validator('Authentication/Login');
  Route.post('/verify', 'Private/V1/AuthController.verify');
  Route.post('/forgot-password', 'Private/V1/AuthController.forgotPassword').validator('Authentication/ForgotPassword');
  Route.post('/reset-password', 'Private/V1/AuthController.resetPassword').validator('Authentication/ResetPassword');
}).prefix('1.0/auth');
