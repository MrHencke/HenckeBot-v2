var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', 'users/'));

module.exports = function introSoundDel(bot, msg){
        
          var name = msg.author.tag  
          fs.unlinkSync(usersPath + name + ".js")
            
  
            const intro = bot.introSound.get(msg.author.id)
       
            if (!intro) return
           
            delete require.cache[require.resolve(`./${intro}.js`)];
  
            
          //console.log("Gammel lyd slettet")
}