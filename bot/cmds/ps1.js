var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'ps1',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
          var url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Ftest.mp3?v=1589659578379"
                        sound(url,msg.member.voice.channel, msg);     
    },
};