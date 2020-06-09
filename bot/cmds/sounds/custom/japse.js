const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'japse',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
description: 'japse er en custom sound av Henrik',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.justseat.no/.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 