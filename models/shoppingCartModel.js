const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const Product = require('./productModel');

const ShoppingCart = sequelize.define('ShoppingCart', {
  CartId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

ShoppingCart.belongsTo(User, { foreignKey: 'UserId' });
ShoppingCart.belongsTo(Product, { foreignKey: 'ProductId' });

module.exports = ShoppingCart;
