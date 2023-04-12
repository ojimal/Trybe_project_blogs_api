const { Router } = require('express');
const { userAuth, checkUserExists, tokenAuth } = require('../middlewares');
const { UserController } = require('../controllers');

const router = Router();

router.post('/', userAuth, checkUserExists, UserController.createUser);
router.get('/', tokenAuth, UserController.findAll);
router.get('/:id', tokenAuth, UserController.findUserById);

module.exports = router;
