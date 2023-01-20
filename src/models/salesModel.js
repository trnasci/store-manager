const connection = require('./connection');

const listAllSales = async () => {
  const query = 'SELECT sale_id as saleId, date, product_id as productId, quantity'
    + ' FROM StoreManager.sales_products AS products'
    + ' INNER JOIN StoreManager.sales AS sales ON products.sale_id = sales.id';
  const [sales] = await connection.execute(query);
  return sales;
};

const listSalesById = async (id) => {
  const query = 'SELECT date, product_id as productId, quantity'
    + ' FROM StoreManager.sales_products AS products'
    + ' INNER JOIN StoreManager.sales AS sales ON products.sale_id = sales.id'
    + ' WHERE products.sale_id = ? ';
  const [sales] = await connection.execute(query, [id]);
  return sales;
};

module.exports = {
  listAllSales,
  listSalesById,
};