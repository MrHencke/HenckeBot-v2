module.exports = {
    name: 'restart',
    description: '',
  category: 'hjelpemetode',
    aliases: [''],
    execute(bot, msg, args) {
          if (msg.author.id !== process.env.HenckeID) return;
                msg.delete().catch(O_o => { });
                msg.channel.send("Restarted HenckeBot.").then(() => {
                    process.exit(1);
                });      
    },
};