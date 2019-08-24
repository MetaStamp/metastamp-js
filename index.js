const Joi = require('joi');
const { initSchema, generateSchema } = require('./protocolSchemas');

class MetaStamp {
  init(initData) {
    this.spec = Joi.validate(initData, initSchema) ? initData : null;
  }

  generate(generateData) {
    generateData = {...generateData, ...initData};
    if (!Joi.validate(generateData, generateSchema)) return null;
    return generateData;
  }
}

module.exports = new MetaStamp();
