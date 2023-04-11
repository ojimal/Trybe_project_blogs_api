const { verifyToken } = require('../utils/jwt.utils');

const tokenAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const verify = verifyToken(token);
    req.user = verify.data;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenAuth;