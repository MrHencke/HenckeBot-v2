const path = require("path");
const sound = require(path.join(__dirname, "..", "/sound.js"));

module.exports = function lyd(bot){
bot.on("voiceStateUpdate", (oldState, newState) => {
  try {
    var server = newState.guild.id;
    var person = newState.member.id.toString();
    var person2 = newState.member.id
    if (server == "612947002853949458" || person == "133671473591222273") {
      if (newState.channel != null) {
        var bots = newState.channel.members.filter(x => x.user.bot).size;
        if (1 > bots) {
          var voiceChannel = newState.channel;
          if (
            oldState.channel != newState.channel &&
            newState.channelID != "undefined"
          ) {
            console.log(person)
            console.log(person2)
            var intro = bot.commands.get(person)
            console.log(intro)
            if(!intro) return
            if(intro.toggled){
              sound(intro.url, voiceChannel)
            }
          } else return;
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});
}