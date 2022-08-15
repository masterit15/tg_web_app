import {Router} from 'express'
const router = new Router();
import orderController from '../controllers/order.controller.js'
import authMiddleware from'../middlewares/auth.middleware.js'

router.get('/', orderController.getOrder);
router.post('/add', orderController.addOrder);
router.put('/:id', authMiddleware, orderController.changeOrder);
router.delete('/:id', authMiddleware, orderController.deleteOrder);

export default router