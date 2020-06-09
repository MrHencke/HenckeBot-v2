const Discord = require("discord.js");
const path = require("path");
const sound = require(path.join(__dirname, "..", "res/sound.js"));
const cmdSetup = require(path.join(__dirname, "..", "res/util/cmdSetup.js"));
const intro = require(path.join(__dirname, "..", "res/util/introLydManager.js"));
const msgIntro = require(path.join(__dirname, "..", "res/util/msgIntro.js"));
const msgCmd = require(path.join(__dirname, "..", "res/util/msgCmd.js"));
const botReady = require(path.join(__dirname, "..", "res/util/botReady.js"));
const bot = new Discord.Client();
const prefix = process.env.prefix;

bot.commands = new Discord.Collection();

cmdSetup(bot);

botReady(bot);

intro(bot);

bot.on("message", async msg => {
  
  msgIntro(msg);
  
  msgCmd(msg, bot, prefix)
  
});

bot.login(process.env.token);
