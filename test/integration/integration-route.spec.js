const supertest = require('supertest');
const app = require('../../app');
const assert = require('assert');

describe('Route:', () => {

    it('should be accept number', (done) => {
        supertest(app)
        .get('/add?a=1&b=2')
        .expect(200)
        .end(done);
    });

    it('should be reject string', (done) => {
        supertest(app)
        .get('/add?string&b=1')
        .expect(422)
        .end(done);
    });

    it('should be reject if miss param', (done) => {
        supertest(app)
        .get('/add?a=1')
        .expect(422)
        .end(done);
    });

});