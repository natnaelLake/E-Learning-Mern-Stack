const express = require("express");
const User = require("../Models/Users");

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
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const login_Post = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "welcome to post login page." });
};
const signup_Post = async (req, res) => {
  const { firstname, lastname, email, password, age, phone, department } =
    req.body;

  try {
    const user = await User.create({
        firstname, lastname, email, password, age, phone, department
    });
    res.status(200).json({ message: "successfully registered!" });
  } catch (err) {
    let errors = handleErrors(err);
    console.log(errors)
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
