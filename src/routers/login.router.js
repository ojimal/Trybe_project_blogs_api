const { Router } = require('express');
const { LoginController } = require('../controllers');
const { loginAuth } = require('../middlewares');

const router = Router();

router.post('/', loginAuth, LoginController.login);

module.exports = router;