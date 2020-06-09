const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'testtest',
brukernavn: 'Henrik',
bruker: 'Henrik#6368',
description: 'testtest er en custom sound av Henrik',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.myinstants.com/media/sounds/vape-nation.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 