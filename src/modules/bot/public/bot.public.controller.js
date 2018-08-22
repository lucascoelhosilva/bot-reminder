'use strict';

const TelegramBot = require('./telegrambot');
const TelegramBotConfig = require('./telegrambotconfig');

const DEV_CONFIG = process.env.DEVELOPMENT_CONFIG == 'true';

const APP_NAME = process.env.APP_NAME;
const APIAI_ACCESS_TOKEN = "850819d19655415598ebda9e19721e1c";
const APIAI_LANG = "pt-br";
const TELEGRAM_TOKEN = "561283378:AAFsdw_1syNvQLyq_1LDI7SAv01J-SXOXrg";

var baseUrl = "";
if (APP_NAME) {
    // Heroku case
    baseUrl = `https://${APP_NAME}.herokuapp.com`;
} else {
    baseUrl = "https://8241d86e.ngrok.io";
    // console.error('Set up the url of your service here and remove exit code!');
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
    read: read,
    list: list
};

async function read(request, reply) {
    try {
        bot.processMessage(request, reply);
    } catch (err) {
        console.log('err', err);
        return reply.badImplementationCustom(err);
    }
}

async function list(request, reply) {
    return reply('OKKK!')
}
