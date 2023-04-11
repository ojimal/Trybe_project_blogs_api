const { Router } = require('express');
const LoginRouter = require('./login.router');
const UserRouter = require('./user.router');

const router = Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);

module.exports = router;