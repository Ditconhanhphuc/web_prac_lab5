const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  street: {
    type: DataTypes.STRING,
  },
  suite: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  zipcode: {
    type: DataTypes.STRING,
  },
  geo_lat: {
    type: DataTypes.FLOAT,
  },
  geo_lng: {
    type: DataTypes.FLOAT,
  },
  company_name: {
    type: DataTypes.STRING,
  },
  company_catchPhrase: {
    type: DataTypes.STRING,
  },
  company_bs: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
