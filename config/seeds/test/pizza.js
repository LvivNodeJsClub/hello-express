exports.seed = async function(knex, Promise) {
    // Deletes ALL existing entries
    await knex('pizza').del()
    // Inserts seed entries
    return knex('pizza').insert([
        {name: 'P1', price: 10.1},
        {name: 'P2', price: 30.3}
    ]);
};
