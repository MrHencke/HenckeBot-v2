const Discord = require("discord.js");
const path = require("path");
const cmdSetup = require(path.join(__dirname, "..", "res/util/cmdSetup.js"));
const intro = require(path.join(__dirname, "..", "res/util/introLydManager.js"));
const msgIntro = require(path.join(__dirname, "..", "res/util/msgIntro.js"));
const introSetup = require(path.join(__dirname, "..", "res/util/introSetup.js"));
const msgCmd = require(path.join(__dirname, "..", "res/util/msgCmd.js"));
const botReady = require(path.join(__dirname, "..", "res/util/botReady.js"));
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.introSound = new Discord.Collection();

cmdSetup(bot);

botReady(bot);

introSetup(bot);
intro(bot);

bot.on("message", async msg => {
  
  msgIntro(msg);
  
  msgCmd(msg, bot, process.env.prefix)
  
});

bot.login(process.env.token);
