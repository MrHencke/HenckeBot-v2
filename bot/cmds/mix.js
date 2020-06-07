var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));
const ytdl = require("ytdl-core");

module.exports = {
    name: 'mix',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
 var link = "https://www.youtube.com/watch?v=1itSqkbXIlU";
                     var stream = ytdl(link,{ liveBuffer: "20000" },{ filter: "audioonly" },{ volume: "0.2" });
                    sound(stream, msg.member.voice.channel, msg);    },
};