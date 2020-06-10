module.exports = {
  name: "nevergonna",
  description: "Spiller første del av Never gonna give you up på TTS",
  category: 'tts',
  aliases: [""],
  execute(bot, msg, args) {
    msg.channel.send(
      "Were no strangers to love \n You know the rules and so do I \n A full commitments what Im thinking of \n You wouldnt get this from any other guy",
      { tts: true }
    );
  }
};
