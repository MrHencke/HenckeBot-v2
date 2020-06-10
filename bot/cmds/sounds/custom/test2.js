const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'test2',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: false,
serverID: '710258665138946160',
description: 'trolotest2 er en custom sound av Henrik',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/trollolol.swf.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 