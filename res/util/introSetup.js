const fs = require("fs");
const path = require("path");

module.exports = function introSetup(bot){
  
var introFiles = fs.readdirSync(path.join(__dirname, "..", "/users")).filter(file => file.endsWith(".js"));

for (const file of introFiles) {
  const introSound = require(path.join(__dirname, "..", "/users",  "/") + file);
  bot.introSound.set(introSound.id, introSound);
  //console.log(introSound)
}
  
}