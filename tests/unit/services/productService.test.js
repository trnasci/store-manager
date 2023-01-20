const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../../src/app');
const productModel = require('../../../src/models/productModel');

const { expect, use } = chai;

use(chaiHttp);

const { products } = require('../mock/product.mock');

describe('Testes na rota /products camada Service', function () {

  it('Retorna lista de todos os produtos', async function () {
    sinon.stub(productModel, 'listAllProducts').resolves(products);

    const response = await chai.request(app).get('/products');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(products);
  });

  afterEach(sinon.restore);
});