module.exports = {
  name: "help",
  description: "Du vet vel hva denne gjør?",
  category: "hjelp",
  aliases: [""],
  execute(bot, msg, args) {
    
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

    
    
    
    
    
    var linje = "--------------------------------------------" 
    var linje5 = "----------------------------------------------------"
    var linje4 = "-----------------------------------------------------"
    var linje7 = "--------------------------------------------------"
    var linje3 = "--------------------------------------------------------"
    var linje6 = "---------------------------------------------------"
    var linje13 ="--------------------------------------------"
    
    var outF0 = linje + "TEKST"+ linje5 + "\n" + tekstOut + "\n"
    var outF2 = linje + "YOUTUBE"+ linje7 + "\n" + youtubeOut + "\n"var outF8 = linje + "MUSIC"+ linje5+ "\n" + musicOut + "\n"
    var outF3 = linje + "TTS"+ linje3+ "\n" + ttsOut + "\n"
    var outF4 = linje + "KAI"+ linje3+ "\n" + kaiOut + "\n"
    var outF5 = linje + "PAT"+ linje3+ "\n" + patOut + "\n" 
    var outF6 = linje + "RANDOM"+ linje6+ "\n" + randomOut + "\n"
    var outF7 = linje + "CUSTOM SOUNDS"+ linje13+ "\n" + customsoundOut + "\n"
    
    var outF9 = linje + "HJELPEMETODER"+ linje+ "\n" + hjelpemetoderOut + "\n"
    var outF1 = linje + "NSFW"+ linje4 + "\n" + nsfwOut + "\n"
    
    var outF10 = linje + "Ekstra"+ linje6+ "\n" + "For ekstra hjelp, skriv !hjelp *kommandonavn* for ekstra informasjon for en gitt kommando"
    
   /* 
    msg.author.send(outF0)
    msg.author.send(outF1)
    msg.author.send(outF2)
    msg.author.send(outF3)
    msg.author.send(outF4)
    msg.author.send(outF5)
    msg.author.send(outF6)
    msg.author.send(outF7)
    msg.author.send(outF8)
    msg.author.send(outF9)
    msg.author.send(outF10)
   */
    var outFinal = outF0 + outF1 + outF2 + outF3 + outF4  
    var outFinal2 = outF5 + outF6 + outF7 + outF8 + outF9 + outF10
    msg.author.send(outFinal + outFinal2)
    /* msg.author.send(outFinal)
    msg.author.send(outFinal2)
    console.log("outF0: " + outF0.length)
    console.log("outF1: " +outF1.length)
    console.log("outF2: " +outF2.length)
    console.log("outF3: " +outF3.length)
    console.log("outF4: " +outF4.length)
    console.log("outF5: " +outF5.length)
    console.log("outF6: " +outF6.length)
    console.log("outF7: " +outF7.length)
    console.log("outF8: " +outF8.length)
    console.log("outF9: " +outF9.length)
    console.log("outF10: " +outF10.length)
    */

  }
};

//kategorier: nsfw, youtube, tekst, tts, sound, customsound, music, hjelpemetoder, custom
