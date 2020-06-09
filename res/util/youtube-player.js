const Discord = require("discord.js");
const yt = require("scrape-youtube").default;
const ytdl = require("ytdl-core");

module.exports = function player(bot, msg, args) {
var link;
try {
                  if(msg.member.voice.channel !== null){
                    if (args[0].substring(0, 6) != "https:") {
                        var search = args.join(" ");
                        yt.searchOne(search, { type: "video" }).then(results => {
                          if (results == null) return;
                          //console.log(results)
                            link = results.link;
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
                            const stream = ytdl(link, { filter: "audioonly" }, { quality: "highestaudio" });
                                sound(stream, msg.member.voice.channel, msg);
                          })
                          } else {
                        link = args[0];
                        const stream = ytdl(link, { filter: "audioonly" }, { quality: "highestaudio" } );
                            sound(stream, msg.member.voice.channel, msg);
                          }
                    }else msg.channel.send("Gå nå inn i en kanal din nepe");
                    } catch (err) {
                    console.log(err);       } 

function sound(url, voiceChannel, msg) {
  try{
    if(voiceChannel != null){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.2});
        dispatcher.on("finish", end => voiceChannel.leave());
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){
      //console.log(err)
    }}
}