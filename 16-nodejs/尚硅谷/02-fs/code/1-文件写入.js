//1. 导入fs模块
const fs = require('fs')
//2. 写入文件
// fs.writeFile('./座右铭.txt', '学习如逆水行舟，不进则退', err => {
//   //err 写入失败：错误对象 写入成功：null
//   if (err) {
//     console.log('写入失败')
//     return
//   }
//   console.log('写入成功')
// })
// console.log('hello')

//同步写入
fs.writeFileSync('./data.txt', 'test')
