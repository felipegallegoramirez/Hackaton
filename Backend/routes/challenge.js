const express = require("express");
const router = express.Router();
const challenge = require("../controllers/challenge.controller")
const validatorHandler  = require("../midleware/verificatorSchemas")
const {createChallengeSchema , updateChallengeSchema , getChallengeSchema, createAdmonSchema} = require("../midleware/schemas/challenge.schema")
const {checkAuth , checkpermision} = require('../midleware/authverify')

router.get("/",checkpermision(0), challenge.getChallenges);
router.get("/:id",checkpermision(0),validatorHandler(getChallengeSchema, 'params'), challenge.getChallenge); 
router.post(validatorHandler(createChallengeSchema,"body"),challenge.createChallenge)
router.put(validatorHandler(createChallengeSchema,"body"),challenge.editChallenge )

router.delete("/:id",checkpermision(0),validatorHandler(getChallengeSchema, 'params'), challenge.deleteChallenge);


module.exports = router;