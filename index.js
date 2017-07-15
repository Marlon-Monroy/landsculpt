const express = require('express')
const app = express()
const config = require('./config/config')
const port = process.env.port || 3000

config.setup(app)
app.listen(port, function(){
    console.log('server started on ' + port)
})