const express = require('express');
const route = express.Router();

const controller = require('../../controllers/admin/product-controller');

//[GET] /admin/products
route.get('/', controller.index);

//[PATCH] /admin/products
route.patch('/change-status/:status/:id', controller.changeStatus);

//[DELETE] /admin/products
route.delete('/delete/:id', controller.deleteItem);

module.exports = route;