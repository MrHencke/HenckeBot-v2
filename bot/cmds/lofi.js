var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));
const ytdl = require("ytdl-core");

module.exports = {
    name: 'lofi',
    description: '',
  category: 'music',
    aliases: [''],
    execute(bot, msg, args) {
            var link = "https://www.youtube.com/watch?v=5qap5aO4i9A";
                     var stream = ytdl(link,{ liveBuffer: "20000" },{ filter: "audioonly" },{ volume: "0.1" });
                    sound(stream, msg.member.voice.channel, msg);    
    },
};