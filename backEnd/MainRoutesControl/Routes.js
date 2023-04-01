
// import { upload } from "../RoutesControl/RoutesControl";
const express = require("express");
const router = express.Router();
const {
  login_Post,
  signup_Post,
  videos_Post,
  videos_get,
  files_Post,
  files_get,
  upload
} = require("../RoutesControl/RoutesControl");
const AuthControl = require('../middleware/AuthControl')
// const {upload} = 
router.post('/signup',signup_Post)
// router.use(AuthControl)
router.post("/login",login_Post);
router.post('/addVideos',upload.any("coverImage"),videos_Post)
router.get('/getVideos',videos_get)
router.post('/addFiles',files_Post)
router.get('/getFiles',files_get)

module.exports = router