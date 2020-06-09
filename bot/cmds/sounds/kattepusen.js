var path = require("path")
const sound = require(path.join(__dirname, '..', '..', '..', 'res/sound.js'));

module.exports = {
    name: 'kattepusen',
    description: '',
  category: 'sound',
    aliases: [''],
    execute(bot, msg, args) {
        var url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fkattepusen.mp3?v=1589659577337"
                         sound(url,msg.member.voice.channel, msg);
    },
};