const fs = require('fs')
fs.writeFile('./test.txt', 'hello,Node.js', (err) => {
  if (err) console.log(err)
  else console.log('写入成功')
})
fs.readFile('./test.txt', (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})