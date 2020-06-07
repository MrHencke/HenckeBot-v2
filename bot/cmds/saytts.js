module.exports = {
    name: 'saytts',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
          if (msg.author.id == process.env.HenckeID) {
                    const sayMsg = args.join(" ");
                    msg.delete().catch(O_o => { });
                    msg.channel.send(sayMsg, { tts: true });
                } else {
                    return;
                }     
    },
};