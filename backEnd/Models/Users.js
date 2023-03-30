const mongoose = require('mongoose');
const {isEmail,isStrongPassword} = require('validator')
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
        minlength:[8,'Minimum Length is 8 Characters'],
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
},{timestamps:true});
userSchema.pre('save',async function(next){
    // if(!isStrongPassword(this.password)){
    //     throw Error('Use Storng Password')
    // }
    const salt =await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    
    next();
})


userSchema.statics.login = async function(email,password){
    if(!email || !isEmail(email)){
        throw Error('Enter Valid Email')
    }
    if(!password){
        throw Error('Enter Password')
    }
    const user = await this.findOne({email});
    if(user){
        const retData= await bcrypt.compare(password,user.password)
        // console.log(retData)
        if(retData){
            return user
        }
        throw Error('Incorrect Password')
    }
    throw Error('Email is not registered')
}

module.exports = mongoose.model('User',userSchema)