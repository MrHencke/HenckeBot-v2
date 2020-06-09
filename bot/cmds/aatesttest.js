/*
const fs = require("fs");
const path = require("path");

var commands = new Map();

var commands = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"));

for (const file of commands) {
    console.log("skriver " + file + " til sounds")
    var vpath = path.join(__dirname, "/sounds/", file)
   fs.copyFileSync(__dirname +"/"+ file, vpath);
  console.log("ER SKREVET: " + file + " til sounds")
  
 // const command = require(path.join(__dirname, "..",  "..",  "/bot/cmds",  "/") + file);

}
*/