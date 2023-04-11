const { User } = require('../models');

const createNewUser = async ({ displayName, email, password, image }) => {
  try {
    return await User.create({ displayName, email, password, image });
  } catch (err) {
    throw new Error('Failed to create new user');
  }
};

module.exports = {
  createNewUser,
};
