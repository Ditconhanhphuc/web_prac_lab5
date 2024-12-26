const { ShoppingCart, User, Product } = require('../models');

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await ShoppingCart.findAll({
      include: [User, Product], // Include associated User and Product data
    });
    res.json(carts);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createCart = async (req, res) => {
  try {
    const { UserId, ProductId } = req.body;
    const newCart = await ShoppingCart.create({ UserId, ProductId });
    res.status(201).json(newCart);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { UserId, ProductId } = req.body;
    const cart = await ShoppingCart.findByPk(req.params.id);
    if (cart) {
      cart.UserId = UserId || cart.UserId;
      cart.ProductId = ProductId || cart.ProductId;
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).send('Shopping Cart not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await ShoppingCart.findByPk(req.params.id);
    if (cart) {
      await cart.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Shopping Cart not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
