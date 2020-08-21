const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const bot = new Discord.Client();


const prefixImage = "./images/";
const prefixCommand = "!";

const siuAudio = "https://www.youtube.com/watch?v=CGDYmD-ZyoY";
const primoCocoSily = "https://www.youtube.com/watch?v=zNgOKYx_khk";

function login() {
  bot.login(token);
}

function PlayAudio(url) {
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

bot.on("ready", () => {
  console.log(`bot running`);
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "si") {
    PlayAudio(siuAudio);
  }

  if (msg.content === prefixCommand + "iii") {
    PlayAudio(siuAudio);
  }
});

bot.on("message", (msg) => {
  if (msg.content === prefixCommand + "info") {
    msg.channel.send({
      files: [prefixImage + "teLaCreisteWe.jpg"],
    });
  }

  if (msg.content === prefixCommand + "ward") {
    msg.channel.send({
      files: [prefixImage + "ward.jpg"],
    });
  }

  if (msg.content === prefixCommand + "xd") {
    msg.channel.send({
      files: [prefixImage + "xd.jpg"],
    });
  }

  if (msg.content === prefixCommand + "name") {
    msg.channel.send({
      files: [prefixImage + "name.jpg"],
    });
  }

  if (msg.content === ":virgo_senial:") {
    msg.channel.send({
      files: [prefixImage + "ranked.jpg"],
    });
  }

  if (msg.content === prefixCommand + "alv") {
    msg.channel.send({
      files: [prefixImage + "alv.jpg"],
    });
  }
});

login();
