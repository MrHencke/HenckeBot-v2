module.exports = {
    name: 'help',
    description: 'Du vet vel hva denne gjør?',
    category: 'hjelp',
    aliases: [''],
    execute(bot, msg, args) {
     
      var tekst = bot.commands.filter(cmd => cmd.category === "tekst")
      var tekstOut
      for(file of tekst){
        
      }
      var nsfw = bot.commands.filter(cmd => cmd.category === "nsfw")
      var nsfwOut
      var youtube = bot.commands.filter(cmd => cmd.category === "youtube")
      var youtubeOut
      var tts = bot.commands.filter(cmd => cmd.category === "tts")
      var ttsOut
      var sound = bot.commands.filter(cmd => cmd.category === "sound")
      var soundOut
      var customsound = bot.commands.filter(cmd => cmd.category === "customsound")
      var customsoundOut
      var music = bot.commands.filter(cmd => cmd.category === "music")
      var musicOut
      
      var hjelpemetoder = bot.commands.filter(cmd => cmd.category === "hjelpemetoder")
      var hjelpemetoderOut
      
      console.log(tekst)
      
    },
};

//kategorier: nsfw, youtube, tekst, tts, sound, customsound, music, hjelpemetoder, custom