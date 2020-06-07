const { readdirSync } = require("fs");
const { join } = require("path");

module.exports = {
    name: 'reload',
    description: 'Reloader commands',
    aliases: [],
    execute(bot, msg, args) {
	if (msg.author.id != "133671473591222273") return;

	if (!args[0]) return msg.channel.send("Please provide a command to reload!");
	const commandName = args[0].toLowerCase();
	const command = bot.commands.get(commandName) || bot.commands.get(bot.aliases.get(commandName));
	if (!command) return msg.channel.send("That command doesn't exist. Try again.");
	readdirSync(join(__dirname, "..")).forEach(f => {
		const files = readdirSync(join(__dirname, "..", f));
		if (files.includes(`${commandName}.js`)) {
			const file = `../${f}/${commandName}.js`;
			try {
				delete require.cache[require.resolve(file)];
				bot.commands.delete(commandName);
				const pull = require(file);
				bot.commands.set(commandName, pull);
				return msg.channel.send(`Successfully reloaded ${commandName}.js!`);
			}
			catch (err) {
				msg.channel.send(`Could not reload: ${args[0].toUpperCase()}\``);
				return console.log(err.stack || err);
			}
		}
	});
    },
};