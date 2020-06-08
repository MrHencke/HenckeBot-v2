var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

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
          //if ( oldState.channel != newState.channel && newState.channelID != "undefined") {
            
            const connection = await memberVoiceChannel.join()
            voiceChannel.on('speaking', (user, speaking) => {
            if (speaking) {
              console.log(`I'm listening to ${user.username}`)
            } else {
              console.log(`I stopped listening to ${user.username}`)
            }
            });
            
            
            
            
      //    }
      }})
 
             }, 
            };