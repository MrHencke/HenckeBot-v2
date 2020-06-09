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
            if (person == "132193704860450817") {
              var url1 =
                "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2Fh%C3%A5vardo.mp3?v=1590488992607";
              sound(url1, voiceChannel);
            } else if (person == "133671473591222273") {
              var url2 =
                "https://www.myinstants.com/media/sounds/aplausos_2.mp3";
              sound(url2, voiceChannel);
            } else {
              var url3 =
                "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F%C3%A5j%C3%A6vli.mp3?v=1589967082829";
              sound(url3, voiceChannel);
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