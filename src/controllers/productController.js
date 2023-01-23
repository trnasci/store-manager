const productService = require('../services/productService');

const listAllProducts = async (_req, res) => {
  const { type, message, data } = await productService.listAllProducts();

  if (type) return res.status(type).json(message);

  return res.status(200).json(data);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;

  const { type, message, data } = await productService.getProductsById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(data);
};

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productService.createProduct(name);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const changeProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const newProduct = await productService.changeProduct(id, name);
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  listAllProducts,
  getProductsById,
  createProduct,
  changeProduct,
};