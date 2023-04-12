const express = require('express');
const { BlogPostController } = require('../controllers');
const { tokenAuth } = require('../middlewares');

const router = express.Router();

router.get('/', tokenAuth, BlogPostController.findAll);

module.exports = router;
