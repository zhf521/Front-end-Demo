const express = require('express')

const app = express()

app.get('/response', (req, res) => {
  // res.statusCode = 404
  // res.statusMessage = 'love'
  // res.setHeader('xxx', 'yyy')
  // res.write('hello express')
  // res.end('response')

  // res.status(500)
  // res.set('aaa', 'bbb')
  // res.send('你好，express')
  res.status(500).set('aaa', 'bbb').send('你好express')
})

app.listen(3000, () => {
  console.log('服务已经启动')
})
