module.exports = {
    name: 'stop',
    description: 'Stopper botens avspilling uten at den forlater voice',
  category: 'hjelpemetode',
    aliases: ['stopplaying'],
    execute(bot, msg, args) {    
      try{
        var voiceChannel = msg.member.voice.channel;
    if(voiceChannel != null){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play("https://www.justseat.no/.mp3", { volume: 0});
        dispatcher.destroy
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){}
    },
};