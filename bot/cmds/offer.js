var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'offer',
    description: '',
  category: 'sound',
    aliases: [''],
    execute(bot, msg, args) {
var url =        "https://www.myinstants.com/media/sounds/godfather-5.mp3"
                        sound(url,msg.member.voice.channel, msg);    },
};