module.exports = {
    name: 'restart',
    description: 'Restarter Henckebot',
  category: 'hjelpemetode-personlig',
    aliases: [''],
    execute(bot, msg, args) {
          if (msg.author.id !== process.env.HenckeID){
            msg.reply(" Du har ikke love til dette din sodd")
            return
          };
                msg.delete().catch(O_o => { });
                msg.channel.send("Restarted HenckeBot.").then(() => {
                    process.exit(1);
                });      
    },
};