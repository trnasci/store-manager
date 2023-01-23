const Joi = require('joi');
const productModel = require('../models/productModel');

const createValidation = Joi.object({
  name: Joi.string().min(5).max(45).required(),
});

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
  const { error } = createValidation.validate({ name });
  if (error) {
    if (!name) {
      const err = { status: 400, message: error.message };
      throw err; 
    }
    const err = { status: 422, message: error.message };
    throw err;    
  }     
  const id = await productModel.createProduct({ name });
  
  const newProduct = await productModel.getProductsById(id);

  return newProduct;
};

const changeProduct = async (id, name) => {  
  const { error } = createValidation.validate({ name });
  const product = await productModel.getProductsById(id);
  if (error) {
    if (!name) {
      const err = { status: 400, message: error.message };
      throw err;
    }
    const err = { status: 422, message: error.message };
    throw err;
  }
  if (!product) {
    const err = { status: 404, message: 'Product not found' };
    throw err;
  } 

  await productModel.changeProduct(id, name);

  const newProduct = await productModel.getProductsById(id);

  return newProduct;
};

module.exports = {
  listAllProducts,
  getProductsById,
  createProduct,
  changeProduct,
};