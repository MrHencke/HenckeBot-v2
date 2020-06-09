var path = require("path")
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
};
