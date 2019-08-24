const Joi = require('joi');

module.exports.initSchema = Joi.object().keys({
  version: Joi.string().required(),
  domain: Joi.string().required(),
  logo: Joi.string(),
  hook: Joi.string().required(),
});

module.exports.generateSchema = Joi.object().keys({
  id: Joi.string().required(),
  version: Joi.string().required(),
  domain: Joi.string().required(),
  logo: Joi.string(),
  description: Joi.string(),
  hook: Joi.string().required(),
  data: Joi.object().required(),
  metadata: Joi.object(),
});
