var path = require("path")
const usersPath = require(path.join(__dirname, '..', '..', 'res/users/'));

module.exports = {
    name: 'intro',
    description: 'Gir deg en egen introSound når du entrer en kanal',
    category: 'hjelpemetode',
    aliases: ['introsound'],
    execute(bot, msg, args) {
          
                  /*
      
                  var name = msg.author.username
                  if(args[2] != null){
                  if(args[2].substring(0,4) == "http"){
                    if(fs.existsSync(usersPath + name + ".js")){
                    msg.channel.send("Navnet er allerede tatt, velg et annet!")
                    return
                    }
                    fs.writeFile(usersPath + name + ".js", nyPath + "\n" + nySound + "\n\n" + modul + "'" + name + "'" + ",\n" + "brukernavn: " + "'" + msg.author.username + "'" + ",\n" + "bruker: " + "'" + msg.author.tag + "'" + ",\n"+ "serveronly: " + "'" + serveronly + "'" + ",\n"+ "serverID: " + "'" + msg.guild.id + "'" + ",\n"  + "description: " + "'" + name + " er en custom sound av " + msg.author.username + "'," + "\n" + opptilExc + "\n" + "var url = '" + url + "'" + "\n" + "sound(url,msg.member.voice.channel, msg);    },}; ", (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                    const command = require(path.join(__dirname, "/sounds/custom", "/") + name +".js");
                    bot.commands.set(command.name, command);
                      msg.channel.send("Commanden er lagret, kan brukes umiddelbart med !" + name)
                    });  
                  } 
      
                  */
      
    },
};