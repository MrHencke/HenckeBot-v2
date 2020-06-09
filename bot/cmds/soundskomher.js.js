var path = require("path");
const sound = require(path.join(__dirname, "..", "..", "res/sound.js"));

module.exports = {
  name: "komher",
  description: "",
  category: "tekst",
  aliases: [""],
  execute(bot, msg, args) {
    msg.member.voice.channel.join();
  }
};
