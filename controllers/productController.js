const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { ProductName, Price, ManufacturingDate } = req.body;
    const newProduct = await Product.create({ ProductName, Price, ManufacturingDate });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { ProductName, Price, ManufacturingDate } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (product) {
      product.ProductName = ProductName || product.ProductName;
      product.Price = Price || product.Price;
      product.ManufacturingDate = ManufacturingDate || product.ManufacturingDate;
      await product.save();
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Product not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
