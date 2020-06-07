const Discord = require("discord.js");

module.exports = function sound(url, voiceChannel, msg) {
  try{
    if(voiceChannel != null){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.4});
        dispatcher.on("finish", end => voiceChannel.leave());
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){
      //console.log(err)
    }}