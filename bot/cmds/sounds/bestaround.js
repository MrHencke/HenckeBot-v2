var path = require("path")
const sound = require(path.join(__dirname, '..', '..', '..', 'res/sound.js'));

module.exports = {
    name: 'bestaround',
    description: '',
  category: 'sound',
  type: 'random',
    aliases: [''],
    execute(bot, msg, args) {
                  var url =    "https://www.myinstants.com/media/sounds/youre-the-best-around-by-joe-esposito-mp3cut.mp3"
                        sound(url,msg.member.voice.channel, msg);    
    },
};