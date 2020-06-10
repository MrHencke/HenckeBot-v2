var path = require("path")
const sendMail = require(path.join(__dirname, '..', '..', 'res/util/mail.js'));

module.exports = {
    name: 'sendemail',
    description: 'Brukes ved !sendemail <e-post> <subject> <innhold>, Sender en e-post til en gitt adresse, med gitt innhold',
  category: 'tekst-personlig',
    aliases: ['email'],
    execute(bot, msg, args) {
          if (msg.author.id == process.env.HenckeID) {
                  var toMail
                  var subject
                  var text
                  console.log(args)    
                  args.shift()
                  console.log(args)    
                  args.shift()
                  console.log(args)    
                  args.shift()
                  console.log(args)    
                  args.shift()
                //sendMail(toMail, subject, text)
                } else {
                  msg.channel.send("Hadde vært litt broken  å la deg bruke dette.");
                    return;
                }     
    },
};