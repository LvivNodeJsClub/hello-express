exports.up = function(knex, Promise) {
    return knex.schema.createTable('pizza', (table) => {
        table.increments().primary();
        table.string('name').notNull();
        table.timestamps();
        table.decimal('price', 8, 2).notNull();
        table.datetime('expiresAt').nullable();
        table.bool('isVegetarian').defaultsTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pizza');
};
