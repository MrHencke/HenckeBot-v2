var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
  name: 'listen',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
     msg.member.voice.channel.join();
      bot.on("voiceStateUpdate", async (oldState, newState) => {
      var server = newState.guild.id;
      if (server == "612947002853949458") {
          var member = newState.member
          var voiceChannel = newState.channel;
          const memberVoiceChannel = member.voice.channel
            const connection = await memberVoiceChannel.join()
            connection.on('speaking', (user, speaking) => {
            if (speaking) {
              console.log(`I'm listening to ${user.username}`)
            } else {
              console.log(`I stopped listening to ${user.username}`)
            }
            });
      }})
             }, 
            };