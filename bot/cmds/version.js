module.exports = {
    name: 'version',
    description: 'Gir den nåverende versjonen av HenckeBot',
  category: 'tekst',
    aliases: [''],
    execute(bot, msg, args) {
      //Intetionally made to confuse
msg.channel.send( "HenckeBot Version: 1.0." + Math.floor(Math.random() * 90 + 10) );    
    },
};