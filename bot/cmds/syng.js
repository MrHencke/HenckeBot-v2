const lyrics = require("node-lyrics-api");
const discordTTS=require("discord-tts");
const discord = require("discord.js");

module.exports = {
    name: 'syng',
    description: 'Synger en sang',
    aliases: [''],
    execute(bot, msg, args) {
      var Title = args.join(' ');
        lyrics(Title).then(result => {
        if(result.content[0].lyrics.length>199){
          var i = 0;
          var resultat = result.content[0].lyrics
          var resultata = resultat.match(/[\s\S]{199}/);
        console.log(resultata[i])
        sound(discordTTS.getVoiceStream(resultata[i]), msg.member.voice.channel, msg, resultata)
          
        }    
}).catch(error => {
    msg.channel.send("Fant ikke noe sang å synge :c");
});  
    },
};


function sound(url, voiceChannel, msg, resultata) {
  try{
    var i = 0;
    if(voiceChannel != null && i < resultata.length){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.4});
        dispatcher.on("finish", end => sound(discordTTS.getVoiceStream(url[i++]),msg.member.voice.channel, msg));
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){
      //console.log(err)
    }}

