var path = require("path");
const sound = require(path.join(__dirname, "..", "..", "res/sound.js"));
const ytdl = require("ytdl-core");

module.exports = {
  name: "indie",
  description: "",
  aliases: [""],
  execute(bot, msg, args) {
    var link = "https://www.youtube.com/watch?v=oVi5gtzTDx0";
    var stream = ytdl(
      link,
      { liveBuffer: "20000" },
      { filter: "audioonly" },
      { volume: "0.2" }
    );
    sound(stream, msg.member.voice.channel, msg);
  }
};
