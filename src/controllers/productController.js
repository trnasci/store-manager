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

module.exports = {
  listAllProducts,
  getProductsById,
};