/**
 * Projeto.js
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
      required: true
    },
    descricao: {
      type: 'string',
      required: true
    },
    dataInicio: {
      type: 'date',
      required: true
    },
    dataFim: {
      type: 'date',
      required: true
    },
    analistas: {
      required: true,
      collection: 'analista',
      via: 'id',
      dominant: true
    }
  },
	validationMessages: {
    nome: {
      required: 'O campo Nome deve ser informado.'
    },
    descricao: {
      required: 'O campo Descrição deve ser informado.'
    },
    dataInicio: {
      required: 'O campo Data Início deve ser informado.'
    },
    dataFim: {
      required: 'O campo Data Fim deve ser informado.'
    },
    analistas: {
      required: 'Selecione pelo menos um analista.'
    }
  }    
});

