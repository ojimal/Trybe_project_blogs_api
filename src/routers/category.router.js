const express = require('express');
const { CategoryController } = require('../controllers');
const { tokenAuth } = require('../middlewares');

const router = express.Router();

router.post('/', tokenAuth, CategoryController.createCategory);

module.exports = router;