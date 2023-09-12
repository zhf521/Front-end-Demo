const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const filePath = path.resolve(__dirname, './access.log');

function mw_log(req, res, next) {
    fs.appendFileSync(
        filePath,
        `${req.url} ${new Date().toLocaleString()}\r\n`
    );
    next();
}

app.use(mw_log);

app.use((req, res, next) => {
  fs.appendFileSync(filePath,'-----操作人-张三-----\r\n')
})

app.get('/', (req, res) => {
    // fs.appendFileSync(filePath, `${req.url} ${new Date().toLocaleString()}\r\n`);
    res.send('前台首页');
});

app.get('/admin', (req, res) => {
    res.send('后台首页');
});

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
    console.log('服务已启动，端口监听为 3000...');
});
