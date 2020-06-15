module.exports = {
  name: "help",
  description: "Du vet vel hva denne gjør?",
  category: "hjelp",
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
    
    if(msg.author.id == process.env.HenckeID){
    var personlig = bot.commands.filter(cmd => cmd.category == "meme").array();
    var personligOut = "";
    for (var cmd of personlig) {
      personligOut += "!" + cmd.name + "\n";
    }
    }else{
      personligOut = ""
    }
    var linje =   "--------------------------------------------" 
    var linje5 =  "----------------------------------------------------"
    var linje4 =  "-----------------------------------------------------"
    var linje7 =  "--------------------------------------------------"
    var linje3 =  "--------------------------------------------------------"
    var linje6 =  "-----------------------------------------------------"
    var linje13 = "-------------------------------"
    
    var outF0 = linje + "TEKST"+ linje5 + "\n" + tekstOut + "\n"
    var outF1 = linje + "YOUTUBE"+ linje7 + "\n" + youtubeOut + "\n"
    var outF2 = linje + "MUSIC"+ linje5+ "\n" + musicOut + "\n"
    var outF3 = linje + "TTS"+ linje3+ "\n" + ttsOut + "\n"
    var outF4 = linje + "KAI"+ linje3+ "\n" + kaiOut + "\n"
    var outF5 = linje + "PAT"+ linje3+ "\n" + patOut + "\n" 
    var outF6 = linje + "RANDOM"+ linje6+ "\n" + randomOut + "\n"
    var outF7 = linje + "CUSTOM SOUNDS"+ linje + "\n" + "Bruk !c list, for å liste alle custom commands" + "\n" + "\n"
    var outF8 = linje + "HJELPEMETODER"+ linje + "\n" + hjelpemetoderOut + "\n\n"
    var outF9 = linje + "MEME" + linje4 + "\n" + memeOut + "\n" 
    var outF10 = linje + "PERSONLIG, BARE FOR HENCKE" + linje13 + "\n" + personligOut + "\n"
    //var outF9 = linje + "NSFW"+ linje4 + "\n" + nsfwOut + "\n"
    var outF11 = linje + "EKSTRA"+ linje6+ "\n" + "For ekstra hjelp, skriv !hjelp **kommandonavn** for ekstra informasjon for en gitt kommando"
    
   
    var outFinal = outF0 + outF1 + outF2 + outF3 + outF4 + outF5 + outF6 + outF7 + outF8 + outF9 + outF10 + outF11
    msg.author.send(outFinal)

  }
};

/* 
kategorier: 
nsfw, 
youtube, 
tekst, 
tts, 
sound, ------- split type: kai, pat, random
customsound, 
music, 
hjelpemetoder, 
custom






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