var path = require("path");
const roast = require(path.join(__dirname, "..", "..", "res/lists/roastc.json"));

module.exports = {
  name: "roastc",
  description: "Brukes ved !roastc @<person>, Roaster noen.",
  category: 'tekst',
  aliases: ["svi"],
  execute(bot, msg, args) {
    if(args[1] = null){
    var mentioned = args[0];
    msg.delete().catch(O_o => {});
    msg.channel.send(
    mentioned + " " + roast[Math.floor(Math.random() * roast.length)]
    );
    }else if(args[1] == "tts"){
      
      
    }

  }
};