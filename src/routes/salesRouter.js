const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', salesController.listAllSales);
router.get('/:id', salesController.listSalesById);

module.exports = router;