const Router = require('express').Router;
const botController = require('../controllers/bot.controller');
const router = new Router();

router.post('/login', botController.login);
router.post('/logout', botController.logout);

module.exports = router