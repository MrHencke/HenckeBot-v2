var path = require("path")
const player = require(path.join(__dirname, '..', '..', 'res//util/youtube-player.js'));
                       
module.exports = {
    name: 'p',
    description: 'Spiller musikk fra youtube ved søk eller direkte link',
    category: 'youtube',
    aliases: ['play', 'spillav'],
    execute(bot, msg, args) {
        player(bot, msg, args);
    },
};

