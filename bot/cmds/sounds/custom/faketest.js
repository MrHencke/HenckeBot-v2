const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'faketest',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: '710258665138946160',
description: 'faketest er en custom sound av Henrik',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.justseat.no/.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 