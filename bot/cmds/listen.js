module.exports = {
  name: 'listen',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
      bot.on("voiceStateUpdate", async (oldState, newState) => {
      var server = newState.guild.id;
      if (server == "612947002853949458") {
          var member = newState.member
          var voiceChannel = newState.channel;
          const memberVoiceChannel = member.voice.channel
            const connection = await memberVoiceChannel.join()
            connection.on('speaking', (user, speaking) => {
            if(voiceChannel != "undefined"){
            if (speaking) {
              console.log(`I'm listening to ${user.username}`)
              sound("https://www.myinstants.com/media/sounds/great-success-borat.mp3", voiceChannel, msg)
            } else {
              console.log(`I stopped listening to ${user.username}`)
            }
            }
            });
      }})
        msg.member.voice.channel.join().then(connection => {
        const dispatcher = connection.play("https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fuskyldig.mp3?v=1589662459594", { volume: 0});
        dispatcher.destroy
    }).catch(err => console.log(err));
             }, 
            };

function sound(url, voiceChannel, msg) {
  try{
    if(voiceChannel != null){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.4});
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){
      //console.log(err)
    }}