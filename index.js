const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

const catsController = require('./controllers/cats')

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('hello world')
})

app.use('/api/cats', catsController)

app.listen(process.env.PORT || 3001, () => {
	console.log('express server up and running')
})
