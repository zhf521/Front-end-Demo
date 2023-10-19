
// //1.alloc
// let buf = Buffer.alloc(10)
// console.log(buf)
// //2.allocUnsafe
// let buf_2 = Buffer.allocUnsafe(10)
// console.log(buf_2)
// //3.from
// let buf_3 = Buffer.from('hello')
// console.log(buf_3)
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_4)
let buf_3 = Buffer.from('hello')
// 读取
console.log(buf_3[1]) 
// 101
// 修改
buf_3[1] = 97
//查看字符串结果
console.log(buf_3.toString()) 
// hallo