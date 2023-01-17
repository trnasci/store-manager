const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.listAllProducts);
router.get('/:id', productController.getProductsById);

module.exports = router;