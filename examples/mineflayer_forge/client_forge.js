var mineflayer = require('mineflayer')
var pathfinder = require('mineflayer-pathfinder')
var autoVersionForge = require('../../src/client/autoVersionForge')

var host = "server IP";
var port = "server port";
var username = "bot's username"";

var bot = mineflayer.createBot({
  version: false,
  host: host,
  port: port,
  username: username,
});

// leave options empty for guessing, otherwise specify the mods,
// channels and registries manually (channels and registries are only
// relevant for fml2 handshake)
const options = {
  forgeMods: undefined,
  channels: undefined,
}

// add handler
autoVersionForge(bot._client, options);

bot.loadPlugin(pathfinder.pathfinder)
console.info('Started mineflayer')

// set up logging
bot.on('connect', function () {
  console.info('connected');
});

bot.on('spawn', function () {
    console.info('I spawned')
})
