const salesModel = require('../models/salesModel');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();

  if (!sales) return { type: 500, message: sales };

  return { type: null, data: sales };
};

const listSalesById = async (id) => {
  const sales = await salesModel.listSalesById(id);

  if (sales.length === 0) return { type: 400, message: 'Sale not found' };

  return { type: null, data: sales };
};

module.exports = {
  listAllSales,
  listSalesById,
};