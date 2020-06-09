const Discord = require("discord.js");

module.exports = function embed(msg, results) {
  var mins = Math.floor(results.duration/60)
                            var secs = results.duration%60;
                            const playin = new Discord.MessageEmbed()
                                .setColor("#ff0000")
                                .setTitle("Now Playing:")
                                .setTitle(results.title)
                                .setURL(results.link)
                                .setAuthor("HenckeBot Music", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374", "https://github.com/MrHencke")
                                .setDescription(results.description)
                                .addField('Duration', mins + " minutes, " + secs + " seconds" , true)
                                .setImage(results.thumbnail)
                                .setTimestamp()
                                .setFooter("HenckeBot™ ©2020", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374");
                            msg.channel.send("Now playing: ");
                            msg.channel.send(playin);
}