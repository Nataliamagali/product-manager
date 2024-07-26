const Product = require('../models/Product');

// Crear un nuevo producto
module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({ title, price, description })
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};

// Obtener todos los productos
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ message: err.message }));
};

// Obtener un producto por ID
module.exports.getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) return res.status(404).json({ message: 'Product not found' });
      res.json(product);
    })
    .catch(err => res.status(500).json({ message: err.message }));
};
