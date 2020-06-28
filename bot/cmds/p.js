var path = require("path")
const player = require(path.join(__dirname, '..', '..', 'res/util/youtube-player.js'));
                       
module.exports = {
    name: 'p',
    description: 'Brukes slik: !p <søkeord> eller <link>, Spiller musikk fra youtube ved søk eller direkte link',
    category: 'youtube',
    aliases: ['play', 'spillav', 'y'],
    execute(bot, msg, args) {
        player(bot, msg, args);
    },
};

