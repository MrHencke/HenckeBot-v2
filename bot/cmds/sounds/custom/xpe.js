const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'xpe',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: true,
serverID: '612947002853949458',
description: 'en custom sound',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/erro.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 