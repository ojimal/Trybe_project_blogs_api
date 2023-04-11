const { Router } = require('express')
const { userAuth } = require('../middlewares');
const userController = require('../controllers/user.controller');

const router = Router();

router.post('/', userAuth, userController.createUser);

module.exports = router;
