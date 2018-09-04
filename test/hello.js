const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const app = require('../app');
const request = require('supertest');

describe('GET /hello', function() {
    beforeEach(function() {
        this.clock = sinon.useFakeTimers()
    });
    afterEach(function() {
        this.clock.restore();
    });

    it('should respond with text "Hello World!" with Time', async function() {
        const res = await request(app)
        .get('/hello')
        .expect(200);

        expect(res.text).contains('Hello World!');
        const time = Date.now();
        expect(res.text).contains(`<small>Requested at: ${time}</small>`);
    });
});

describe('GET /hello/err', function() {
    it('should respond with error', async function() {
        const res = await request(app)
        .get('/hello/err')
        .expect(500);

        expect(res.text).contains('Rejected');
    });
});

describe('POST /hello', function() {
    it('should respond with error', async function() {
        const res = await request(app)
        .post('/hello')
        .expect(200);

        expect(res.text).contains('Got a POST request');
    });
});
