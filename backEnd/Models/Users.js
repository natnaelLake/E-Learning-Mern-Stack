const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        required:[true,'Enter Valid Email'],
        lowercase:true,
        unique:true,
        validate:[isEmail,'Enter Valid Email']
    },
    password:{
        type:String,
        required:[true,'Enter Password'],
        minlength:[8,'Minimum Length is 8 Characters']
    },
    department:{
        type:String,
        required:[true,'Enter  Department']
    },
    age:{
        type:String
    },
    phone:{
        type:String,
        required:[true,'Enter Valid Phone Number']
    }
})
module.exports = mongoose.model('User',userSchema)