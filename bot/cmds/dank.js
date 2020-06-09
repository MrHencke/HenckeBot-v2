const { meme } = require("memejs") 

module.exports = {
    name: 'dank',
    description: '',
  category: 'meme',
    aliases: [''],
    execute(bot, msg, args) {
            meme('dankmemes', function(err, data) {
            if (err) return console.error(err);
            msg.channel.send(data.url);
              });     
    },
};