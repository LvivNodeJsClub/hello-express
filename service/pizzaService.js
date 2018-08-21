const config = require('../knexfile');
const knex   = require('knex')(config);

class PizzaService {

    save(pizza) {
        return knex('pizza').insert(pizza);
    }

    findAll() {
        return knex('pizza').select();
    }

    update(id, pizza) {
        return knex('pizza').where({id}).update(pizza);
    }

    delete(id) {
        return knex('pizza').where({id}).delete();
    }

    saveCustom(customPizza) {
        const toppings = customPizza.toppings.map(name => ({name}));
        const pizza = {...customPizza};
        delete pizza.toppings;

        return knex.transaction(async trx => {
            const toppingIds = await trx('toppings').insert(toppings).returning('id');
            console.log('toppingIds', toppingIds);
            const [pizzaId] = await trx('pizza').insert(pizza).returning('id');
            console.log('pizzaId', pizzaId);
            const toppingToPizza = toppingIds.map(id => ({topping_id: id, pizza_id: pizzaId}));
            return trx('pizzaToToppings').insert(toppingToPizza);
        });

    }
}

module.exports = PizzaService;