import {Router} from 'express';
import botController from '../controllers/bot.controller.js'
const router = new Router();

router.post('/login', botController.login);
router.post('/logout', botController.logout);
router.post('/sendinvoice', botController.sendInvoice);

export default router