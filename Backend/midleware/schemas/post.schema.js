const Joi = require('joi');

const id = Joi.string();
const title = Joi.string();
const user_id = Joi.string();
const data = Joi.array().items(Joi.object({
  ty:Joi.string(),
  data:Joi.string(),
}))

const coment = Joi.array().items(Joi.object({
  text:Joi.string(),
  date:Joi.string(),
  user_id:Joi.string(),
  user_name:Joi.string()

}))

const createPostSchema = Joi.object({
  _id:Joi.any(),
  title:title.required(),
  user_id:user_id.required() ,
  data:data.required(),
  comentario:coment,
  username:Joi.string()
});


const updatePostSchema = Joi.object({
  _id:id ,
  title:title,
  user_id:user_id,
  data:Joi.any(),
  comentario:coment
});



const getPostSchema = Joi.object({
  id: id.required(),
});



module.exports = { createPostSchema, updatePostSchema, getPostSchema }
