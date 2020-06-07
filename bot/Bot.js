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
                                          var url = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2Fh%C3%A5vardo.mp3?v=1590488992607" //"https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3",
                                          sound(url, voiceChannel);
                            }else if( person == "133671473591222273" ){
                                          var url = "https://www.myinstants.com/media/sounds/aplausos_2.mp3" //"https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3",
                                          sound(url, voiceChannel);
                            }else {
                                          var url2 = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F%C3%A5j%C3%A6vli.mp3?v=1589967082829"   // "https://www.myinstants.com/media/sounds/you_were_banned_2.mp3" //"https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3",
                                        sound(url2, voiceChannel);
                            }} else return;
                }}}} catch (err) {
        console.log(err);}
});



bot.on("message", msg => {
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
