const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')

// const service = supertest('http://muscat-service.herokuapp.com')
const service = supertest('http://localhost:3001')

describe('GET /api/cats', () => {
	it('should return a 200 response', done => {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.expect(200, done)
	})
	it('should return an array', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body).to.be.an('array')
				done()
			})
	})
	it('should return an array of objects with the field "name"', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('name')
				done()
			})
	})
	it('should return an array of objects with the field "breeds"', function(
		done
	) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('breeds')
				done()
			})
	})
	it('should return an array of objects with the field "mix"', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('mix')
				done()
			})
	})
	it('should return an array of objects with the field "sex"', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('sex')
				done()
			})
	})
	it('should return an array of objects with the field "size"', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('size')
				done()
			})
	})
	it('should return an array of objects with the field "description"', function(
		done
	) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('description')
				done()
			})
	})
	it('should return an array of objects with the field "options" containing the array "option"', function(
		done
	) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0])
					.to.have.property('options')
					.to.have.property('option')
					.to.be.an('array')
				done()
			})
	})
	it('should return an array of objects with the field "contact"', function(
		done
	) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0]).to.have.property('contact')
				done()
			})
	})
	it('should include "city" field as part of the contact array', function(
		done
	) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0].contact).to.have.property('city')
				done()
			})
	})
	it('should include "state" field as part of the contact array', function(
		done
	) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0].contact).to.have.property('state')
				done()
			})
	})
	it('should include "email" as part of the contact array', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0].contact).to.have.property('email')
				done()
			})
	})
	it('should include "phone" as part of the contact array', function(done) {
		service
			.get('/api/cats')
			.set('Accept', 'application/json')
			.end(function(err, res) {
				expect(res.body[0].contact).to.have.property('phone')
				done()
			})
	})
})
