const express = require("express");
const router = express.Router();
const image = require("../controllers/image.controller")
const {checkAuth , checkpermision} = require('../midleware/authverify')
const { uploadimage,uploadFile } = require("../utils/savestorage")

router.post("/",checkpermision(0),uploadimage.single('image'), image.saveData);
router.put("/:act",checkpermision(0),uploadimage.single('image'), image.saveData);
router.post("/file/",checkpermision(0),uploadFile.single('image'), image.saveData);
router.post("/images/",checkpermision(0),uploadFile.array('image'), image.saveDatas);

module.exports = router 