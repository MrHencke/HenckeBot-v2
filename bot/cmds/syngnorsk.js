const lyrics = require("node-lyrics-api");
const discordTTS=require("discord-tts");
const discord = require("discord.js");

module.exports = {
    name: 'syngnorsk',
    description: 'Brukes ved !syngnorsk <tittel på sang>, Synger en sang i voice, på norsk!',
  category: 'meme',
    aliases: ['norsksang'],
    execute(bot, msg, args) {
      var Title = args.join(' ');
        lyrics(Title).then(result => {
        if(result.content[0].lyrics.length>199){
          var resultat = result.content[0].lyrics
          var resultata = resultat.match(/([\s\S]{1,199})/g);
        console.log(resultata[1])
          var i;
          msg.channel.send("Synger nå: " + result.content[0].title)
        sound(discordTTS.getVoiceStream(resultata[0], "nb-NO"), msg.member.voice.channel, msg, resultata, i = 0)
        }    
}).catch(error => {
    msg.channel.send("Fant ikke noe sang å synge :c");
});  
    },
};

function sound(url, voiceChannel, msg, resultata, i) {
  try{
    if(msg.member.voice.channel != null && i < resultata.length){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.4});
        dispatcher.on("finish", end => sound(discordTTS.getVoiceStream(resultata[i+1], "nb-NO"),msg.member.voice.channel, msg, resultata, i = i+1));
    }).catch(err => console.log("Det kom en feil på sang"));
    }else{
      msg.channel.send("Tada! Applaus kan taes på DMs") ;
    voiceChannel.leave();
    } 
    }catch(err){
      msg.reply("Sangstemmen er ikke helt på plass i dag, sorry.")
    }}