const productRoute = require('./product-route');
const homeRote = require('./home-route')

module.exports = ( app ) => {
  app.use('/', homeRote)

  app.use('/products', productRoute);
}