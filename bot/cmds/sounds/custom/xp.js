const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'xp',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: '612947002853949458',
description: 'en custom sound',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/windows-xp-startup_1ph012N.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 