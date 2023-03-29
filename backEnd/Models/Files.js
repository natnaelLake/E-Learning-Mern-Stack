const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    videos:{
        video:{
            title:{
                type:String,
                required:true
            },
            indVid:{
                type:Array,
                required:true
            }

        }
    }
})

module.exports = mongoose.model('Files',filesSchema)