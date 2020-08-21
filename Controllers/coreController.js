const config = require("../config");
var bot = require("../server");

bot.on("ready", () => {
  console.log(`bot running`);
});

// bot.login(config.token);
