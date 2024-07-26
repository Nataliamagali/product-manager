const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Ruta para crear un producto
router.post('/', ProductController.createProduct);

// Ruta para obtener todos los productos
router.get('/', ProductController.getAllProducts);

// Ruta para obtener un producto por ID
router.get('/:id', ProductController.getProductById);

module.exports = router;
