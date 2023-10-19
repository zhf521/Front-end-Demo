const express = require('express')

const app = express()

app.use(express.static(__dirname+'/public'))

app.get('/home', (req, res) => {
  res.end('hello express')
})

app.listen(3000, () => {
  console.log('服务已经启动')
})
