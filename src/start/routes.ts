const Route = use('Route');

Route.get('/', () => 'Welcome to the Vulpee API');

import './routes/V1/public';
import './routes/V1/private';
