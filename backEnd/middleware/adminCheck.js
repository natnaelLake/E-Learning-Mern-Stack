const User = require('../Models/Users')

const adminCheck = async (req,res,next)=>{
    try{
        const {email} = req.body
        // const {_id} = jwt.verify(token,process.env.SECRET)
        req.role= await User.findOne({email}).select('role');
        if(req.role !== 'admin'){
            return res.status(404).json({message:'request is not authorized'})
        }else{
            next();
        }
        
    }catch(err){
        // console.log('requrest is not authorized')
        res.status(404).json({message:'request is not authorized'})
    }
}
module.exports = adminCheck;