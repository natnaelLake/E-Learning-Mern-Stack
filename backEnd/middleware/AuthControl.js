const jwt = require('jsonwebtoken')
const User = require('../Models/Users')

const AuthControl = async (req,res,next) => {
    const {authorization} = req.headers;    
    if(!authorization){
        // console.log('authentication is :',authorization)
        return res.status(404).json({message:'Ther is no Authorization token'})
    }
    const token = authorization.split(' ')[1]
        try{
            const {_id} = jwt.verify(token,process.env.SECRET)
            req.user= await User.findOne({_id}).select('_id');
            next();
        }catch(err){
            // console.log('requrest is not authorized')
            res.status(404).json({message:'request is not authorized'})
        }}
 module.exports = AuthControl