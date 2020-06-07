const Discord = require("discord.js");
const fs = require("fs");
var path = require("path")
const sound = require(path.join(__dirname, '..', 'res/sound.js'));
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync(__dirname + "/cmds").filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(__dirname + "/cmds" + "/" + file);
	bot.commands.set(command.name, command);
}
const prefix = "!"

bot.once("ready", () => { 
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log(`Ready to fuck shit up`);
    bot.user.setActivity("my pp", {
        type: "STREAMING",
        url: "https://www.twitch.tv/mrhencke"
    });
});

bot.on("voiceStateUpdate", (oldState, newState) => {
    try {
        var server = newState.guild.id;
        var person = newState.member.id.toString();
        if (server == "612947002853949458" || person == "133671473591222273") {
            if (newState.channel != null) {
                var bots = newState.channel.members.filter(x => x.user.bot).size;
                if (1 > bots) {
                    var voiceChannel = newState.channel;
                    if (oldState.channel != newState.channel && newState.channelID != "undefined") {
                             if ( person == '132193704860450817' ){
                                          var url1 = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2Fh%C3%A5vardo.mp3?v=1590488992607";
                                          sound(url1, voiceChannel);
                            }else if( person == "133671473591222273" ){
                                          var url2 = "https://www.myinstants.com/media/sounds/aplausos_2.mp3";
                                          sound(url2, voiceChannel);
                            }else {
                                          var url3 = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F%C3%A5j%C3%A6vli.mp3?v=1589967082829";
                                        sound(url3, voiceChannel);
                            }} else return;
                }}}} catch (err) {
        console.log(err);}
});



bot.on("message", msg => {
   if (msg.content.includes("bad bot")) {
        msg.reply("Vi er kanskje en dårlig bot, MEN! Vi er ikke like utdatert søppel som en viss TrashBOT");
    } else if (msg.content.toLowerCase().includes(" ein") || msg.content.toLowerCase().includes("mykje") || msg.content.toLowerCase().includes("dinna") || msg.content.toLowerCase().includes("hugleik på staur")) {
        msg.reply("Nynorsk oppdaget, gjør som resten av moderne sivilisasjon og skriv på en forståelig målform.");
    } else if (msg.content.includes("good bot")) {
        msg.reply("Tusen takk, vi hos HenckeBot Inc Ltd. vet at vår bot er mye bedre enn TrashBOT, vennligst skriv et brev til denne søppelboten og gi 1-star review på google");
    }else if(toggleblock && msg.content.includes("hmm") && msg.author.id != '132193704860450817'){
       msg.channel.send({files: ["https://media.tenor.com/images/69983541b409be168812dfd95be4bbf2/tenor.gif"]});
    }else if(toggleblock && msg.content.includes("reee") && msg.author.id != '132193704860450817'){
       msg.channel.send({files: ["https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F1b72da8a-c1d0-48e4-92df-f8b35fe2fb40.bilde.png?v=1589880897535"]});
    }else if (toggleblock && msg.content.includes("https://tenor.com")){
                    for (var i = 0; i < maktsyk.length; i++){
                      if(msg.author.id = maktsyk[i].ID){
                        msg.delete().catch(O_o => { });}}
    } else if(msg.content.includes("nuddel")) {
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fskididdel.mp3?v=1589665443245",
                sound(url, msg.member.voice.channel, msg);
    }else if (msg.content.includes("F") && msg.content.length < 2) {
                msg.channel.send("F")
    }else if (msg.content.includes("!i")){
                 msg.delete().catch(O_o => { });
                for(var p = 0; p < msg.content.length-1; p++){
                  msg.channel.send("*I M A G I N E*");}
      
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
        const args = msg.content.slice(prefix.length).split(/ +/);
	      const cmd = args.shift().toLowerCase();
        const commandName = cmd.toLowerCase();
        const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
          if (!command) return;
         
          try {
          command.execute(bot, msg, args);
          } catch (err) {
	        console.error(err);
	        msg.reply('Oops, ' + commandName + ' gikk rett til helvete');
    }
  });

bot.login(process.env.token);
