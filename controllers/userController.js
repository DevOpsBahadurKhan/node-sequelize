const User = require('../models/user');


// methods for  listing all users
const listUsers = async (req, res, next) => {
  try {
    const users = await User.findAll(); // Use Sequelize's findAll method to get all users
    res.send(users);
  } catch (error) {
    next(error)
  }
};

// methods for createUser
const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    next(error)
  }
};


module.exports = {
  createUser,
  listUsers,
};
