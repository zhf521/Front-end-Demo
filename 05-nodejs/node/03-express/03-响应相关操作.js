// 1.导入express
const express = require('express');
// 2. 创建应用对象
const app = express();
// 3. 创建路由规则
app.get('/user', (req, res) => {
  res.statusCode = 404;
});
// 4.监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口监听为 3000...');
});
