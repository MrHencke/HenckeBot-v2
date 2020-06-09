const Discord = require("discord.js");
const yt = require("scrape-youtube").default;
const ytdl = require("ytdl-core");

module.exports = {
    name: 'p',
    description: 'Spiller musikk fra youtube ved søk eller direkte link',
  category: 'musikk',
    aliases: [''],
    execute(bot, msg, args) {
           var link;
                try {
                  if(msg.member.voice.channel !== null){
                    if (args[0].substring(0, 6) != "https:") {
                        var search = args.join(" ");
                        yt.searchOne(search, { type: "video" }).then(results => {
                            link = results.link;
                            const playin = new Discord.MessageEmbed()
                                .setColor("#0099ff")
                                .setTitle("Now Playing:")
                                .setTitle(results.title)
                                .setURL(results.link)
                                .setAuthor("HenckeBot Music", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374", "https://github.com/MrHencke")
                                .setDescription(results.description)
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
    },
};

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