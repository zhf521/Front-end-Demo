const express = require('express')

const app = express()

app.get('/home', (req, res) => {
  res.end('hello express')
})

app.get('/', (req, res) => {
  res.end('home')
})

app.post('/login', (req, res) => {
  res.end('login login')
})

app.all('/test', (req, res) => {
  res.end('test')
})

app.all('*', (req, res) => {
  res.end('404notfound')
})

app.listen(3000, () => {
  console.log('服务已经启动')
})
