
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTable('toppings', (table) => {
        table.increments().primary();
        table.string('name').notNull();
    }),
        knex.schema.createTable('pizzaToToppings', (table) => {
            table.increments().primary();
            table.integer('pizza_id').notNull();
            table.integer('topping_id').notNull();
    })]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('toppings'),
        knex.schema.dropTable('pizzaToToppings')
    ]);
};
