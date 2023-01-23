const connection = require('./connection');

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
  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
};

const changeProduct = async (id, name) => {
  const query = `UPDATE StoreManager.products SET name = '${name}' WHERE id = ${id}`;
  const newProduct = await connection.execute(query);

  return newProduct;
};

module.exports = {
  listAllProducts,
  getProductsById,
  createProduct,
  changeProduct,
};