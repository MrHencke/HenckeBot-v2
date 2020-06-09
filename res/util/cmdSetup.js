const fs = require("fs");
const path = require("path");

module.exports = function cmdSetup(bot){
var commandFiles = fs.readdirSync(path.join(__dirname, "..",  "..",  "/bot/cmds")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(path.join(__dirname, "..",  "..",  "/bot/cmds",  "/") + file);
  bot.commands.set(command.name, command);
}

 commandFiles = fs.readdirSync(path.join(__dirname, "..", "..", "/bot/cmds/sounds")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(path.join(__dirname, "..", "..",  "/bot/cmds/sounds", "/") + file);
  bot.commands.set(command.name, command);
}
  }

/*
var commandFiles = fs.readdirSync(__dirname + "/cmds").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(__dirname + "/cmds" + "/" + file);
  bot.commands.set(command.name, command);
}

 commandFiles = fs.readdirSync(__dirname + "/cmds/sounds").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(__dirname + "/cmds/sounds" + "/" + file);
  bot.commands.set(command.name, command);
}
*/