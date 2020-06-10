var path = require("path")
const sendMail = require(path.join(__dirname, '..', '..', 'res/util/mail.js'));

module.exports = {
    name: 'sendemail',
    description: 'Brukes ved !sendemail <e-post> <subject> <innhold>, Sender en e-post til en gitt adresse, med gitt innhold',
  category: 'tekst-personlig',
    aliases: ['email'],
    execute(bot, msg, args) {
          if (msg.author.id == process.env.HenckeID) {
                  var toMail = args[0]
                  args.shift()
                  var subject = args[0]
                  args.shift()
                  var text = args.join(" ")

                  sendMail(toMail, subject, text)
                  msg.channel.send("Mail sendt.")
                } else {
                  msg.channel.send("Hadde vært litt broken  å la deg bruke dette.");
                    return;
                }     
    },
};