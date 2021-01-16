const http = require('http');
const serverHandle = require('../../app');
const PORT = 5000;
const aaa = 1;
const server = http.createServer(serverHandle);

server.listen(PORT);
console.log('OK');
