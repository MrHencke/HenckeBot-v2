module.exports = {
  name: "dat107",
  description: "",
  aliases: [""],
  execute(bot, msg, args) {
    msg.channel.send({
      files: [
        "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FFundamentals_of_Database_Systems_7th.pdf?v=1589659519073"
      ]
    });
  }
};
