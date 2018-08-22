'use strict';

const Controller = require('./user.admin.controller');
const Validator = require('./user.admin.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/user',
      config: {
        description: 'GET user',
        notes: 'Return based on token',
        tags: ['api', 'user'],
        auth: false,
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'POST',
      path: '/user',
      config: {
        description: 'POST user',
        notes: 'Save a user',
        tags: ['api', 'user'],
        auth: false,
        handler: Controller.create,
        validate: Validator.create()
      }
    },
    {
      method: 'POST',
      path: '/user/logout',
      config: {
        description: 'POST user logout',
        notes: 'Logout a user',
        tags: ['api', 'user'],
        auth: false,
        handler: Controller.logout,
        validate: Validator.logout()
      }
    },
    {
      method: 'PUT',
      path: '/user',
      config: {
        description: 'PUT user',
        notes: 'Update based on token',
        tags: ['api', 'user'],
        auth: false,
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/user/login',
      config: {
        description: 'POST user',
        notes: 'User login to the token generation',
        tags: ['api', 'user'],
        auth: false,
        handler: Controller.login,
        validate: Validator.login()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'user-admin-route',
  version: '1.0.0'
};
