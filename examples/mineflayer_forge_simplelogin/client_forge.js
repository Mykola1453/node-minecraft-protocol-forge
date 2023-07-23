var mineflayer = require('mineflayer')
var pathfinder = require('mineflayer-pathfinder')
var autoVersionForge = require('../../src/client/autoVersionForge')
var simplelogin = require('./simplelogin')

var host = "server IP";
var port = "server port";
var username = "bot's username";

var bot = mineflayer.createBot({
  version: false,
  host: host,
  port: port,
  username: username,
});

// leave options empty for guessing, otherwise specify the mods. Don't forget to write your Simple Login password (any password, if you connect for the first time)
const options = {
  forgeMods: undefined,
  channels: undefined,
  sl_pwd: 'simple login password'
}

// add handler
autoVersionForge(bot._client, options);
simplelogin(bot._client,options)

bot.loadPlugin(pathfinder.pathfinder)
console.info('Started mineflayer')

// set up logging
bot.on('connect', function () {
  console.info('connected');
});

bot.on('spawn', function () {
    console.info('I spawned')
})
