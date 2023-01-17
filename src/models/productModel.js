const { connection } = require('./connection');

const listAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getProductsById = async (id) => {
  const [[product]] = await connection
.execute('SELECT * FROM StoreManager.products WHERE id =?', [id]);
  return product;
};

module.exports = {
  listAllProducts,
  getProductsById,
};