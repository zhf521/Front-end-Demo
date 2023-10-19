const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/10-form.html')
})

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extend: false })

app.post('/login',urlencodedParser, (req, res) => {
  console.log(req.body)
  res.send('获取用户的数据')
})

app.listen(3000, () => {
  console.log('server is running')
})
