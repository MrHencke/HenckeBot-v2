module.exports = {
  name: "at",
  description: "",
  aliases: [],
  execute(bot, msg, args) {
    var p;
    var mentioned = args[0];
    for (p = 0; p < 5; p++) {
      msg.channel.send(mentioned);
    }
  }
};
