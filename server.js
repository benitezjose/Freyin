const Discord = require("discord.js");

var bot = new Discord.Client();
module.exports = bot;

const coreController = require("./Controllers/coreController");
const imageController = require("./Controllers/imageController");
const audioController = require("./Controllers/audioController");
