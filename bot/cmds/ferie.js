const path = require("path");
const land = require(path.join(__dirname, "..", "..", "res/lists/countries.json"));

module.exports = {
    name: 'ferie',
    description: 'Gir deg et forslag på et feriested',
    category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
           var feindex = Math.floor(Math.random() * land.length);
            var wikinavn = land[feindex].name
            var landnavn = wikinavn.replace("_", " ")
            
                msg.reply(" du burde prøve å reise til: " + landnavn + "\n" + "https://en.wikipedia.org/wiki/" + wikinavn)    },
};