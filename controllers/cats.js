const express = require('express')
const router = express.Router()
const axios = require('axios')
const { baseUrl, options, animal } = require('../petfinder.js')

router.get('/from/:location', (req, res) => {
	axios
		.get(`${baseUrl}pet.find?${options}`, {
			params: {
				animal: animal,
				location: req.params.location,
				count: 100
			}
		})
		.then(cats => {
			res.json(cats.data['petfinder']['pets']['pet'])
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
