const sequelize = require('../config/database.js');
const User = require('./userModel.js');
const Product = require('./productModel.js');
const ShoppingCart = require('./shoppingCartModel.js');

// Establish relationships
User.hasMany(ShoppingCart, { foreignKey: 'UserId' });
Product.hasMany(ShoppingCart, { foreignKey: 'ProductId' });

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = { User, Product, ShoppingCart };
