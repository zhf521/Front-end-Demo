const http = require('http')
const server = http.createServer((request, response) => {
  let body = ''
  request.on('data', chunk => {
    body+=chunk
  })
  request.on('end', () => {
    console.log(body)
    response.end('hello')
 })
})
server.listen(9000, () => {
  console.log('服务已经启动...')
})
