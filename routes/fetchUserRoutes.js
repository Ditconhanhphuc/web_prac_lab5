const express = require('express');
const axios = require('axios');
const User = require('../models/userModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    // Loop through each user data from the response
    for (const userData of users) {
      // Extract address and company data
      const { address, company } = userData;

      // Save each user data to the database
      await User.upsert({
        id: userData.id,
        name: userData.name,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        website: userData.website,
        street: address.street,
        suite: address.suite,
        city: address.city,
        zipcode: address.zipcode,
        geo_lat: parseFloat(address.geo.lat), // Store as float for lat
        geo_lng: parseFloat(address.geo.lng), // Store as float for lng
        company_name: company.name,
        company_catchPhrase: company.catchPhrase,
        company_bs: company.bs,
      });
    }

    res.status(200).send({ message: 'Users fetched and saved successfully.' });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send({ message: 'Failed to fetch users.', error: error.message });
  }
});

module.exports = router;
