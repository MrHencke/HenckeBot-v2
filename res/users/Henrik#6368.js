const discordTTS=require("discord-tts");
const sang = "Vi seilte fra karibien og ankret opp i natt, Jeg har hørt et gammelt Rykte om en helt fantastisk skatt Kaptein Sabeltann, er en farlig mann, Nå kan jeg lukte gull derfor ror vi inn mot land, tjohei"
module.exports = {
name: 'Henrik#6368',
id: '133671473591222273',
description: 'Customsound',
toggled: true,
url:  discordTTS.getVoiceStream(sang, "nb-NO")
//url: 'https://www.myinstants.com/media/sounds/erro.mp3',
}; 