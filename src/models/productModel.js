const { connection } = require('./connection');

const listAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [result] = await connection.execute(query);
  return result;
};

const getProductsById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id =?';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

const createProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  return result.insertId;
};

module.exports = {
  listAllProducts,
  getProductsById,
  createProduct,
};