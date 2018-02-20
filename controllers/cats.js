const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res) => {
	axios
		.get(
			'http://api.petfinder.com/pet.find?format=json&key=b5e210b2ec6323ecd5b96afa87eeb81b&animal=cat&location=20878'
		)
		.then(pets => {
			res.json(pets.data['petfinder']['pets']['pet'])
		})
		.catch(err => console.log(err))
})

module.exports = router
