import {Router} from 'express'
const router = new Router();
import tableController from '../controllers/table.controller.js'
import authMiddleware from'../middlewares/auth.middleware.js'

router.get('/', tableController.getTable);
router.post('/add', tableController.addTable);
router.put('/:id', authMiddleware, tableController.changeTable);
router.delete('/:id', authMiddleware, tableController.deleteTable);

export default router