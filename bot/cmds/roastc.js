var path = require("path");
const roastc = require(path.join(__dirname, "..", "..", "res/lists/roastc.json"));
const snakk = require(path.join(__dirname, "..", "..", "res/util/snakkiVoice.js"));

module.exports = {
  name: "roastc",
  description: "Brukes ved !roastc @<person>, Roaster noen, mer egne roasts.",
  category: 'tekst',
  aliases: ["svi"],
  execute(bot, msg, args) {
    var mentioned
    const user = msg.mentions.users.first();
  if (user === undefined) {
    mentioned = args[0];
  }else{
    mentioned = user.username
  }
    
    var roast = mentioned + " " + roastc[Math.floor(Math.random() * roastc.length)]
    if(args[1] = null){
    msg.delete().catch(O_o => {});
    msg.channel.send(roast);
    }else if(args[1] = "tts"){
    msg.delete().catch(O_o => {});
    snakk(msg, roast)  
    }

  }
};