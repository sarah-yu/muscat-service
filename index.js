const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express()

const catsController = require('./controllers/cats')
const { baseUrl, options, animal } = require('./petfinder.js')

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/api/breeds', (req, res) => {
	axios
		.get(`${baseUrl}breed.list?${options}`, {
			params: {
				animal: animal
			}
		})
		.then(breeds => {
			res.json(breeds.data['petfinder']['breeds']['breed'])
		})
		.catch(err => console.log(err))
})

app.get('/api/shelters/:id', (req, res) => {
	axios
		.get(`${baseUrl}shelter.get?${options}`, {
			params: {
				id: req.params.id
			}
		})
		.then(shelter => {
			res.json(shelter.data['petfinder']['shelter'])
		})
		.catch(err => console.log(err))
})

app.use('/api/cats', catsController)

app.listen(process.env.PORT || 3001, () => {
	console.log('express server up and running')
})
