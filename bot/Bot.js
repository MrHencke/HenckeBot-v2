const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const roast = require("../res/roast.json");
const comp = require("../res/compliments.json");
const quote = require("../res/quote.json");
const land = require("../res/countries.json");
const film = require("../res/movies.json");
const custom = require("../res/customClips.json");
const maktsyk = require("../res/maktSykListe.json");
const Toggle = require("../res/Toggle.json");
const mem = require("memejs") //https://www.npmjs.com/package/memejs
const teet = require("reddittits")
const fourk = require("reddit4k")
const yt = require("scrape-youtube").default;
const bot = new Discord.Client();

bot.once("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    console.log(`Ready to fuck shit up`);
    bot.user.setActivity("my pp", {
        type: "STREAMING",
        url: "https://www.twitch.tv/mrhencke"
    });
});

function sound(url, voiceChannel, msg) {
  try{
    if(voiceChannel != null){
    voiceChannel.join().then(connection => {
        const dispatcher = connection.play(url, { volume: 0.5});
        dispatcher.on("finish", end => voiceChannel.leave());
    }).catch(err => console.log(err));
    }else msg.channel.send("Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe");
    }catch(err){
      //console.log(err)
    }}

var stream;
var dispatcher;

bot.on("voiceStateUpdate", (oldState, newState) => {
    try {
        var server = newState.guild.id;
        var person = newState.member.id.toString();
        if (server == "612947002853949458" || person == "133671473591222273") {
            if (newState.channel != null) {
                var bots = newState.channel.members.filter(x => x.user.bot).size;
                if (1 > bots) {
                    var voiceChannel = newState.channel;
                    if (oldState.channel != newState.channel && newState.channelID != "undefined") {
                            if (person != "133671473591222273") {
                                          var url2 = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F%C3%A5j%C3%A6vli.mp3?v=1589967082829"   // "https://www.myinstants.com/media/sounds/you_were_banned_2.mp3" //"https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3",
                                        sound(url2, voiceChannel);
                            } else {
                                          var url = "https://www.myinstants.com/media/sounds/aplausos_2.mp3" //"https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3",
                                          sound(url, voiceChannel);
                            }
                        } else return;
                    }
            }
        }
    } catch (err) {
        console.log(err);
    }
});

