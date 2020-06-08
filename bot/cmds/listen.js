var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
  name: 'listen',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
    
      bot.on("voiceStateUpdate", (oldState, newState) => {

      var server = newState.guild.id;
      var person = newState.member.id.toString();
      if (server == "612947002853949458") {
      if (newState.channel != null) {
          var voiceChannel = newState.channel;
          if ( oldState.channel != newState.channel && newState.channelID != "undefined") {
          }}}}
 
  },  //execute
};   //export