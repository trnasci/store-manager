const productModel = require('../models/productModel');

const listAllProducts = async () => {
  const products = await productModel.listAllProducts();

  if (!products) return { type: 500, message: products };

  return { type: null, data: products };
};

const getProductsById = async (id) => {
  const product = await productModel.getProductsById(id);

  if (!product) return { type: 404, message: 'Product not found' };

  return { type: null, data: product };
};

const createProduct = async (name) => {
  const id = await productModel.createProduct({ name });
  
  const newProduct = await productModel.getProductsById(id);
  
  return newProduct;
};

module.exports = {
  listAllProducts,
  getProductsById,
  createProduct,
};