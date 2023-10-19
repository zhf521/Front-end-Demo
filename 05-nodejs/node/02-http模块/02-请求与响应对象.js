// 导入http模块
const http = require('http');
const server = http.createServer((request, res) => {
    // 1.获取请求方式
    console.log(request.method);
    // 2.获取请求URL中的路径与查询字符串
    console.log(request.url);
    // 3.获取请求头信息 localhost:9000
    console.log(request.headers.host);
    const url = new URL(request.url, 'http://localhost:9000');
    console.log(url.pathname);
    console.log(url.searchParams.get('username'));
});

server.listen(9000, () => {
    console.log('9000端口服务已启动...');
});
