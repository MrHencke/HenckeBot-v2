module.exports = {
  name: "at",
  description: "Brukes ved !at @<person>, Skriver @<person> 5 ganger for ekstra plagsom effekt",
  category: 'hjelpemetode',
  aliases: [],
  execute(bot, msg, args) {
    var p;
    var mentioned = args[0];
    for (p = 0; p < 5; p++) {
      msg.channel.send(mentioned);
    }
  }
};
