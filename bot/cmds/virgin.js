var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'virgin',
    description: '',
  category: 'sound',
    aliases: [''],
    execute(bot, msg, args) {
          var url =  "https://www.myinstants.com/media/sounds/no-dont-do-it-im-a-virgin.mp3"
                        sound(url,msg.member.voice.channel, msg);    
    },
};