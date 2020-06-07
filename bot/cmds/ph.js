var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'ph',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
var url =          "https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3"
                        sound(url,msg.member.voice.channel, msg);    },
};