var path = require("path");
const sound = require(path.join(__dirname, "..", "..", "res/sound.js"));

module.exports = {
  name: "komher",
  description: "Caller boten til voice",
  category: "tekst",
  aliases: ["kom"],
  execute(bot, msg, args) {
    msg.member.voice.channel.join();
  }
};
