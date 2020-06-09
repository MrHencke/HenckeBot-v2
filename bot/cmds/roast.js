var path = require("path");
const roast = require(path.join(__dirname, "..", "..", "res/lists/roast.json"));

module.exports = {
  name: "roast",
  description: "",
  category: 'tekst',
  aliases: [""],
  execute(bot, msg, args) {
    var mentioned = args[0];
    msg.delete().catch(O_o => {});
    msg.channel.send(
      mentioned + " " + roast[Math.floor(Math.random() * roast.length)]
    );
  }
};
