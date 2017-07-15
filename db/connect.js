const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const connection =  mongoose.connect('mongodb://localhost:27017',{
    useMongoClient:true
})

connection.then(function(db){
    console.log('connected')
   
})
