import {Router} from 'express'
const router = new Router()
import menuController from '../controllers/menu.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

router.get('/', menuController.getMenu)
router.post('/add', authMiddleware, menuController.addMenu)
router.put('/:id', authMiddleware, menuController.changeMenu)
router.delete('/:id', authMiddleware, menuController.deleteMenu)

export default router