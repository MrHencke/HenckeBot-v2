module.exports = {
  name: "giveyouup",
  description: "",
  aliases: [""],
  execute(bot, msg, args) {
    msg.channel.send(
      "I just wanna tell you how Im feeling \n Gotta make you understand \n Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you",
      { tts: true }
    );
  }
};
