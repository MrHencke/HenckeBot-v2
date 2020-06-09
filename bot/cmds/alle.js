module.exports = {
  name: "alle",
  description: "Skriver @everyone 10 ganger, for ekstra plagsom effekt",
  category: 'hjelpemetode',
  aliases: [],
  execute(bot, msg, args) {
    var p;
    for (p = 0; p < 10; p++) {
      msg.channel.send("@everyone");
    }
  }
};
