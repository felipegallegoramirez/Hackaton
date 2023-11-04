const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8).max(20);
const publication = Joi.array().items(Joi.string());
const follows = Joi.array().items(Joi.string());
const followers = Joi.array().items(Joi.string());

const createUserSchema = Joi.object({
  id:Joi.any(),
  name:name.required(),
  email:email.required() ,
  password:password.required(),
  publication:Joi.any(),
  follows:Joi.any(),
  followers:Joi.any(),

});

const LoginUserSchema  = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  id:id ,
  email:email ,
  password:password,
  publication:publication,
  follows:follows,
  followers:followers
});

const getUserSchema = Joi.object({
  id: id.required(),
});



module.exports = { createUserSchema, updateUserSchema, getUserSchema, LoginUserSchema }
