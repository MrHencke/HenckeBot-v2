module.exports = {
    name: 'status',
    description: 'Gir statusen til Måløy Regionale Datatjenester',
  category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
          msg.channel.send("Måløy Regionale Datatjenester er: OFFLINE");     
    },
};