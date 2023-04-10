const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, jwtConfig);
};

const decodeToken = (token) => {
  return jwt.decode(token, process.env.JWT_SECRET);
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createToken, decodeToken, verifyToken };