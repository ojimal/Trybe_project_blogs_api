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

const findUserById = async (id) => {
  try {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
  } catch (error) {
    throw new Error('Failed to fetch user by id');
  }
};

module.exports = {
  createNewUser,
  findAll,
  findUserById,
};
