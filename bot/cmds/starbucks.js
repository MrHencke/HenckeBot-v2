module.exports = {
  name: "starbucks",
  description: "Gir en laaaaaaaaaaaaaaaaang quote",
  category: 'tekst',
  aliases: [""],
  execute(bot, msg, args) {
    msg.channel.send(
      "I want a  quad long shot grande in a venti cup half calf double cupped no sleeve salted caramel mocha latte with 2 pumps of vanilla substitute 2 pumps of white chocolate mocha for mocha and substitute 2 pumps of hazelnut for  toffee nut half whole milk and half breve with no whipped cream extra hot extra foam extra caramel drizzle extra salt add a scoop of vanilla bean powder with light ice well stirred",
      { tts: true }
    );
  }
};
