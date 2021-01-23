// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'wenyajun',
//     port: '3306',
//     database: 'myblog',
// });
// con.connect();

// const sql = 'select id,username from users;';
// con.query(sql, (err, result) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(result);
//     console.log(134);
// });
// con.end();
const http = require('http');

const PORT = 9000;
//const serverHandle = require('../app');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
});
server.listen(PORT);
