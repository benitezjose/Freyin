const config = require("../config");
const bot = require("../server");

function SendImage(imageName,msg) {
  msg.channel.send({
    files: [config.prefixImage + imageName],
  });
}

bot.on("message", (msg) => {
  if (msg.content === config.prefixCommand + "info") {
    //console.log()
    SendImage("teLaCreisteWe.jpg",msg);
  }

  if (msg.content === config.prefixCommand + "ward") {
    SendImage("ward.jpg",msg);
  }

  if (msg.content === config.prefixCommand + "xd") {
    SendImage("xd.jpg",msg);
  }

  if (msg.content === config.prefixCommand + "name") {
    SendImage("name.jpg",msg);
  }

  if (msg.content === config.prefixCommand + "alv") {
    SendImage("alv.jpg",msg);
  }
});
