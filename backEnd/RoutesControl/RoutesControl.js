require('dotenv').config();
const express = require("express");
const User = require("../Models/Users");
const jwt = require('jsonwebtoken')

const app = express();

const handleErrors = (err) => {
  let errors = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    department: "",
  };
  if (err.code === 11000) {
    console.log(err);
    errors.email = "Email is in use";
    return errors;
  }
  console.log(err);
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
const maxAge = 3*24*60*60;
const createToken = (_id)=>{
  return jwt.sing({_id},process.env.SECRET,{expiresIn:maxAge})
}
const login_Post = async (req, res) => {
  const {email,password} = req.body;
  try{
    const user = await User.login(email,password)
    const token = createToken(user._id)
    res.status(200).json({message:'successfully login'})
  }catch(err){

    res.status(404).json({message:err})
  }
  res.status(200).json({ message: "welcome to post login page." });
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
    const token = createToken(user._id)
    
    res.status(200).json({ email,token });
  } catch (err) {
    let errors = handleErrors(err);
    // console.log(err)
    res.status(404).json(errors);
  }
};
const videos_Post = async (req, res) => {
  res.send("welcome");
};
const videos_get = async (req, res) => {
  res.send("welcome get videos page");
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
};
