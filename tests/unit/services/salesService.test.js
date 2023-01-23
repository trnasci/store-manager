const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../../src/app');

const salesModel = require('../../../src/models/salesModel');

const { expect, use } = chai;

use(chaiHttp);

const { sales } = require('../mock/sales.mock');

describe('Testes na rota /sales camada Service', function () {

  it('Retorna lista de todas as vendas', async function () {
    sinon.stub(salesModel, 'listAllSales').resolves(sales);

    const response = await chai.request(app).get('/sales');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(sales);
  });

  it('Retorna a venda com o id da requisição', async function () {
    const res = [{
      "date": "2023-01-23T16:54:38.000Z",
      "productId": 3,
      "quantity": 15
    }]
    sinon.stub(salesModel, 'listSalesById').resolves(res);

    const response = await chai.request(app).get('/sales/2');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(res);
  });

  afterEach(sinon.restore);
});