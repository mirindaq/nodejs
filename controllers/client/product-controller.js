const Products = require('../../models/prouduct-model');

module.exports.index = async (req, res) => {
  let listProduct = await Products.find({
    status: "active",
    deleted: false
  });
  res.render('client/pages/products/index', { products: listProduct })
}