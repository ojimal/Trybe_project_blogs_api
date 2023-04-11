const { User } = require('../models');

const createNewUser = async ({ displayName, email, password, image }) => {
  try {
    return await User.create({ displayName, email, password, image });
  } catch (err) {
    throw new Error('Failed to create new user');
  }
};

const findAll = async () => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

module.exports = {
  createNewUser,
  findAll,
};
