const sales = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: '2023-01-23T12:24:16.000Z',
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: '2023-01-23T12:24:16.000Z',
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: '2023-01-23T12:24:16.000Z',
  }
];

const newSales = { id: 1, ...sales };

module.exports = {
  sales,
  newSales
};