bot.on("message", msg => {
  if(msg.author.bot){
    return;
  } else if (msg.content.includes("bad bot")) {
        msg.reply("Vi er kanskje en dårlig bot, MEN! Vi er ikke like utdatert søppel som en viss TrashBOT");
    } else if (msg.content.toLowerCase().includes(" ein")) {
        msg.reply("Nynorsk oppdaget, gjør som resten av moderne sivilisasjon og skriv på en forståelig målform.");
    }else if (msg.content.toLowerCase().includes("ground control to major tom")) {
        msg.channel.send("This is Major Tom to Ground Control\nI'm stepping through the door\nAnd I'm floating in a most peculiar way\nAnd the stars look very different today");
    } else if (msg.content.includes("good bot")) {
        msg.reply(
            "Tusen takk, vi hos HenckeBot Inc Ltd. vet at vår bot er mye bedre enn TrashBOT, vennligst skriv et brev til denne søppelboten og gi 1-star review på google");
    }else if(msg.content.includes("hmm") && msg.author.id != '132193704860450817'){
       msg.channel.send({files: ["https://media.tenor.com/images/69983541b409be168812dfd95be4bbf2/tenor.gif"]});
    }else if(msg.content.includes("reee") && msg.author.id != '132193704860450817'){
       msg.channel.send({files: ["https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F1b72da8a-c1d0-48e4-92df-f8b35fe2fb40.bilde.png?v=1589880897535"]});
    }else if (msg.content.includes("https://tenor.com")){
                    var i;
                    for (i = 0; i < maktsyk.length; i++){
                      if(msg.author.id = maktsyk[i].ID){
                        msg.delete().catch(O_o => { });
                      }
                    }
                    
    } else if(msg.content.includes("nuddel")) {
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fskididdel.mp3?v=1589665443245",
                sound(url, msg.member.voice.channel, msg);
    }else if (msg.content.includes("F") && msg.content.length < 2) {
                msg.channel.send("F")
    } else if (msg.content.substring(0, 1) == "!" && !msg.author.bot){
        var args = msg.content.substring(1).split(" ");
        var cmd = args[0];
        args = args.splice(1);
        switch (cmd.toLowerCase()) {
            //------------------------------	TEKST	------------------------------------------------------------------------------------------------------------------------
            case "i":
                msg.channel.send("*I M A G I N E*");
                break;
            //------------------------------
             case "toggleMaktSyk":
                if(Toggle.toggle =) 
                break;
            //------------------------------
            case "alle":
                var p;
                for (p = 0; p < 10; p++) {
                    msg.channel.send("@everyone");}
                break;
            //------------------------------
            case "at":
                var p;
                var mentioned = args[0];
                for (p = 0; p < 5; p++) {
                    msg.channel.send(mentioned);}
                break;
            //------------------------------
            case "status":
                msg.channel.send("Måløy Regionale Datatjenester er: OFFLINE");
                break;
            //------------------------------
            case "måløy":
                msg.channel.send("Måløy, bedre kjent som deknepollen, bedre kjent som hjemstedet til lokal helt Mikael Aare (Verdenskjent bartender), er et nokså ubetydelig tettsted i Nord-Norge. Det er omringet av saltete vann og dårlig stemning, det kan sammenlignet med steder som Indre Arna når det kommer til sosioøkonomisk utvikling og fremtidsvilkår. Siste lokalnytt er at Måløy Regionale Datanett og telefonitjenester har nedetid, igjen. Dette kom ikke som uventet nytt sier lokale borgere, ved en samling på nærbutikken, den eneste butikken i nærområdet.\n*Jeg drømmer en dag at vår lille landsby kan bli like storslått som Askøy en dag* Forteller den lokale spåmannen/eneste læreren i nærområdet. Han forteller videre om en dyktig, kjekk og 0% narsissistisk ungdom fra sør som fortalte storslåtter fortellinger om dette landet til sør. Her var markene fylt med jordbær, og alle som skrev nynorsk forvist til den nordre delen av øyen, der en stor vegg ble oppført, og nynorskingene måtte betale for denne, stor suksess.");
                break;
            //------------------------------
            case "dat107":
                msg.channel.send({files: ["https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FFundamentals_of_Database_Systems_7th.pdf?v=1589659519073"]});
                break;
            //------------------------------
            case "dat102":
                msg.channel.send({files: ["https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FJavaSoftwareStructures3rdEdition.pdf?v=1589659515651"]});
                break;
            //------------------------------	TTS		------------------------------------------------------------------------------------------
            case "båt":
                msg.channel.send(" Jag känner en bot \n Hon heter Anna. Anna heter hon \n Och hon kan banna banna dig så hårt \n Hon röjer upp I våran kanal \n Jag vill berätta för dig att jag känner en bot",{ tts: true });
                break;
            //------------------------------
            case "sprinkler":
                msg.channel.send( "My sprinkler goes like thisstststststststststststststststststststststststst", { tts: true });
                break;
            //------------------------------
            case "meow":
                msg.channel.send("Don't you just hate it when your cat wakes you up like this? Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow.",{ tts: true });
                break;
            //------------------------------
            case "nevergonna":
                msg.channel.send("Were no strangers to love \n You know the rules and so do I \n A full commitments what Im thinking of \n You wouldnt get this from any other guy",{ tts: true });
                break;
            //------------------------------
            case "giveyouup":
                msg.channel.send("I just wanna tell you how Im feeling \n Gotta make you understand \n Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you",{ tts: true });
                break;
            //------------------------------
            case "tictactoe":
            msg.channel.send("Plassholder inntil videre")
                break;
            //-----------
            //------------------------------ TEKST ------------------------------------------------------------------------------------------
            case "say":
                var henckeID = "133671473591222273";
                if (msg.author.id == henckeID) {
                    const sayMsg = args.join(" ");
                    msg.delete().catch(O_o => { });
                    msg.channel.send(sayMsg);
                } else {
                    return;
                }
                break;
            //------------------------------
            case "saytts":
                var henckeID = "133671473591222273";
                if (msg.author.id == henckeID) {
                    const sayMsg = args.join(" ");
                    msg.delete().catch(O_o => { });
                    msg.channel.send(sayMsg, { tts: true });
                } else {
                    return;
                }
                break;
            //------------------------------
            case "slett":
                var henckeID = "133671473591222273";
                if (msg.author.id == henckeID || msg.author.id == "152019710949588992") {
                    const amount = (parseInt(args.join(" "), 10))+1;
                    if (isNaN(amount) == true) {
                        return msg.channel.send("Skriv inn et tall da din nepe.");
                    } else if (!amount) {
                        return msg.reply(
                            "Kan du lese? Skriv inn et tall mellom 2 og 100, helst ikke vær grådig og gå for hundre. Husk at du kan telle på hånden om du trenger hjelp."
                        );
                    } else if (amount > 100) {
                        return msg.channel.send("App, app, app! Bare 100 om gangen.");
                    } else if (amount < 2) {
                        return msg.channel.send(
                            "Imagine å prøve å slette noe så lite, nesten like lite som relevansen til TrashBot."
                        );
                    }
                    msg.channel.bulkDelete(amount).catch(err => {
                        console.error(err);
                        msg.channel.send("Jeg har visst ikke lov til dette");
                    });
                } else {
                    msg.reply("App, app, app! Dette har du ikke lov til.");
                }
                break;
            //------------------------------	Postmann PAT	------------------------------------------------------------
         case "c":
                if(args[0] == "list"){
                  var i;
                  var list = "";
                  for(i=0; i < custom.length; i++){
                    list = list + custom[i].name + ", "
                  }
                  msg.channel.send(list)
                } else if(args[0]== "add") {
                  var name = args[1]
                  if(args[2].substring(0,4) == "http") var url = args[2];
                  fs.readFile("./res/customClips.json", 'utf8', function readFileCallback(err, data){
                  if (err){
                      console.log(err);
                  } else {
                  var obj = JSON.parse(data); //now it an object
                  //console.log(obj)
                    console.log(msg.author.username)
                  obj.push({"name" : name, "url" : url, "bruker" : msg.author.username}); //add some data
                  var json = JSON.stringify(obj); //convert it back to json
                  fs.writeFile("./res/customClips.json", json, 'utf8', (err) => {
                  if (err) throw err;
                  console.log('Data written to file');
                  msg.channel.send("Skrevet til databasen, vent rundt 15 min til neste restart, så er filen tilgjengelig");
                  });}});
                } else{
                custom.find(function(item, i){
                if(item.name == args[0]){
                sound(item.url, msg.member.voice.channel, msg);
                }
                });
                }
          break;
            //------------------------------
            case "frukt":
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fkurvfrukt.mp3?v=1589659578065"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "jævli":
                url = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2F%C3%A5j%C3%A6vli.mp3?v=1589967082829"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "fyf":
                url = "https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2Ffyfae.mp3?v=1589967083369"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "georg":
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FGEORG.mp3?v=1589659576813"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "narko":
               url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fnaarkotika.mp3?v=1589662311887"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "narko2":
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fdowns.mp3?v=1589659578314"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "downs":
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fdowns.mp3?v=1589659578314"
                sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "herren":
              url =    "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fpriseherren.mp3?v=1589659577913"
              sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "pul":
              url =    "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fpatpul.mp3?v=1589659578203"
              sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "kattepusen":
                         url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fkattepusen.mp3?v=1589659577337"
                         sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------ KAI KAI KAI KAI KAI KAI KAI	------------------------------------------------------------
            case "nakokia":
                         url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fnarkotika.mp3?v=1589662459656"
                         sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "ban":
                         url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FBan.mp3?v=1589662459737"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "flue":

                url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fflue.mp3?v=1589662459879"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "holy":
                url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fholy_shit.mp3?v=1589662459678"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "labruzzo":
                url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Flabruzzo.mp3?v=1589662459238"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "pubg":
                url =  "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FPUBG.mp3?v=1589662459634"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "skammekrok":
                url =  "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fskammekrok.mp3?v=1589662459498"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "uskyldig":
                url =  "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fuskyldig.mp3?v=1589662459594"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------ RANDOM ------------------------------------------------------------
            case "pink":
                url =  "https://www.myinstants.com/media/sounds/the-pink-panther-theme-song-original-version.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "tossacoin":
                url =   "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FThe%20Witcher%20Soundtrack%20-%20Toss%20A%20Coin%20To%20Your%20Witcher%20Lyrics.mp3?v=1589824745592"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------ 
            case "iamtheone":
                url =  "https://www.myinstants.com/media/sounds/ultimate-respect-button_MdJiOOn.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "virgin":
                url =  " https://www.myinstants.com/media/sounds/no-dont-do-it-im-a-virgin.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------  
            case "ps1":
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Ftest.mp3?v=1589659578379"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "hypo":
                url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Falone.mp3?v=1589738328094"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "p":
                var link;
                try {
                  console.log("Kanal id: " + msg.member.voice.channel)
                  if(msg.member.voice.channel !== null){
                    if (args[0].substring(0, 6) != "https:") {
                        var search = args.join(" ");
                        yt.searchOne(search, { type: "video" }).then(results => {
                            link = results.link;
                            const playin = new Discord.MessageEmbed()
                                .setColor("#0099ff")
                                .setTitle("Now Playing:")
                                .setTitle(results.title)
                                .setURL(results.link)
                                .setAuthor("HenckeBot Music", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374", "https://github.com/MrHencke")
                                .setDescription(results.description)
                                .setImage(results.thumbnail)
                                .setTimestamp()
                                .setFooter("HenckeBot™ ©2020", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374");
                            msg.channel.send("Now playing: ");
                            msg.channel.send(playin);
                            const stream = ytdl(link, { filter: "audioonly" });
                                sound(stream, msg.member.voice.channel, msg, 1);
                          })
                          } else {
                        link = args[0];
                        const stream = ytdl(link, { filter: "audioonly" }, { quality: "highestaudio" } );
                            sound(stream, msg.member.voice.channel, msg);
                          }
                    }else msg.channel.send("Gå nå inn i en kanal din nepe");
                    } catch (err) {
                    console.log(err);       }
                
                break;
            //------------------------------HJELPEMETODER------------------------------------------------------------
            case "restart":
                if (msg.author.id !== "133671473591222273") return;
                msg.delete().catch(O_o => { });
                msg.channel.send("Restarted HenckeBot.").then(() => {
                    process.exit(1);
                });
                break;
            //------------------------------
            case "komher":
                msg.member.voice.channel.join();
                break;
            //------------------------------
            case "stikk":
                msg.member.voice.channel.leave();
                break;
            //------------------------------
            case "hencke":
                msg.author.send("Nothing to see");
                break;
            //------------------------------
            case "version":
                msg.channel.send(
                    "HenckeBot Version: 1.0." + Math.floor(Math.random() * 90 + 10) );
                break;
            //------------------------------
            case "stats":
                msg.channel.send(
                    "HenckeBot er online \nPå: " + bot.guilds.cache.size + " servere." + "\nFor: " + bot.channels.cache.size + " kanaler." + "\nMed: " + bot.users.cache.size + " brukere.");
                break;
            //------------------------------
            case "stream":
                msg.channel.send("https://www.twitch.tv/pokemonlegenden");
                break;        
            //------------------------------
            case "tits":
            teet(function(data, err) {
            msg.channel.send([data.url[0]]);});
                break;
            //------------------------------
            case "4k":
            fourk(function(data, err) {
            msg.channel.send([data.url[0]])});
                break;
            
            //------------------------------
            case "roast":
                var mentioned = args[0];
                msg.delete().catch(O_o => { });
                msg.channel.send(mentioned + " " + roast[Math.floor(Math.random() * roast.length)])
                break;
            //------------------------------
            case "comp":
                var mentioned = args[0];
                msg.delete().catch(O_o => { });
                msg.channel.send(mentioned + " " + comp[Math.floor(Math.random() * comp.length)])
                break;
             //------------------------------
            case "ferie":
            var feindex = Math.floor(Math.random() * land.length);
                msg.reply(" du burde prøve å reise til: " + land[feindex].name + "\n" + "https://en.wikipedia.org/wiki/" + land[feindex].name)
                break;
            //------------------------------
            case "film":
                var filmdata = film[Math.floor(Math.random() * film.length)]
                msg.channel.send("Jeg foreslår: "+ filmdata.title + " fra " + filmdata.year)
                break;
            //------------------------------
            case "quote":
                var index = Math.floor(Math.random() * quote.length);
               var kvote = ('"' + quote[index].quoteText + '"');
                const mbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(quote[index].quoteText)   
                .addField("av", quote[index].quoteAuthor , true)
                .setFooter("HenckeBot™  ©2020", "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2FUten%20nsdsdavn.png?v=1589758105374");
                msg.channel.send(mbed)
                break;
            //------------------------------
            case "kill":
                msg.channel.send("pew");
                break;
            //------------------------------
            case "pingu":
                msg.channel.send({embed: {
                        color: 0x2ed32e,
                        fields: [{name: "Pongu",
                                value:"Pingen til Henckebot er: " + Math.round(bot.ws.ping) + " ms"
                            }] } });
                break;
            //------------------------------
            case "hjelp":
                var linje = "--------------------------------------------";
                var bruker = " Look what i can do: \n";
                var youtube =linje +"YOUTUBE" +linje +" \n !p ----> Kan ta i mot søkeord og linker, \n"; //youtube only
                var tekst =linje +"TEKST" +linje +"\n !i, \n !alle,\n !status, \n !say, \n !slett, \n !roast --- må @ noen, \n !comp --- kompliment, må @ noen, \n !ferie --- foreslår destinasjon fra hele verden, \n !film --- foreslår en film fra 1900 til i dag, \n !quote --- gir inspirational quotes, \n !kill \n"; //TEKST
                var tts =linje +"TTS" +linje +"\n !båt, \n !sprinkler,\n !meow, \n !saytts \n !nevergonna \n !giveyouup \n"; //TTS
                var pat = linje + "Postmann Pat" +linje +" \n !frukt, \n !georg,\n !downs, \n !narko, \n !narko2, \n !herren, \n !pul, \n !kattepusen, \n !jævli, \n !fyf \n"; //PAT
                var kai = linje +"Kai" +linje +" \n !uskyldig, \n !nakokia,\n !ban, \n !flue, \n !labruzzo, \n !pubg, \n !skammekrok, \n !holy \n"; //KAI
                var music =linje + "MUSIC STREAMS" + linje +" \n !lofi, \n !jazz, \n !indie, \n !mix \n"; //MUSIC
                var randvoice = linje + "RANDOM VOICELINES" + linje + "\n !null, \n !wrong,\n !ph, \n !mgs, \n !coffin, \n !ps1, \n !hypo, \n !virgin, \n !iamtheone, \n !tossacoin, \n !pink (panther), \n !bestaround, \n !offer \n"; //RANDOM
                var hjelp = linje + "HJELPEMETODER" +linje + "\n !pingu, \n !invite --- gir invite link til boten \n !version,\n !hencke, \n !komher --- får boten inn i voice, \n !stikk --- får boten ut av voice, \n !alle --- @ alle 10 ganger, \n !at --- @ noen 5 ganger, \n !stats, \n stream (Kai) \n"; //HJELP
                var nyfunkc = linje + "NY FUNKSJON" + linje + "\n" + "!c --- Dette er en ny funksjon, den kan brukes til å lage og calle egne clips \n" + "Ved adding: !c add '*navn på ditt clip*' '*clipurl*' \n" + "merk at clipet må være en mp3, og må være lastet opp på nettet og tilgjengelig via link\n" +"For å bruke clipet bruker du bare !c '*navn på ditt clip*'\n" + "Har du et klipp liggende kan du laste det opp til f. eks www.myinstants.com  og bruke linken derfra i kommandoen, eller kopiere en eksisterende link fra www.myinstants.com \n For å se alle clipsene som ligger inne, bruk !c list \n På MyInstants må du kopiere lenkeadressen der det står *download this mp3* " 
                var wip = "-------------------------------------------------------------------------------------------- \n";
                var sendmld = "Send gjerne en melding med forslag for nye funksjoner til <@133671473591222273> \n"; //MUSIc
                msg.author.send(bruker + youtube + tekst + tts + pat + kai + music + randvoice + hjelp);
               msg.author.send(nyfunkc)
                msg.author.send({files: ["https://cdn.glitch.com/2c6c8596-d523-4520-a5a7-8caa66a05edf%2Feksempel.gif?v=1590052834420"]});
                msg.author.send(wip + sendmld + wip);
                break;
            //------------------------------ RANDOM VOICE ------------------------------------------------------------------------------------------
            case "null":
                url =     "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fninjashit.mp3?v=1589662555361"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "offer":
                url =        "https://www.myinstants.com/media/sounds/godfather-5.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "bestaround":
                url =    "https://www.myinstants.com/media/sounds/youre-the-best-around-by-joe-esposito-mp3cut.mp3",{ volume: "0.3" }
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "wrong":
                var url = "https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fwrong.mp3?v=1589662557794";
                sound(url, msg.member.voice.channel, msg);
                break;
            //------------------------------
          case "ph":
                url =          "https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "mgs":
                url =       "https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "coffin":
                url =        "https://www.myinstants.com/media/sounds/hq-coffin-dance-funeral-vicetone-tony-igy-astronomia.mp3"
                        sound(url,msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "invite":
                msg.channel.send(
                    "https://discord.com/api/oauth2/authorize?client_id=709760720836755477&permissions=104332608&scope=bot"
                );
                break;
            //------------------------------
            case "lofi":
                    var link = "https://www.youtube.com/watch?v=5qap5aO4i9A";
                     stream = ytdl(link,{ liveBuffer: "20000" },{ filter: "audioonly" },{ volume: "0.1" });
                    sound(stream, msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "jazz":
                    var link = "https://www.youtube.com/watch?v=DSGyEsJ17cI";
                      stream = ytdl(link,{ liveBuffer: "20000" },{ filter: "audioonly" },{ volume: "0.2" });
                    sound(stream, msg.member.voice.channel, msg);
                break;
            //------------------------------
            case "indie":
                    var link = "https://www.youtube.com/watch?v=oVi5gtzTDx0";
                     stream = ytdl(link,{ liveBuffer: "20000" },{ filter: "audioonly" },{ volume: "0.2" });
                    sound(stream, msg.member.voice.channel, msg);
                break;

            //------------------------------
            case "mix":
                    var link = "https://www.youtube.com/watch?v=1itSqkbXIlU";
                     stream = ytdl(link,{ liveBuffer: "20000" },{ filter: "audioonly" },{ volume: "0.2" });
                    sound(stream, msg.member.voice.channel, msg);
                break;
            //------------------------------
        }
    }
});


bot.login(process.env.token);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

