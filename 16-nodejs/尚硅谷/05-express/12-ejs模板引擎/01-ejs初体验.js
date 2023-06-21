const ejs = require('ejs')
const fs = require('fs')

let china = '中国'
// let str = `我爱你${china}`
// console.log(str)
let weather = '今天天气不错~'
let str = fs.readFileSync('./01-html.html').toString()

let result = ejs.render(str, { china: china,weather })

console.log(result)
