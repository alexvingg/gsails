/**
 * Cargo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var baseModel  = require('./BaseModel');
var lodash     = require('lodash');

module.exports = lodash.merge({}, baseModel,{
  attributes: {
    nome: {
      type: 'string',
      unique: true,
      required: true
    }
  },
  validationMessages: {
    nome: {
      required: 'O campo Nome deve ser informado.',
      unique : 'Já existe um Cargo com o nome informado.'
    }
  }
});

