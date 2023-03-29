const mongoose = require('mongoose');
const isEmail = require('validator')
const bcrypt = require('bcrypt')


const User = mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'Enter First Name']
    },
    lastname:{
        type:String,
        required:[true,'Enter Last Name']
    },
    email:{
        type:String,
        required:[true,'Enter First Name'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Provide Valid Email']
    },
    password:{
        type:String,
        required:[true,'Enter First Name']
    },
    age:{
        type:String,
        required:[true,'Enter Your Age']
    },
    department:{
        type:String,
        required:[true,'Enter Your Department']
    },
    age:{
        type:String,
        required:[true,'Enter a Valid Phone']
    }
})
module.exports = mongoose.model('User',User)