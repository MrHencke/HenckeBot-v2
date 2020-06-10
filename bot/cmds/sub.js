const { meme } = require("memejs") 

module.exports = {
    name: 'sub',
    description: 'Brukes ved !sub <navnet på en subreddit>, gir et tilfeldig bilde fra gitt subreddit',
  category: 'meme',
    aliases: ['r/'],
    execute(bot, msg, args) {
        var subreddit = args[0];
            meme(subreddit, function(err, data) {
            if (err) return console.error(err);
            msg.channel.send(data.url);
              });     
    },
};