const express = require('express')
const router = express.Router
const clientController = require('../controllers/client')

router.use('/client', clientController.fetchClient)
