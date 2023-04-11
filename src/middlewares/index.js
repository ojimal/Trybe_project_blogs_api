const loginAuth = require('./loginAuth');
const { userAuth, checkUserExists } = require('./userAuth');
const tokenAuth = require('./tokenAuth');

module.exports = {
    loginAuth,
    userAuth,
    checkUserExists,
    tokenAuth,
};