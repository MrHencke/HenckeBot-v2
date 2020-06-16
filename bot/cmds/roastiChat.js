var path = require("path");
const roastlist = require(path.join(__dirname, "..", "..", "res/lists/roast.json"));
const snakk = require(path.join(__dirname, "..", "..", "res/util/snakkiVoice.js"));

module.exports = {
  name: "roastichat",
  description: "Brukes ved !chatroast @<person>, Roaster noen.",
  category: 'tekst',
  aliases: ["chatroast", "svitts"],
  execute(bot, msg, args) {
    var mentioned
    const user = msg.mentions.users.first();
  if (user === undefined) {
    mentioned = args[0];
  }else{
    mentioned = user.username
  }
    var roast = mentioned + " " + roastlist[Math.floor(Math.random() * roastlist.length)]
    msg.delete().catch(O_o => {});
    snakk(msg, roast)  
  }
};