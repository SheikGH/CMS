const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.get('/',customerController.getAll);
router.get('/:id',customerController.getById);
router.post('/',customerController.create);
router.put('/:id',customerController.update);
router.delete('/:id',customerController.delete);

module.exports = router;