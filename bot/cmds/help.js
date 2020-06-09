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
      nsfwOut += "!" + cmd.name + "\n";
    }

    var youtube = bot.commands.filter(cmd => cmd.category === "youtube");
    var youtubeOut = "";
    for (var cmd of tekst) {
      youtubeOut += "!" + cmd.name + "\n";
    }

    var tts = bot.commands.filter(cmd => cmd.category === "tts");
    var ttsOut = "";
    for (var cmd of tekst) {
      ttsOut += "!" + cmd.name + "\n";
    }

    var kai = bot.commands.filter(cmd => cmd.type === "kai");
    var kaiOut = "";
    for (var cmd of tekst) {
      kaiOut += "!" + cmd.name + "\n";
    }

    var pat = bot.commands.filter(cmd => cmd.type === "pat");
    var patOut = "";
    for (var cmd of tekst) {
      patOut += "!" + cmd.name + "\n";
    }

    var random = bot.commands.filter(cmd => cmd.type === "random");
    var randomOut = "";
    for (var cmd of tekst) {
      randomOut += "!" + cmd.name + "\n";
    }

    var customsound = bot.commands.filter(
      cmd => cmd.category === "customsound"
    );
    var customsoundOut = "";
    for (var cmd of tekst) {
      customsoundOut += "!" + cmd.name + "\n";
    }

    var music = bot.commands.filter(cmd => cmd.category === "music");
    var musicOut = "";
    for (var cmd of tekst) {
      musicOut += "!" + cmd.name + "\n";
    }

    var hjelpemetoder = bot.commands.filter(
      cmd => cmd.category === "hjelpemetoder"
    );
    var hjelpemetoderOut = "";
    for (var cmd of tekst) {
      hjelpemetoderOut += "!" + cmd.name + "\n";
    }

    var linje = "--------------------------------------------" 
    var outFinal = linje + "TEKST"+ linje + tekstOut + "\n"
    var outF1 = linje + "NSFW"+ linje + nsfwOut + "\n"
    var outF2 = linje + "YOUTUBE"+ linje + youtubeOut + "\n"
    var outF3 = linje + "TTS"+ linje + ttsOut + "\n"
    var outF4 = linje + "KAI"+ linje + kaiOut + "\n"
    var outF5 = linje + "PAT"+ linje + patOut + "\n" 
    var outF6 = linje + "PAT"+ linje + randomOut + "\n"
    var outF7 = linje + "PAT"+ linje + patOut + "\n"
    var outF8 = linje + "PAT"+ linje + patOut + "\n"
    var outF9 = linje + "PAT"+ linje + patOut + "\n"
    
    
  }
};

//kategorier: nsfw, youtube, tekst, tts, sound, customsound, music, hjelpemetoder, custom
