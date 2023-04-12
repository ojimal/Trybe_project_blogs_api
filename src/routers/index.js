const { Router } = require('express');
const LoginRouter = require('./login.router');
const UserRouter = require('./user.router');
const CategoryRouter = require('./category.router');
const BlogPostRouter = require('./blogPost.router');

const router = Router();

router.use('/login', LoginRouter);
router.use('/user', UserRouter);
router.use('/categories', CategoryRouter);
router.use('/post', BlogPostRouter);

module.exports = router;