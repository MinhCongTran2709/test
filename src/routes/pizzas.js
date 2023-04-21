const express = require('express');
const router = express.Router();

const pizzaController = require('../app/controllers/PizzaControllers')

// router.get('/create', pizzaController.create)
// router.post('/store', pizzaController.store)
router.get('/:slug', pizzaController.detail)
router.get('/', pizzaController.index)

module.exports = router;