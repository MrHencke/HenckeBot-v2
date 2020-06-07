const { meme } = require("memejs") 

module.exports = {
    name: 'sub',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
        var subreddit = args[0];
            meme(subreddit, function(err, data) {
            if (err) return console.error(err);
            msg.channel.send(data.url);
              });     
    },
};