module.exports = {
    name: 'stop',
    description: '',
  category: 'hjelpemetode',
    aliases: ['stopplaying'],
    execute(bot, msg, args) {    
      try{
        var voiceChannel = msg.member.voice.channel;
    if(voiceChannel != null){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play("https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fuskyldig.mp3?v=1589662459594", { volume: 0});
        dispatcher.destroy
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){}
    },
};