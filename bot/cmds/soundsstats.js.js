module.exports = {
    name: 'stats',
    description: '',
  category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
      msg.channel.send("HenckeBot er online \nPå: " + bot.guilds.cache.size + " servere." + "\nFor: " + bot.channels.cache.size + " kanaler." + "\nMed: " + bot.users.cache.size + " brukere.");
  },
};