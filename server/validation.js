/*  Validation */
const Joi = require("@hapi/joi");

// Register
const registerValidation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    admin: Joi.boolean(),
  });

  return schema.validate(body);
};

// Login
const loginValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(body);
};

// Create Review
const reviewValidation = (body) => {
  const schema = Joi.object({
    userId: Joi.number(),
    productId: Joi.number(),
    title: Joi.string().min(3).max(50).required(),
    rating: Joi.number().min(0).max(5).required(),
    reviewtext: Joi.string().min(6).max(1000).required(),
    recommend: Joi.boolean().required(),
  });

  return schema.validate(body);
};

// Create Product
const productValidation = (body) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().required(),
    description: Joi.string().min(6).max(1000).required(),
    imageUrl: Joi.string().required(),
    youtubeId: Joi.string().required(),
  });

  return schema.validate(body);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.reviewValidation = reviewValidation;
module.exports.productValidation = productValidation;
