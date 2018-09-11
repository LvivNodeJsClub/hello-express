exports.seed = async function(knex, Promise) {
    // Deletes ALL existing entries
    await knex('pizza').del()
    // Inserts seed entries
    return knex('pizza').insert([
        {name: 'Ihor', price: 42}
    ]);
};
