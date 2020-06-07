const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const cmdFld = (__dirname + "/cmds");
const commandFiles = fs.readdirSync(cmdFld).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(cmdFld + "/" + file);
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
	        msg.reply('Oops, ' + commandName + ' gikk til helvete');
    }
  });

bot.login(process.env.token);
