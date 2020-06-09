var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'mgs',
    description: '',
  category: 'sound',
    aliases: [''],
    execute(bot, msg, args) {
var url =       "https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3"
                        sound(url,msg.member.voice.channel, msg);    },
};