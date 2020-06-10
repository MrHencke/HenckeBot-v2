const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'r2d2',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: false,
serverID: '710258665138946160',
description: 'en custom sound',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/r2d2_scream_converted.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 