const path = require("path");
const film = require(path.join(__dirname, "..", "..", "res/movies.json"));

module.exports = {
    name: 'film',
    description: '',
    category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
               var filmdata = film[Math.floor(Math.random() * film.length)]
                msg.channel.send("Jeg foreslår: "+ filmdata.title + " fra " + filmdata.year)    },
};