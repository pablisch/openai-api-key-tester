const express = require('express')
const generateResponse = require('./controllers/openaiController')
const port = process.env.PORT || 4000
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 3, // limit each IP to 3 requests per windowMs
  message: { error: 'Too many or too frequent requests from your device, please try again later' }
})

// routes folder routes
const openaiRoutes = require('./routes/openaiRoutes');

// express app setup
const app = express()

// middleware
app.use(express.json())
app.use(cors())
// app.use('/openai/test', limiter)

// routes folder routes
app.use('/openai', openaiRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}`)); 
