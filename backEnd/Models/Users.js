const mongoose = require('mongoose');
const {isEmail,isStrongPassword} = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const studentDatabase = new Schema({
    studentname:{
        type:String,
        required:[true,'Enter Student Name']
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        validate:[isEmail,'Enter Valid Email'],
        required:[true,'Enter Valid Email']
    },
    password:{
        type:String,
        required:[true,'Enter Password'],
        minlength:[8,'Minimum Length is 8 Characters']
    },
    department:{
        type:String,
        required:[true,'Enter Department']
    },
    quiz:{
        type:Number,
        max:[5,'Maximum Limit is 5']
    },
    mid:{
        type:Number,
        max:[25,'Maximum Limit is 25']
    },
    final:{
        type:Number,
        max:[50,'Maximum Limit is 50']
    },
    total:{
        type:Number,
    },
    phone:{
        type:String,
        required:[true,'Enter Valid Phone Number'],
    },
    role:{
        type:String,
        default:'user'
    }
   
},{timestamps:true});
studentDatabase.pre('save',async function(next){
    // if(!isStrongPassword(this.password)){
    //     throw Error('Use Storng Password')
    // }
    const salt =await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    
    next();
})


studentDatabase.statics.login = async function(email,password){
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
module.exports = mongoose.model('student',studentDatabase)