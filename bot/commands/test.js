module.exports = {
    name: 'trashbot',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands', 'trashbot'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('***Her har du ei liste over ka eg kan hjelpe deg med:*** \n');
            data.push(commands.map(command => '**' + command.name + '**' + '\n' + command.description).join('\n \n'));
            data.push(`\nHvis du virkelig må, så kan du sende \`${prefix}trashbot [commandname]\` for å få info på den spesifikke kommandoen.`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Eg har slida inn i DM\'sa dine og sendt ei liste over alle kommandoene mine!');
                })
                .catch(error => {
                    console.error(`Du ekje fin nok, så gadd ikkje å slide inn i DM'sa dine ${message.author.tag}.\n`, error);
                    message.reply('Du e for stygg, orkakje sende deg en DM.');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Skriv no kommandoane dine riktig for faen, eller så gidde eg ikkje hjelpe deg!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    },
};

command.execute(message, args);