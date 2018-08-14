const config = require('../knexfile');
const knex   = require('knex')(config);

class PizzaService {
    save(pizza) {
        return knex('pizza').insert(pizza);
    }
}

module.exports = PizzaService;