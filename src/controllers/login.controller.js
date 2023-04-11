const { LoginService } = require('../services');
const { createToken } = require('../utils/jwt.utils');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await LoginService.login(email, password);

    if (user === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = createToken(user.dataValues);

    return res.status(200).json({ token });
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  login,
};
