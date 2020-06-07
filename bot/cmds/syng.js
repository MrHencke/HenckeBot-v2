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
          var resultat = result.content[0].lyrics
          var resultata = resultat.match(/([\s\S]{1,199})/g);
        console.log(resultata[1])
        sound(discordTTS.getVoiceStream(resultata[0]), msg.member.voice.channel, msg, resultata)
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
        dispatcher.on("finish", i++, end => sound(discordTTS.getVoiceStream(resultata[i+1]),msg.member.voice.channel, msg, resultata));
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){
      //console.log(err)
    }}

