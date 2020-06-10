var path = require("path")
const sound = require(path.join(__dirname, '..', '..', '..', 'res/sound.js'));

module.exports = {
    name: 'åsane',
    description: 'Åsanesangen',
  category: 'sound',
  type: 'random',
    aliases: ['aasane'],
    execute(bot, msg, args) {
      var url = "https://cdn.glitch.com/6b8d7e3b-a718-4c94-a496-df1ab9412724%2FMartyrer%20p%C3%A5%20Myrdal%20gress%20%5B%C3%85sane%20Fotball%5D.mp3?v=1591792627282";
                sound(url, msg.member.voice.channel, msg);    
    },
};