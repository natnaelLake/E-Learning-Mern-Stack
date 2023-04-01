require("dotenv").config();
const express = require("express");
const User = require("../Models/Users");
const jwt = require("jsonwebtoken");
const Courses = require("../Models/CourseDB");
const multer = require('multer')
const app = express();
const fileupload = require('express-fileupload')

app.use(fileupload)
const path = require('path')
const storage = multer.diskStorage({
   destination:"./public/uploads/",
   filename:(req,file,cb)=>{
    cb(null,file.fieldname + '-' + Date.now() + file.originalname)
   }
})
const upload = multer({
  storage:storage
})

const handleErrors = (err) => {
  let errors = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    department: "",
  };
  if (err.message === "Email is not registered") {
    errors.email = "Email is not registered";
  }
  if (err.message === "Incorrect Password") {
    errors.password = "Incorrect Password";
  }
  if (err.message === "Enter Valid Email") {
    errors.email = "Enter Valid Email";
  }
  if (err.message === "Enter Password") {
    errors.password = "Enter Password";
  }
  if (err.code === 11000) {
    errors.email = "Email is in use";
    return errors;
  }
  // console.log(err);
  // if(err ==='Use Storng Password'){
  //   console.log(err)
  // }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const maxAge = 3 * 24 * 60 * 60;
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: maxAge });
};
const login_Post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(404).json({ errors });
  }
};
const signup_Post = async (req, res) => {
  const { firstname, lastname, email, password, age, phone, department } =
    req.body;
  try {
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      age,
      phone,
      department,
    });
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    let errors = handleErrors(err);
    res.status(404).json({ errors });
  }
}
const errors = {courseTitle:'',moduleTitle:'',coverImage:''}
const handlerFileErrors = (err)=>{
  if(err.message.includes('Course validation failed')){
    // console.log(err) 

    Object.values(err.errors).forEach(({properties})=>{
      console.log(properties)
      let val;
      let lastInd;

      if(properties.path.includes('.')){
        val = properties.path.lastIndexOf('.')+1
        console.log(val)
        lastInd = properties.path.slice(-1*(properties.path.length - val))
        errors[lastInd] = properties.message
      }else{

        errors[properties.path] = properties.message
      }
    })
  }
  console.log(errors)
  return errors

}
const videos_Post = async (req, res) => {
  const {courseTitle,moduleTitle,descTitle,desc} = req.body
  const files = req.files
  let session = {
    videos:[],
    docs:[]
  }
  let coverImage ;
 
  let ind1 = 0; 
  let ind2 = 0;

  if(files !== undefined){
    if(files.length > 1){
    await files.forEach((images,index)=>{
          if(images.fieldname === 'videoArray'){
            
            session['videos'][ind1] = images.filename
            ind1 = ind1+1;
          }
          if(images.fieldname === 'fileArray'){
            session['docs'][ind2++] = images.filename
            
          }
          if(images.fieldname === 'coverImage'){
            coverImage = images.filename;
          }
        })
  }else{
    coverImage =images.filename
  }
  }
  const {videos,docs} = session;
  try {
    const courses = await Courses.create({
      courseTitle,
      coverImage,
      session:{
        moduleTitle,
        videos,
        docs
      },
      description:{
        descTitle,
        desc
      }
    });
    console.log(courses)
    res.status(200).json({ message:'Successfully Added'});
  } catch (err) {
    const errors = handlerFileErrors(err)
    res.status(401).json(errors);
  }
};
const videos_get = async (req, res) => {
  const result = await Courses.find({}).sort({createdAt:-1})
  console.log(result)
  res.json(result)
};
const files_Post = async (req, res) => {
  res.send("welcome");
};
const files_get = async (req, res) => {
  res.send("welcome to get files page");
};
module.exports = {
  login_Post,
  signup_Post,
  videos_Post,
  videos_get,
  files_Post,
  files_get,
  upload
};
