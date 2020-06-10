module.exports = {
    name: 'stikk',
    description: 'Fjerner boten fra Voice',
  category: 'helpemetode',
    aliases: [''],
    execute(bot, msg, args) {
msg.member.voice.channel.leave();    },
};