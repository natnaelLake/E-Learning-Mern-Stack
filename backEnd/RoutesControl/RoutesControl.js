require("dotenv").config();
const express = require("express");
const User = require("../Models/Users");
const jwt = require("jsonwebtoken");
const Courses = require("../Models/CourseDB");
const multer = require("multer");
const app = express();
const fileupload = require("express-fileupload");
const mongoose = require('mongoose')
app.use(fileupload);
const path = require("path");
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

const handleErrors = (err) => {
  let errors = {
    username: "",
    email: "",
    password: "",
    phone: "",
    department: "",
    quiz:'',
    mid:'',
    final:'',
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
  // console.log(err.errors.code)
  // console.log(err.errors.kind)
console.log(err.errors)
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      // console.log(properties)
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
  const { studentname,email, password, age, phone, department,quiz,mid,final } =
    req.body;
    const total = Number(mid )+ Number(quiz) +Number(final)
    console.log(req.body,mid,quiz,final)
  try {
    const user = await User.create({
      studentname,
      email,
      password,
      age,
      phone,
      department,
      quiz,
      mid,
      final,
      total
    });
    console.log(user)
    const token = createToken(user._id);
    res.status(200).json({ email, token ,user});
  } catch (err) {
    // console.log(err)
    let errors = handleErrors(err);
    console.log(errors)
    res.status(404).json({ errors });
  }
};
const errors = { courseTitle: "", moduleTitle: "", coverImage: "" };
const handlerFileErrors = (err) => {
  if (err.message.includes("Course validation failed")) {
    // console.log(err)

    Object.values(err.errors).forEach(({ properties }) => {
      console.log(properties);
      let val;
      let lastInd;

      if (properties.path.includes(".")) {
        val = properties.path.lastIndexOf(".") + 1;
        console.log(val);
        lastInd = properties.path.slice(-1 * (properties.path.length - val));
        errors[lastInd] = properties.message;
      } else {
        errors[properties.path] = properties.message;
      }
    });
  }
  console.log(errors);
  return errors;
};
const videos_Post = async (req, res) => {
  const { courseTitle, moduleTitle, descTitle, desc } = req.body;
  const files = req.files;
  let session = {
    videos: [],
    docs: [],
  };
  let coverImage;

  let ind1 = 0;
  let ind2 = 0;

  if (files !== undefined) {
    if (files.length > 1) {
      await files.forEach((images, index) => {
        if (images.fieldname === "videoArray") {
          session["videos"][ind1] = images.filename;
          ind1 = ind1 + 1;
        }
        if (images.fieldname === "fileArray") {
          session["docs"][ind2++] = images.filename;
        }
        if (images.fieldname === "coverImage") {
          coverImage = images.filename;
        }
      });
    } else {
      coverImage = images.filename;
    }
  }
  const { videos, docs } = session;
  try {
    const courses = await Courses.create({
      courseTitle,
      coverImage,
      session: {
        moduleTitle,
        videos,
        docs,
      },
      description: {
        descTitle,
        desc,
      },
    });
    console.log(courses);
    res.status(200).json({ message: "Successfully Added" });
  } catch (err) {
    const errors = handlerFileErrors(err);
    res.status(401).json(errors);
  }
};
const videos_get = async (req, res) => {
  const result = await Courses.find({}).sort({ createdAt: -1 });
  const countList = await Courses.find({}).count();

  console.log(result);
  res.status(200).json({fileList:result,countListFile:countList});
};
const getStudents = async (req, res) => {
  const getStudents = await User.find({});
  // const countList = await User.find({}).count();

  console.log(getStudents);
  res.status(200).json({students:getStudents});
};
// const getIndStud = async (req, res) => {
//   const getStudents = await User.find({});
//   // const countList = await User.find({}).count();

//   console.log(getStudents,countList);
//   res.status(200).json({students:getStudents,countListStud:countList});
// };
const deleteStudents = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log('id error')
    return res.status(400).json({ error: "there is no such student." });
  }
  const deletedStudents = await User.findByIdAndDelete({ _id: id });
  if (!deletedStudents) {
    console.log('no stud')
    return res.status(404).json({ error: "no such student" });
  }

  console.log("deleted successfully!");
  res.status(200).json(deletedStudents);
};
const updateStudents = async (req, res) => {
  const {id} = req.params;
  console.log({...req.body},id)
  const {quiz,mid,final} = req.body

 
  const total = Number(quiz) + Number(mid) + Number(final)
  req.body.total = total
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "there is no such student." });
  }
  const updatedStudents = await User.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  console.log(updatedStudents)
  if (!updatedStudents) {
    return res.status(404).json({ error: "No Such Student" });
  }
  res.status(200).json(updatedStudents);
};
const fileUpdate = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "There is no such File" });
  }
  const updatedFile = await Courses.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!updatedFile) {
    return res.status(404).json({ error: "There is no Such File" });
  }
  res.status(200).json(updatedFile);
};
const deleteFiles = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "there is no such File." });
  }
  const deletedFile = await Courses.findByIdAndDelete({ _id: id });
  if (!deletedFile) {
    return res.status(404).json({ error: "There is No such File" });
  }
  res.status(200).json(deletedFile);
};

module.exports = {
  login_Post,
  signup_Post,
  videos_Post,
  videos_get,
  fileUpdate,
  getStudents,
  deleteStudents,
  updateStudents,
  deleteFiles,
  upload,
};
