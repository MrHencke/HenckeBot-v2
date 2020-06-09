const discordTTS=require("discord-tts");
const discord = require("discord.js");

module.exports = {
    name: 'snakk',
    description: 'Synger en sang',
  category: 'meme',
    aliases: ['sivoice'],
    execute(bot, msg, args) {
      msg.delete().catch(O_o => { });
      var snakk = args.join(' ');
        sound(discordTTS.getVoiceStream(snakk), msg.member.voice.channel, msg) 
    },
};

function sound(url, voiceChannel, msg) {
  try{
   
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.4});
        dispatcher.on("finish", end => voiceChannel.leave());
    }).catch(err => console.log(err));
    }catch(err){
      msg.channel.send("Sangstemmen er ikke helt på plass i dag, sorry.")
    }}
