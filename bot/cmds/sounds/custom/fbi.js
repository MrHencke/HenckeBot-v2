const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'fbi',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: false,
serverID: '710258665138946160',
description: 'en custom sound',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 