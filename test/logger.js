const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const factory = require('../middleware/logger');

describe('Middleware Logger', function () {
    describe('Factory', function() {
        it('should return logger function', function() {
            const loggerFn = factory({});
            expect(typeof loggerFn).to.equal('function');
        });
    });

    describe('loggerFn', function () {
        it('should log msg to console', function() {
            const fake = sinon.fake();
            sinon.replace(console, 'log', fake);

            const loggerFn = factory({});
            const req = {};
            const res = {};
            const next = sinon.fake();
            loggerFn(req, res, next);

            sinon.restore();

            expect(fake.calledOnce).to.equal(true);
            //expect(fake.calledWith('Logged Default')).to.equal(true);
            expect(fake).calledWith('Logged Default');
        });

        it('should call next middleware', function() {
            const loggerFn = factory({});
            const req = {};
            const res = {};
            const next = sinon.fake();
            loggerFn(req, res, next);

            expect(next.calledOnce).to.equal(true)
        })
    })
});