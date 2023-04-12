const { Router } = require('express');
const LoginRouter = require('./login.router');
const UserRouter = require('./user.router');
const CategoryRouter = require('./category.router');

const router = Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);
router.use('/categories', CategoryRouter);

module.exports = router;