const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const recipes = require('../recipes.json');
const should = chai.should();

chai.use(chaiHttp);

describe('express_recipes_pagination', () => {

    it('Should return 200 for /recipes with default pagination', (done) => {
        chai.request(server)
            .get('/recipes')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(recipes.slice(0, 3));
                done()
            })
    });

    it('Should respond with correct data when only page is set in query', (done) => {
        chai.request(server)
            .get('/recipes?page=3')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(recipes.slice(6, 9));
                done()
            })
    });

    it('Should respond with correct data when only limit is set in query', (done) => {
        chai.request(server)
            .get('/recipes?limit=2')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(recipes.slice(0, 2));
                done()
            })
    });


    it('Should respond with correct data when both limit and page are set in query - 1', (done) => {
        chai.request(server)
            .get('/recipes?limit=2&page=3')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(recipes.slice(4, 6));
                done()
            })
    })

    it('Should respond with correct data when both limit and page are set in query - 2', (done) => {
        chai.request(server)
            .get('/recipes?limit=4&page=3')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql(recipes.slice(8));
                done()
            })
    })

    it('Should respond with correct data when both limit and page are out of bounds', (done) => {
        chai.request(server)
            .get('/recipes?limit=3&page=4')
            .then(response => {
                response.status.should.eql(200);
                response.body.should.eql([]);
                done()
            })
    })
});
