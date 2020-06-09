const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");

var commands = new Map();

var commands = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"));

for (const file of commands) {
    
      if(file.description == "sound"){
        console.log(file)
        console.log(file.description)
      }
  
 // const command = require(path.join(__dirname, "..",  "..",  "/bot/cmds",  "/") + file);

}