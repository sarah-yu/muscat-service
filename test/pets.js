const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')

// const service = supertest('http://muscat-service.herokuapp.com')
const service = supertest('http://localhost:3000')

describe('GET /api/pets', () => {
	it('should return a 200 response', done => {
		service
			.get('/api/pets')
			.set('Accept', 'application/json')
			.expect(200, done)
	})
})
