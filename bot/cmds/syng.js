const lyrics = require("azlyrics-scraper");

module.exports = {
    name: 'syng',
    description: 'Synger en sang',
    aliases: [''],
    execute(bot, msg, args) {
      var Title = args.join(' ');
        lyrics.getLyric( Title ).then(result => {
    console.log(result[0]);
    msg.channel.send(result[0],{ tts: true });
}).catch(error => {
    msg.channel.send("Fant ikke noe sang å synge :c");
});  
    },
};