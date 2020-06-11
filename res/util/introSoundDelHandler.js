var path = require("path")
const fs = require("fs")
const usersPath = (path.join(__dirname, '..', 'users/'));

module.exports = function introSoundDel(bot, msg){
        
          var name = msg.author.tag  
          
            const intro = bot.introSound.get(msg.author.tag)
            console.log(intro)
            if (!intro) return
            delete require.cache[require.resolve(`./${intro}.js`)];
          
          fs.unlinkSync(usersPath + name + ".js")
            
  

  
            
          //console.log("Gammel lyd slettet")
}