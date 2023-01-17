const productModel = require('../models/productModel');

const listAllProducts = async () => {
  const products = await productModel.listAllProducts();

  if (!products) return { type: 500, message: 'Not found' };

  return { type: null, data: products };
};

const getProductsById = async (id) => {
  const product = await productModel.getProductsById(id);

  if (!product) return { type: 404, message: 'Product not found' };

  return { type: null, data: product };
};

module.exports = {
  listAllProducts,
  getProductsById,
};