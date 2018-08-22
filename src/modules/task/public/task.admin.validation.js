'use strict';

const Schema = require('./task.schema');
const Joi = require('joi');

const schema = Schema.getSchema();
const query = Schema.getQuery();

module.exports = {
  destroy: destroy,
  create: create,
  update: update,
  list: list,
  read: read
};

function destroy () {
  return {
    params: {
      id: schema
        .id
        .required()
    }
  };
}

function create () {
  return {
    payload: Joi.object({
      title: schema
        .title
        .required()
    })
  };
}

function update () {
  return {
    params: {
      id: schema
        .id
        .required()
    },
    payload: Joi.object({
      title: schema
        .title
        .required()
    })
  };
}

function list () {
  return {
    query: query
  };
}

function read () {
  return {
    headers: schema.fields,
    params: {
      id: schema
        .id
        .required()
    }
  };
}