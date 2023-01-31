import Joi from 'joi';

const orderValidation = Joi.object().keys({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({ 'array.min': '{#label} must include only numbers' }),
});

export default orderValidation;