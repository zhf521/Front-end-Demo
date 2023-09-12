// 导入express
const express = require('express');
// 创建应用对象
const app = express();

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/users', (req, res) => {
    res.send('响应 /users 的get请求，获得所有user数据');
});

app.get('/users/:id', (req, res) => {
    res.send(`响应 /users 的get请求,根据id=${req.params.id}获得一个用户数据`);
});

app.post('/users', (req, res) => {
    res.send(`响应 /users 的post请求,保存用户数据`);
});

// 监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口监听为 3000...');
});
