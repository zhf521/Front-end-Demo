const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

//声明中间件函数
function recordMiddleware(req, res, next) {
  let { url, ip } = req
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
  next()
}

app.use(recordMiddleware)

app.get('/home', (req, res) => {
  res.end('hello express')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})

app.all('*', (req, res) => {
  res.send('404')
})

app.listen(3000, () => {
  console.log('服务已经启动')
})
