import Joi from 'joi';

const productValidation = Joi.object().keys({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default productValidation;