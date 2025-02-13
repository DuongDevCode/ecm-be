const express = require('express')
const router = express.Router()

const useProductsController = require('../../../controllers/v1/productsController');

// Định nghĩa các route
router.post('/products', useProductsController.createProduct);
router.get('/products', useProductsController.getAllProducts);
router.get('/products/:id', useProductsController.getDetail);

module.exports = router;