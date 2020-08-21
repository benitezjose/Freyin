const config = require("../config");
const server = require("../server");


function SendImage(imageName) {
  msg.channel.send({
    files: [prefixImage + imageName],
  });
}

server.bot.on("message", (msg) => {
  if (msg.content === config.prefixCommand + "info") {
    SendImage("teLaCreisteWe.jpg");
  }

  if (msg.content === config.prefixCommand + "ward") {
    SendImage("ward.jpg");
  }

  if (msg.content === config.prefixCommand + "xd") {
    SendImage("xd.jpg");
  }

  if (msg.content === config.prefixCommand + "name") {
    SendImage("name.jpg");
  }

  if (msg.content === config.prefixCommand + "alv") {
    SendImage("alv.jpg");
  }
});
