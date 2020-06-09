var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'pink',
    description: '',
  category: 'sound',
    aliases: [''],
    execute(bot, msg, args) {
          var url =  "https://www.myinstants.com/media/sounds/the-pink-panther-theme-song-original-version.mp3"
                        sound(url,msg.member.voice.channel, msg);    
    },
};