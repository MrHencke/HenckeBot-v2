const Discord = require("discord.js");
const yt = require("scrape-youtube").default;
const ytdl = require("ytdl-core");
const embed = require(__dirname + "/youtubeEmbed.js")

module.exports = function player(bot, msg, args) {
var link;
try {
  
                  if(msg.member.voice.channel !== null){
                    if (args[0].substring(0, 6) != "https:") {
                        var search = args.join(" ");
                        yt.searchOne(search, { type: "video" }).then(results => {
                          if (results == null) return;
                            link = results.link;
                          
                            embed(msg, results);
                          
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