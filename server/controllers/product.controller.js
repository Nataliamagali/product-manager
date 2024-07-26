const Product = require('../models/Product');

module.exports.createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({ title, price, description })
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
};
