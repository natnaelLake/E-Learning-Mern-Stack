const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const vidArrary = new Schema({

// })
const Course = new Schema({
    courseTitle: {
        type: String,
        required: [true, 'Enter Course Title']
    },
    coverImage: {
        type: String,
        required: [true, 'Select Cover Image']
    },
    session: {
        moduleTitle: {
            type:String,
            default:'welcome to react'
        } ,
        videos: [Object],
        docs: [Object]
    },
    description: {
        descTitle: String,
        desc: String
    }
},{timestamps:true})

module.exports = mongoose.model('Course', Course);