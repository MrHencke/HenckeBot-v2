module.exports = {
  name: "meow",
  description: "",
  category: 'tts',
  aliases: [""],
  execute(bot, msg, args) {
    msg.channel.send(
      "Don't you just hate it when your cat wakes you up like this? Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow.",
      { tts: true }
    );
  }
};
