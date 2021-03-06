var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', '..', 'res/users/'));
const introSoundAdd = require(path.join(__dirname, '..', '..', 'res/util/introSoundAddHandler.js'));
const introSoundDel = require(path.join(__dirname, '..', '..', 'res/util/introSoundDelHandler.js'));

const modul = "module.exports = {" + "\n" + "name: "

module.exports = {
    name: 'intro',
    description: 'Gir deg en egen introSound når du entrer en kanal, støtter add <link>, toggle og delete',
    category: 'hjelpemetode',
    aliases: ['introsound'],
    execute(bot, msg, args) {
                    var name = msg.author.tag
                    switch(args[0]){
                        
                    case 'add':
                    var url = args[1]
                    if(fs.existsSync(usersPath + name + ".js")){
                    var intro = require(path.join(usersPath + name +".js"))
                    if( intro.id !== msg.author.id ){
                    msg.channel.send("Du kan ikke endre andres introsound.")
                    return
                    }else{
                      introSoundDel(bot, msg);
                      introSoundAdd(bot, msg, name, url, true)
                      msg.channel.send("Introsounden er lagret, kan brukes umiddelbart")
                    }
                    }else{
                      introSoundAdd(bot, msg, name, url, true)
                      msg.channel.send("Introsounden er lagret, kan brukes umiddelbart")
                    }
                      break;
                        
                      case 'toggle':
                      if(fs.existsSync(usersPath + name + ".js")){
                      var intro = require(path.join(usersPath + name +".js"))
                      var io = ""
                        var url = intro.url
                        if(intro.toggled){
                      io = "av"
                      introSoundDel(bot, msg);
                      introSoundAdd(bot, msg, name, url, false)
                        }else{
                        io = "på"
                      introSoundDel(bot, msg);
                      introSoundAdd(bot, msg, name, url, true)
                          
                        }
                        msg.reply("Introlyden din er nå skrudd " + io)
                      }
                      break
                        
                      case 'delete':
                        if(fs.existsSync(usersPath + name + ".js")){
                        introSoundDel(bot, msg);
                        }
                        msg.reply("Intro Sounden er fjernet fra databasen.")
                      break
      }
    },
};