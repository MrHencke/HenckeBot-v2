const path = require("path");
const sound = require(path.join(__dirname, "..", "/sound.js"));

module.exports = function msgIntro(msg) {
  if (msg.author.bot) return;
  if (msg.content.includes("bad bot")) {
    msg.reply(
      "Vi er kanskje en dårlig bot, MEN! Vi er ikke like utdatert søppel som en viss TrashBOT"
    );
  } else if (
    msg.content.toLowerCase().includes(" ein") ||
    msg.content.toLowerCase().includes("mykje") ||
    msg.content.toLowerCase().includes("dinna") ||
    msg.content.toLowerCase().includes("hugleik på staur")
  ) {
    msg.reply(
      "Nynorsk oppdaget, gjør som resten av moderne sivilisasjon og skriv på en forståelig målform."
    );
  } else if (msg.content.includes("good bot")) {
    msg.reply(
      "Tusen takk, vi hos HenckeBot™ Inc Ltd. vet at vår bot er mye bedre enn TrashBOT™, vennligst skriv et brev til denne søppelboten og gi 1-star review på google"
    );
  } else if (msg.content.includes("oh no")) {
    var url =
      "https://cdn.glitch.com/6b8d7e3b-a718-4c94-a496-df1ab9412724%2Fohyeah.mp3?v=1591636797558";
    sound(url, msg.member.voice.channel, msg);
  } else if (
    msg.content.includes("hmm") /*&& msg.author.id != '132193704860450817'*/
  ) {
    msg.channel.send({
      files: [
        "https://media.tenor.com/images/69983541b409be168812dfd95be4bbf2/tenor.gif"
      ]
    });
  } else if (
    msg.content.includes("reee") /*&& msg.author.id != '132193704860450817'*/
  ) {
    msg.channel.send({
      files: [
        "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F1b72da8a-c1d0-48e4-92df-f8b35fe2fb40.bilde.png?v=1589880897535"
      ]
    });
  } else if (msg.content.includes("nuddel")) {
    var url =
      "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fskididdel.mp3?v=1589665443245";
    sound(url, msg.member.voice.channel, msg);
  } else if (msg.content.includes("F") && msg.content.length < 2) {
    msg.channel.send("F");
  } else if (msg.content.includes("!i") && msg.content.length < 10) {
    msg.delete().catch(O_o => {});
    for (var p = 0; p < msg.content.length - 1; p++) {
      msg.channel.send("*I M A G I N E*");
    }
  }
};
