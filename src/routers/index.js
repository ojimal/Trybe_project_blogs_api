const { Router } = require('express');
const LoginRouter = require('./login.router');

const router = Router();

router.use('/login', LoginRouter);

module.exports = router;