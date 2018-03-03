const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const os = require('os')

const hostname = os.hostname()

let service
if (hostname.includes('Sarah')) {
	service = supertest('http://localhost:3001')
} else {
	service = supertest('http://muscat-service.herokuapp.com')
}

let location = '20878'

describe('GET /api/cats/from/:location', () => {
	it('should return a 200 response', done => {
		service
			.get(`/api/cats/from/${location}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(200)
				done()
			})
	})
	it('should return an array', done => {
		service
			.get(`/api/cats/from/${location}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body).to.be.an('array')
				done()
			})
	})
	it('should return an array of objects with the correct fields', done => {
		service
			.get(`/api/cats/from/${location}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body[0]).to.have.property('id')
				expect(res.body[0]).to.have.property('name')
				expect(res.body[0]).to.have.property('breeds')
				expect(res.body[0]).to.have.property('sex')
				expect(res.body[0]).to.have.property('options')
				expect(res.body[0])
					.to.have.property('media')
					.to.have.property('photos')
				done()
			})
	})
})

describe('GET /api/cats/:id', () => {
	let id

	before(done => {
		service
			.get(`/api/cats/from/${location}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				id = res.body[0].id.$t
				done()
			})
	})
	it('retrieves a cat by its id', done => {
		service
			.get(`/api/cats/${id}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body.id.$t).to.equal(id)
				done()
			})
	})
	it('should return a cat with the correct fields', done => {
		service
			.get(`/api/cats/${id}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body).to.have.property('id')
				expect(res.body).to.have.property('name')
				expect(res.body).to.have.property('breeds')
				expect(res.body).to.have.property('mix')
				expect(res.body).to.have.property('sex')
				expect(res.body).to.have.property('size')
				expect(res.body).to.have.property('description')
				expect(res.body).to.have.property('options')
				expect(res.body).to.have.property('shelterId')
				done()
			})
	})
})

describe('GET /api/breeds', () => {
	it('should return an array', done => {
		service
			.get('/api/breeds')
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body).to.be.an('array')
				done()
			})
	})
	it('should return each cat breed name as a string', done => {
		service
			.get('/api/breeds')
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body[0].$t).to.be.a('string')
				done()
			})
	})
})

describe('GET /api/shelters/:id', () => {
	let id

	before(done => {
		service
			.get(`/api/cats/from/${location}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				id = res.body[0].shelterId.$t
				done()
			})
	})
	it('retrieves a shelter by its id', done => {
		service
			.get(`/api/shelters/${id}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body.id.$t).to.equal(id)
				done()
			})
	})
	it('should return a shelter with the correct fields', done => {
		service
			.get(`/api/shelters/${id}`)
			.set('Accept', 'application/json')
			.end((err, res) => {
				expect(res.body).to.have.property('id')
				expect(res.body).to.have.property('name')
				expect(res.body).to.have.property('email')
				expect(res.body).to.have.property('phone')
				expect(res.body).to.have.property('city')
				expect(res.body).to.have.property('state')
				done()
			})
	})
})
