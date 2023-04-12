const express = require('express');
const { CategoryController } = require('../controllers');
const { tokenAuth } = require('../middlewares');

const router = express.Router();

router.post('/', tokenAuth, CategoryController.createCategory);
router.get('/', tokenAuth, CategoryController.findAllCategories);

module.exports = router;