const subtraction = require('../../lib/subtraction');
const assert      = require('assert');

describe('Subtraction:', () => {
    describe('should subtraction two number', () => {
        it('Subtraction numbers', (done) => {
            const result = subtraction(2, 1);
            assert.equal(1, result);
            return done();
        });

        it('Subtraction negative numbers', (done) => {
            const result = subtraction(-2, -1);
            assert.equal(-1, result);
            return done();
        });
    })
});