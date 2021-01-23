const http = require('http');
const serverHandle = require('../../app');
const PORT = 5000;
const aaa = 1;
const server = http.createServer(serverHandle);

console.log(100);
console.log(200);
console.log(300);
console.log(400);
console.log(500);

server.listen(PORT);
console.log('OK');
