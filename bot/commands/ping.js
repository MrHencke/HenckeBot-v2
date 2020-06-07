module.exports = {
	name: 'ping',
	description: 'Ping!',
  aliases: ['pongu'],
	execute(bot, msg, args) {
		msg.channel.send('Pong.');
	},
};