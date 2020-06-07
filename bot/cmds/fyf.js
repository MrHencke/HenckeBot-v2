var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'fyf',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
 var url = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2Ffyfae.mp3?v=1589967083369"
                sound(url,msg.member.voice.channel, msg);    },
};