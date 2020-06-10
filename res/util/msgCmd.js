module.exports = function msgIntro(msg, bot, prefix) {
  
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  let cmd = args.shift().toLowerCase();
  
  if (cmd == "hjelp" && args[0] != null) {
    msg.channel.send(bot.commands.get(args[0].toLowerCase()).description);
  } else {
    const commandName = cmd.toLowerCase();
  const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    console.log(command.serveronly)
    if (command.serveronly && command.server != msg.guild.id){
      msg.channel.send("Denne commanden er begrenset til en annen server")
            return;
    }
     
           try {
      command.execute(bot, msg, args);
    } catch (err) {
      console.error(err);
      msg.reply("Oops, " + commandName + " gikk rett til helvete");
    }
     }

 
    }
  