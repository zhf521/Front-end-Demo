const fs = require('fs')
const ws = fs.createWriteStream('./观书有感.txt')
ws.write('1')
ws.write('2')
ws.write('3')
ws.write('4')
ws.write('5')