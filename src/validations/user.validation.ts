import Joi from 'joi';

const userValidation = Joi.object().keys({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const loginValidation = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export {
  userValidation,
  loginValidation,
};