const ytdl = require("ytdl-core");
const config = require("../config");
var bot = require("../server");

const siuAudio = "https://www.youtube.com/watch?v=CGDYmD-ZyoY";
const primoCocoSily = "https://www.youtube.com/watch?v=zNgOKYx_khk";

function PlayAudio(msg, url) {
  const voiceChannel = msg.member.voice.channel;

  if (!voiceChannel) {
    return msg.reply("entra a un canal mongoloide");
  }

  voiceChannel.join().then((connection) => {
    const stream = ytdl(url, {
      filter: "audioonly",
    });
    const dispatcher = connection.play(stream);

    dispatcher.on("finish", () => voiceChannel.leave());
  });
}

bot.on("message", (msg) => {
  if (msg.content === config.prefixCommand + "si") {
    PlayAudio(msg, siuAudio);
  }

  if (msg.content === config.prefixCommand + "iii") {
    PlayAudio(primoCocoSily);
  }
});

bot.login(config.token);
