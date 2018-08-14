const express = require('express');
const router = express.Router();
const PizzaService = require('../service/pizzaService');
const pizzaService = new PizzaService();

router.post('/', async (req, res) => {
    console.log('Request body', req.body);
    const pizza = await pizzaService.save(req.body);
    res.json(pizza);
});

module.exports = router;