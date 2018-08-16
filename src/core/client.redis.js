'use strict';

const redis = require('redis');
const load = require('./util/load');

const config = load.getRedis();
const client = redis.createClient({
  host: config.host,
  port: config.port,
  password: config.password,
});

client.on('connect', () => {
  console.log('===> connected redis');
});

module.exports = client;
