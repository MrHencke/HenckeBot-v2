const http = require('http');
  
const server = http.createServer((req, res) => {
  res.end("Hello! This is the webserver for the discord bot on HenckeBot");
}).listen(3000);

console.log("WebServer is online!");

setInterval(() => {
  http.get(`http://34f4f34f545f43f43henckebot34f4f34f545f43f4354ytytr.glitch.me/`);
}, 280000);