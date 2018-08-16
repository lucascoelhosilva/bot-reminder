'use strict';

const TelegramBot = require('./telegrambot');
const TelegramBotConfig = require('./telegrambotconfig');

const DEV_CONFIG = process.env.DEVELOPMENT_CONFIG == 'true';

const APP_NAME = process.env.APP_NAME;
const APIAI_ACCESS_TOKEN = process.env.APIAI_ACCESS_TOKEN;
const APIAI_LANG = process.env.APIAI_LANG;
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

var baseUrl = "";
if (APP_NAME) {
    // Heroku case
    baseUrl = `https://${APP_NAME}.herokuapp.com`;
} else {
    console.error('Set up the url of your service here and remove exit code!');
}

const botConfig = new TelegramBotConfig(
    APIAI_ACCESS_TOKEN,
    APIAI_LANG,
    TELEGRAM_TOKEN);

botConfig.devConfig = DEV_CONFIG;

const bot = new TelegramBot(botConfig, baseUrl);
bot.start(() => {
    console.log("Bot started");
}, (errStatus) => {
    console.error('It seems the TELEGRAM_TOKEN is wrong! Please fix it.')
});


module.exports = {
  read: read
};

async function read(request, reply) {
  try {
      bot.processMessage(request, reply);
  } catch (err) {
    return reply.badImplementationCustom(err);
  }
}