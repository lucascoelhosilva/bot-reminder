'use strict';

const Controller = require('./bot.public.controller');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'POST',
      path: '/webhook',
      config: {
        description: 'Webhook',
        notes: 'POST webhook',
        tags: ['api', 'public'],
        auth: false,
        handler: Controller.read,
      }
    }
  ]);
  next();
};

exports.register.attributes = {
  name: 'bot-public-route',
  version: '1.0.0'
};
