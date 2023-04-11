const { User } = require('../models');

const login = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) return null;

    return user;
  } catch (err) {
    throw new Error('Error occurred while logging in');
  }
};

module.exports = {
  login,
};