const express = require("express");
const router = express.Router();
const post = require("../controllers/post.controller")
const validatorHandler  = require("../midleware/verificatorSchemas")
const {createPostSchema , updatePostSchema , getPostSchema, createAdmonSchema} = require("../midleware/schemas/post.schema")
const {checkAuth , checkpermision} = require('../midleware/authverify')

router.get("/",checkpermision(0), post.getPosts);
router.get("/getPostsUnique/:id", post.getPostsByUser);
router.get("/:id",checkpermision(0),validatorHandler(getPostSchema, 'params'), post.getPost); 
router.post(checkpermision(0),validatorHandler(createPostSchema,"body"),post.createPost)
router.put("/:id",post.editPost )

router.delete("/:id",checkpermision(0),validatorHandler(getPostSchema, 'params'), post.deletePost);


module.exports = router;