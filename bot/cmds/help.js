module.exports = {
  name: "help",
  description: "Du vet vel hva denne gjør?",
  category: "help",
  aliases: ["hjelp"],
  execute(bot, msg, args) {
    
    msg.reply(" Jeg sneik meg inn i DMsene dine med en liste av mine commands")
    
    var tekst = (bot.commands.filter(cmd => cmd.category == 'tekst')).array()
    var tekstOut = "";
    for (cmd of tekst) {
      tekstOut += "!" + cmd.name + "\n";
    }
    
    var nsfw = bot.commands.filter(cmd => cmd.category == "nsfw").array();
    var nsfwOut = "";
    for (var cmd of nsfw) {
      nsfwOut += "!" + cmd.name + "\n";
    }

    var youtube = bot.commands.filter(cmd => cmd.category == "youtube").array();
    var youtubeOut = "";
    for (var cmd of youtube) {
      youtubeOut += "!" + cmd.name + "\n";
    }

    var tts = bot.commands.filter(cmd => cmd.category == "tts").array();
    var ttsOut = "";
    for (var cmd of tts) {
      ttsOut += "!" + cmd.name + "\n";
    }

    var kai = bot.commands.filter(cmd => cmd.type == "kai").array();
    var kaiOut = "";
    for (var cmd of kai) {
      kaiOut += "!" + cmd.name + "\n";
    }

    var pat = bot.commands.filter(cmd => cmd.type == "pat").array();
    var patOut = "";
    for (var cmd of pat) {
      patOut += "!" + cmd.name + "\n";
    }

    var random = bot.commands.filter(cmd => cmd.type == "random").array();
    var randomOut = "";
    for (var cmd of random) {
      randomOut += "!" + cmd.name + "\n";
    }

    var customsound = bot.commands.filter(cmd => cmd.category == "customsound").array()
    var customsoundOut = "";
    for (var cmd of customsound) {
      customsoundOut += "!" + cmd.name + "\n";
    }

    var music = bot.commands.filter(cmd => cmd.category == "music").array();
    var musicOut = "";
    for (var cmd of music) {
      musicOut += "!" + cmd.name + "\n";
    }

    var hjelpemetoder = bot.commands.filter(cmd => cmd.category == "hjelpemetode").array();
    var hjelpemetoderOut = "";
    for (var cmd of hjelpemetoder) {
      hjelpemetoderOut += "!" + cmd.name + "\n";
    }
    
    var meme = bot.commands.filter(cmd => cmd.category == "meme").array();
    var memeOut = "";
    for (var cmd of meme) {
      memeOut += "!" + cmd.name + "\n";
    }
    
  
    var personlig = bot.commands.filter(cmd => cmd.category.includes("personlig")).array();
    var personligOut = "";
    for (var cmd of personlig) {
      personligOut += "!" + cmd.name + "\n";
    }
    
    var linje =   "-----------------------------------------------" 
    
    var outF0 = linje + "TEKST" + linje.substring(0, linje.length-"TEKST".length) + "\n" + tekstOut + "\n"
    var outF1 = linje + "YOUTUBE"+ linje.substring(0, linje.length-"YOUTUBE".length) + "\n" + youtubeOut + "\n"
    var outF2 = linje + "MUSIC"+ linje.substring(0, linje.length-"MUSIC".length) + "\n" + musicOut + "\n"
    var outF3 = linje + "TTS"+ linje.substring(0, linje.length-"TTS".length)+ "\n" + ttsOut + "\n"
    var outF4 = linje + "KAI"+ linje.substring(0, linje.length-"KAI".length)+ "\n" + kaiOut + "\n"
    var outF5 = linje + "PAT"+ linje.substring(0, linje.length-"PAT".length)+ "\n" + patOut + "\n" 
    var outF6 = linje + "RANDOM"+ linje.substring(0, linje.length-"RANDOM".length)+ "\n" + randomOut + "\n"
    var outF7 = linje + "CUSTOM SOUNDS"+ linje.substring(0, linje.length-"CUSTOM SOUNDS".length) + "\n" + "Bruk !c list, for å liste alle custom commands" + "\n" + "\n"
    var outF8 = linje + "HJELPEMETODER"+ linje.substring(0, linje.length-"HJELPEMETODER".length) + "\n" + hjelpemetoderOut + "\n"
    var outF9 = linje + "MEME" + linje.substring(0, linje.length-"MEME".length) + "\n" + memeOut + "\n" 
    
    if(msg.author.id == process.env.HenckeID){
      var outF10 = linje + "PERSONLIG, BARE FOR HENCKE" + linje.substring(0, linje.length-"PERSONLIG, BARE FOR HENCKE".length) + "\n" + personligOut + "\n"
    }else{
     var outF10 = ""
    }
    
    if(msg.channel.nsfw){
    var outF9 = linje + "NSFW"+ linje.substring(0, linje.length-"NSFW".length) + "\n" + nsfwOut + "\n"
    }else{
    var outF9 = ""
    }
    
    var outF11 = linje + "EKSTRA"+ linje.substring(0, linje.length-"EKSTRA".length)+ "\n" + "For ekstra hjelp, skriv !hjelp **kommandonavn** for ekstra informasjon for en gitt kommando" + "\n\n"
    var outF12 = "\n" + "Det var egentlig alt"
    
   
    var outFinal = outF0 + outF1 + outF2 + outF3 + outF4 + outF5 + outF6 + outF7 + outF8 + outF9 + outF10 + outF11 + outF12
    msg.author.send(outFinal)

  }
};
