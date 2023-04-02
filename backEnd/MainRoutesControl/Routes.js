
// import { upload } from "../RoutesControl/RoutesControl";
const express = require("express");
const router = express.Router();
const {
  login_Post,
  signup_Post,
  videos_Post,
  videos_get,
  upload,
  fileUpdate,
  getStudents,
  deleteStudents,
  updateStudents,
  deleteFiles,

} = require("../RoutesControl/RoutesControl");
const AuthControl = require('../middleware/AuthControl')
// const {upload} = 
router.post('/signup',signup_Post)
// router.use(AuthControl)
router.post("/login",login_Post);
router.post('/addVideos',upload.any(),videos_Post)
router.get('/getVideos',videos_get)
router.get('/getStudents',getStudents)
router.delete('/deleteFiles:id',deleteFiles)
router.delete('/deleteStudents:id',deleteStudents)
router.patch('/updateStudents:id',updateStudents)
router.patch('/fileUpdate:id',fileUpdate)
module.exports = router