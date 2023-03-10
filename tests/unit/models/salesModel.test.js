const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../../src/app');
const connection = require('../../../src/models/connection');

const { expect, use } = chai;

use(chaiHttp);

const { sales } = require('../mock/sales.mock');

describe('Testes na rota /sales camada model', function () {

  it('Retorna lista de todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);

    const response = await chai.request(app).get('/sales');
      
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(sales);
  });

  it('Retorna a venda com o id da requisição ', async function () {
    sinon.stub(connection, 'execute').resolves([[sales[2]]]);

    const response = await chai.request(app).get('/sales/2');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal([sales[2]]);
  });

  afterEach(sinon.restore);
});