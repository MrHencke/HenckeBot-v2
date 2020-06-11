var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', 'users/'));
const modul = "module.exports = {" + "\n" + "name: "

module.exports = function introSoundAdd(bot, msg, name, url, bool){
                    
                    fs.writeFile(usersPath + name + ".js", modul + "'" + name + "'" + ",\n" + "id: " + "'" + msg.author.id + "'" + ",\n" + "description: " + "'" +"Customsound"+"'" + ",\n"+ "toggled: " + bool + ",\n"+ "url: " + "'" + url + "'" + ",\n" + "}; ", (err) => {
                    if (err) throw err;
                   
                    console.log('The user has been saved!');
                    
                    var intro = require(path.join(usersPath + name +".js"))
                    
                    bot.introSound.set(intro.id, intro);
                      
                      })
  }