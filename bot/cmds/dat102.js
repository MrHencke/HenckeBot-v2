module.exports = {
  name: "dat102",
  description: "",
  category: 'hjelpemetode',
  aliases: [""],
  execute(bot, msg, args) {
    msg.channel.send({
      files: [
        "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FJavaSoftwareStructures3rdEdition.pdf?v=1589659515651"
      ]
    });
  }
};
