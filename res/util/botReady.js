module.exports = function botReady(bot){
bot.once("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  console.log(`Ready to fuck shit up`);
  bot.user.setActivity("my pp", {
    type: "STREAMING",
    url: "https://www.twitch.tv/mrhencke"
  });
});
}