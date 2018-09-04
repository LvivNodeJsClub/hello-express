process.env.NODE_ENV = 'test'

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../app');
const request = require('supertest');

const knex = require('../knex');

describe('POST /pizza', function() {
    beforeEach(async function () {
        await knex.migrate.rollback()
        return knex.migrate.latest()
        //return knex.seed.run()
    });

    afterEach(async function () {
        return knex.migrate.rollback()
    });

    after(function() {
        knex.destroy();
    });

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
