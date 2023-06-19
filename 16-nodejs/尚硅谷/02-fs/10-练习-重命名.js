const fs = require('fs')
const files = fs.readdirSync('./code')
// console.log(files)
files.forEach(item => {
  // console.log(item)
  let data = item.split('-')
  // console.log(data)
  let [num, name] = data
  if (Number(num) < 10) {
    num='0'+num
  }
  let newName = num + '-' + name
  fs.renameSync(`./code/${item}`,`./code/${newName}`)
})