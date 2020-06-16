var path = require("path");
const roast = require(path.join(__dirname, "..", "..", "res/lists/roast.json"));
const snakk = require(path.join(__dirname, "..", "..", "res/util/snakkiVoice.js"));

module.exports = {
  name: "roast",
  description: "Brukes ved !roastc @<person>, Roaster noen, mer egne roasts.",
  category: 'tekst',
  aliases: ["svi"],
  execute(bot, msg, args) {
    
    var mentioned = args[0];
    msg.delete().catch(O_o => {});
    msg.channel.send(
      mentioned + " " + roast[Math.floor(Math.random() * roast.length)])

      },
};
