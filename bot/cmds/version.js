module.exports = {
    name: 'version',
    description: '',
    aliases: [''],
    execute(bot, msg, args) {
msg.channel.send( "HenckeBot Version: 1.0." + Math.floor(Math.random() * 90 + 10) );    },
};