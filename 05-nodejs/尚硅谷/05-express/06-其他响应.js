const express = require('express')

const app = express()

app.get('/other', (req, res) => {
  //跳转响应
  // res.redirect('http://baidu.com')
  //下载响应
  // res.download(__dirname+'/package.json')
  //响应文件内容
  res.sendFile(__dirname+'/test.html')

})

app.listen(3000, () => {
  console.log('服务已经启动')
})
