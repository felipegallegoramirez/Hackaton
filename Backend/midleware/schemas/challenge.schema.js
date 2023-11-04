const Joi = require('joi');

const id = Joi.string();
const title = Joi.string();
const user_id = Joi.string();
const imgurl = Joi.string();
const stage = Joi.string();
const date = Joi.string();
const users = Joi.array().items(Joi.string());
const position = Joi.array().items(Joi.object({
  user: Joi.string(),
  points: Joi.string()
}))


const createChallengeSchema = Joi.object({
  title:title.required(),
  user_id:user_id.required() ,
  imgurl:imgurl.required(),
  stage:stage.required(),
  date:date.required(),

});


const updateChallengeSchema = Joi.object({
  _id:id ,
  title:title,
  user_id:user_id,
  imgurl:imgurl,
  stage:stage,
  date:date,
  users:users,
  position:position
});



const getChallengeSchema = Joi.object({
  id: id.required(),
});



module.exports = { createChallengeSchema, updateChallengeSchema, getChallengeSchema }
