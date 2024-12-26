const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    const { FullName, Address } = req.body;
    const newUser = await User.create({ FullName, Address });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { FullName, Address } = req.body;
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.FullName = FullName || user.FullName;
      user.Address = Address || user.Address;
      await user.save();
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
