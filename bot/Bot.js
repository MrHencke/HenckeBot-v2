const Discord = require("discord.js");
const path = require("path");
const cmdSetup = require(path.join(__dirname, "..", "res/util/cmdSetup.js"));
const intro = require(path.join(__dirname, "..", "res/util/introManagerExp.js"));
const introSetup = require(path.join(__dirname, "..", "res/util/introSetup.js"));
const msgIntro = require(path.join(__dirname, "..", "res/util/msgIntro.js"));
const msgCmd = require(path.join(__dirname, "..", "res/util/msgCmd.js"));
const botReady = require(path.join(__dirname, "..", "res/util/botReady.js"));
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.introSound = new Discord.Collection();

//Fires ready message
bot.once("ready", () => {
    botReady(bot); 
  });

//Sets up command collection
  cmdSetup(bot);

//Sets up introSound collection
  introSetup(bot);

//Manages voicstates for intro sounds
  intro(bot)

bot.on("message", async msg => {
  
  //Handles non-command based messages
  msgIntro(msg);
  
  //Handles command based messages
  msgCmd(msg, bot, process.env.prefix)
  
});

//Authenticates bot
bot.login(process.env.token);
