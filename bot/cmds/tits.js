const { meme } = require("memejs") 

module.exports = {
    name: 'tits',
    description: '',
    category: 'nsfw',
    aliases: [''],
    execute(bot, msg, args) {
      if(!msg.channel.nsfw){
        msg.channel.send("Gå inn i en NSFW-kanal din nepe")
      }else{
            var subreddit = "fortyfivefiftyfive";
            meme(subreddit, function(err, data) {
            if (err) return console.error(err);
            if(msg.channel.nsfw){
            msg.channel.send(data.url);
            }else{
              msg.channel.send("Gå inn i en NSFW-kanal din nepe")
            }
              });  
      }
    },
};