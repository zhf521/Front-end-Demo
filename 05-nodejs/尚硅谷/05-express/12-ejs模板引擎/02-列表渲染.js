const ejs = require('ejs')
const fs = require('fs')
const xiyou = ['ts', 'swk', 'zbj', 'ss']

// let str = '<ul>'

// xiyou.forEach(item => {
//   str+=`<li>${item}</li>`
// })

// str += '</ul>'

// console.log(str)

let str = fs.readFileSync('./02-xiyou.html').toString()

let result = ejs.render(str, { xiyou })
console.log(result)