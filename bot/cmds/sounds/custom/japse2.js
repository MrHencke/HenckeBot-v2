const path = require('path')
const sound = require(path.join(__dirname, '..', '..','..',  '..', 'res/sound.js'));

module.exports = {
name: 'japse2',
brukernavn: 'bjermeland',
bruker: 'bjermeland#7468',
description: 'japse2 er en custom sound av bjermeland',
category: 'customsound',
aliases: [''],
execute(bot, msg, args) {
var url = 'https://www.justseat.no/.mp3'
sound(url,msg.member.voice.channel, msg);    },}; 