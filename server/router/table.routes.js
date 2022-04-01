const Router = require('express').Router;
const tableController = require('../controllers/table.controller');
const router = new Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', tableController.getTable);
router.post('/add', tableController.addTable);
router.put('/:id', authMiddleware, tableController.changeTable);
router.delete('/:id', authMiddleware, tableController.deleteTable);

module.exports = router