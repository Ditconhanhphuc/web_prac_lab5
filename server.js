const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const sendEmailRoutes = require('./routes/emailRoutes');  // Import routes
const { Email } = require('./models');
const sequelize = require('./config/database');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');
const fetchUserRoutes = require('./routes/fetchUserRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/shopping-carts', shoppingCartRoutes);
app.use('/emails', sendEmailRoutes); // Use email routes
app.use('/store', imageRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/fetch-users', fetchUserRoutes);


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const nodemailer = require('nodemailer');

// Database connection and server start
sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch(err => console.error('Unable to connect to the database:', err));
