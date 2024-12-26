const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Lab5_Ex1', 'lab5_user', 'admin@1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
