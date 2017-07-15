const express = require('express')
indexRoute = express.Router

function index(req, res, next) {
    res.send('connected')
    
}

exports.indexRoute = index