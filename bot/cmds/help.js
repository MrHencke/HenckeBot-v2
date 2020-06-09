module.exports = {
  name: "help",
  description: "Du vet vel hva denne gjør?",
  category: "hjelp",
  aliases: [""],
  execute(bot, msg, args) {
    
    var tekst = bot.commands.filter(cmd => cmd.category === "tekst");
    var tekstOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }
    var nsfw = bot.commands.filter(cmd => cmd.category === "nsfw");
    var nsfwOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var youtube = bot.commands.filter(cmd => cmd.category === "youtube");
    var youtubeOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var tts = bot.commands.filter(cmd => cmd.category === "tts");
    var ttsOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var kai = bot.commands.filter(cmd => cmd.type === "kai");
    var kaiOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var pat = bot.commands.filter(cmd => cmd.type === "pat");
    var patOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var random = bot.commands.filter(cmd => cmd.type === "random");
    var randomOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var customsound = bot.commands.filter(
      cmd => cmd.category === "customsound"
    );
    var customsoundOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var music = bot.commands.filter(cmd => cmd.category === "music");
    var musicOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var hjelpemetoder = bot.commands.filter(
      cmd => cmd.category === "hjelpemetoder"
    );
    var hjelpemetoderOut = "";
    for (var cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }

    var linje = "--------------------------------------------" 
    
    
    
  }
};

//kategorier: nsfw, youtube, tekst, tts, sound, customsound, music, hjelpemetoder, custom
