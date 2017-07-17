const Client = require('../models/clients')


function createClient(req, res, next) {
    Client.create(req.body).then(function(err, result){
        if (err == nil) {
            res.send({message:'client created'})
        }else {
            next(err)
        }
    })
}

function deleteClient(req, res, next) {

}

function updateClient(req, res, next) {

}

function fetchClient(req, res, next) {

}
function authenticateClient(req, res, next) {

}
