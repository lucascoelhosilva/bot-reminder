'use strict';

const Controller = require('./task.admin.controller');
const Validator = require('./task.admin.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/task/{id}',
      config: {
        description: 'GET task',
        notes: 'GET id task',
        tags: ['api', 'public'],
        auth: false,
        plugins: {
          slap: {
            rule: 'task-id'
          }
        },
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'GET',
      path: '/task',
      config: {
        description: 'GET task',
        notes: 'GET task',
        tags: ['api', 'task'],
        // auth: {
        //   scope: ['admin']
        // },
        auth: false,
        handler: Controller.list,
        validate: Validator.list()
      }
    },
    {
      method: 'DELETE',
      path: '/task/{id}',
      config: {
        description: 'DELETE task',
        notes: 'DELETE task',
        tags: ['api', 'task'],
        plugins: {
          slap: {
            clear: ['task', 'task-id']
          }
        },
        auth: false,
        handler: Controller.destroy,
        validate: Validator.destroy()
      }
    },
    {
      method: 'PUT',
      path: '/task/{id}',
      config: {
        description: 'PUT task',
        notes: 'PUT task',
        tags: ['api', 'task'],
        plugins: {
          slap: {
            clear: ['task', 'task-id']
          }
        },
        auth: false,
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/task',
      config: {
        description: 'POST task',
        notes: 'POST task',
        tags: ['api', 'task'],
        plugins: {
          slap: {
            clear: ['task', 'task-id']
          }
        },
        auth: false,
        handler: Controller.create,
        validate: Validator.create()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'task-admin-route',
  version: '1.0.0'
};
