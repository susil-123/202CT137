const express = require('express')
const trainRoutes = require('./routes/trainRoutes')
const app = express()
app.use(express.json());

app.use('/api/v1/train/',trainRoutes)


module.exports = app