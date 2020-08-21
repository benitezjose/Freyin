const config = require("../config");
var server = require("../server");

server.bot.on("ready", () => {
  console.log(`bot running`);
});

server.bot.login(config.token);
