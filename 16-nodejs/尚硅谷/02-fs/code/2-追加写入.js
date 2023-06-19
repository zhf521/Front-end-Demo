const fs = require('fs')
fs.appendFile('./座右铭.txt', '，冲冲冲', err => {
  if (err) {
    console.log('写入失败')
    return
  }
  console.log('写入成功')
})