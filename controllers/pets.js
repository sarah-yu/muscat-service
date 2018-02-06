const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('getting all pets')
})

module.exports = router
