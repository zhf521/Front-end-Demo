const http = require('http')
const server = http.createServer((request, response) => {
  // console.log(request.method)
  // console.log(request.url)
  // console.log(request.httpVersion)
  // console.log(request.headers)
  response.end('hello') //设置响应体
})
server.listen(9000, () => {
  console.log('服务已经启动...')
})
