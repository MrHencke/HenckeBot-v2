/*const { readdirSync } = require("fs");
const { join } = require("path");

module.exports.run = (bot, message, args) => {

	if (message.author.id != "133671473591222273") return;

	if (!args[0]) return message.channel.send("Please provide a command to reload!");
	const commandName = args[0].toLowerCase();
	const command = bot.commands.get(commandName) || bot.commands.get(bot.aliases.get(commandName));
	if (!command) return message.channel.send("That command doesn't exist. Try again.");
	readdirSync(join(__dirname, "..")).forEach(f => {
		const files = readdirSync(join(__dirname, "..", f));
		if (files.includes(`${commandName}.js`)) {
			const file = `../${f}/${commandName}.js`;
			try {
				delete require.cache[require.resolve(file)];
				bot.commands.delete(commandName);
				const pull = require(file);
				bot.commands.set(commandName, pull);
				return message.channel.send(`Successfully reloaded ${commandName}.js!`);
			}
			catch (err) {
				message.channel.send(`Could not reload: ${args[0].toUpperCase()}\``);
				return console.log(err.stack || err);
			}
		}
	});
};

module.exports.help = {
	name: "reload",
	aliases: [""],
	description: "",
	usage: "",
	category: "Developer",
};*/

module.exports = {
    name: 'måløy',
    description: 'Info om måløy',
    aliases: ['mikaelsplace'],
    execute(bot, msg, args) {
          msg.channel.send("Måløy, bedre kjent som deknepollen, bedre kjent som hjemstedet til lokal helt Mikael Aare (Verdenskjent bartender), er et nokså ubetydelig tettsted i Nord-Norge. Det er omringet av saltete vann og dårlig stemning, det kan sammenlignet med steder som Indre Arna når det kommer til sosioøkonomisk utvikling og fremtidsvilkår. Siste lokalnytt er at Måløy Regionale Datanett og telefonitjenester har nedetid, igjen. Dette kom ikke som uventet nytt sier lokale borgere, ved en samling på nærbutikken, den eneste butikken i nærområdet.\n*Jeg drømmer en dag at vår lille landsby kan bli like storslått som Askøy en dag* Forteller den lokale spåmannen/eneste læreren i nærområdet. Han forteller videre om en dyktig, kjekk og 0% narsissistisk ungdom fra sør som fortalte storslåtter fortellinger om dette landet til sør. Her var markene fylt med jordbær, og alle som skrev nynorsk forvist til den nordre delen av øyen, der en stor vegg ble oppført, og nynorskingene måtte betale for denne, stor suksess.");      
    },
};



