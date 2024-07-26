const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.post('/', ProductController.createProduct);

module.exports = router;
