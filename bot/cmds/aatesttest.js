const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");

var commands = new Map();

var commands = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"));

for (const file of commands) {
    var vpath = path.join(__dirname, "/sounds/", file)
  fs.writeFileSync(vpath, file);
  
 // const command = require(path.join(__dirname, "..",  "..",  "/bot/cmds",  "/") + file);

}