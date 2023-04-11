const loginAuth = require('./loginAuth');
const { userAuth, checkUserExists } = require('./userAuth');

module.exports = {
    loginAuth,
    userAuth,
    checkUserExists,
};