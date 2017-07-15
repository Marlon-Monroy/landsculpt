const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const ClientSchema = new Schema({
    name: {
        type:String, 
        require:[true, 'name value is require']
    },
    email: {
        type:String,
        unique:true
    }
})

module.exports = mongoose.model('client', ClientSchema)