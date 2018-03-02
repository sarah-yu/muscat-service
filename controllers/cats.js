const express = require('express')
const router = express.Router()
const axios = require('axios')

const baseUrl = 'http://api.petfinder.com/'
const options = 'format=json&key=b5e210b2ec6323ecd5b96afa87eeb81b&animal=cat'

router.post('/:location', (req, res) => {
	axios
		.get(`${baseUrl}pet.find?${options}`, {
			params: {
				location: req.params.location,
				count: 100
			}
		})
		.then(cats => {
			res.json(cats.data['petfinder']['pets']['pet'])
		})
		.catch(err => console.log(err))
})

router.get('/breeds', (req, res) => {
	axios
		.get(`${baseUrl}breed.list?${options}`)
		.then(breeds => {
			res.json(breeds.data['petfinder']['breeds']['breed'])
		})
		.catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
	axios
		.get(`${baseUrl}pet.get?${options}`, {
			params: {
				id: req.params.id
			}
		})
		.then(cat => {
			res.json(cat.data['petfinder']['pet'])
		})
		.catch(err => console.log(err))
})

module.exports = router
