module.exports = {
	name: 'ping',
	description: 'Ping!',
  category: 'hjelpemetode',
  aliases: ['pongu'],
	execute(bot, msg, args) {
		                msg.channel.send({embed: {
                        color: 0x2ed32e,
                        fields: [{name: "Pongu",
                                value:"Pingen til Henckebot er: " + Math.round(bot.ws.ping) + " ms"
                            }] } });
	},
};