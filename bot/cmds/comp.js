const path = require("path");
const comp = require(path.join(__dirname, "..", "..", "res/lists/compliments.json"));

module.exports = {
  name: "comp",
  description: "Brukes ved !comp @<person>, gir komplimenter",
  category: 'tekst',
  aliases: [""],
  execute(bot, msg, args) {
    var mentioned = args[0];
    msg.delete().catch(O_o => {});
    msg.channel.send(
      mentioned + " " + comp[Math.floor(Math.random() * comp.length)]
    );
  }
};
