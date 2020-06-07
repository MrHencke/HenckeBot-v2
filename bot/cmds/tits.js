const { meme } = require("memejs") 

module.exports = {
    name: 'tits',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
        var subreddit = "fortyfivefiftyfive";
            meme(subreddit, function(err, data) {
            if (err) return console.error(err);
            if(msg.channel.nsfw){
            msg.channel.send(data.url);
            }else{
              msg.channel.send("Gå inn i en NSFW-kanal din nepe")
            }
              });     },
};