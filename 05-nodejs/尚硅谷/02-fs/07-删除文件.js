const fs = require('fs')
// fs.unlink('./观书有感.txt', err => {
//   if (err) {
//     console.log('no')
//     return
//   }
//   console.log('yes')
// })

fs.rm('./哈哈哈.txt', (err) => {
  if (err) {
    console.log('no')
    return
  }
  console.log('yes')
})
