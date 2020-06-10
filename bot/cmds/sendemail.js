var path = require("path")
const mail = require(path.join(__dirname, '..', '..', 'res/util/mail.js'));

module.exports = {
    name: 'sendemail',
    description: 'Sender en e-post til en gitt adresse, med gitt innhold',
  category: 'tekst-personlig',
    aliases: ['email'],
    execute(bot, msg, args) {
          if (msg.author.id == process.env.HenckeID) {
                  
                } else {
                  msg.channel.send("Hadde vært litt broken  å la deg bruke dette.");
                    return;
                }     
    },
};