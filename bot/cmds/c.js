var path = require("path")
const customPathNyFil = path.join(__dirname, 'sounds/custom/');
const fs = require("fs")

var nyPath = "const path = require('path')"
var nySound = "const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));"
var modul = "module.exports = {" + "\n" + "name: "
var opptilExc = "description: 'en custom sound'," + "\n" + "category: 'customsound'," + "\n" + "aliases: ['']," + "\n" + "execute(bot, msg, args) {"




module.exports = {
    name: 'c',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
      
           if(args[0] == "list"){
                var commandFiles = fs.readdirSync(path.join(__dirname, "sounds/custom/")).filter(file => file.endsWith(".js"));
                var customsounds = ""
                for (const file of commandFiles) {
                var res = file.split(".");
                if(!commandFiles[commandFiles.length]){
                customsounds += res + ","
                  }else{
                  customsounds += res
                  }
                  }
                 msg.channel.send(customsounds) 
                } else if(args[0]== "add") {
                  var name = args[1]
                  if(args[2].substring(0,4) == "http"){
                    var url = args[2];
                    fs.writeFile(customPathNyFil + name + ".js", nyPath + "\n" + nySound + "\n\n" + modul + "'" + name + "'" + ",\n" + "brukernavn: " + "'" + msg.author.username + "'" + ",\n" + "bruker: " + "'" + msg.author.tag + "'" + ",\n" + opptilExc + "\n" + "var url = '" + url + "'" + "\n" + "sound(url,msg.member.voice.channel, msg);    },}; ", (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                    const command = require(path.join(__dirname, "/sounds/custom", "/") + name +".js");
                    bot.commands.set(command.name, command);
                      msg.channel.send("Commanden er lagret, kan brukes umiddelbart med !" + name)
                    });
                    
                    
                  } 
                  
                  
                  
                  }else {msg.channel.send("!c støtter bare list og add")} 

                   /* 
                  var obj = JSON.parse(data);
                  console.log("Ny customsound addet av: " + msg.author.username)
                  obj.push({"name" : name, "url" : url, "bruker" : msg.author.username}); //add some data
                  var json = JSON.stringify(obj); 
                  fs.writeFile(customPath, json, 'utf8', (err) => {
                  if (err) throw err;
                  console.log('Data written to file');
                  msg.channel.send("Skrevet til databasen, kan brukes umiddelbart.");
                  
                  delete require.cache[require.resolve(path.join(__dirname, '..', '..', 'res/lists/'+file+".js"))]   // Deleting loaded module
                  custom = require(path.join(__dirname, '..', '..', 'res/lists/customClips.json'+file+".js"));
                  });}});
                  */
                  
    },
};


/*var path = require("path")
const sound = require(path.join(__dirname, '..', '..', 'res/sound.js'));
let custom = require(path.join(__dirname, '..', '..', 'res/lists/customClips.json'));
const customPath = path.join(__dirname, '..', '..', 'res/lists/customClips.json');
const fs = require("fs")

module.exports = {
    name: 'c',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
           if(args[0] == "list"){
                  var i;
                  var list = "";
                  for(i=0; i < custom.length; i++){
                    list = list + custom[i].name + ", "
                  }
                  msg.channel.send(list)
                } else if(args[0]== "add") {
                  var name = args[1]
                  if(args[2].substring(0,4) == "http") var url = args[2];
                  fs.readFile(customPath, 'utf8', function readFileCallback(err, data){
                  if (err){
                      console.log(err);
                  } else {
                  var obj = JSON.parse(data);
                    console.log("Ny customsound addet av: " + msg.author.username)
                  obj.push({"name" : name, "url" : url, "bruker" : msg.author.username}); //add some data
                  var json = JSON.stringify(obj); 
                  fs.writeFile(customPath, json, 'utf8', (err) => {
                  if (err) throw err;
                  console.log('Data written to file');
                  msg.channel.send("Skrevet til databasen, kan brukes umiddelbart.");
                  delete require.cache[require.resolve(path.join(__dirname, '..', '..', 'res/lists/customClips.json'))]   // Deleting loaded module
                  custom = require(path.join(__dirname, '..', '..', 'res/lists/customClips.json'));
                  });}});
                } else{
                custom.find(function(item, i){
                if(item.name == args[0]){
                sound(item.url, msg.member.voice.channel, msg);
                }
                });
                }     
    },
};*/
