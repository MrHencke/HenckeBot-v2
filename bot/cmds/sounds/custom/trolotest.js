const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'trolotest',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
serveronly: 'global',
description: 'trolotest er en custom sound av Henrik',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/trollolol.swf.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 