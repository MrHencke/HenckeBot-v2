const path = require("path");
const quote = require(path.join(__dirname, "..", "..", "res/quote.json"));
const Discord = require("discord.js")

module.exports = {
    name: 'quote',
    description: '',
  category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
      
              var index = Math.floor(Math.random() * quote.length);
               var kvote = ('"' + quote[index].quoteText + '"');
                const mbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(quote[index].quoteText)   
                .addField("av", quote[index].quoteAuthor , true)
                .setFooter("HenckeBot™  ©2020", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374");
                msg.channel.send(mbed)    },
};