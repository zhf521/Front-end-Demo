const fs = require('fs')
const rs = fs.createReadStream('')
rs.on('data', chunk => {
  console.log(chunk)
})
