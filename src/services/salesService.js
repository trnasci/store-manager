const salesModel = require('../models/salesModel');

const createSales = async (sales) => {
  const sale = await salesModel.createSales(sales);
  return sale;
};

module.exports = {
  createSales,
};