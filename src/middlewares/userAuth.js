const { LoginService } = require('../services');

const userAuth = (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
      });
  }

  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (password.length < 6) {
    return res.status(400).json({
        message: '"password" length must be at least 6 characters long',
      });
  }

  next();
};

const checkUserExists = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await LoginService.login(email, password);
  if (user) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = {
  userAuth,
  checkUserExists,
};
