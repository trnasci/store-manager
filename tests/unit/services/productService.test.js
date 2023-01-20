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

  it('Retorna o produto com o id da requisição', async function () {
    sinon.stub(productModel, 'getProductsById').resolves(products[0]);

    const response = await chai.request(app).get('/products/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(products[0]);
  });

  afterEach(sinon.restore);
});