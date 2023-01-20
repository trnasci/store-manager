const salesService = require('../services/salesService');

const listAllSales = async (req, res) => {
  const { type, message, data } = await salesService.listAllSales();

  if (type) return res.status(type).json(message);

  return res.status(200).json(data);
};

const listSalesById = async (req, res) => {
  const { id } = req.params;

  const { type, message, data } = await salesService.listSalesById(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(data);
};

module.exports = {
  listAllSales,
  listSalesById,
};