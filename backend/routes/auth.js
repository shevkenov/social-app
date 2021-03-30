const authRouter = require('express').Router();
const authController = require('../controllers/auth');

authRouter.post('/signup', authController.postAuthSignup);
authRouter.post('/login', authController.postAuthLogin);

module.exports = authRouter;
