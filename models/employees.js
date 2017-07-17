const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EmployeeSchema = new Schema({
    name:String,
    employeeId:String,
    phoneNumber:String
})

module.exports = mongoose.model('employee', EmployeeSchema)
