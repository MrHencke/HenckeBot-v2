const Discord = require("discord.js");
const path = require("path");
const sound = require(path.join(__dirname, "..", "res/sound.js"));
const cmdSetup = require(path.join(__dirname, "..", "res/util/cmdSetup.js"));
const intro = require(path.join(__dirname, "..", "res/util/introLydManager.js"));
const introMsg = require(path.join(__dirname, "..", "res/util/msgIntro.js"));
const botReady = require(path.join(__dirname, "..", "res/util/botReady.js"));
const bot = new Discord.Client();
const prefix = process.env.prefix;

bot.commands = new Discord.Collection();

cmdSetup(bot);

botReady(bot)

intro(bot);

bot.on("message", async msg => {
  if(msg.author.bot) return;
  
  introMsg(msg);
  
  
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  
  if(cmd == "hjelp" && args != null){
    bot.commands.find(cmd => cmd.description&& cmd.aliases.includes(commandName));
  }else{
  
  const commandName = cmd.toLowerCase();
  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;
  try {
    command.execute(bot, msg, args);
  } catch (err) {
    console.error(err);
    msg.reply("Oops, " + commandName + " gikk rett til helvete");
  }
  }
});

bot.login(process.env.token);