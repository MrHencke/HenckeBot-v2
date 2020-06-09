var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'tossacoin',
    description: '',
  category: 'sound',
    aliases: [''],
    execute(bot, msg, args) {
          var url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FThe%20Witcher%20Soundtrack%20-%20Toss%20A%20Coin%20To%20Your%20Witcher%20Lyrics.mp3?v=1589824745592"
                        sound(url,msg.member.voice.channel, msg);     
    },
};