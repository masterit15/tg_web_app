const Router = require('express').Router;
const foodController = require('../controllers/food.controller');
const router = new Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', foodController.getFood);
router.post('/add', authMiddleware, foodController.addFood);
router.put('/:id', authMiddleware, foodController.changeFood);
router.delete('/:id', authMiddleware, foodController.deleteFood);

module.exports = router