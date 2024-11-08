const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    stock: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], required: true },
    position: { type: Number, required: true },
    deleted: { type: Boolean, default: false }
  }
);

const Products = mongoose.model('products', productSchema, 'products');
module.exports = Products;