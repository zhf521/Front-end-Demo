const http = require('http');
const url = require('url');
const qs = require('querystring');
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    if (req.method === 'GET' && pathname === '/getinfo') {
        console.log(query);
        console.log(qs.parse(query));
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('响应了getinfo接口的请求');
    } else if (req.method === 'POST' && pathname === '/postinfo') {
        req.on('data', (temp) => {
            data += temp;
        });
        req.on('end', () => {
            console.log(qs.parse(data));
        });
        res.end('响应了POST请求');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
server.listen(3000, () => {
    console.log('server is running');
});
