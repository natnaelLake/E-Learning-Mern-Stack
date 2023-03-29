const express = require('express')

const app = express()

const login_Post = async (req,res)=>{
    res.send('welcome')
}
const signup_Post = async (req,res)=>{
    res.send('welcome')
}
const videos_Post = async (req,res)=>{
    res.send('welcome')
}
const videos_get = async (req,res)=>{
    res.send('welcome get videos page')
}
const files_Post = async (req,res)=>{
    res.send('welcome')
}
const files_get = async (req,res)=>{
    res.send('welcome to get files page')
}

module.exports = {
    login_Post,
    signup_Post,
    videos_Post,
    videos_get,
    files_Post,
    files_get
}