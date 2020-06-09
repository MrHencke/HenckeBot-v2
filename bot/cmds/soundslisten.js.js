module.exports = {
  name: 'listen',
    description: '',
  category: 'experimental',
    aliases: [''],
    execute(bot, msg, args) {
      bot.on("voiceStateUpdate", async (oldState, newState) => {
      var server = newState.guild.id;
      if (server == "612947002853949458") {
          var member = newState.member
          var isReady = true;
          var voiceChannel = newState.channel;
          const memberVoiceChannel = member.voice.channel
            const connection = await memberVoiceChannel.join()
            connection.on('speaking', (user, speaking) => {
            if(voiceChannel != "undefined"){
             if (speaking && isReady) {
              console.log(`I'm listening to ${user.username}`)
              isReady = false
              sound("https://www.myinstants.com/media/sounds/great-success-borat.mp3", voiceChannel, msg)
            } else {
              isReady = true
              console.log(`I stopped listening to ${user.username}`)
            }
            }
            });
      }})
        msg.member.voice.channel.join().then(connection => {
        const dispatcher = connection.play("https://www.myinstants.com/media/sounds/so-long-gayboys.mp3", { volume: 0});
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