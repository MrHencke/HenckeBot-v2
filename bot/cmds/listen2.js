require('dotenv').config()
const { Transform } = require("stream");
const googleSpeech = require("@google-cloud/speech");
const googleSpeechClient = new googleSpeech.SpeechClient();
module.exports = {
  name: "listen2",
  description: "Eksperimentell, ikke prøv",
  category: 'experimental',
  aliases: [""],
  execute(bot, msg, args) {
    bot.on("voiceStateUpdate", async (oldState, newState) => {
      var server = newState.guild.id;
      if (server == "612947002853949458") {
        var member = newState.member;
        var voiceChannel = newState.channel;
        const memberVoiceChannel = member.voice.channel;
        const connection = await memberVoiceChannel.join();
        const receiver = connection.receiver;

        connection.on("speaking", (user, speaking) => {
  
          if (!speaking) {
            return;
          }

          console.log(`I'm listening to ${user.username}`);

          // this creates a 16-bit signed PCM, stereo 48KHz stream
          const audioStream = receiver.createStream(user, { mode: "pcm" });
          const requestConfig = {
            encoding: "LINEAR16",
            sampleRateHertz: 48000,
            languageCode: "no-NB"
          };
          const request = {
            config: requestConfig,
            interimResults: true
          };
          const recognizeStream = googleSpeechClient
            .streamingRecognize(request)
            .on("error", console.error)
            .on("data", response => {
              const transcription = response.results
                .map(result => result.alternatives[0].transcript)
                .join("\n")
                .toLowerCase();
              console.log(`Transcription: ${transcription}`);

              if (transcription.indexOf("god kveld") > -1) {
                /*connection.channel.members.array().forEach(member => {
            if (member.user.id !== bot.user.id) {
              console.log(`Moving member ${member.displayName} to channel ${channelId}`)
              member.edit({ channel: channelId }).catch(console.error)
                memberVoiceChannel.leave();
                recognizeStream.destroy();
                }
                 })*/
                sound("https://www.myinstants.com/media/sounds/great-success-borat.mp3", voiceChannel, msg)
              } else if (transcription.indexOf("stikk") > -1) {
                memberVoiceChannel.leave();
                recognizeStream.destroy();
              }
            });

          const convertTo1ChannelStream = new ConvertTo1ChannelStream();

          audioStream.pipe(convertTo1ChannelStream).pipe(recognizeStream);

          audioStream.on("end", async () => {
            console.log("audioStream end");
          });
        });
      }
    });

    msg.member.voice.channel
      .join()
      .then(connection => {
        const dispatcher = connection.play(
          "https://www.myinstants.com/media/sounds/so-long-gayboys.mp3",
          { volume: 0 }
        );
        dispatcher.destroy;
      })
      .catch(err => console.log(err));
  }
};

function sound(url, voiceChannel, msg) {
  try {
    if (voiceChannel != null) {
      voiceChannel
        .join()
        .then(connection => {
          const dispatcher = connection.play(url, { volume: 0.4 });
        })
        .catch(err => console.log(err));
    } else
      msg.channel.send(
        "Vet du forskjellen på voice og tekst? Gå inn i en voicechannel da din nepe"
      );
  } catch (err) {
    //console.log(err)
  }
}

function convertBufferTo1Channel(buffer) {
  const convertedBuffer = Buffer.alloc(buffer.length / 2);

  for (let i = 0; i < convertedBuffer.length / 2; i++) {
    const uint16 = buffer.readUInt16LE(i * 4);
    convertedBuffer.writeUInt16LE(uint16, i * 2);
  }

  return convertedBuffer;
}

class ConvertTo1ChannelStream extends Transform {
  constructor(source, options) {
    super(options);
  }

  _transform(data, encoding, next) {
    next(null, convertBufferTo1Channel(data));
  }
}

/*            
            connection.on('speaking', (user, speaking) => {
            if(voiceChannel != "undefined"){
            if (speaking && isReady) {
              console.log(`I'm listening to ${user.username}`)
              isReady = false
              sound("https://www.myinstants.com/media/sounds/great-success-borat.mp3", voiceChannel, msg)
            } else {
              isReady = true
              console.log(`I stopped listening to ${user.username}`)
            }
            }
            });
      }})
        msg.member.voice.channel.join().then(connection => {
        const dispatcher = connection.play("https://cdn.glitch.com/05aa1396-7f5d-45a3-ab76-baf2815a144a%2Fuskyldig.mp3?v=1589662459594", { volume: 0});
        dispatcher.destroy
    }).catch(err => console.log(err));
             }, 
            };
            
            */
