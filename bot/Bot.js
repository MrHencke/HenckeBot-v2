const Discord = require("discord.js");
const path = require("path");
const cmdSetup = require(path.join(__dirname, "..", "res/util/cmdSetup.js"));
const introExp = require(path.join(__dirname, "..", "res/util/introManagerExp.js"));
const introSetup = require(path.join(__dirname, "..", "res/util/introSetup.js"));
const msgIntro = require(path.join(__dirname, "..", "res/util/msgIntro.js"));
const msgCmd = require(path.join(__dirname, "..", "res/util/msgCmd.js"));
const botReady = require(path.join(__dirname, "..", "res/util/botReady.js"));
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.introSound = new Discord.Collection();

bot.once("ready", () => {
    botReady(bot); 
  });

  cmdSetup(bot);
  introSetup(bot);
introExp(bot)
bot.on("message", async msg => {
  
  msgIntro(msg);
  
  msgCmd(msg, bot, process.env.prefix)
  
});

bot.login(process.env.token);
