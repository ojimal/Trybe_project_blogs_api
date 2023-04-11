const { Router } = require('express');
const { userAuth, checkUserExists } = require('../middlewares');
const userController = require('../controllers/user.controller');

const router = Router();

router.post('/', userAuth, checkUserExists, userController.createUser);

module.exports = router;
