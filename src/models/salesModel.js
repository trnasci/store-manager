const { connection } = require('./connection');

const createSales = async (sales) => {
  const query = 'INSERT INTO StoreManager.sales (date) values (now())';
  const [{ insertId }] = await connection.execute(query);
  
  return insertId;
};

module.exports = {
  createSales,
};