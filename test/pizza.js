const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../app');
const request = require('supertest');

const knex = require('../knex');

describe('pizza', function() {
    beforeEach(async function () {
        await knex.migrate.rollback()
        await knex.migrate.latest()
        return knex.seed.run();
    });

    afterEach(async function () {
        return knex.migrate.rollback()
    });

    after(function() {
        knex.destroy();
    });

    describe('POST /pizza', function() {
        it('should create DB entry', async function() {
            const res = await request(app)
            .post('/pizza')
            .send({name: 'P1', price: 42.0})
            .expect(200);

            const id = res.body[0].id;
            const [pizza] = await knex('pizza').where({id});
            expect(pizza.name).equals('P1');
        });
    });

    describe('GET /pizza', function() {
        it('should return list of pizzas', async function() {
            const res = await request(app)
            .get('/pizza')
            .expect(200);

            expect(res.body.length).equals(2);
        });

        it('should return special pizza', async function() {
            // custom seed
            await knex.seed.run({
                directory: 'config/seeds/custom'
            });

            const res = await request(app)
            .get('/pizza')
            .expect(200);

            expect(res.body.length).equals(1);
        });
    });
});


