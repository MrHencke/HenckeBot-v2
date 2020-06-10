const path = require("path");
const land = require(path.join(__dirname, "..", "..", "res/lists/countries.json"));

module.exports = {
    name: 'ferie',
    description: 'Gir deg et forslag på et feriested',
    category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
           var feindex = Math.floor(Math.random() * land.length);
                msg.reply(" du burde prøve å reise til: " + land[feindex].name + "\n" + "https://en.wikipedia.org/wiki/" + land[feindex].name)    },
};