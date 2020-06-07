const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const roast = require("../res/roast.json");
const comp = require("../res/compliments.json");
const quote = require("../res/quote.json");
const land = require("../res/countries.json");
const film = require("../res/movies.json");
const custom = require("../res/customClips.json");
const maktsyk = require("../res/maktSykListe.json");
const { meme } = require("memejs") 
const teet = require("reddittits")
const fourk = require("reddit4k")
const yt = require("scrape-youtube").default;
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.once("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log(`Ready to fuck shit up`);
    bot.user.setActivity("my pp", {
        type: "STREAMING",
        url: "https://www.twitch.tv/mrhencke"
    });
});

bot.on("message", async msg => {
  if(msg.author.bot) return;
    
        if(msg.content.substring(0, 1) == "!"){
        var args = msg.content.substring(1).split(" ");
        console.log(args);
        var cmd = args[0];
          console.log(cmd);
        args = args.splice(1);
          console.log(args);
        const commandName = cmd.toLowerCase();
          console.log(commandName);
        const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
          console.log(command);
          if (!command) return;
         
          try {
          command.execute(msg, args);
          } catch (error) {
	        console.error(error);
	        msg.reply('Oops, den commanden gikk skeis');
    }
  }
});


bot.login(process.env.token);
