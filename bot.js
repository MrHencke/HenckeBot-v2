const Discord = require('discord.js');
const config = require('./auth.json')
const fs = require('fs');
const ytdl = require('ytdl-core');
const bot = new Discord.Client();

bot.once('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	console.log(`Ready to fuck shit up`);
	console.log("Online in: " + bot.guilds.cache.get('612947002853949458').name + ", " + bot.guilds.cache.get('409479895907958794').name + ", " + bot.guilds.cache.get('710258665138946160').name);
    bot.user.setActivity("my pp", { type: "STREAMING", url: "https://www.twitch.tv/mrhencke" })
});

bot.on('voiceStateUpdate', (oldState, newState)=> { 

	try{
	var server = newState.guild.id;
	if(server == "612947002853949458"){
		
	var maxbot = 1;
	if(newState.channel != null){
	var bots = newState.channel.members.filter(x => x.user.bot).size;
	if(maxbot > bots && newState.channelID != 'undefined'){
	
	var oldChannel = oldState.channelID;
	var newChannel = newState.channelID;
	var voiceChannel = newState.channel;
	if(oldState.channel != newState.channel){
	if (newChannel != 'undefined' || newChannel != null) {
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3', {  volume: '1' });
			dispatcher.on("finish", end => voiceChannel.leave());
			}).catch(err => console.log(err));	
			}
		}
	}	
	} 
	
	}
	}catch(err) {
		console.log(err);}
});
var symbo = 'https://www.symbolab.com/';
bot.on('message', msg => {
	 if (msg.author.bot) {
		 return;
	 }else if (msg.content == 'bad bot') {
		 msg.reply("Vi er kanskje en bad bot, MEN! Vi er ikke like utdatert søppel som en viss TrashBOT");
	}else if (msg.content.includes('+')) {
		msg.reply("Imagine, dette er et mattespørsmål din nepe, hørt om " + symbo + " ?");
	 }else if (msg.content.includes(' ein ' || ' dinna ')) {
		msg.reply("Nynorsk oppdaget, gjør som resten av moderne sivilisasjon og skriv på en forståelig målform.");
	 }else if (msg.content == 'good bot') {
		 msg.reply("Tusen takk, vi hos HenckeBot vet at vår bot er mye bedre enn Mikael sin, vennligst skriv et brev til denne søppelboten og gi 1-star review på google");
	 }else if (msg.content.includes('henrik')) {
		 msg.reply("How dare you mention my maker, <@133671473591222273>");
	}else if (msg.content.includes('nuddel')) {
		var voiceChannel = msg.member.voice.channel;
		voiceChannel.join().then(connection => {
		const dispatcher = connection.play('./assets/skididdel.mp3', { volume: 0.2 });
		dispatcher.on("finish", end => msg.member.voice.channel.leave());
		}).catch(err => console.log(err));
	 }else if (msg.content.substring(0, 1) == '!') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd.toLowerCase()) {	 
//------------------------------	TEKST	------------------------------------------------------------------------------------------------------------------------	
			case 'i':              
            msg.channel.send("*I M A G I N E*");     
            break;
//------------------------------
			case 'alle':
			var p;
			for (p = 0; p < 10; p++) {msg.channel.send( "@everyone")}
            break;
//------------------------------	
			case 'status':
            msg.channel.send( "Måløy Regionale Datatjenester er: OFFLINE")
            break;
//------------------------------	
			case 'erd':
            msg.channel.send( "https://erdplus.com/standalone")
            break;
//------------------------------			
			case 'dat107':
            msg.channel.send({files: ['./assets/Fundamentals_of_Database_Systems_7th.pdf']})
            break;
//------------------------------	
			case 'dat102':
            msg.channel.send({files: ['./assets/JavaSoftwareStructures3rdEdition.pdf']})
            break;
//------------------------------	TTS		------------------------------------------------------------------------------------------
			case 'båt':		           
            msg.channel.send( " Jag känner en bot \n Hon heter Anna. Anna heter hon \n Och hon kan banna banna dig så hårt \n Hon röjer upp I våran kanal \n Jag vill berätta för dig att jag känner en bot", { tts: true })
            break;
//------------------------------			
			case 'sprinkler':		           
            msg.channel.send( "My sprinkler goes like thisstststststststststststststststststststststststst", { tts: true })
            break;
//------------------------------			
			case 'meow':		           
            msg.channel.send( "Don't you just hate it when your cat wakes you up like this? Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow.", { tts: true })
            break;
//------------------------------
			case 'mehe':
			var i;
			for (i = 0; i < 5; i++) { 
            msg.channel.send( "mehehehehehehehehehehehehhmehehehehehehehehehehehehhmehehehehehehehehehehehehh", { tts: true })
			}
            break;
//------------------------------		
			case 'nevergonna':
            msg.channel.send( "Were no strangers to love \n You know the rules and so do I \n A full commitments what Im thinking of \n You wouldnt get this from any other guy", { tts: true })
            break;
//------------------------------	
			case 'giveyouup':  
            msg.channel.send( "I just wanna tell you how Im feeling \n Gotta make you understand \n Never gonna give you up \n Never gonna let you down \n Never gonna run around and desert you \n Never gonna make you cry \n Never gonna say goodbye \n Never gonna tell a lie and hurt you", { tts: true })	   
            break;
//------------------------------ TEKST ------------------------------------------------------------------------------------------
			case 'say':	
			var henckeID = '133671473591222273';
		if (msg.author.id == henckeID) {
			const sayMsg = args.join(" ");
			msg.delete().catch(O_o=>{}); 
			msg.channel.send(sayMsg);
			} else {return;}
            break;
//------------------------------ 
			case 'saytts':	
			var henckeID = '133671473591222273';
		if (msg.author.id == henckeID) {
			const sayMsg = args.join(" ");
			msg.delete().catch(O_o=>{}); 
			msg.channel.send(sayMsg, { tts: true });
			} else {return;}
            break;
//------------------------------
			case 'slett':
			var henckeID = '133671473591222273';
		if (msg.author.id == henckeID) {
        const amount = args.join(' ');
        if (isNaN(amount) == true) {
            return msg.channel.send("Skriv inn et tall da din fitte.");
        } 
        else if (!amount) {
            return msg.reply("Kan du lese? Skriv inn et tall mellom 2 og 100, helst ikke vær grådig og gå for hundre. Husk at du kan telle på hånden om du trenger hjelp.");
        }
        else if (amount > 100) {
            return msg.channel.send("App, app, app! Bare 100 om gangen.");
        } 
        else if (amount < 2) {
            return msg.channel.send("Imagine å prøve å slette noe så lite, nesten like lite som relevansen til TrashBot.");
        } 
        msg.channel.bulkDelete(amount).catch(err => {
                console.error(err);
                msg.channel.send('Jeg har visst ikke lov til dette');
            });
			} else {
			msg.reply("App, app, app! Dette har du ikke lov til.");}
			break;
//------------------------------	VOICE	------------------------------------------------------------
			case 'frukt':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/kurvfrukt.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'georg':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/GEORG.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'narko':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/naarkotika.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'narko2':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/narkotika.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'downs':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/downs.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'herren':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/priseherren.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'pul':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/patpul.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'kattepusen':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/kattepusen.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------ KAI KAI KAI KAI KAI KAI KAI	------------------------------------------------------------
			case 'nakokia':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/narkotika.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'ban':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/ban.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'flue':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/flue.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'holy':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/holy_shit.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;			
//------------------------------
			case 'labruzzo':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/labruzzo.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;	
//------------------------------
			case 'pubg':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/pubg.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;		
//------------------------------
			case 'skammekrok':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/skammekrok.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------ 
			case 'uskyldig':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/uskyldig.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------ RANDOM ------------------------------------------------------------
			case 'ps1':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/test.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'p':
			try {
			const link = args.join(' ');
			const stream = ytdl(link, { filter: 'audioonly' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
//------------------------------HJELPEMETODER------------------------------------------------------------
			case 'stikk':
			msg.member.voice.channel.leave();
			break;
//------------------------------
			case 'komher':
			msg.member.voice.channel.join();
			break;
//------------------------------ 
			case 'hencke':
			msg.author.send("Nothing to see");
			break;
//------------------------------ 
			case 'version':
            msg.channel.send("HenckeBot Version: 1.0." + Math.floor(Math.random() * 90 + 10));
            break;				
//------------------------------
			case 'pingu':
			msg.channel.send({embed: {
			color: 0x2ed32e,
			fields: [{
            name: "Pongu",
            value: "Pingen til Henckebot er: " + Math.round(bot.ws.ping) + ' ms' 
			}
			],
			}
			});
			break;
//------------------------------
			case 'hjelp':
			var linje = "--------------------------------------------";
			var bruker = (" Look what i can do: \n");
			var tekst = (linje+"TEKST"+linje+"\n !i, \n !alle,\n !status, \n !say, \n !slett \n"); //TEKST
			var tts = (linje+"TTS"+linje+ "\n !båt, \n !sprinkler,\n !meow, \n !mehe, \n !saytts \n !nevergonna \n !giveyouup \n"); //TTS
			var pat = (linje+"Postmann Pat"+linje+ " \n !frukt, \n !georg,\n !downs, \n !narko, \n !narko2, \n !herren, \n !pul, \n !kattepusen, \n"); //PAT
			var kai = (linje+"Kai"+linje+ " \n !uskyldig, \n !nakokia,\n !ban, \n !flue, \n !labruzzo, \n !pubg, \n !skammekrok, \n !holy, \n"); //KAI
			var music = (linje+"MUSIC STREAMS"+linje+ " \n !lofi, \n !teatime,\n !jazz, \n !pop, \n !pissepop, \n !trap, \n !indie, \n !mix, \n"); //MUSIC
			var youtube = (linje+"YOUTUBE"+linje+ " \n !p + youtube-link, \n"); //youtube only
			var randvoice = (linje+"RANDOM VOICELINES"+linje+ "\n !null, \n !wrong,\n !ph, \n !mgs, \n !coffin, \n !ps1, \n"); //RANDOM
			var hjelp = (linje+"HJELPEMETODER"+linje+ "\n !pingu, \n !version,\n !hencke, \n !komher, \n !stikk, \n !alle, \n"); //HJELP
			var wip= ("-------------------------------------------------------------------------------------------- \n"); 
			var sendmld= ("Send gjerne en melding med forslag for nye funksjoner til <@133671473591222273> \n"); //MUSIC

			msg.author.send(bruker + tekst + tts + pat + kai + music + youtube + randvoice + hjelp);
			msg.author.send(wip + sendmld + wip);
			
//utdatert2	msg.author.send(" Kjære bruker, her er mine primærfunksjoner\n TEXT COMMANDS \n  hei \n  grete \n  i \n  alle \n  status \n  heisann \n  heidu \n  hjelp \n  meow \n  ttsbåt \n  mehe \n  nevergonna \n  giveyouup \n  say \n  slett \n  georg \n  music \n  frukt \n  narko \n  narko \n  jesus \n  her \n VOICE COMMANDS \n  fruktv \n  steviev \n  georgv \n  narkov \n  narkov \n  nakokia \n  ban \n  flue \n  holy \n  labruzzo \n  pubg \n  skammekrok \n  uskyldig \n  uskyldig \n  p Brukes slik !p + youtube-link  \n HJELPEMETODER \n  stikk \n  komher \n  hencke \n  hjelp \n MUSIKKSTREAMS \n  lofi \n  indie \n  trap \n  pissepop \n  jazz \n  pop \n  teatime \n  mix");
//utdatert	msg.author.send(" Kjære bruker, her er mine primærfunksjoner:\n TEXT COMMANDS: \n 1: hei \n 2: grete \n 3: i \n 4: alle \n 5: status \n 6: heisann \n 7: heidu \n 8: hjelp \n 9: meow \n 10: ttsbåt \n 11: mehe \n 12: nevergonna \n 13: giveyouup \n 14: say \n 15: slett \n 16: georg \n 17: music \n 18: frukt \n 19: narko \n 20: narko2 \n 21: jesus \n 22: her \n VOICE COMMANDS: \n 23: fruktv \n 24: steviev \n 25: georgv \n 26: narkov \n 27: narko2v \n 28: nakokia \n 29: ban \n 30: flue \n 31: holy \n 32: labruzzo \n 33: pubg \n 34: skammekrok \n 35: uskyldig \n 36: uskyldig \n 37: p Brukes slik: !p + youtube-link  \n HJELPEMETODER: \n 38: stikk \n 39: komher \n 40: hencke \n 41: hjelp \n MUSIKKSTREAMS: \n 42: lofi \n 43: indie \n 44: trap \n 45: pissepop \n 46: jazz \n 47: pop \n 48: teatime \n 49: mix");
			break;
//------------------------------
			case 'nytt':
			var linje = "--------------------------------------------";
			
			var nytt = (linje+"NYE FUNKSJONER"+linje+ "\n !pingu, \n !version,\n"); //HJELP
			var sendmld= ("Send gjerne en melding med forslag for nye funksjoner til <@133671473591222273> \n"); //MUSIC

			msg.author.send(nytt);
			msg.author.send(sendmld);
			
//utdatert2	msg.author.send(" Kjære bruker, her er mine primærfunksjoner\n TEXT COMMANDS \n  hei \n  grete \n  i \n  alle \n  status \n  heisann \n  heidu \n  hjelp \n  meow \n  ttsbåt \n  mehe \n  nevergonna \n  giveyouup \n  say \n  slett \n  georg \n  music \n  frukt \n  narko \n  narko \n  jesus \n  her \n VOICE COMMANDS \n  fruktv \n  steviev \n  georgv \n  narkov \n  narkov \n  nakokia \n  ban \n  flue \n  holy \n  labruzzo \n  pubg \n  skammekrok \n  uskyldig \n  uskyldig \n  p Brukes slik !p + youtube-link  \n HJELPEMETODER \n  stikk \n  komher \n  hencke \n  hjelp \n MUSIKKSTREAMS \n  lofi \n  indie \n  trap \n  pissepop \n  jazz \n  pop \n  teatime \n  mix");
//utdatert	msg.author.send(" Kjære bruker, her er mine primærfunksjoner:\n TEXT COMMANDS: \n 1: hei \n 2: grete \n 3: i \n 4: alle \n 5: status \n 6: heisann \n 7: heidu \n 8: hjelp \n 9: meow \n 10: ttsbåt \n 11: mehe \n 12: nevergonna \n 13: giveyouup \n 14: say \n 15: slett \n 16: georg \n 17: music \n 18: frukt \n 19: narko \n 20: narko2 \n 21: jesus \n 22: her \n VOICE COMMANDS: \n 23: fruktv \n 24: steviev \n 25: georgv \n 26: narkov \n 27: narko2v \n 28: nakokia \n 29: ban \n 30: flue \n 31: holy \n 32: labruzzo \n 33: pubg \n 34: skammekrok \n 35: uskyldig \n 36: uskyldig \n 37: p Brukes slik: !p + youtube-link  \n HJELPEMETODER: \n 38: stikk \n 39: komher \n 40: hencke \n 41: hjelp \n MUSIKKSTREAMS: \n 42: lofi \n 43: indie \n 44: trap \n 45: pissepop \n 46: jazz \n 47: pop \n 48: teatime \n 49: mix");
			break;
//------------------------------ RANDOM VOICE ------------------------------------------------------------------------------------------
			case 'null':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/ninjashit.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'wrong':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('./assets/wrong.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'ph':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('https://www.myinstants.com/media/sounds/pornhub-community-intro.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'mgs':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3');
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------
			case 'coffin':
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play('https://www.myinstants.com/media/sounds/hq-coffin-dance-funeral-vicetone-tony-igy-astronomia.mp3', { volume: 0.2 });
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			break;
//------------------------------	
			case 'invite':
            msg.channel.send("https://discord.com/api/oauth2/authorize?client_id=709760720836755477&permissions=104332353&scope=bot");
            break;			
//------------------------------
			case 'lofi':
			try {
			const link = "https://www.youtube.com/watch?v=5qap5aO4i9A";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.1' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
//------------------------------
			case 'teatime':
			try {
			const link = "https://www.youtube.com/watch?v=fs_DhOqo-hw";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
			
//------------------------------
			case 'pop':
			try {
			const link = "https://www.youtube.com/watch?v=36YnV9STBqc";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
			
//------------------------------
			case 'jazz':
			try {
			const link = "https://www.youtube.com/watch?v=DSGyEsJ17cI";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
			
//------------------------------
			case 'pissepop':
			try {
			const link = "https://www.youtube.com/watch?v=kGKkUN50R0c";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
//------------------------------
			case 'trap':
			try {
			const link = "https://www.youtube.com/watch?v=OyWfsDTnij8";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
//------------------------------
			case 'indie':
			try {
			const link = "https://www.youtube.com/watch?v=oVi5gtzTDx0";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
			
//------------------------------
			case 'mix':
			try {
			const link = "https://www.youtube.com/watch?v=1itSqkbXIlU";
			const stream = ytdl(link, {liveBuffer: '20000'}, {filter: 'audioonly' }, { volume: '0.2' });
			var voiceChannel = msg.member.voice.channel;
			voiceChannel.join().then(connection => {
			const dispatcher = connection.play(stream);
			dispatcher.on("finish", end => msg.member.voice.channel.leave());
			}).catch(err => console.log(err));
			}catch(err) {
			console.log(err);}
			break;
//------------------------------
         }
     }
});
bot.login(config.token);

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

/*
function tts(voiceChannel, text) {
    if (!FS.existsSync('./temp')){
        FS.mkdirSync('./temp');
    }
    const timestamp = new Date().getTime();
    const soundPath = `./temp/${timestamp}.mp3`;
    say.export(text, null, 1, soundPath, (err) => {
        if (err) {
            console.login(err);
            return;
        }else{
            voiceChannel.join().then((connection) => {
				const dispatcher = connection.play(soundPath).on('end', () => {
                    msg.member.voice.channel.leave();
                    FS.unlinkSync(soundPath);
                }).on('error', (err) => {
                    console.error(err);
                    connection.disconnect();
                    FS.unlinkSync(soundPath);
                });
            }).catch((err) => {
                console.error(err);
            });
        }
    });
}
*/