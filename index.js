const express    = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config')

const app = express()

// Register routes
require('./src/socket')()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT)

console.log(`Socket server running on port: ${PORT}`)
