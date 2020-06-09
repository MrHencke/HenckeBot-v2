const lyrics = require("node-lyrics-api");

module.exports = {
    name: 'syngtts',
    description: 'Synger en sang',
  category: 'meme',
    aliases: [''],
    execute(bot, msg, args) {
      var Title = args.join(' ');
        lyrics(Title).then(result => {
    if(result.content[0].lyrics.length>1999 && result.content[0].lyrics.length<3998 ){
      var del1 = result.content[0].lyrics.substring(0,1999)
      msg.channel.send(del1,{ tts: true });
      var del2 = result.content[0].lyrics.substring(1999,result.content[0].lyrics.length)
    } else{
    msg.channel.send(result.content[0].lyrics,{ tts: true });
      }
}).catch(error => {
    msg.channel.send("Fant ikke noe sang å synge :c");
});  
    },
};