const http = require('http');
const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//     console.log('method', req.method);
//     const url = req.url;
//     console.log('url', url);
//     req.query = querystring.parse(url.split('?')[1]);
//     console.log('query', req.query);
//     res.end(JSON.stringify(req.query));
// });
// server.listen(8000);
// console.log('listen ok');

http.createServer(function (req, res) {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query = querystring.parse(url.split('?')[1]);
    res.setHeader('Content-type', 'application/json');
    const resData = {
        method,
        url,
        path,
        query,
    };
    if (method == 'GET') {
        res.end(JSON.stringify(resData));
    }
    if (method == 'POST') {
        let postData = '';
        req.on('data', chunk => {
            postData += chunk;
        });
        req.on('end', () => {
            resData.postData = postData;
            res.end(JSON.stringify(resData));
        });
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
