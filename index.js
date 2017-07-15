const express = require('express')
const app = express()
const config = require('./config/config')
const port = process.env.port || 3000
const connect = require('./db/connect')
const router = require('./routes/index')
config.setup(app)
app.use('/', router.indexRoute)
app.listen(port, function(){
    console.log('server started on ' + port)
})