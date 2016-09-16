const add = require('../../lib/addition');
const assert = require('assert');

describe('Addition:', () => {
    describe('Should add two number', () => {
        it('Sum two number', (done) => {
            const result = add(1, 1);
            assert.equal(2, result);
            return done();
        });

        it('Sum two negative number', (done) => {
            const result = add(-1, -4);
            assert.equal(-5, result);
            return done();
        });
    })
});