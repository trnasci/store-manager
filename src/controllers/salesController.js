const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  try {
    const sales = req.body;
    const newSales = await salesService.createProduct(sales);
    return res.status(201).json(newSales);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  createSales,
};