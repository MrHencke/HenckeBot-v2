var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));

module.exports = {
    name: 'invite',
    description: '',
    category: 'hjelpemetode',
    aliases: [''],
    execute(bot, msg, args) {
msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=709760720836755477&permissions=104332608&scope=bot");    
    },
};