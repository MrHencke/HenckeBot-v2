const { meme } = require("memejs") 

module.exports = {
    name: '4k',
    description: '',
    aliases: ['firekå'],
    execute(bot, msg, args) {
      if(!msg.channel.nsfw){
        msg.channel.send("Gå inn i en NSFW-kanal din nepe")
      }else{
            var subreddit = "UHDnsfw";
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
                 
