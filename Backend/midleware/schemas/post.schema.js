const Joi = require('joi');

const id = Joi.string();
const title = Joi.string();
const user_id = Joi.string();
const data = Joi.array(Joi.object({
  ty:ty.Joi.string(),
  data:data2.Joi.string(),
}))

const coment = Joi.array(Joi.object({
  text:text.Joi.string(),
  date:date.Joi.string(),
  user_id:user_id2.Joi.string(),
  user_name:user_name.Joi.string()

}))

const createPostSchema = Joi.object({
  title:title.required(),
  user_id:user_id.required() ,
  data:data.required(),
  coment:coment.required()
});


const updatePostSchema = Joi.object({
  id:id ,
  title:title,
  user_id:user_id,
  data:data,
  coment:coment
});



const getPostSchema = Joi.object({
  id: id.required(),
});



module.exports = { createPostSchema, updatePostSchema, getPostSchema, LoginPostSchema }
