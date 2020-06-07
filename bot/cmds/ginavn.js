const fs = require('fs');

const cmdFld = (__dirname );
const commandFiles = fs.readdirSync(cmdFld)

for (const file of commandFiles) {
  if(file != "ginavn.js"){
	file.module.exports.name = file;
    console.log("navn gitt")
}}