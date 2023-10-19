// 导入http模块
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Word!');
});
server.listen(9000, () => {
    console.log('9000端口，服务已启动...');
});
