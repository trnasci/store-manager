const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');
require("dotenv").config();
chai.use(sinonChai);


const productController = require('../../../src/controllers/productController');
const productService = require('../../../src/services/productService');
const { products } = require('./mocks/productControler.mock')

describe('Testes na rota /products', function () {

  it('Retorna lista de todos os produtos', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(products);
    sinon.stub(productService, 'listAllProducts').resolves(products);

    await productController.listAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith(products);
  })

  it('Retorna produto por id', async function () {
    const req = { params: { id: 2 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(products);
    sinon.stub(productService, 'getProductsById')
      .resolves( products[1]);

    await productController.getProductsById(req, res);

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith(products[1]);
  })

  afterEach(function () {
    sinon.restore();
  })
});