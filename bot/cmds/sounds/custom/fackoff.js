const path = require("path");
const sound = require(path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "res/sound.js"
));

module.exports = {
  name: "fackoff",
  bruker: "Henrik",
  serveronly: true,
  serverID: '612947002853949458',
  description: "en custom sound",
  category: "customsound",
  aliases: [""],
  execute(bot, msg, args) {
    var url = "https://www.myinstants.com/media/sounds/fuckoff.mp3";
    sound(url, msg.member.voice.channel, msg);
                          }
                  };
