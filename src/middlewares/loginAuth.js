const loginAuth = (req, res, next) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be valid' });
  }
  if (password.lenght < 6) {
    return res
      .status(400)
      .json({ message: '"password" must be at least 6 chareacters long' });
  }
  next();
};

module.exports = loginAuth;
