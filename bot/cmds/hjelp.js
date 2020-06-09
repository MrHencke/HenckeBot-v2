module.exports = {
    name: 'hjelp',
    description: 'Du vet vel hva denne gjør?',
    category: 'hjelp',
    aliases: [''],
    execute(bot, msg, args) {
      
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
      
    },
};