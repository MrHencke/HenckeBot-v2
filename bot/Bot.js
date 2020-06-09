const Discord = require("discord.js");
const fs = require("fs");
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
bot.once("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  console.log(`Ready to fuck shit up`);
  bot.user.setActivity("my pp", {
    type: "STREAMING",
    url: "https://www.twitch.tv/mrhencke"
  });
});

intro(bot);


bot.on("message", async msg => {
  if(msg.author.bot) return;
  
  introMsg(msg);
  
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const commandName = cmd.toLowerCase();
  const command =
    bot.commands.get(commandName) ||
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;

  try {
    command.execute(bot, msg, args);
  } catch (err) {
    console.error(err);
    msg.reply("Oops, " + commandName + " gikk rett til helvete");
  }
  //}
});

bot.login(process.env.token);
