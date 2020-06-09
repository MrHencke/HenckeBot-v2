var path = require("path")
const sound = require(path.join(__dirname, '..', '..', '..', 'res/sound.js'));

module.exports = {
    name: 'coffin',
    description: '',
  category: 'sound',
  type: 'random',
    aliases: [''],
    execute(bot, msg, args) {
var url =        "https://www.myinstants.com/media/sounds/hq-coffin-dance-funeral-vicetone-tony-igy-astronomia.mp3"
                        sound(url,msg.member.voice.channel, msg);    },
};