const express = require('express')
const generateResponse = require('../controllers/openaiController')

// Create the express router object
const router = express.Router()

// Create the routes
router.post('/test', generateResponse)

// Export the router
module.exports = router;