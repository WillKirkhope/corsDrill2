const express = require('express')
const cors = require('cors')
const data = require('./api/instructorDogRatio')
const port = parseInt(process.env.PORT || 8080)


const app = express()
app.use(cors())







app.listen(port, () => console.log('Listening on http://localhost:8080'))
