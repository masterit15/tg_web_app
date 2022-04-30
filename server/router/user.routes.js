import {Router} from 'express'
const router = new Router();
import userController from '../controllers/user.controller.js'
import {body} from 'express-validator'
import authMiddleware from '../middlewares/auth.middleware.js'
import uploader from '../components/multer/index.js'

router.post('/registration',
    uploader.single('avatar'),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

export default router