const express = require('express');
const router = express.Router();
const PizzaService = require('../service/pizzaService');
const pizzaService = new PizzaService();

router.post('/', async (req, res) => {
    console.log('Request body', req.body);
    const pizza = await pizzaService.save(req.body);
    res.json(pizza);
});

router.post('/custom', async (req, res) => {
    console.log('Request body', req.body);
    const pizza = await pizzaService.saveCustom(req.body);
    res.json(pizza);
});

router.get('/', async (req, res) => {
    const pizzas = await pizzaService.findAll();
    res.json(pizzas);
});

router.put('/', async (req, res) => {
    const pizza = await pizzaService.update(req.query.id, req.body);
    res.json(pizza);
});

router.delete('/', async (req, res) => {
    const pizza = await pizzaService.delete(req.query.id);
    res.json(pizza);
});

module.exports = router;