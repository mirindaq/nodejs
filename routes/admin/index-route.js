const dashboardRoute = require('./dashboard-route');
const productRoute = require('./product-route');

module.exports = ( app ) => {
  const PARTH_ADMIN = '/admin';
  app.use( PARTH_ADMIN + '/dashboard', dashboardRoute);

  app.use( PARTH_ADMIN + '/products', productRoute);
}