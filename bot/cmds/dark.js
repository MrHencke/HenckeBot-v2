const { meme } = require("memejs") 

module.exports = {
  name: "dark",
  description: "Gir dark memes",
  category: 'meme',
  aliases: [""],
  execute(bot, msg, args) {
      meme('darkmeme', function(err, data) {
            if (err) return console.error(err);
            msg.channel.send(data.url);
              });  }
};
