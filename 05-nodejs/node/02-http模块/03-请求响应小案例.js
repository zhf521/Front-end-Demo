// 1. 导入http模块
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    const { method } = req;
    const { pathname } = new URL(req.url, 'http://localhost:9000');
    if (method === 'GET' && pathname === '/login') {
        res.end('登录页面');
    } else {
        res.end('404');
    }
});
server.listen(9000, () => {
    console.log('服务已启动...');
});
