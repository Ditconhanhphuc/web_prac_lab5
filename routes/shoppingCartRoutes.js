const express = require('express');
const shoppingCartController = require('../controllers/shoppingCartController');
const router = express.Router();

router.get('/', shoppingCartController.getAllCarts);
router.post('/', shoppingCartController.createCart);
router.put('/:id', shoppingCartController.updateCart);
router.delete('/:id', shoppingCartController.deleteCart);

module.exports = router;
