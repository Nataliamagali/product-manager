const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/productadmin')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
