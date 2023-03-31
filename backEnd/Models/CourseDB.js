const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const vidArrary = new Schema({

// })
const Course = new Schema({
    courseTitle: {
        type: String,
        // required: [true, 'Enter Course Title']
    },
    coverImage: {
        type: String,
        // required: [true, 'Select Cover Image']
    },
    module: {
        moduleTitle: {
            type:String,
            default:'welcome to react'
        } ,
        videos: [
            {
                videoTitle: {
                    type:String
                },
                vidArray: [{
                    type:String
                }]
            }
        ],
        files: [
            {
                fileTitle: String,
                fileArray: [String]
            }
        ]
    },
    description: {
        descTitle: String,
        desc: String
    }
},{timestamps:true})

module.exports = mongoose.model('Course', Course);