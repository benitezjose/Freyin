const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const bot = new Discord.Client();

const token = "NzQ2NDI3OTcwNzU4OTAxODMz.X0ALOA.PaHUP49qwjKHuOMg9ryuS32xfr0";

const prefixImage = "./images/";
const prefixCommand = "!";

const siuAudio = "https://www.youtube.com/watch?v=CGDYmD-ZyoY";

function login() {
  bot.login(token);
}

bot.on("ready", () => {
  console.log(`bot running`);
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "si") {
    const voiceChannel = msg.member.voice.channel;

    if (!voiceChannel) {
      return msg.reply("entra a un canal mongoloide");
    }

    voiceChannel.join().then((connection) => {
      const stream = ytdl(siuAudio, {
        filter: "audioonly",
      });
      const dispatcher = connection.play(stream);

      dispatcher.on("finish", () => voiceChannel.leave());
    });
  }
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "info") {
    msg.channel.send({
      files: [prefixImage + "teLaCreisteWe.jpg"],
    });
  }
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "ward") {
    msg.channel.send({
      files: [prefixImage + "ward.jpg"],
    });
  }
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "xd") {
    msg.channel.send({
      files: [prefixImage + "xd.jpg"],
    });
  }
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "name") {
    msg.channel.send({
      files: [prefixImage + "name.jpg"],
    });
  }
});

bot.on("message", (msg) => {
  if (msg.content === ":virgo_senial:") {
    msg.channel.send({
      files: [prefixImage + "ranked.jpg"],
    });
  }
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "alv") {
    msg.channel.send({
      files: [prefixImage + "alv.jpg"],
    });
  }
});

login();
