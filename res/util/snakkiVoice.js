const discordTTS=require("discord-tts");
const discord = require("discord.js");

module.exports = function snakk(msg, beskjed){
        sound(discordTTS.getVoiceStream(beskjed, "nb-NO"), msg.member.voice.channel, msg) 
    
};

function sound(url, voiceChannel, msg) {
  try{
   
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.4});
        dispatcher.on("finish", end => voiceChannel.leave());
    }).catch(err => console.log(err));
    }catch(err){
      msg.channel.send("Sorry det gikk til helvete.")
    }}