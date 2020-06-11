var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', '..', 'res/users/'));
const modul = "module.exports = {" + "\n" + "name: "

module.exports = {
    name: 'intro',
    description: 'Gir deg en egen introSound når du entrer en kanal',
    category: 'hjelpemetode',
    aliases: ['introsound'],
    execute(bot, msg, args) {
          
                 
      
                  var name = msg.author.username
                
                    if(fs.existsSync(usersPath + name + ".js")){
                    return
                    }
                    
                    fs.writeFile(usersPath + name + ".js", modul + "'" + name + "'" + ",\n" + "id: " + "'" + msg.author.id + "'" + ",\n" + "description: " + "Customsound" + ",\n"+ "toggled: " + true + ",\n"+ "url: " + "'" + url + "'" + ",\n"  + "description: " + "'" + name + " er en custom sound av " + msg.author.username + "'," + "\n" + "},}; ", (err) => {
                    if (err) throw err;
                    console.log('The user has been saved!');
                    
                    var intro = require(path.join(usersPath + name +".js");
                    
                    bot.introSound.set(intro.name, intro);
                      msg.channel.send("Introsounden er lagret, kan brukes umiddelbart, kan snart toggles med !intro toggle)
                    });  
                   
      
                 
      
    },
};