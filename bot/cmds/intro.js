var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', '..', 'res/users/'));
const introSoundAdd = require(path.join(__dirname, '..', '..', 'res/util/introSoundAddHandler.js'));
const introSoundDel = require(path.join(__dirname, '..', '..', 'res/util/introSoundDelHandler.js'));

const modul = "module.exports = {" + "\n" + "name: "

module.exports = {
    name: 'intro',
    description: 'Gir deg en egen introSound når du entrer en kanal',
    category: 'hjelpemetode',
    aliases: ['introsound'],
    execute(bot, msg, args) {
                    
                    switch(args[0]){
                    case 'add':
                    var name = msg.author.tag
                    var url = args[1]
                    if(fs.existsSync(usersPath + name + ".js")){
                    var intro = require(path.join(usersPath + name +".js"))
                    if( intro.id !== msg.author.id ){
                    msg.channel.send("Du kan ikke endre andres introsound.")
                    return
                    }else{
                      
                      introSoundAdd(bot, msg, name, url)
                    }
                    }else{
                      introSoundAdd(bot, msg, name, url)
                    }
                    
                      break;
                        
                        
                      case 'edit':
                         var name = msg.author.tag
                    var url = args[1]
                    if(fs.existsSync(usersPath + name + ".js")){
                      
                      
                    }
                        
                        
                      break
                        
                        
                      case 'toggle':
                        
                      break
      
                 
                        //introSoundAdd(bot, msg, name, url)
      }
    },
};