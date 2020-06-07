module.exports = {
  name: "alle",
  description: "",
  aliases: [""],
  execute(bot, msg, args) {
    var p;
    for (p = 0; p < 10; p++) {
      msg.channel.send("@everyone");
    }
  }
};
