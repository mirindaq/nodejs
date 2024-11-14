const Products = require('../../models/prouduct-model');
const filterStatusHelper = require('../../helpers/filterStatus');
const searchHelper = require('../../helpers/search');
const paginationHelper = require('../../helpers/pagination');

// [GET] /admin/products
module.exports.index = async (req, res) => {
  let find = {
    deleted: false
  };

  const listStatus = filterStatusHelper(req.query);

  if (req.query.status) {
    find.status = req.query.status;
  }

  let objectSearch = searchHelper(req.query);
  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  //Pagination
  const countProducts = await Products.countDocuments(find);
  let objectPagination = paginationHelper({
    currentPage : 1,
    limitItems : 4
  }, req.query, countProducts);


  const listProducts = await Products.find(find).limit(objectPagination.limitItems).skip(objectPagination.skipItems);

  res.render('admin/pages/products/index', {
    products: listProducts,
    pageTitle: "Danh sách sản phẩm",
    keyword: objectSearch.keyword,
    listStatus: listStatus,
    pagination : objectPagination
  });
}

// [PATCH] /admin/products/:status/:id
module.exports.changeStatus = async( req, res ) => {
  const params = req.params;
  await Products.updateOne( {_id : params.id}, { status : params.status});
  res.redirect('back');
}

// [DELETE] /admin/products/:id
module.exports.deleteItem = async(req, res) =>{
  const id = req.params.id;
  await Products.updateOne({_id: id}, {deleted : true, deletedAt : new Date()});
  res.redirect('back');
}

