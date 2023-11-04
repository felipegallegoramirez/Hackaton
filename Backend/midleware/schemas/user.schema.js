const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8).max(20);
const publication = Joi.array(Joi.string());
const follows = Joi.array(Joi.string());
const followers = Joi.array(Joi.string());

const createUserSchema = Joi.object({
  name:name.required(),
  email:email.required() ,
  password:password.required(),
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
