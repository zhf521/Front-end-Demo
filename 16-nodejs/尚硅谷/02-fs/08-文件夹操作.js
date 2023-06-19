const fs = require('fs')

// fs.mkdir('./html', err => {
//   if (err) {
//     console.log('no')
//     return
//   }
//   console.log('yes')
// })

// fs.mkdir('./a/b/c',{recursive:true} ,(err) => {
//   if (err) {
//     console.log('no')
//     return
//   }
//   console.log('yes')
// })

// fs.readdir('./html', (err, data) => {
//   if (err) {
//     console.log('读取失败')
//     return
//   }
//   console.log(data)
// })

// fs.rmdir('./html', err => {
//   if (err) {
//     console.log('no')
//     return 
//   }
//   console.log('yes')
// })

fs.rmdir('./a',{recursive:true} ,(err) => {
  if (err) {
    console.log('no')
    return
  }
  console.log('yes')
})