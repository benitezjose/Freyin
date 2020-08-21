const Discord = require("discord.js");

exports.bot = new Discord.Client();

const imageController = require("./Controllers/imageController");
const audioController = require("./Controllers/audioController");
const coreController = require("./Controllers/coreController");
