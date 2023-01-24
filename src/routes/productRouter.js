const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.listAllProducts);
router.get('/:id', productController.getProductsById);
router.post('/', productController.createProduct);
router.put('/:id', productController.changeProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;