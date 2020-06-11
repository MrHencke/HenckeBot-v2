const path = require("path");
const sound = require(path.join(__dirname, "..", "/sound.js"));

module.exports = function lyd(bot){
bot.on("voiceStateUpdate", (oldState, newState) => {
  try {
    var server = newState.guild.id;
    var person = newState.member.id.toString();
    if (server == "612947002853949458" || person == "133671473591222273") {
      if (newState.channel != null) {
        var bots = newState.channel.members.filter(x => x.user.bot).size;
        if (1 > bots) {
          var voiceChannel = newState.channel;
          if (
            oldState.channel != newState.channel &&
            newState.channelID != "undefined"
          ) {
            
          } else return;
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});
}