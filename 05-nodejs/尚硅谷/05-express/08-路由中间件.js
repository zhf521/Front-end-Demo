const express = require('express')


const app = express()

app.get('/home', (req, res) => {
  res.end('hello')
})

let checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === '521') {
    next()
  } else {
    res.send('暗号错误')
  }
}

app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页')
})

app.get('/setting', (req, res) => {
  res.send('设置首页')
})


app.all('*', (req, res) => {
  res.send('404')
})

app.listen(3000, () => {
  console.log('服务已经启动')
})
