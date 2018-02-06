const express = require('express')
const parser = require('body-parser')

const app = express()

const petsController = require('./controllers/pets')

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('hello world')
})

app.use('/api/pets', petsController)

app.listen(process.env.PORT || 3000, () => {
	console.log('express server up and running')
})
