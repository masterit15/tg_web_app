const Router = require('express').Router;
const menuController = require('../controllers/menu.controller');
const router = new Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', menuController.getMenu);
router.post('/add', authMiddleware, menuController.addMenu);
router.put('/:id', authMiddleware, menuController.changeMenu);
router.delete('/:id', authMiddleware, menuController.deleteMenu);

module.exports = router