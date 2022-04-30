import {Router} from 'express'
const router = new Router();
import otpController from '../controllers/otp.controller.js'
import authMiddleware from'../middlewares/auth.middleware.js'

router.post('/add', otpController.send);

export default router