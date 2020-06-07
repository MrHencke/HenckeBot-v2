var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));
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
        if(result.content[0].lyrics<199){
          var resultat = result.content[0].lyrics
          console.log(resultat);
        //var resultata = resultat.match(/[\s\S]{199}/);
        }
        sound(discordTTS.getVoiceStream("test123"),msg.member.voice.channel, msg)
}).catch(error => {
    msg.channel.send("Fant ikke noe sang å synge :c");
});  
    },
};

