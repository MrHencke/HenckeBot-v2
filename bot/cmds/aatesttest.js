const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");

var commands = new Map();

var commands = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"));

           
for (const file of commands) {
    
     fs.copyFile(file, __dirname + "/sounds" + file + ".js", (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});
      }
  
 // const command = require(path.join(__dirname, "..",  "..",  "/bot/cmds",  "/") + file);

