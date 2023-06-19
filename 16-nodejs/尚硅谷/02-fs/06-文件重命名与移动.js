const fs = require('fs')
fs.rename('./座右铭.txt', './哈哈哈.txt', err => {
  if (err) {
    console.log('no')
      return
  }
  console.log('yes')
})