import {Router} from 'express'
const router = new Router()
import foodController from '../controllers/food.controller.js'

import authMiddleware from '../middlewares/auth.middleware.js'


router.get('/', foodController.getFood)
router.post('/add', authMiddleware, foodController.addFood)
router.put('/:id', authMiddleware, foodController.changeFood)
router.delete('/:id', authMiddleware, foodController.deleteFood)

export default router