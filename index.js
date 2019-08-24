const Joi = require('joi');
const { initSchema, generateSchema } = require('./protocolSchemas');

class MetaStamp {
  init(initData) {
    this.spec = !Joi.validate(initData, initSchema).error ? initData : null;
  }

  generate(generateData) {
    generateData = {...generateData, ...this.spec};
    if (Joi.validate(generateData, generateSchema).error) return null;
    return generateData;
  }
}

module.exports = new MetaStamp();
